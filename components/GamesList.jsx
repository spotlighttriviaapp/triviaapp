import Game from "@/components/Game";

export default function GamesList({ games }) {
  if (games) {
    return games.map((game) => <Game game={game} key={game.id} />);
  } else {
    return null;
  }
}