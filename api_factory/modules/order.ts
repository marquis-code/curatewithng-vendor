import { GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const order_api = {
  getOrders: () => GATEWAY_ENDPOINT_WITH_AUTH.get('/orders/vendor/me'),
  getStats: () => GATEWAY_ENDPOINT_WITH_AUTH.get('/orders/vendor/me/stats'),
  getOrderById: (id: string) => GATEWAY_ENDPOINT_WITH_AUTH.get(`/orders/${id}`),
  updateOrderStatus: (id: string, payload: any) => GATEWAY_ENDPOINT_WITH_AUTH.patch(`/orders/${id}/status`, payload),
};
