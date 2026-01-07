const experiences = [
  {
    period: "2023 - Presente",
    role: "Técnico Informático",
    company: "Data Center Universitario",
    description: "Administración de servidores, virtualización VMware, mantenimiento de infraestructura de red y soporte técnico avanzado.",
    highlights: ["Virtualización", "Servidores", "Redes", "Soporte Técnico"],
    type: "Laboral"
  },
  {
    period: "2022 - 2023",
    role: "Desarrollador de Proyecto Final",
    company: "Carrera de Analista en Sistemas",
    description: "Desarrollo completo de sistema de logística para empresa real como proyecto de graduación. Stack: Laravel, MySQL, Livewire.",
    highlights: ["Laravel", "MySQL", "Livewire", "Sistema Completo"],
    type: "Académico"
  }
]

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinación de experiencia laboral y proyectos académicos relevantes
          </p>
        </div>
        
        <div className="relative">
          {/* Línea central */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-emerald-300"></div>
          
          {experiences.map((exp, idx) => (
            <div key={idx} className={`relative mb-12 ${idx % 2 === 0 ? 'pr-1/2 pl-4' : 'pl-1/2 pr-4'}`}>
              {/* Punto en la línea */}
              <div className={`absolute top-6 w-6 h-6 rounded-full border-4 border-white shadow-lg z-10
                ${exp.type === 'Laboral' ? 'bg-blue-500' : 'bg-emerald-500'}
                ${idx % 2 === 0 ? 'right-0 transform translate-x-3' : 'left-0 transform -translate-x-3'}`}>
              </div>
              
              {/* Tarjeta de experiencia */}
              <div className={`bg-white rounded-xl p-6 shadow-lg border border-gray-200
                ${idx % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                
                {/* Badge de tipo */}
                <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3
                  ${exp.type === 'Laboral' ? 'bg-blue-100 text-blue-800' : 'bg-emerald-100 text-emerald-800'}`}>
                  {exp.type}
                </div>
                
                <div className="mb-4">
                  <span className="text-sm font-semibold text-gray-500">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mt-1">{exp.role}</h3>
                  <p className="text-gray-700 font-medium">{exp.company}</p>
                </div>
                
                <p className="text-gray-600 mb-4">{exp.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Habilidades aplicadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h) => (
                      <span key={h} className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}