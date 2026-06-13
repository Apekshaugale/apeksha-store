import styled from "styled-components";

export const ButtonContainer = styled.button`
  text-transform: capitalize;
  font-size: 1rem;
  background: transparent;

  border: 0.1rem solid
    ${props =>
      props.cart
        ? "var(--mainYellow)"
        : "var(--lightBlue)"};

  border-radius: 0.5rem;

  color: ${props =>
    props.cart
      ? "var(--mainYellow)"
      : "var(--lightBlue)"};

  padding: 0.4rem 1rem;
  cursor: pointer;
  margin: 0.3rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: ${props =>
      props.cart
        ? "var(--mainYellow)"
        : "var(--lightBlue)"};

    color: var(--mainDark);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;