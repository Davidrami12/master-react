import { useState } from "react";

export const useForm = ( objetoInicial = {}) => {
    
    const [formulario, setFormulario] = useState(objetoInicial)

    const serializarFormulario = (formulario) => {

        const formData = new FormData(formulario)

        const objetoCompleto = {}

        for(let [name, value] of formData){
            objetoCompleto[name] = value;
        }

        return objetoCompleto

    }

    const enviado = (e) => {
        e.preventDefault()
        
        /*let curso = {
            titulo: e.target.titulo.value,
            anio: e.target.anio.value,
            descripcion: e.target.descripcion.value,
            autor: e.target.autor.value,
            email: e.target.email.value
        }*/

        let curso = serializarFormulario(e.target)

        setFormulario(curso)

    }

    const cambiado = e => {
        const { name, value } = e.target

        setFormulario({
            //expandir los datos del formulario
            ...formulario,
            [name]: value
        })
    }


    return {
        formulario,
        enviado,
        cambiado
    }
}