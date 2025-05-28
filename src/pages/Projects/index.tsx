import { useState, useEffect } from "react"
import { Link } from "react-router"
import type { projectsProps } from "../Admin"

import style from './style.module.scss'
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../../Components/services/db"

export const Projects = () => {
  const [projects, setProjects] = useState<projectsProps[]>([])



  useEffect(() => {
    getProjects()
  }, [])

  const getProjects = () => {

    const docRef = collection(db, "projetos")
    const list = [] as projectsProps[]
    const queryRef = query(docRef);
    getDocs(queryRef)

      .then((doc) => {
        doc.forEach((doc) => {
          list.push({
            title: doc.data().title,
            thamb: doc.data().thamb,
            description: doc.data().description
          })
        })
        setProjects(list)
      })

  }

  return (
    <>
      <section className={style.container}>
        <p>
          Meus projetos
        </p>

        <div className={style.container_list}>
          {projects && projects.map((item) => (
            <>
              <div className={style.list}>
                <Link to={''} key={item.title}>
                  <img src={item.thamb} alt="" title="Clique para ver o projeto" />
                </Link>
                <p className={style.title}>
                  {item.title}
                </p>

                <span>
                  {item.description}
                </span>
                <div >
                  <button>Ver código no github</button>
                </div>
              </div>
            </>
          ))}

        </div>
      </section>
    </>
  )
}
