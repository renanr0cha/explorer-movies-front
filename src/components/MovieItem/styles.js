import styled from "styled-components";

export const Container = styled.div`
  padding: 3.2rem;

  background-color: ${({ theme }) => theme.COLORS.CLEAR_PINK};
  border-radius: 1.6rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;

  > h2 {
    margin-bottom: 0.8rem;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  svg {
    color: ${({ theme }) => theme.COLORS.PINK};
    font-size: 1.2rem;
    margin-right: 0.4rem;
    margin-bottom: 1.6rem;
  }

  > p {
    font-size: 1.6rem;
    font-weight: 400;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-family: 'Roboto', sans-serif;
    margin-bottom: 2.4rem;
  }
`