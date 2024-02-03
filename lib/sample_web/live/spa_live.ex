defmodule SampleWeb.SpaLive do
  use SampleWeb, :live_view

  def mount(params, session, socket) do
    {:ok, socket, layout: {SampleWeb.Layouts, :spa}}
  end

  # TODO:
  # <!-- if production -->
  # <link rel="stylesheet" href="/assets/{{ manifest['main.js'].css }}" />
  # <script type="module" src="/assets/{{ manifest['main.js'].file }}"></script>

  def render(assigns) do
    ~H"""
    <!-- if development -->
    <script type="module">
      import RefreshRuntime from 'http://localhost:5173/@react-refresh'
      RefreshRuntime.injectIntoGlobalHook(window)
      window.$RefreshReg$ = () => {}
      window.$RefreshSig$ = () => (type) => type
      window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script phx-track-static type="module" src="http://localhost:5173/@vite/client">
    </script>
    <script phx-track-static type="module" src="http://localhost:5173/src/main.jsx">
    </script>

    <!-- It's critical that div where the SPA is rendered is ignored by phx-update -->
    <div id="root" phx-update="ignore"></div>
    """
  end
end
