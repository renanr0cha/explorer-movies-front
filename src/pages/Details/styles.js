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
    margin: 4rem 12.3rem 0;
    height: 2.1rem;
    display: flex;
    align-items: flex-start;

    button {
      color: ${({ theme}) => theme.COLORS.PINK};
    }
  }
`
export const Content = styled.div`
  grid-area: content;
  margin: 2.4rem 12.3rem;
  overflow-y: auto;

  > div.title {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    margin-bottom: 2.4rem;

    svg {
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }
  }

  > div.info {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    margin-bottom: 4rem;
    img {
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
    }

    svg {
      width: 1.6rem;
      height: 1.6rem;
      color: ${({ theme }) => theme.COLORS.PINK};
    }

    span {
      font-family: 'Roboto', sans-serif;

      font-size: 1.6rem;
      font-weight: 400;
    }
  }

  > div.tagchips {
    margin-bottom: 4rem;
  }

  > p {
    text-align: justify;
    width: 100%;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
  }
`