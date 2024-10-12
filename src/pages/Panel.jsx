import { faTrash } from "@fortawesome/free-solid-svg-icons"
import InputSearch from "../components/InputSearch"
import { faShare } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import ReactMarkdown from "react-markdown";
import { useSession } from '../context/SessionContext';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import getChat from "../hooks/getChat"

import Menu from "../components/Menu"
export default function Panel() {
    const [search, setSearch] = useState('')
    const [chat, setChat] = useState('')
    const [trash, setTrash] = useState(false)
    const { sessionData } = useSession();
    const handleSubmit =async (e) => {
        e.preventDefault()
        setSearch('')
        setChat(chat + '\n\n' + '**😃Usuario😃**: ' + search + '\n\n\n' )
        if(!search){
            setChat('Generando respuesta...')
        }
        const genChat=await getChat(search,sessionData.sessionId)
        setChat(chat+'\n\n' + '**😃Usuario😃**: ' + search + '\n\n\n ✈️**Viajes Model**✈️: ' + genChat);
        setTrash(!trash)
    }
    const handleClickTrash = () => {
        setChat('')
        setTrash(!trash)
    }
    
    return(
        <div className="p-8 flex h-full bg-stone-700 flex-col justify-between md:px-12">
            <header>
                <Menu/>
            </header>
            <main className="h-full gap-4 flex flex-col text-white font-semibold   items-center ">
                {
                    !chat?
                        <div className='flex tracking-wider mt-28 items-center flex-col'>
                            <h2 className="text-2xl">Planifica tu viaje con ViajesChat</h2>
                            <h3>Introduce el lugar y la fecha de tu viajes y te proporcionaremos un itinerario para tu viaje.</h3>
                        </div>
                    :
                    <div className="px-8 md:w-2/3 py-4 h-96 mt-10 overflow-y-auto  flex items-start justify-start w-full max-w-3xl">
                            <ReactMarkdown className="text-white">{chat}</ReactMarkdown>
                        </div>
                }
            </main>
            <footer className="flex justify-center items-center">
                <form onSubmit={handleSubmit} className="md:w-2/3 w-full relative flex">
                    {trash &&<FontAwesomeIcon icon={faTrash}  className="w-6 h-6 text-white absolute left-1 top-2 rounded-full p-2 px-4" onClick={handleClickTrash}/>}
                    <InputSearch search={search} setSearch={setSearch}/>
                    <FontAwesomeIcon onClick={handleSubmit} icon={faShare} className="w-8 h-8 text-white absolute right-2 top-1 rounded-full p-2 px-4"/>
                </form>
            </footer>
        </div>
    )
}