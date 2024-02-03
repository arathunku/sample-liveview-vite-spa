defmodule SampleWeb.SpaLive do
  use SampleWeb, :live_view

  def mount(params, session, socket) do
    {:ok, socket, layout: {SampleWeb.Layouts, :spa}}
  end

  def render(assigns) do
    #  It's critical that div where the SPA is going to be rendered is ignored with phx-update
    ~H"""
    <div id="root" phx-update="ignore" phx-hook="LoadSPA"></div>
    """
  end

  # When URLs changes, do nothing
  def handle_params(uri, _, socket) do
    {:noreply, socket}
  end
end
