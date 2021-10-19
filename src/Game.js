import {useState, useEffect} from "react"
/** Order entering system before it ships.
 *
 * Props:
 * - None
 *
 * State:
 * - deckOfCards, isLoading, isDeckDone
 *
 * App->Game->Card
 */
function Game (){
    const [deckOfCards, setDeckOfCards] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDeckDone, setIsDeckDone] = useState(false);
}