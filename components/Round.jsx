import Link from "next/link";

export default function Round({ game, round }) {
  return (
    <>
      <p>round: {round.id}</p>
      <p>type: {round.type}</p>
      <Link
        href={{
          pathname: "/admin/edit-game/[gameID]/[roundID]",
          query: { gameID: game.id, roundID: round.id },
        }}
      >
        Edit
      </Link>
      <br />
    </>
  );
}
