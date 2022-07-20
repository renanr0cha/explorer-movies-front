import styled from "styled-components";

export const Container = styled.button`
  padding: 0.5rem 1.6rem;
  margin-right: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  border: none;
  border-radius: 0.8rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.COLORS.WHITE};
  pointer-events: none;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`