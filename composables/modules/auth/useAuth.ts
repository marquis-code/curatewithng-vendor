import { auth_api } from '~/api_factory/modules/auth';
import { vendors_api } from '~/api_factory/modules/vendors';
import { useUser } from './user';

export const useAuth = () => {
  const { setUser, setVendor } = useUser();

  const fetchProfile = async () => {
    const response = await auth_api.getProfile();
    setUser(response.data);
    
    if (response.data.roles && response.data.roles.includes('VENDOR')) {
      const vendorResponse = await vendors_api.getVendorProfile();
      setVendor(vendorResponse.data);
    }
    return response.data;
  };

  const login = async (payload: any) => {
    const response = await auth_api.login(payload);
    
    if (!response.data.user.roles || !response.data.user.roles.includes('VENDOR')) {
      throw { response: { data: { message: 'Unauthorized. Vendor access required.' } }, data: { message: 'Unauthorized. Vendor access required.' }, message: 'Unauthorized. Vendor access required.' };
    }

    setUser(response.data.user);
    
    await fetchProfile();
    return response.data;
  };

  const register = async (payload: any) => {
    const response = await auth_api.register(payload);
    
    if (!response.data.user.roles || !response.data.user.roles.includes('VENDOR')) {
      throw { data: { message: 'Failed to create vendor account.' }, message: 'Failed to create vendor account.' };
    }

    setUser(response.data.user);
    await fetchProfile();
    return response.data;
  };

  const firebaseGoogleLogin = async (payload: { token: string }) => {
    const response = await auth_api.firebaseGoogleLogin(payload);
    
    if (!response.data.user.roles || !response.data.user.roles.includes('VENDOR')) {
      throw { data: { message: 'Unauthorized. Vendor access required. This Google account is not a vendor.' }, message: 'Unauthorized. This Google account is not registered as a vendor.' };
    }

    setUser(response.data.user);
    await fetchProfile();
    return response.data;
  };

  return { login, register, firebaseGoogleLogin, fetchProfile };
};
