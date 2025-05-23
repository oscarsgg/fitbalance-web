"use client"

import { Scale } from "lucide-react"

export default function Navbar({ onLoginClick }) {
  return (
    <nav className="bg-white border-b border-gray-100 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <Scale className="h-8 w-8 text-green-600" />
        <span className="ml-2 text-xl font-bold text-green-600">FitBalance</span>
      </div>
      <div className="flex items-center gap-4">
        <button onClick={onLoginClick} className="px-4 py-2 text-green-600 font-medium hover:text-green-700">
          Iniciar Sesión
        </button>
        <button className="px-4 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
          Registrarse
        </button>
      </div>
    </nav>
  )
}
