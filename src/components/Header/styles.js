import styled from "styled-components";
import { Link } from "react-router-dom"

export const Container = styled.div`
  width: 100%;
  height: 11.6rem;

  padding: 0 12.3rem;

  display: flex;

  align-items: center;
  justify-content: space-between;

  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-bottom-width: 1px;
  border-bottom-style: solid;

  > h1 {
    width: 16.4rem;
    font-weight: 700;
    font-size: 2.4rem;
    white-space: nowrap;
    padding-right: 2.4rem;

    color: ${({ theme }) => theme.COLORS.PINK};

  }

  
`
export const Form = styled.form`
  width: 40vw;
`

export const Profile = styled(Link)`
  display: flex;
  gap: 0.9rem;
  justify-content: flex-end;

  width: 19.8rem;

  div {

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;

    

    strong {
    font-weight: 700;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    }

    span {
      font-weight: 400;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.COLORS.GRAY_200};
    }
  }
  
  > img {
  width: 6.4rem;
  height: 6.4rem;

  border: 1px solid #3E3B47;
  border-radius: 50%;
  }
`