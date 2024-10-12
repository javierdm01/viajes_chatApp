import { faBars, faClose } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"

export default function Menu() {
    const [showMenu, setShowMenu] = useState(false)
    const handleMenu = () => {
        setShowMenu(!showMenu)
    }
    return (
        <nav className="flex justify-between items-center w-full">
            <FontAwesomeIcon icon={faBars} onClick={handleMenu} className={`text-white text-3xl`} />
            {
                showMenu &&
                
                    <div className="absolute z-10 md:border-r md:border-white bg-stone-700 top-0 flex flex-col items-end p-8 lg:w-1/6 md:w-1/3 w-full h-full left-0">
                        <FontAwesomeIcon icon={faClose} onClick={handleMenu} className={`text-white w-fit text-3xl`} />
                        <ul className="  h-full text-xl flex flex-col text-center mt-12 text-white w-full gap-4">
                            <li>Inicio</li>
                            <li>Chats</li>
                        </ul>
                        <p className="text-center text-white w-full">© Javier Diaz</p>
                    </div>
            }
            <div className="md:flex hidden">
                <button className="p-3  px-5 rounded-3xl bg-white">Menu Button</button>
            </div>
        </nav>
    )
}