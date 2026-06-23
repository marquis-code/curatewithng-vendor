import { GATEWAY_ENDPOINT, GATEWAY_ENDPOINT_WITH_AUTH } from '../axios.config';

export const auth_api = {
  register: (payload: any) => {
    // NOTE: The vendor app requires the 'VENDOR' role, so we append it in the API call
    return GATEWAY_ENDPOINT.post('/auth/register', { ...payload, roles: ['VENDOR'] });
  },

  login: (payload: any) => {
    return GATEWAY_ENDPOINT.post('/auth/login', payload);
  },

  firebaseGoogleLogin: (payload: { token: string }) => {
    // For vendor app, passing role VENDOR to backend if supported by endpoint, otherwise the backend enforces it
    return GATEWAY_ENDPOINT.post('/auth/firebase/google', { ...payload, roles: ['VENDOR'] });
  },

  getProfile: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get('/auth/me');
  },
};
