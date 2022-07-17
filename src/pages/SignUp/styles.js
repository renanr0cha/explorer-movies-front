import styled from "styled-components";
import backgroundImg from "../../assets/background.png"

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;

  

`

export const Form = styled.form`
  padding: 0 13.4rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  
  > h1 {
    font-size: 4.8rem;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.PINK};

  }

  > span {
    font-size: 1.4rem;
    font-weight: 400;

    margin-bottom: 4.8rem;
  }

  > h2 {
    font-weight: 500;
    font-size: 2.4rem;

    margin-bottom: 4.8rem;
  }

  > button {
    width: 100%;
    margin-top: 1.6rem;
    margin-bottom: 2.6rem;
  }

  > button:last-child {
    color: ${({ theme }) => theme.COLORS.PINK};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`