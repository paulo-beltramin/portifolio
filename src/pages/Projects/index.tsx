import { Link } from "react-router"
import cars from '../../assets/cars.png'
import movie from '../../assets/movie.png'
import calc from '../../assets/calc.png'
import style from './style.module.scss'

export const Projects = () => {


  return (
    <>
      <section className={style.container}>
        <p>
          Meus projetos
        </p>

        <div className={style.container_list}>


          <div className={style.list}>
            <Link to={'https://web-cars-git-d-ef42e4-paulo-sergio-beltramins-projects-9e2fa051.vercel.app/'} target="_blank">

              <img src={cars} alt="" title="Clique para ver o projeto" />
            </Link>
            <p className={style.title}>
              WebCars
            </p>

            <span>
              Projeto desenvolvido utilizando reactjs ,sass e fire base somente pra autenticação de usuario ate o momento, o mesmo ainda esta em andamento , pois irei desenvolver o data base para salvar os veiculos a venda de cada usuario logado...
            </span>
            <div >
              <Link to="https://github.com/paulo-beltramin/webCars" target="_blank">
                <button>Ver código no github</button>
              </Link>
            </div>
          </div>

          <div className={style.list}>
            <Link to={'https://movieflix-git-main-paulo-sergio-beltramins-projects-9e2fa051.vercel.app/'} target="_blank">

              <img src={movie} alt="" title="Clique para ver o projeto" />
            </Link>
            <p className={style.title}>
              MovieFlix - Filmes e séries
            </p>

            <span>
              Movieflix foi desenvolvida utilizando o framework nextJs junto do tailwindCss  e api da the movie db ,  como não sou profissional em Ui Ux , tentei buscar a forma mais parecida do netflix para o design do mesmo....
            </span>
            <div >
              <Link to="https://github.com/paulo-beltramin/movieflix" target="_blank">
                <button>Ver código no github</button>
              </Link>
            </div>
          </div>

          <div className={style.list}>
            <Link to={'https://calc-medias-iota.vercel.app/'} target="_blank">

              <img src={calc} alt="" title="Clique para ver o projeto" />
            </Link>
            <p className={style.title}>
              Calculadora de médias
            </p>

            <span>
              Desenvolvido utilizando html , css , javascript  com o intuito de manter a base da programação web js sem a utilização
              de frameworks
            </span>
            <div >
              <Link to="https://github.com/paulo-beltramin/calc-medias" target="_blank">
                <button>Ver código no github</button>
              </Link>
            </div>
          </div>


        </div>
      </section>
    </>
  )
}
