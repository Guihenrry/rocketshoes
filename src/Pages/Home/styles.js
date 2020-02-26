import styled from 'styled-components';
import { darken } from 'polished';

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 660px) {
    display: flex;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
  }

  > li {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 4px;

    @media only screen and (max-width: 660px) {
      min-width: 220px;
      margin-right: 20px;
    }

    > img {
      align-self: center;
      max-width: 100%;
    }

    > strong {
      font-size: 1rem;
      line-height: 20px;
      color: #333;
      margin-top: 5px;
    }

    > span {
      font-size: 1.3125rem;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    > button {
      display: flex;
      align-items: center;
      background: #7159c1;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }

      > div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);

        > div {
          display: flex;
          align-items: center;
        }

        > svg {
          margin-right: 5px;
        }
      }

      > span {
        flex: 1;
        text-transform: uppercase;
        font-weight: bold;
      }
    }
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  padding: 60px 0;
`;
