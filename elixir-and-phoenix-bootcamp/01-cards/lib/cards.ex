# module
defmodule Cards do
  @moduledoc """
    Provides methods for creating and handling a deck of cards
  """
  
  @doc """
    Return a list of string representing a deck of cards
  """
  # method
  def create_deck do
    # array
    values = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
    suits = ["Spades", "Clubs", "Hearts", "Diamond"]

    # SOLUTION 1
    # nested comprehension, returns multiple strings
    # cards = for value <- values do
    #   for suit <- suits do
    #     "#{value} of #{suit}"
    #   end
    # end
    # List.flatten(cards)

    # SOLUTION 2
    # double comprehenstion
    for suit <- suits, value <- values do
      "#{value} of #{suit}"
    end

  end

  # use built in methods
  def shuffle(deck) do
    Enum.shuffle(deck)
  end

  @doc """
    Determines whether a deck contains a given card

  ## Examples 

      iex> deck = Cards.create_deck
      ["Ace of Spades", "Two of Spades", "Three of Spades", "Four of Spades",
       "Five of Spades", "Six of Spades", "Seven of Spades", "Eight of Spades",
       "Nine of Spades", "Ten of Spades", "Ace of Clubs", "Two of Clubs",
       "Three of Clubs", "Four of Clubs", "Five of Clubs", "Six of Clubs",
       "Seven of Clubs", "Eight of Clubs", "Nine of Clubs", "Ten of Clubs",
       "Ace of Hearts", "Two of Hearts", "Three of Hearts", "Four of Hearts",
       "Five of Hearts", "Six of Hearts", "Seven of Hearts", "Eight of Hearts",
       "Nine of Hearts", "Ten of Hearts", "Ace of Diamond", "Two of Diamond",
       "Three of Diamond", "Four of Diamond", "Five of Diamond", "Six of Diamond",
       "Seven of Diamond", "Eight of Diamond", "Nine of Diamond", "Ten of Diamond"]
      iex> Cards.contains?(deck, "Ace of Spades")
      true
  """

  # boolean
  def contains?(deck, card) do
    Enum.member?(deck, card)
  end

  @doc """
    Divide a deck into a hand and the remainder of the deck. The `hand_size` argument indicates how many cards should be in the hand

  ## Examples

      iex> deck = Cards.create_deck
      iex> {hand, deck} = Cards.deal(deck, 1)
      iex> hand
      ["Ace of Spades"]
  """
  # create a tuple data structure
  def deal(deck, hand_size) do
    Enum.split(deck, hand_size)
  end

  def save(deck, filename) do
    binary = :erlang.term_to_binary(deck)
    File.write(filename, binary)  
  end

  def load(filename) do
    # case statement
    case File.read(filename) do
      # both comparing the results, and assigning second element of the result to variable
      {:ok, binary} -> :erlang.binary_to_term binary
      # for the purpose of pattern matching, use underscore for the unused variable
      {:error, _reason} -> "That file does not exist"
    end
  end

  def create_hand(hand_size) do
    Cards.create_deck
    |> Cards.shuffle
    |> Cards.deal(hand_size)
  end

end
