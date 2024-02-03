defmodule Sample.Repo do
  use Ecto.Repo,
    otp_app: :sample,
    adapter: Ecto.Adapters.SQLite3
end
