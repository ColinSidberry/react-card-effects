import { useState, useEffect } from "react";
import axios from "axios";

const potential =
  "http://deckofcardsapi.com/api/deck/<<deck_id>>/draw/?count=2";
const BASE_URL = "http://deckofcardsapi.com/api/deck/";
/** Order entering system before it ships.
 *
 * Props:
 * - None
 *
 * State:
 * - deckOfCards, isLoading, isDeckDone
 *
 * App->Game->Card
 *
 */

async function drawNewDeck() {
  const response = await axios({ url: `${BASE_URL}new/` });

  console.log(response.data.deck_id, "response from drawNewDeck");
  return response.data.deck_id;
}

function Game() {
  const [deckOfCards, setDeckOfCards] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeckDone, setIsDeckDone] = useState(false);

  useEffect(function fetchDeckWhenMounted() {
    const response = drawNewDeck();

    console.log(response, "response data of useEffect");
    setDeckOfCards(response);
    console.log(deckOfCards, "deck of cards inside useEffect");
    setIsLoading(false);
  }, []);

  async function drawCard() {
    try {
      const response = await axios({
        url: `${BASE_URL}${deckOfCards}/draw/?count=2`,
      });
      console.log(response, "response worked from drawCard");
      return response;
    } catch (err) {
      setIsDeckDone(true);
    }
  }

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      <button onClick={drawCard}>Draw Card</button>
      {isDeckDone && <p>Card deck is empty</p>}
    </div>
  );
}

export default Game;
