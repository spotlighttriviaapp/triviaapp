export default function GameDetails({ game }) {
  return (
    game && (
      <>
        <p>id: {game.id}</p>
        <p>name: {game.name}</p>
        <p>type: {game.type}</p>
        <p>style: {game.style}</p>
        <p>date: {game.date.toDate().toDateString()}</p>
        <p>readystatus: {game.readystatus.toString()}</p>
        <br />
      </>
    )
  );
}
