import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fcfcfc;
  border-radius: 10px;
  padding: 8px 16px;
  transition: transform .3s;

  &:hover {
    transform: translateX(3px);
  }
  strong {
    color: #444;
    font-size: 18px;
  }

  div {
    display: flex;
    margin: 8px 12px;
    justify-content: space-between;
    p {
      margin-right: 8px;
      color: #999;
      font-size: 12px;
    }
  }

  & + div {
    margin-top: 8px;
  }

  svg {
    cursor: pointer;
  }
`;
