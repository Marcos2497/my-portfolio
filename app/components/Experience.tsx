const experiences = [
  {
    period: "2023 - Presente",
    role: "Técnico Informático",
    company: "Data Center Universitario",
    description: "Administración de servidores, virtualización VMware, mantenimiento de infraestructura de red y soporte técnico avanzado.",
    highlights: ["Virtualización", "Servidores", "Redes", "Soporte"]
  },
  {
    period: "2022 - 2023",
    role: "Desarrollador de Proyecto Final",
    company: "Carrera de Analista en Sistemas",
    description: "Desarrollo completo de sistema de logística para empresa real como proyecto de graduación.",
    highlights: ["Laravel", "MySQL", "Livewire", "Sistema Completo"]
  }
]

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Experiencia</h2>
        
        <div className="relative">
          {/* Línea vertical */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative mb-8">
              <div className={`flex flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2">
                  <div className={`p-6 bg-white rounded-xl shadow-sm ${idx % 2 === 0 ? 'md:mr-8 md:text-right' : 'md:ml-8'}`}>
                    <span className="inline-block text-sm font-semibold text-blue-600 mb-2">
                      {exp.period}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-gray-700 font-medium mb-2">{exp.company}</p>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                    
                    <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? 'md:justify-end' : ''}`}>
                      {exp.highlights.map((h) => (
                        <span key={h} className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Punto en la línea */}
                <div className="absolute left-4 top-6 w-3 h-3 bg-blue-600 rounded-full transform md:left-1/2 md:-translate-x-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}