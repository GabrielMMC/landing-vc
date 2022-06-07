import React from 'react'
import '../bootstrap.css'

function Slider() {
  return (
    //Empresas usando
    <section className="text-dark text-center" style={{backgroundColor: 'var(--branco-gelo)', padding: '2rem'}}>
      <h1 className="display-4 h1 fw-bold" style={{marginBottom: '2rem'}}>Utilizam e Aprovam!</h1>
      {
        //Definindo tamanho da linha, col-8
      }
      <div className="row col-8 m-auto">
        {
          //alinhando cada div com 2 colunas de ocupação em grande escala, e 4 em média escala
        }
        <div className="col-xl-2 col-md-4">
          <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <img src="./src/assets/empresa4.png" alt="alternative"></img>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <img src="./src/assets/empresa1.png" alt="alternative"></img>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <img src="./src/assets/empresa2.png" alt="alternative"></img>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <img src="./src/assets/empresa3.png" alt="alternative"></img>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <img src="./src/assets/empresa4.png" alt="alternative"></img>
          </div>
        </div>
        <div className="col-xl-2 col-md-4">
          <div className="d-flex justify-content-center" style={{ height: '100px' }}>
            <img src="./src/assets/empresa5.png" alt="alternative"></img>
          </div>
        </div>
      </div>
    </section> 
  )
}

export default Slider