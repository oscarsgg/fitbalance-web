import { CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            El CRM nutricional que <span className="text-green-600">revoluciona</span> tu consulta
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            FitBalance te ayuda a gestionar pacientes, crear planes de alimentación personalizados y conectar con
            básculas IoT para un seguimiento preciso.
          </p>

          <div className="space-y-3 mb-8">
            {[
              "Gestión integral de pacientes",
              "Planes de alimentación personalizados",
              "Conexión con básculas IoT",
              "Cálculo automático de calorías",
            ].map((feature, index) => (
              <div key={index} className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
              Comenzar ahora
            </button>
            <button className="px-6 py-3 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-50 transition-colors">
              Ver demostración
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-100 rounded-full z-0"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-50 rounded-full z-0"></div>
            <img
              src="src\assets\nutriologo.jpg?height=500&width=600"
              alt="FitBalance Dashboard"
              className="rounded-lg shadow-xl relative z-10 border border-gray-200"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
