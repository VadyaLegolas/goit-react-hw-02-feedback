import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(label => {
        return (
          <Button
            key={label}
            onClick={() => {
              onLeaveFeedback(label);
            }}
          >
            {label.charAt(0).toUpperCase() + label.slice(1)}
          </Button>
        );
      })}
    </>
  );
};
