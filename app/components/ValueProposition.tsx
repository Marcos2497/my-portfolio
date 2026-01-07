export default function ValueProposition() {
  const values = [
    {
      title: "Desarrollo de Soluciones Empresariales",
      description: "Creo sistemas que resuelven problemas reales de negocio, desde logística hasta monitoreo energético.",
      icon: "🏢"
    },
    {
      title: "Ciclo Completo del Software",
      description: "Experiencia en todas las fases: requisitos, diseño, desarrollo, testing e implementación.",
      icon: "🔄"
    },
    {
      title: "Metodologías Ágiles",
      description: "Trabajo con SCRUM, UP y metodologías que aseguran entregas de calidad y en tiempo.",
      icon: "📊"
    },
    {
      title: "Código Limpio y Mantenible",
      description: "Priorizo arquitecturas escalables y código bien documentado para facilitar el mantenimiento.",
      icon: "✨"
    }
  ]

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Cómo trabajo?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mi enfoque combina formación en Ingeniería de Software con experiencia en proyectos reales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:-translate-y-1">
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight de metodologías */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Experiencia con Metodologías de Desarrollo
              </h3>
              <p className="text-gray-600">
                He trabajado tanto en entornos estructurados (Cascada, UP) como ágiles (SCRUM, XP), 
                adaptándome a las necesidades del proyecto y del equipo.
              </p>
            </div>
            <div className="flex gap-3">
              <span className="px-4 py-2 bg-white rounded-full font-medium text-blue-700">
                SCRUM
              </span>
              <span className="px-4 py-2 bg-white rounded-full font-medium text-emerald-700">
                Unified Process
              </span>
              <span className="px-4 py-2 bg-white rounded-full font-medium text-amber-700">
                XP
              </span>
              <span className="px-4 py-2 bg-white rounded-full font-medium text-purple-700">
                Cascada
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}