import dayjs from "dayjs";

export default {
  install(app) {
    app.config.globalProperties.$dayjs = dayjs;
    app.provide("dayjs", dayjs); // setup 함수내에 접근하기 위해서
  },
};
