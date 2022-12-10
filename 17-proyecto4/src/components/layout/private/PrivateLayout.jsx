import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Sidebar } from './Sidebar'

export const PrivateLayout = () => {
  return (
    <>
        {/*LAYOUT*/}

        {/*CABECERA*/}
        <Header/>

        {/*CONTENIDO PRINCIPAL*/}
        <section className="layout__content">
            <Outlet/>
        </section>

        {/*BARRA LATERAL*/}
        <Sidebar/>
    </>
  )
}
