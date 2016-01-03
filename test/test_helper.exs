ExUnit.start

Mix.Task.run "ecto.create", ~w(-r BLixir.Repo --quiet)
Mix.Task.run "ecto.migrate", ~w(-r BLixir.Repo --quiet)
Ecto.Adapters.SQL.begin_test_transaction(BLixir.Repo)

