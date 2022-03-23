import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { BusquedaWeather } from '../components/navegacion/BusquedaWeather'
import { HistorialWeather } from '../components/navegacion/HistorialWeather'

export const DashboardRoutes = () => {
  return (
    <>
        {/* Barra navegación */}
        <Navbar />

        <Routes>
            {/* Rutas barra navegacion */}
            <Route path="home"element={<BusquedaWeather />}/>
            <Route path="history"element={<HistorialWeather />}/>
            
            {/* Redirección de peticion no valida */}
            <Route path="*" element={<BusquedaWeather />} />
        </Routes>
    </>
  )
}
