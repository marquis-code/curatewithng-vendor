import { GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const vendors_api = {
  getVendorProfile: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get('/vendors/me');
  },
};
