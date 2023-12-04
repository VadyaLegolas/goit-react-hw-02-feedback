import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {options.map(label => {
        return (
          <Button
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
