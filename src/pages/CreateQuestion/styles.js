import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  margin: 15px 0;
`;

export const Content = styled.div`
  justify-content: center;
  align-items: center;

  p {
    font-size: 18px;
    color: #444;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input {
      border-style: none;
      color: #444;
      border: solid 1px #3f3f3f;
      padding: 12px 24px;
      border-radius: 8px;
      & + input {
        padding: 6px 12px;
        margin-top: 8px
      }

      &::placeholder{
        color: #3f3f3f;
      }
    }
  }
`;

export const RadioGroup = styled.div`
  color: #3f3f3f;
  display: flex;
  padding: 8px 16px;
  justify-content: space-evenly;
  font-size: 18px;

  input {
    margin-right: 8px;
  }
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  padding: 16px 24px;
  border-style: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #231940;

  transition: .3s;

  svg {
    margin-right: 8px;
  }


  &:hover {
    background: ${lighten('.2', "#231940")};
    transform: scale(1.1);
  }

  button {
    font-size: 20px;
    color: #fff;
    background: transparent;
    border-style: none;
  }

`;
