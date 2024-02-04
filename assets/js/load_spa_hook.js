// required by Vite
const setupReactPatching = (callback) => {
  if (window.$RefreshReg$) {
    callback()
    return;
  }

  import("http://localhost:5173/@react-refresh").then(RefreshRuntime => {
    RefreshRuntime.default.injectIntoGlobalHook(window)
    window.$RefreshReg$ = () => {}
    window.$RefreshSig$ = () => (type) => type
    window.__vite_plugin_react_preamble_installed__ = true
    callback()
  })
}

const LoadSPA = {
  mounted() {
    setupReactPatching(() => {
      import("http://localhost:5173/@vite/client")
      import("http://localhost:5173/src/main.jsx").then(mount => {
        this.unmount = mount.default(this.el)
      })
    })
  },

  destroyed() {
    if (this.unmount) {
      this.unmount()
    }
  }
}

export default LoadSPA;
