import Link from "next/link";

export default function TriviaGame({ game }) {
  return (
    <>
      <p>name: {game.name}</p>
      <p>id: {game.id}</p>
      <p>type: {game.type}</p>
      <p>style: {game.style}</p>
      <p>readystatus: {game.readystatus}</p>
      <Link
        href={{
          pathname: "/admin/edit-game/[gameID]",
          query: { gameID: game.id },
        }}
      >
        Edit
      </Link>
      <br />
    </>
  );
}
