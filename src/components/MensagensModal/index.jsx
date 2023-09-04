import { useState } from 'react'
import './style.css'
import api from '../../api'

export default function MensagensModal(){
    const [name, setName] = useState("")
    const [msg, setMsg] = useState("")

    async function SubmitMsg(e){
        e.preventDefault()

        const object = {name,msg}

        await api.post("/msg",object)
        
    }

    return (
        <div>
            <form onSubmit={SubmitMsg} className='messages-modal'>
                <h1>Deixe sua mensagem para o casal </h1>
                <input onChange={(e) => setName(e.target.value)} placeholder='Seu nome' />
                <textarea onChange={(e) => setMsg(e.target.value)} placeholder='Sua mensagem' />
                <button type='submit'>Enviar</button>
            </form>
        </div>
    )
}