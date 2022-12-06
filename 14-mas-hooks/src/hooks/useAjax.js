import { useState, useEffect } from "react";

export const useAjax = (url) => {

    const [estado, setEstado] = useState({
        datos: null
    })

    const getData = async(url) => {
        const peticion = await fetch(url)
        const {data} = await peticion.json()

        setEstado({
            datos: data
        })
    }

    return {
        datos: estado.datos
    }
}