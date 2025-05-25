import { FaCss3, FaReact, FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";


export const Tecnology = () => {
    return (
        <div>
            <p className="text-3xl font-bold max-w-2xl mx-auto mt-5">Tecnologias</p>
            <section className="max-w-5xl w-full justify-center flex mx-auto ">
                <ul className="grid grid-cols-5  gap-6 bg-[#0D6EFD] rounded text-white p-4 max-sm:grid-cols-3">
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
