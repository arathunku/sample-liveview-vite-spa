defmodule SampleWeb.SpaLive do
  use SampleWeb, :live_view

  def mount(params, session, socket) do
    {:ok, socket, layout: {SampleWeb.Layouts, :spa}}
  end

  def render(assigns) do
    ~H"""
      <script defer phx-track-static type="text/javascript" src={"//localhost:3000/static/js/bundle.js"}>
      </script>
      <div id="root" phx-update="ignore"></div>
    """
  end
end
