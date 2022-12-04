import React, {useState} from 'react'

export const FormularioComponent = () => {

    const [usuario, setUsuario] = useState({}) //creamos un valor vacío {} para luego introducir los datos del objeto

    const conseguirDatosFormulario = e => { //va a recibir un evento e no parámetros ()
        e.preventDefault();
        let datos = e.target; //cogemos los datos del target
        console.log(datos.nombre.value)

        let usuario = { //creamos el objeto json
            nombre: datos.nombre.value,
            apellido: datos.apellido.value,
            genero: datos.genero.value,
            bio: datos.bio.value,
            enviar: datos.enviar.value
        };

        console.log(usuario)

        setUsuario(usuario)
    }

    const cambiarDatos = e => {
        let name_del_input = e.target.name
        let usuario_para_modificar = usuario
        
        //usuario_para_modificar[name_del_input] = e.target.value

        setUsuario(estado_previo => { //capturamos el estado previo
            return{
                ...estado_previo, // todas las propiedades que había anteriormente las mantenemos con ...
                [name_del_input]: e.target.value
            }
        })
    }


  return (
    <div>
        <h1>Formularios con React</h1>

        { usuario.bio && usuario.bio.length >= 1 && 
            (
            <div className='info_usuario'>
                {usuario.nombre} {usuario.apellido} es un {usuario.genero} y su biografía es esta: <p>{usuario.bio}</p>
            </div>
            )
        }        
        
    
        <form onSubmit={conseguirDatosFormulario}>
            <input type="text" name="nombre" onChange={cambiarDatos} placeholder='Nombre'/>
            <input type="text" name="apellido" onChange={cambiarDatos} placeholder='Apellido'/>
            <select name="genero" onChange={cambiarDatos}>
                <option value="hombre">Hombre</option>
                <option value="mujer">Mujer</option>
            </select>
            <textarea name="bio" onChange={cambiarDatos} placeholder='Biografía'></textarea>

            <input type="submit" name="enviar" value="Enviar"/>
        </form>
    </div>
  )
}
