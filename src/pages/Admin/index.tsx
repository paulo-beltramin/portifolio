import { addDoc, collection} from 'firebase/firestore'
import { useState, type FormEvent } from 'react'
import { db } from '../../Components/services/db'

import style from './style.module.scss'
import toast from 'react-hot-toast'

export type projectsProps = {

  title: string,
  thamb: string,
  description: string
}

export const Admin = () => {

  const [thamb, setThamb] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('')

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();

    addDoc(collection(db, "projetos"), {

      title: title,
      thamb: thamb,
      description: description,

    }).then(() => {

      setThamb('')
      setTitle(""),
        setDescription('')
      toast('Dados salvos com sucesso',{
        style:{
          backgroundColor:'green',
          color:'white',
          padding:'8px',
          borderRadius:'8px'
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
          <input type="url" value={thamb} onChange={e => setThamb(e.target.value)} placeholder="thumbNail" />

          <label>Titulo do projeto</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} placeholder="Digite o titulo do projeto" />

          <label>Descrição</label>
          <textarea placeholder="Descrição" value={description} onChange={e => setDescription(e.target.value)}></textarea>

          <button>Cadastrar</button>
        </form>
      </section>
    </>
  )
}
