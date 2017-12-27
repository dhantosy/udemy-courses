# Elixir Relationship with Erlang
- Code we write -> Elixir -> Erlang -> BEAM

# Atom (:wordhere)
- handling status code/message.
- like strings.
- difference is for code message only developer to see.

# Modules in FP
- no concept of class.
- standalone object, no idea instance variable is.
- can't create copies, reinitiate.
- just compilation of methods.

# Immutability
- existing data do not change.
- it creates a copy of the data and change it into a new data whatever we want.

# List
- Like arrays, can be used in any arbitary length
- can be as many as we want

# Tuple
- can be a collection of stuff of a different type, but the order specifies some meaning
- like an array where each index has a special meaning
- index[0] always what we define
- the rest are not what we define

# Pattern Matching
- elixir's variable assignmnet
- asign from tuple
- {hand, rest_of_deck} = Cards.deal(deck, 5)
- [color1, color2] = ["red", "blue"]
- create structure that match

# Case Statement
- combination of if else statement and pattern matching

# Pipe operator (|>)
- to chain method calls

# Generate HTML Documentation
- in mixfile, add {:ex_doc, "~> 0.12"} under deps do
- in CLI, type "mix deps.get"
- add module documentation and function documentation
- @moduledoc """ content here """
- to generate, in CLI, type "mix docs"

# Testing
- type "mix test" in CLI
- doctest is done by creating test in documentation
- case test is done by creating test in test.exs

# Maps
- Collection of key value pairs.
- nearly identical to javascript objects
- colors = %{primary: "red", secondary: "blue"}
- colors.secondary
- Also works with pattern matching
- %{secondary: secondary_color} = colors
- secondary_color
- 2 ways to update value in maps. by Function
- using a Function, Map.put(colors, :primary, "blue")
- in Elixir, we do not update existing data structure, we just create a new one
- Using a syntax, %{ colors | primary: "blue"}
- Gotcha in the update syntax, it can only update an existing map.
- in Maps, we can only one property per map.

# Keyword List
- merge List and Tuple together
- colors = [{:primary, "red"}, {:secondary, "green"}]
- colors = [primary: "red", secondary: "blue"]
- like a list and maps