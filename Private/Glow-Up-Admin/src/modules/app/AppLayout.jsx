import { Outlet } from "react-router"
import { Navbar } from "./components/Navbar.jsx"


export const AppLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-[#f0f4f8]">
            <Navbar />
            <main className="flex-1 w-full">
                <Outlet />
            </main>
        </div>
    )
}