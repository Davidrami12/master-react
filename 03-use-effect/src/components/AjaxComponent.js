import React, {
    useEffect,
    useState
} from 'react'

export const AjaxComponent = () => {
    //haremos una promesa

    const [usuarios, setUsuarios] = useState([]);
    const [cargando, setCargando] = useState(true); //vamos a crear un loading, por defecto va a estar cargando con true
    const [errores, setErrores] = useState(""); //estado de errores

    // esta información viene de forma genérica / básica pero se puede hacer de un API REST
    const getUsuariosEstaticos = () => {
        setUsuarios([{
                "id": 7,
                "email": "michael.lawson@reqres.in",
                "first_name": "Michael",
                "last_name": "Lawson",
                "avatar": "https://reqres.in/img/faces/7-image.jpg"
            },
            {
                "id": 8,
                "email": "lindsay.ferguson@reqres.in",
                "first_name": "Lindsay",
                "last_name": "Ferguson",
                "avatar": "https://reqres.in/img/faces/8-image.jpg"
            },
            {
                "id": 9,
                "email": "tobias.funke@reqres.in",
                "first_name": "Tobias",
                "last_name": "Funke",
                "avatar": "https://reqres.in/img/faces/9-image.jpg"
            }
        ])
    }

    const getUsuariosAjaxPromesa = () => {
        fetch("https://reqres.in/api/users?page=1") //nos devuelve una promesa
        .then(respuesta => respuesta.json()) //capturamos la información que nos llega con .then() y convertimos la respuesta a json
        .then( //definimos 2 funciones de callback
            resultado_final => {
                setUsuarios(resultado_final.data)
                console.log(usuarios)
            },
            error =>{
                console.log(error)
            }
        )
    }

    const getUsuariosAjaxAsyncAwait = () => { 
        //se declara la función asíncrona
        setTimeout( async() => {
            try{
                const peticion = await fetch("https://reqres.in/api/users?page=1") 
                //esto va a esperarse al resultado que me devuelva el fetch que hará la petición a la url

                const {data} = await peticion.json(); //desestructuracion de objetos

                setUsuarios(data)
                setCargando(false) //lo ponemos a false porque ya no estamos cargando los datos, ya los tenemos
            }catch(error){
                console.log(error)
                setErrores(error.message)
            }
            
        }, 2000); 
    }

    useEffect(() => {
        getUsuariosAjaxAsyncAwait();
        // getUsuariosAjaxPromesa();
        // getUsuariosEstaticos();
    }, []) //le pasamos un array vacío para que pase una vez

    if(errores !== ""){
        //cuando pasa algún error
        return(
            <div className='errores'>
                {errores}
            </div>
        )
    }else if(cargando == true){
        //cuando está todo cargando este return
        return(
            <div className='cargando'>
                Cargando Datos...
            </div>
        )
    }else if(cargando == false && errores === ""){
        //cuando todo ha ido bien este return
        return ( 
            <div>
            <h2> Listado de usuarios via Ajax </h2> 
                <ol className='usuarios'>
                    {
                        usuarios.map(usuario => {
                            return (
                                <li key={usuario.id}>
                                    <img src={usuario.avatar} width="20px"></img>
                                    &nbsp;
                                    {usuario.first_name} 
                                    {usuario.last_name}
                                </li>
                            )
                        })
                    }
                </ol> 
            </div>
        )
    }

    

    
}