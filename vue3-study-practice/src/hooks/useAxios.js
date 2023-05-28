import axios from "axios";
import { isRef, ref, unref, watch, watchEffect } from "vue";

axios.defaults.baseURL = import.meta.env.VITE_APP_API_URL;

export function useAxios(url, config = {}, options = {}) {
  const response = ref(null);
  const data = ref(null);
  const err = ref(null);
  const loading = ref(false);
  const { params } = config;

  const defaultConfig = {
    method: "get",
  };
  const defaultOptions = {
    immediate: true,
  };
  const { onSuccess, onError, immediate } = {
    ...defaultOptions,
    ...options,
  };
  loading.value = true;
  const execute = async (body) => {
    try {
      const res = await axios(unref(url), {
        ...defaultConfig,
        ...config,
        params: unref(params),
        data: typeof body === "object" ? body : {}, // watchEffect가 콜백함수로 함수가 넘어 온다.
      });
      response.value = { ...res };
      data.value = res.data;
      if (onSuccess) {
        onSuccess(res);
      }
    } catch (error) {
      err.value = error;
      if (onError) {
        onError(err);
      }
    } finally {
      loading.value = false;
    }
  };
  if (isRef(params) || isRef(url)) {
    watchEffect(execute);
  } else {
    if (immediate) {
      execute();
    }
  }

  return {
    response,
    data,
    err,
    loading,
    execute,
  };
}
// axios(url, config)
//   .then((res) => {
//     data.value = res.data;
//     console.log(data.value);
//   })
//   .catch((error) => {
//     err.value = error;
//   })
//   .finally(() => {
//     loading.value = false;
//   });
