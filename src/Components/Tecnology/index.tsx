import { FaCss3, FaReact, FaHtml5, FaArrowDown } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import style from './styles.module.scss'

export const Tecnology = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <p >Tecnologias</p>
                <FaArrowDown size={24} color="red"/>
            </div>
            <section className={style.tecnology}>
                <ul >
                    <li>

                        <FaHtml5 size={80} />

                    </li>

                    <li>
                        <FaCss3 size={80} />

                    </li>

                    <li>
                        < IoLogoJavascript size={80} />

                    </li>

                    <li>

                        <FaReact size={80} />
                    </li>

                    <li>

                        <RiTailwindCssFill size={80} />

                    </li>
                </ul>
            </section>
        </div>
    )
}
