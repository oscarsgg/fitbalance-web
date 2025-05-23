import { Users, Calendar, LineChart, Scale, Salad, Clock } from "lucide-react"
import FeatureCard from "../ui/FeatureCard"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-green-600" />,
      title: "Gestión de Pacientes",
      description:
        "Administra perfiles completos de pacientes, historial clínico y seguimiento de progreso en un solo lugar.",
    },
    {
      icon: <Salad className="h-10 w-10 text-green-600" />,
      title: "Planes de Alimentación",
      description:
        "Crea planes personalizados con arrastrar y soltar, ajustando macronutrientes y calorías automáticamente.",
    },
    {
      icon: <Scale className="h-10 w-10 text-green-600" />,
      title: "Conexión IoT",
      description: "Integración con básculas inteligentes para medir alimentos y calcular calorías con precisión.",
    },
    {
      icon: <LineChart className="h-10 w-10 text-green-600" />,
      title: "Análisis y Estadísticas",
      description: "Visualiza el progreso de tus pacientes con gráficos detallados y reportes personalizables.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-green-600" />,
      title: "Agenda Integrada",
      description: "Gestiona citas, envía recordatorios automáticos y reduce las inasistencias.",
    },
    {
      icon: <Clock className="h-10 w-10 text-green-600" />,
      title: "Ahorro de Tiempo",
      description: "Automatiza tareas repetitivas y dedica más tiempo a lo que realmente importa: tus pacientes.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Todo lo que necesitas para tu práctica nutricional</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FitBalance reúne todas las herramientas que un nutriólogo moderno necesita en una plataforma intuitiva y
            potente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} icon={feature.icon} title={feature.title} description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  )
}
