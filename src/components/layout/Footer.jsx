import { Scale } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src="src/assets/logo1.png"
              alt="Logo FitBalance"
              className="h-10 w-10 rounded-full border border-green-600"
            />
            <span className="ml-2 text-lg font-bold text-green-600">FitBalance</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-600 hover:text-green-600">
              Acerca de
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Contacto
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Términos
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              Privacidad
            </a>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} FitBalance. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
