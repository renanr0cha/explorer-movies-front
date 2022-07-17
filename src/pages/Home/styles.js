import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-areas:
  "header-profile"
  "header"
  "content";

  > header {
    grid-area: header;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5rem 12.3rem 0;

    > h1 {
    font-size: 3.2rem;
    font-weight: 400;
    }
  }
`

export const Content = styled.div`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  overflow-y: auto;
  margin: 5rem 12.3rem;

  > div {

    button {
      margin-top: 2rem;
      padding: 0.5rem 1.6rem;
      margin-right: 0.8rem;
      background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
      border: none;
      border-radius: 0.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }

`