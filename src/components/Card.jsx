import React from 'react'
import '../bootstrap.css'

const Card = () => {
  return (
    <section className="content">
      {
        //Div ocupando todo o tamanho da tela
      }
    <div className="row m-auto mx-5 vh-100 vw-100">
    {
        //Div de cada card
      }
      <div className="card m-5 m-auto align-self-center" style={{width:'35rem'}}>
        <img src="./src/assets/card1.svg" className="img-fluid" style={{height:'20rem'}} alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Acesso Gratuito</h5>
          <p className="card-text">De acordo com cada plano você terá diversos benefícios diferentes, escolha com sabedoria!.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Acesso à video chamadas</li>
          <li className="list-group-item">Tranferência de arquivos integrados ao chat</li>
          <li className="list-group-item">Compartilhamento de telas</li>
          <li className="list-group-item">Efeitos de áudio</li>
          <li className="list-group-item">Efeitos visuais</li>
          <li className="list-group-item">Personalização de interfaces</li>
        </ul>
        <div className="card-body m-auto">
          <a href="#" className="card-link btn btn-primary">Quero Conhecer</a>
        </div>
      </div>

      {
        //Div de cada card
      }

      <div className="card m-5 m-auto align-self-center" style={{width:'35rem'}}>
        <img src="./src/assets/card1.svg" className="img-fluid" style={{height:'20rem'}} alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">Acesso de Graça</h5>
          <p className="card-text">De acordo com cada entrada você terá diversos benefícios diferentes, escolha com sabedoria!.</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Acesso à video chamadas</li>
          <li className="list-group-item">Tranferência de arquivos integrados ao chat</li>
          <li className="list-group-item">Compartilhamento de telas</li>
          <li className="list-group-item">Efeitos de áudio</li>
          <li className="list-group-item">Efeitos visuais</li>
          <li className="list-group-item">Personalização de interfaces</li>
        </ul>
        <div className="card-body m-auto">
          <a href="#" className="card-link btn btn-primary">Quero Conhecer</a>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Card