import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import logoEnfase from '../../icons/logoEnfase.png'


import { Container, LinksContainer } from './styles';

class Header extends Component {
  render() {
    return (
      <Container>
        <img src={logoEnfase} alt="Logo Enfase"></img>
        <strong>Case 02</strong>
        <LinksContainer>
          <Link to="/">
            Lista
        </Link>
          <Link to="/createQuestion">
            Nova Questão
        </Link>
        </LinksContainer>
      </Container>
    )
  }
}

export default withRouter(Header)
