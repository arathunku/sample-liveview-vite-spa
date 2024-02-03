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
    <!-- It's critical that div where the SPA is rendered is ignored by phx-update -->
    <div id="root" phx-update="ignore" phx-hook="LoadSPA"></div>
    """
  end
end
