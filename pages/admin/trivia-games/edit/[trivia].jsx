import { useRouter } from "next/router";

const TriviaGame = () => {
  const router = useRouter();
  const { trivia } = router.query;

  return <p>Edit: Trivia Game -- {trivia}</p>;
};

export default TriviaGame;
