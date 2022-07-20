import styled from "styled-components"

export const Container = styled.div`
  width: 100%;

  > header {
    width: 100%;

    display: flex;
    align-items: center;
    height: 14.4rem;
    background-color: ${({ theme }) => theme.COLORS.CLEAR_PINK};
    padding: 0 12.3rem;

    button {
      color: ${({ theme }) => theme.COLORS.PINK};
    }

  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: -8.4rem auto 0;

  > div:nth-child(4) {
    margin-top: 2.4rem;
  }

  button {
      margin-top: 2.4rem;
      width: 100%;
    }
`

export const Avatar = styled.div`
  position: relative;
  margin: -9.4rem auto 6.4rem;

  width: 18.6rem;
  height: 18.6rem;

  > img {
    border-radius: 50%;

    width: 18.6rem;
    height: 18.6rem;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PINK};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;

      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`