import { u as useCookie } from "./cookie-6HhT-4-D.js";
import "vue";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import "../server.mjs";
const useUser = () => {
  const user = useCookie("vendor_user_data", { default: () => null });
  const vendor = useCookie("vendor_data", { default: () => null });
  const logOut = () => {
    user.value = null;
    vendor.value = null;
  };
  const setUser = (userData) => {
    user.value = userData;
  };
  const setVendor = (vendorData) => {
    vendor.value = vendorData;
  };
  return { user, vendor, logOut, setUser, setVendor };
};
export {
  useUser as u
};
//# sourceMappingURL=user-DO335Ggn.js.map
