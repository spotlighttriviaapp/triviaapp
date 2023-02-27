import Link from "next/link";

export default function Round({ game, round }) {
  return (
    <>
      <p>type: {round.type}</p>
      <Link
        href={{
          pathname: "/admin/edit-game/[gameID]/[round]",
          query: { gameID: game.id, round: round.id },
        }}
      >
        Edit
      </Link>
      <br />
    </>
  );
}
