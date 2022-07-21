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
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2.4rem;

   

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

    margin-bottom: 2.8rem;
  }
`

export const Form = styled.form`
  grid-area: form;
  overflow-y: auto;
  margin: 0 12.3rem;

  div {
    display: flex;
    gap: 4rem;
    height: 5.6rem;
  }

  > textarea {
    margin-block: 4rem;
  }

  > div.tag-wrapper {
    background-color: black;
    margin-bottom: 4rem;
    height: 8.8rem;
    border-radius: 0.8rem;
    align-items: center;
    padding-left: 1.6rem;
    gap: 2.4rem;
    width: 100%;

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