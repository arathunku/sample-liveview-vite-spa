defmodule SampleWeb.LoginLive do
  use SampleWeb, :live_view

  def render(assigns) do
    ~H"""
    <h1>
      Login page
    </h1>

    <p>Cheers from LiveView</p>
    """
  end

  def handle_params(_, _, socket) do
    {:noreply, socket}
  end
end
