import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

    const {formulario, enviado, cambiado} = useForm({})

  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>
        <p>Curso guardado: {formulario.titulo}</p>
        <pre>{JSON.stringify(formulario)}</pre>

        <form onSubmit={enviado}>
            <input type="text" name="titulo" onChange={cambiado} placeholder='Titulo del curso'/>
            <br/>
            <input type="number" name="anio" onChange={cambiado} placeholder='Año de publicación'/>
            <br/>
            <textarea name="descripcion" onChange={cambiado} placeholder='Descripción'></textarea>
            <br/>
            <input type="text" name="autor" onChange={cambiado} placeholder='Autor'/>
            <br/>
            <input type="email" name="email" onChange={cambiado} placeholder='Correo de contacto'/>
            <br/><br/>
            <input type="submit" value="Enviar" />
        </form>
    </div>
  )
}
