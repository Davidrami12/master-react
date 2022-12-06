import { useState } from 'react'

export const useMayus = (texto) => {

    const [miTexto, setMitexto] = useState(texto)
    
    const mayusculas = () => {
        setMitexto(texto.toUpperCase())
        console.log(texto)
    }

    const minusculas = () => {
        setMitexto(texto.toLowerCase())
    }

    const concatenar = (añadido) => {
        setMitexto(texto+añadido)
    }
    
    return{
        eatado: miTexto,
        mayusculas,
        minusculas,
        concatenar
    }
}