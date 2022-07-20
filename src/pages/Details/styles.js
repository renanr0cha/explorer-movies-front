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
    padding: 4rem 12.3rem 2.4rem;

    button {
      color: ${({ theme}) => theme.COLORS.PINK};
    }
  }
`
export const Content = styled.div`
  grid-area: content;
  width: 113rem;
  padding: 0 12.3rem;

  > div {
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

    img {
      height: 1.6rem;
      width: 1.6rem;
      border-radius: 50%;
      margin-right: 0.8rem;
    }

    span {
      font-family: 'Roboto', sans-serif;

      font-size: 1.6rem;
      font-weight: 400;
    }


    
  }
`