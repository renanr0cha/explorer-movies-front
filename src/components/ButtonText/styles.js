import styled from "styled-components";
import { Link } from "react-router-dom";


export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  color: ${({ theme, isActive }) => theme.COLORS.PINK};

  border: none;
  font-size: 1.6rem;

  svg {
    margin-right: 0.8rem;
  }
`