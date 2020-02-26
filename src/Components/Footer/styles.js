import styled from 'styled-components';

export const Container = styled.footer`
  padding: 60px 20px;
  text-align: center;

  > p {
    font-size: 1.125rem;
    color: #999;
  }

  > a {
    color: #7158c1;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
