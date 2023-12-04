import { Title } from "./Section.styled";

export const Section = ({ title, children }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      {children}
    </>
  );
};
