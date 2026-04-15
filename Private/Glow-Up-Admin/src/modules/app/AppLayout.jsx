import { Outlet } from "react-router"
import { Navbar } from "./components/Navbar"


export const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f0f4f8]">
            {/* El Navbar se mantiene arriba */}
            <Navbar />
            
            {/* Contenedor principal: 
               Le damos un fondo que contraste con el blanco de la pestaña activa 
            */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>
        </div>
    )
}