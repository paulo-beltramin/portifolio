import { useState, type FormEvent } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router'
import { auth } from '../../Components/services/db'

import style from './style.module.scss'
import toast from 'react-hot-toast'

export const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleLogin = (e: FormEvent) => {
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                toast.success('logado com sucesso', {
                    style: {
                        backgroundColor: 'green',
                        fontWeight: 'bold',
                        color: 'white'
                    }
                })
                navigate("/admin")
            })

            .catch(() => {
                if (email || password !== auth.name) {
                    toast.error('Dados invalidos , verifique seu email e senha de acesso...', {
                        style: {
                            backgroundColor: 'red',
                            fontWeight: 'bold',
                            color: 'white'
                        }
                    })
                }
            })


    }

    return (
        <>
            <section className={style.container}>
                <form className={style.forms} onSubmit={handleLogin}>
                    <h1>Login de usuario</h1>
                    <div className={style.input}>

                        <label>Email de acesso</label>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                            placeholder='Digite seu email de acesso' />

                        <label>Senha de acesso</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                            placeholder='Digite sua senha de acesso' />
                        <div>
                            <button>Acessar</button>
                        </div>

                    </div>
                </form>
            </section>
        </>
    )
}
