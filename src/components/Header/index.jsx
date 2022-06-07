import React from 'react'
import './index.modules.css'

const Header = () => {
  return (
    <section className='header-section'>
      <h1>Reuniões em tempo real</h1>
      <h5>Usando seu navegador, compartilhe sua câmera, área de trabalho e apresentações com colegas de equipe e clientes.</h5>

      <div style={{display: 'inline-block'}}>
        <img src="./src/assets/sample.jpg" alt="header sample" />
      </div>
    </section>
  )
}

export default Header