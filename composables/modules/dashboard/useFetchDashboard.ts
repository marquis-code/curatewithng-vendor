import { ref } from 'vue';
import { order_api } from '~/api_factory/modules/order';
import { useCustomToast } from '~/composables/core/useCustomToast';

export const useFetchDashboard = () => {
  const stats = ref<any>(null);
  const recentOrders = ref<any[]>([]);
  const loadingStats = ref(false);
  const loadingOrders = ref(false);
  const { showToast } = useCustomToast();

  const fetchStats = async () => {
    loadingStats.value = true;
    try {
      const response = await order_api.getStats();
      stats.value = response.data?.data || response.data || null;
    } catch (error: any) {
      showToast({ title: "Error", message: error?.response?.data?.message || "Failed to fetch dashboard stats", toastType: "error" });
    } finally {
      loadingStats.value = false;
    }
  };

  const fetchRecentOrders = async () => {
    loadingOrders.value = true;
    try {
      const response = await order_api.getOrders();
      const resData = response.data?.data;
      recentOrders.value = Array.isArray(resData) ? resData : (resData?.data || []);
    } catch (error: any) {
      showToast({ title: "Error", message: error?.response?.data?.message || "Failed to fetch recent orders", toastType: "error" });
    } finally {
      loadingOrders.value = false;
    }
  };

  return {
    stats,
    recentOrders,
    loadingStats,
    loadingOrders,
    fetchStats,
    fetchRecentOrders,
  };
};
