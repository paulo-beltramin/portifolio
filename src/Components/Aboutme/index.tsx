import { FaArrowDown } from "react-icons/fa6"
import style from './style.module.scss'



export const AboutMe = () => {

  return (
    <>
      <div className={style.title}>
        <p >sobre mim </p>
       
        <FaArrowDown size={24} color="red" />
      </div>

     

        <p className={style.description}>
          Desenvolvedor Front-end com 1 ano de experiência
          em desenvolvimento web, focado por enquanto em criar projetos
          escaláveis e eficientes para fins de estudo .
          Graduando em engenharia de software
          com conhecimentos em Html, Javascript  e css,
          incluindo o framework React , Tailwind e sass.
          Sempre interessado em explorar novas tecnologias e contribuir
          com projetos desafiadores.
        </p>
    
    </>
  )
}
