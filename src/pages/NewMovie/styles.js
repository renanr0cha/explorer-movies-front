import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-areas:
  "header"
  "header-content"
  "form";

  > header {
    margin-top: 4rem;
    grid-area: header-content;
    padding: 0 12.3rem;

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
      margin-bottom: 2.4rem;

      font-weight: 400;
      font-size: 1.6rem;
    }

    h1 {
      margin-bottom: 4rem;
      font-weight: 500;
      font-size: 3.6rem;
    }
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    margin-bottom: 4rem;
  }
`

export const Form = styled.form`
  grid-area: form;
  padding: 0 12.3rem;

  div {
    display: flex;
    gap: 4rem;
  }

  > textarea {
    margin-block: 4rem;
  }

  div:last-child {

    button:first-child {
      background-color: black;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
    button {
      width: 100%;

    }
    justify-content: stretch;
    align-items: stretch;
  }
`