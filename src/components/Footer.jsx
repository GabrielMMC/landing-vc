import React from 'react'
import '../bootstrap.css'
import Link from '../components/Link'

function Footer() {
  return (
    <footer className="bg-dark text-white">
    <div className="container py-4 m-auto">
      <div className="row m-auto">
        <div className="col-md-4 col-6">
          <h4 className="h5">PÁGINAS</h4>
          <ul className="list-unstyled">
            <li>
              <Link href_content='#' archor_content='Sobre nós' />
            </li>
            <li>
              <Link href_content='#' archor_content='Segurança' />
            </li>
            <li>
              <Link href_content='#' archor_content='Suporte' />
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className="h5">DADOS DE CONTATO</h4>
          <ul className="list-unstyled text-secondary">
            <li>enterscience@trocaremail.com</li>
            <li>17 4002-8922</li>
            <li>De Seg. à Sex. das 8h às 18h</li>
          </ul>
        </div>
        <div className="col-md-4">
          <h4 className="h5">REDES SOCIAIS</h4>
          <ul className="list-unstyled">
            <li>
              <Link href_content='https://www.linkedin.com/company/enterscience/' archor_content={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="LinkedInIcon"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path></svg>} />
              <Link href_content='https://www.facebook.com/enterscience' archor_content={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="FacebookIcon"><path d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2m13 2h-2.5A3.5 3.5 0 0 0 12 8.5V11h-2v3h2v7h3v-7h3v-3h-3V9a1 1 0 0 1 1-1h2V5z"></path></svg>} />
              <Link href_content='https://www.instagram.com/enterscience_br/' archor_content={<svg focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="InstagramIcon"><path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>} />
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="bg-dark text-center py-3">
      <p className="mb-0">EnterScience 2022 © Todos os direitos reservados</p>
    </div>
  </footer>
  )
}

export default Footer