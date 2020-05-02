import styled from 'styled-components';

export const Container = styled.div`
  max-width: 960px;
  background: #231940;
  text-align: center;
  padding: 20px 0;
  border-radius: 0 0 5px 10px;

  display: flex;
  flex-direction: column;

  img {
    flex: 1;
    align-self: center;
  }

  strong {
    margin-top: 8px;
    color: #fff;
  }
`;

export const LinksContainer = styled.div`
  margin: 0 auto;
  margin-top: 8px;
  display: flex;
  a {
    padding: 8px 16px;
    margin-right: 5px;
    border: solid 2px #fff;
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
    background: #231940;
    transition: transform .2s;

    &:hover{
      transform: translateY(-3px);
    }
  }
`;
