import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({
  options: { good, neutral, bad },
  onLeaveFeedback,
}) => {
  return (
    <>
      <Button
        onClick={() => {
          onLeaveFeedback(good);
        }}
      >
        Good
      </Button>
      <Button
        onClick={() => {
          onLeaveFeedback(neutral);
        }}
      >
        Neutral
      </Button>
      <Button
        onClick={() => {
          onLeaveFeedback(bad);
        }}
      >
        Bad
      </Button>
    </>
  );
};
