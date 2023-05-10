export default {
  // HomeView에서 사용 예제 확인
  install(app, options) {
    const person = {
      name: "msg",
      say() {
        console.log(this.name);
      },
      ...options,
    };
    app.config.globalProperties.$person = person; // created 훅 이후에 사용가능
    app.provide("person", person); // setup에서 바로 사용가능
  },
};
