defmodule CardsTest do
  use ExUnit.Case
  doctest Cards

  test "create_deck makes 40 cards" do
    deck_length = length(Cards.create_deck)
    assert deck_length == 40
  end

  test "shuffling a deck randomize it" do
    deck = Cards.create_deck
    refute deck == Cards.shuffle(deck)
  end
end
