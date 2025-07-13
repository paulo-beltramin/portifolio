import { addDoc, collection } from 'firebase/firestore'
import { useState, type FormEvent } from 'react'
import { db } from '../../../dist/services/db'

import style from './style.module.scss'
import toast from 'react-hot-toast'

export type projectsProps = {

  title: string,
  thamb: string,
  description: string,
  link: string,
  git:string
}

export const Admin = () => {

  const [thamb, setThamb] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')
  const [link, setLink] = useState('')
  const [git, setGit] = useState('')

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    addDoc(collection(db, "projetos"), {

      title: title,
      thamb: thamb,
      description: description,
      link: link,
      git: git

    }).then(() => {

      setThamb('')
      setTitle(""),
        setDescription('')
      toast('Dados salvos com sucesso', {
        style: {
          backgroundColor: 'green',
          color: 'white',
          padding: '8px',
          borderRadius: '8px'
        }
      })
    })
      .catch((error) => {
        console.log(error)
      })

  }

  return (
    <>
      <section className={style.container}>
        <form className={style.forms} onSubmit={handleRegister}>
          <label>thumbnail do projeto</label>
          <input type="url" value={thamb}
            onChange={e => setThamb(e.target.value)} placeholder="thumbNail" />

          <label>Titulo do projeto</label>
          <input type="text" value={title}
            onChange={e => setTitle(e.target.value)} placeholder="Digite o titulo do projeto" />

          <label>Link do site</label>
          <input type="text" value={link}
            onChange={e => setLink(e.target.value)} placeholder="Digite link para acesso ao site" />

          <label>Link do github project</label>
          <input type="text" value={git}
            onChange={e => setGit(e.target.value)} placeholder="Digite link do github" />


          <label>Descrição</label>
          <textarea placeholder="Descrição" value={description}
            onChange={e => setDescription(e.target.value)}></textarea>

          <button>Cadastrar</button>
        </form>
      </section>
    </>
  )
}
