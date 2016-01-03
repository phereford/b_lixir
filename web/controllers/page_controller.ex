defmodule BLixir.PageController do
  use BLixir.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
