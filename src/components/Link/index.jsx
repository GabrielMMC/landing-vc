import './index.modules.css'

/*
  tipos de A:

  1- normal, texto: azul (padrao)
  2- orange, texto: laranja
  3- special, com transicao de fundo (laranja para azul)

  sintaxe: <Link href_content='#' archor_content='Sobre nos' archor_type='orange' />
*/

function Navbar(props) {
  const {
    href_content,
    archor_content,
    archor_target = '_blank',
    archor_type = 0, // 
  } = props

  // caso um tipo não seja passado, o padrão será usado
  let class_archor = `normal-archor ${archor_type ? archor_type : ''}`

  return (
    <a 
      target={archor_target}
      className={class_archor}
      href={href_content}>{archor_content}
    </a>
  ) 
}

export default Navbar
