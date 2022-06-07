import './index.css'
import Link from '../Link'
import React from 'react'

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {nav_class: 'shrink-navbar'}
  }

  // responsavel por adicionar o evento scroll no elemento window
  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }
  
  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  // responsavel por diminuir a navabr quando scrollar a tela
  handleScroll = () => {
    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
      this.setState({nav_class: ''})
    } else {
      this.setState({nav_class: 'shrink-navbar'})
    }
  }


  render () {
    return (
      <nav className={this.state.nav_class}>
        <div className="nav-content">
          <a href="#">
            <img className='nav-branch' src="./src/assets/es-logo-colorido.png" alt="EnterScience logotipo" />
          </a>
          <div className='nav-links'>
            <Link href_content='#' archor_target='_self' archor_content='Sobre nós' />
            <Link href_content='#' archor_target='_self' archor_content='Segurança' />
            <Link href_content='#' archor_target='_self' archor_content='Suporte' />
            <Link href_content='#' archor_target='_self' archor_content='Log in' archor_type='orange' />
            <Link href_content='#' archor_target='_self' archor_content='Comece a usar!' archor_type='special' />
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
