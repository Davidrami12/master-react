import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom"
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Articulos } from "../components/pages/Articulos";
import { Busqueda } from "../components/pages/Busqueda";
import { Crear } from "../components/pages/Crear";
import { Inicio } from "../components/pages/Inicio";

export const Rutas = () => {
    return (
        <BrowserRouter>
        <Header/>
        <Nav/>
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Inicio/>} />
                    <Route path="/inicio" element={<Inicio/>} />
                    <Route path="/articulos" element={<Articulos/>} />
                    <Route path="/crear-articulos" element={<Crear/>} />
                    <Route path="/buscar/:busqueda" element={<Busqueda/>} />

                    <Route path="*" element={
                        <div className="jumbo">
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>

            </section>

            <Sidebar/>

            <Footer/>

        </BrowserRouter>
    )
}