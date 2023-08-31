import { useState } from "react"
import Image from "next/image"
export default function caju(){
    const contaExistente = {
        email: 'nempo@email.com',
        senha: 'nemco'
    }
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function verificar(){
        if(email == contaExistente.email) {
            if(senha == contaExistente.senha) {
                alert('logado')
            }
        }
    }

    return(
        <div className="flex flex-col w-full h-screen bg-yellow-500 items-center justify-center gap-4 px-4">
        <Image className="" width={100} height={100} src={'/caju.png'}/>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Digite seu email" className="rounded-md bg-gray-300"/> 
        <input value={senha} onChange={(e)=>setSenha(e.target.value)} type="password" placeholder="Digite Sua senha" className="rounded-md bg-gray-300"/>
        <button onClick={verificar} className="px-6 py-2 rounded-md font-bold bg-red-500">Entrar</button>
        
        </div>
    )
}