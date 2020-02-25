import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const Button = styled.button`
  background: #7159c1;
  color: #fff;
  border: 0;
  border-radius: 4px;
  padding: 12px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.1, '#7159c1')};
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  > thead th {
    color: #999;
    text-transform: uppercase;
    text-align: left;
    padding: 12px;
    @media only screen and (max-width: 660px) {
      display: none;
    }
  }

  > tbody tr {
    @media only screen and (max-width: 660px) {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border-bottom: 1px solid #eee;
    }
  }

  > tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;

    @media only screen and (max-width: 660px) {
      border: none;

      :nth-child(2) {
        flex: 1 1 60%;
      }

      :nth-child(4) {
        flex: 1 1 0%;
      }
    }

    @media only screen and (max-width: 400px) {
      border: none;

      :nth-child(3) {
        flex: 1 1 0%;
      }

      :nth-child(4) {
        display: none;
      }
    }

    > img {
      width: 100px;
    }

    > strong {
      color: #333;
      display: block;
    }

    > span {
      display: block;
      margin-top: 5px;
      font-size: 1.125rem;
      font-weight: bold;
    }

    > div {
      display: flex;
      align-items: center;

      > input {
        border: 1px solid #ddd;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 50px;
      }

      > button {
        background: none;
        border: 0;
        padding: 6px;
      }
    }

    > button {
      background: none;
      border: 0;
      padding: 6px;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  > span {
    color: #999;
    font-weight: bold;
  }

  > strong {
    font-size: 1.75rem;
    margin-left: 5px;
  }
`;

export const CartEmpty = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;

  > h1 {
    font-size: 1.125rem;
    color: #333;
    margin-bottom: 10px;
  }

  > p {
    color: #999;
    max-width: 300px;
    text-align: center;
    margin-bottom: 10px;
  }
`;

export const Footer = styled.footer`
  margin-top: 30px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media only screen and (max-width: 660px) {
    align-items: center;
    flex-direction: column-reverse;

    > button {
      width: 100%;
      margin-top: 15px;
    }
  }
`;
