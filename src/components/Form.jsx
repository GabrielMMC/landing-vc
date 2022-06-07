import React from 'react'
import InputMask from 'react-input-mask'

const Form = ({value, onChange}) => {
  return (
    <section className="content bg-light text-dark" style={{overflowX:'hidden'}}>
    <div className="row style-my p-5">
      <div className="col-lg-6 m-auto mb-4">
        <h1 className="h1 display-6">Inscreva-se e venha fazer parte da nossa VM</h1>
        <form>
          <div className="mb-3 align-self-center">
            <label htmlFor="name" className="form-label">Nome</label>
            <input type="text" className="form-control" id="name"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="email" className="form-control" id="email"></input>
          </div>
          <div className="mb-3 align-self-center">
            <label htmlFor="password" className="form-label">Senha</label>
            <input type="password" className="form-control" id="password"></input>
          </div>
          <div className="mb-3 align-self-center">
            <label htmlFor="cel" className="form-label">Telefone</label>
            <InputMask className='form-control' mask="(99)9999-9999" value={value} onChange={onChange}/>
          </div>

          <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
        </div>

        <div className="col-lg-4 m-auto">
        <a href="#"><img className="img-fluid box-shadow rounded" src="./src/assets/mapa.png" alt="Endereço da Empresa"></img></a>

        <h2 className="h6">DADOS DE CONTATO</h2>
        <ul className="list-unstyled text-secondary">
          <li>enterscience@trocaremail.com</li>
          <li>(17)4002-8922</li>
          <li>Segunda à partir das 08:00H</li>
        </ul>
      </div>
      </div>   
  </section>
  )
}
export default Form