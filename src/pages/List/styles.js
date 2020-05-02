import styled from 'styled-components';
import { shade } from 'polished';

export const FilterForm = styled.form`
  margin: 0 auto;
  max-width: 700px;
  display: flex;
  margin-top: 20px;
  input {
    flex: 1;
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    background: #FE2A57;
    color: #fff;

    &::placeholder {
      color: #fff;
    }
  }

  button {
    width: 210px;
    height: 50px;
    background: #FE2A57;
    border-radius: 0 5px 5px 0;
    border-style: none;
    color: #fff;
    transition: 0.2s;
  }
`;


export const TitleTextContainer = styled.div`
  font-size: 1.4em;
  color: #444444;
  text-align: center;
  border: double 4px white;
  margin: 10px 0;
`;

export const Warning = styled.div`
  margin-top: 30px;
  color: white;
  background: #FE2A57;
  text-align: center;
  padding: 8px 16px;
  margin-bottom: 10px;
  border-radius: 10px;
`;
