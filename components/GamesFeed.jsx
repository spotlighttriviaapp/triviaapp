import Game from "@/components/Game";

export default function GamesFeed({ games }) {
  if (games) {
    return games.map((game) => <Game game={game} key={game.id} />);
  } else {
    return null;
  }
}
