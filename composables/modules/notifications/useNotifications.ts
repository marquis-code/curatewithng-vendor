import { ref } from 'vue';
import { io, Socket } from 'socket.io-client';
import { useUser } from '../auth/user';
import { useRuntimeConfig } from '#app';
// We assume there might not be a custom toast in vendor yet, so we'll just log or use standard alert if missing
// Let's check if it exists or just use a simple state

export const useNotifications = () => {
  const { user, token } = useUser();
  const config = useRuntimeConfig();
  
  const socket = ref<Socket | null>(null);
  const unreadCount = ref(0);
  const notifications = ref<any[]>([]);

  const connectSocket = () => {
    if (!token.value) return;

    socket.value = io(config.public.apiBase, {
      auth: { token: token.value }
    });

    socket.value.on('connect', () => {
      console.log('Vendor connected to realtime notifications');
    });

    socket.value.on('new_notification', (data) => {
      unreadCount.value++;
      notifications.value.unshift(data);
      // Fallback native browser notification or alert if needed
      if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
        new Notification(data.title, { body: data.body });
      }
    });
  };

  const disconnectSocket = () => {
    if (socket.value) {
      socket.value.disconnect();
      socket.value = null;
    }
  };

  const fetchUnreadCount = async () => {
    if (!token.value) return;
    try {
      const { data } = await useFetch<any>(`${config.public.apiBase}/notifications/unread-count`, {
        headers: { Authorization: `Bearer ${token.value}` }
      });
      if (data.value) {
        unreadCount.value = data.value.count;
      }
    } catch (e) {
      console.error(e);
    }
  };

  return {
    socket,
    unreadCount,
    notifications,
    connectSocket,
    disconnectSocket,
    fetchUnreadCount,
  };
};
