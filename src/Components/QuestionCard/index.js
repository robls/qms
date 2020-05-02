import React from 'react';
import { Link } from 'react-router-dom';
import { FiEdit } from 'react-icons/fi'
import { Container } from './styles';

const QuestionCard = (props) => {
  const { question } = props;

  return (
    <Container>
      <strong>{question.body}</strong>
      <div>
        <p>{question.id}</p>
        <p>{question.createdAt}</p>
        <Link
          to={
            {
              pathname: "/updateQuestion",
              state: { question }
            }
          }
        >
          <FiEdit
            size={20}
            color={"#231440"}
          />
        </Link>
      </div>
    </Container>
  );
}

export default QuestionCard;
