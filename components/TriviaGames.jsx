import Link from "next/link";

export default function TriviaGames({ games }) {
  return games ? games.map((game) => <TriviaGame game={game} />) : null;
}

function TriviaGame({ game }) {
  return (
    <div>
      <p>name: {game.name}</p>
      <p>date: {game.date}</p>
      <p>type: {game.type}</p>
      <p>style: {game.style}</p>
      <p>readystatus: {game.readystatus}</p>
    </div>
  );
}
