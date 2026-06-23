import { useCookie, useRouter } from '#imports'
import type { User, Vendor } from '~/types'

export const useUser = () => {
  const user = useCookie<User | null>('vendor_user_data', { default: () => null })
  const vendor = useCookie<Vendor | null>('vendor_data', { default: () => null })
  
  const logOut = () => {
    user.value = null
    vendor.value = null
    
    if (import.meta.client) {
      window.location.href = '/auth/login'
    }
  }



  const setUser = (userData: User) => {
    user.value = userData
  }

  const setVendor = (vendorData: Vendor) => {
    vendor.value = vendorData
  }

  return { user, vendor, logOut, setUser, setVendor }
}
