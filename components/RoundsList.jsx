import Round from "@/components/Round";

export default function RoundsList({ game, rounds }) {
  if (rounds) {
    return rounds.map((round) => (
      <Round game={game} round={round} key={round.id} />
    ));
  } else {
    return null;
  }
}
