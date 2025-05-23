export default function CtaSection() {
  return (
    <section className="bg-green-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Comienza a transformar tu práctica nutricional hoy</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Únete a cientos de nutriólogos que ya están optimizando su trabajo y mejorando los resultados de sus pacientes
          con FitBalance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 py-3 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 transition-colors">
            Prueba gratuita por 14 días
          </button>
          <button className="px-6 py-3 border border-green-600 text-green-600 rounded-md font-medium hover:bg-green-50 transition-colors">
            Solicitar demostración
          </button>
        </div>
      </div>
    </section>
  )
}
