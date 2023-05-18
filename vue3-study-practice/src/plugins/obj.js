const objPlugins = {
  install(app, options) {
    // app.component() 전역 컴포넌트
    // app.config.globalProperties 전역 애플리케이션 인스턴스에 속성 추가
    // app.directive 커스텀 디렉티브
    // app.provide 다양한 리소스를 자식컴포넌트에서 사용가능
    // console.log("obj", app);
    // console.log("objopt", options);
  },
};

export default objPlugins;
