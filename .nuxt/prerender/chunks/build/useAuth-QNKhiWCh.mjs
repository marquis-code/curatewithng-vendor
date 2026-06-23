import axios from 'file:///Users/marquis/curatewithng/vendor/node_modules/axios/index.js';
import { u as useUser } from './user-DO335Ggn.mjs';
import { u as useRuntimeConfig } from './server.mjs';

const useCustomToast = () => {
  const showToast = ({ title, message, toastType, duration = 3e3 }) => {
    return;
  };
  return { showToast };
};
const getBaseUrl = () => {
  try {
    const config = useRuntimeConfig();
    return config.public.apiBase;
  } catch {
    return "https://curatewithng-backend.onrender.com";
  }
};
const cleanBaseUrl = getBaseUrl().replace(/\/api\/v1\/?$/, "").replace(/\/$/, "");
const $GATEWAY_ENDPOINT = `${cleanBaseUrl}`;
const GATEWAY_ENDPOINT = axios.create({
  baseURL: $GATEWAY_ENDPOINT,
  withCredentials: true
});
const GATEWAY_ENDPOINT_WITH_AUTH = axios.create({
  baseURL: $GATEWAY_ENDPOINT,
  withCredentials: true
});
const instanceArray = [
  GATEWAY_ENDPOINT,
  GATEWAY_ENDPOINT_WITH_AUTH
];
instanceArray.forEach((instance) => {
  instance.interceptors.request.use((config) => {
    return config;
  });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      let showToast = (opts) => {
      };
      let logOut = () => {
      };
      try {
        const customToast = useCustomToast();
        showToast = customToast.showToast;
        const user = useUser();
        logOut = user.logOut;
      } catch (e) {
      }
      if (typeof err.response === "undefined") {
        showToast({
          title: "Error",
          message: "Kindly check your network connection",
          toastType: "error",
          duration: 3e3
        });
        return Promise.reject({
          type: "ERROR",
          ...err
        });
      }
      if (err.response.status === 401) {
        logOut();
        showToast({
          title: "Error",
          message: ((_b = (_a = err == null ? void 0 : err.response) == null ? void 0 : _a.data) == null ? void 0 : _b.message) || ((_d = (_c = err == null ? void 0 : err.response) == null ? void 0 : _c.data) == null ? void 0 : _d.error) || "Session expired",
          toastType: "error",
          duration: 3e3
        });
        return Promise.reject({
          type: "ERROR",
          ...err.response
        });
      } else if (statusCodeStartsWith(err.response.status, 4) || err.response.status === 500) {
        if (((_e = err.response.data) == null ? void 0 : _e.message) || ((_f = err.response.data) == null ? void 0 : _f.error)) {
          showToast({
            title: "Error",
            message: ((_h = (_g = err == null ? void 0 : err.response) == null ? void 0 : _g.data) == null ? void 0 : _h.message) || ((_j = (_i = err == null ? void 0 : err.response) == null ? void 0 : _i.data) == null ? void 0 : _j.error) || "An error occurred",
            toastType: "error",
            duration: 3e3
          });
        }
        return Promise.reject({
          type: "ERROR",
          ...err.response
        });
      }
      return Promise.reject(err);
    }
  );
});
const statusCodeStartsWith = (statusCode, startNumber) => {
  return statusCode.toString().startsWith(startNumber.toString());
};
const auth_api = {
  register: (payload) => {
    return GATEWAY_ENDPOINT.post("/auth/register", { ...payload, roles: ["VENDOR"] });
  },
  login: (payload) => {
    return GATEWAY_ENDPOINT.post("/auth/login", payload);
  },
  firebaseGoogleLogin: (payload) => {
    return GATEWAY_ENDPOINT.post("/auth/firebase/google", { ...payload, roles: ["VENDOR"] });
  },
  getProfile: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get("/auth/me");
  }
};
const vendors_api = {
  getVendorProfile: () => {
    return GATEWAY_ENDPOINT_WITH_AUTH.get("/vendors/me");
  }
};
const useAuth = () => {
  const { setUser, setVendor } = useUser();
  const fetchProfile = async () => {
    const response = await auth_api.getProfile();
    setUser(response.data);
    if (response.data.roles && response.data.roles.includes("VENDOR")) {
      const vendorResponse = await vendors_api.getVendorProfile();
      setVendor(vendorResponse.data);
    }
    return response.data;
  };
  const login = async (payload) => {
    const response = await auth_api.login(payload);
    if (!response.data.user.roles || !response.data.user.roles.includes("VENDOR")) {
      throw { response: { data: { message: "Unauthorized. Vendor access required." } }, data: { message: "Unauthorized. Vendor access required." }, message: "Unauthorized. Vendor access required." };
    }
    setUser(response.data.user);
    await fetchProfile();
    return response.data;
  };
  const register = async (payload) => {
    const response = await auth_api.register(payload);
    if (!response.data.user.roles || !response.data.user.roles.includes("VENDOR")) {
      throw { data: { message: "Failed to create vendor account." }, message: "Failed to create vendor account." };
    }
    setUser(response.data.user);
    await fetchProfile();
    return response.data;
  };
  const firebaseGoogleLogin = async (payload) => {
    const response = await auth_api.firebaseGoogleLogin(payload);
    if (!response.data.user.roles || !response.data.user.roles.includes("VENDOR")) {
      throw { data: { message: "Unauthorized. Vendor access required. This Google account is not a vendor." }, message: "Unauthorized. This Google account is not registered as a vendor." };
    }
    setUser(response.data.user);
    await fetchProfile();
    return response.data;
  };
  return { login, register, firebaseGoogleLogin, fetchProfile };
};

export { useAuth as u };
//# sourceMappingURL=useAuth-QNKhiWCh.mjs.map
