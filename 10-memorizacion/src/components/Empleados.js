import React, { useEffect, useState } from 'react'

export const Empleados = React.memo(() => {

    const [empleados, setEmpleados] = useState([])

    useEffect(() => {
        conseguirEmpleados()
    }, [])

    const conseguirEmpleados = async() => {
        const url = "https://reqres.in/api/users?page=1"
        const peticion = await fetch(url)
        //const empleados = await peticion.json(url)
        const {data: empleados} = await peticion.json()

        setEmpleados(empleados)

        console.log(empleados)
    }

    console.log("Se ha vuelto a renderizar Empleados !!")

    return (
        <div>
            <ul className="empleados">
                {empleados.map(empleado => {
                    return <li key={empleado.id}>{empleado.first_name + " " + empleado.last_name} </li>
                })}
            </ul>
        </div>
    )
}
)

