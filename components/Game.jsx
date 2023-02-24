export default function TriviaGame({ game }) {
  return (
    <div key={game.id}>
      <p>name: {game.name}</p>
      <p>id: {game.id}</p>
      <p>type: {game.type}</p>
      <p>style: {game.style}</p>
      <p>readystatus: {game.readystatus}</p>
    </div>
  );
}
