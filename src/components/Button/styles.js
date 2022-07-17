import styled from "styled-components";

export const Container = styled.button`
  width: fit-content;
  padding: 1.2rem 3.2rem;

  display: flex;
  align-items: center;
  justify-content: center;


  border: none;
  border-radius: 0.8rem;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  
  background-color: ${({ theme }) => theme.COLORS.PINK};

  svg {
    margin-right: 0.8rem;
  }
`