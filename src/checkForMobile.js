function initMobile() {
  return {
    open: true,
    open2: true,
    open3: true,
    open4: true,
    open5: true,
    open5: true,
    navOpen: true,
    isMobile: false,
    checkIsMobile: function () {
      this.isMobile = window.innerWidth < 640;
    },
  };
}
