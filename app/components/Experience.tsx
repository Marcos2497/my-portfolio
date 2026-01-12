"use client";
const experiences = [
  {
    period: "2022 - Presente",
    role: "Técnico Informático",
    company: "Data Center Universitario",
    description: "Administración de redes LAN, mantenimiento de infraestructura de red y soporte técnico en laboratorios.",
    highlights: ["Virtualización", "Servidores", "Redes", "Soporte Técnico", "Linux", "Proxmox", "MikroTik", ],
    type: "Laboral"
  },
  {
    period: "2024 - 2025",
    role: "Desarrollador de Proyecto Final",
    company: "Carrera de Analista en Sistemas de Computación",
    description: "Desarrollo completo de un sistema de gestión de logística de transporte de alimentos balanceados para una cooperativa frigorifica como proyecto de graduación.",
    highlights: ["Laravel","PHP", "MySQL", "Livewire", "Blade", "Tailwind", "HTML/CSS", "API(OpenRouteService)", "Docker", "GitHub"],
    type: "Académico"
  },
    {
    period: "2025",
    role: "Auditoría Informática",
    company: "UNaM - FCEQyN, Apóstoles",
    description: "Auditoría práctica en dos laboratorios universitarios, evaluación de seguridad informática, infraestructura y cumplimiento de normativas.",
    highlights: ["Seguridad", "Normativas", "Infraestructura", "Documentación", "COBIT 5.0", "ISO 27001", "ITIL", "ISO/IEC", ],
    type: "Práctica Profesional"
  },
]

export default function Experience() {
  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Laboral':
        return {
          bg: 'bg-gradient-to-br from-blue-50 to-blue-50/50',
          border: 'border-blue-200',
          text: 'text-blue-700',
          badge: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white',
          iconBg: 'bg-blue-500'
        }
      case 'Práctica Profesional':
        return {
          bg: 'bg-gradient-to-br from-purple-50 to-purple-50/50',
          border: 'border-purple-200',
          text: 'text-purple-700',
          badge: 'bg-gradient-to-r from-purple-500 to-purple-600 text-white',
          iconBg: 'bg-purple-500'
        }
      case 'Académico':
        return {
          bg: 'bg-gradient-to-br from-emerald-50 to-emerald-50/50',
          border: 'border-emerald-200',
          text: 'text-emerald-700',
          badge: 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white',
          iconBg: 'bg-emerald-500'
        }
      default:
        return {
          bg: 'bg-gradient-to-br from-gray-50 to-gray-50/50',
          border: 'border-gray-200',
          text: 'text-gray-700',
          badge: 'bg-gradient-to-r from-gray-500 to-gray-600 text-white',
          iconBg: 'bg-gray-500'
        }
    }
  }

  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'Laboral':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )
      case 'Práctica Profesional':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        )
      case 'Académico':
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" opacity="0.5" />
          </svg>
        )
      default:
        return (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        )
    }
  }

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Experiencia Profesional
          </h2>
        </div>
        
        {/* Timeline moderna */}
        <div className="relative">
          {/* Línea vertical decorativa */}
          <div className="absolute left-0 md:left-1/2 h-full w-px bg-gradient-to-b from-blue-300 via-purple-300 to-emerald-300 transform md:-translate-x-1/2"></div>
          
          {experiences.map((exp, idx) => {
            const colors = getTypeColor(exp.type);
            const isEven = idx % 2 === 0;
            
            return (
              <div key={idx} className={`relative mb-10 ${isEven ? 'md:pr-1/2 md:pl-0' : 'md:pl-1/2 md:pr-0'}`}>
                {/* Punto en la timeline */}
                <div className={`
                  absolute top-6 md:top-8 z-20
                  ${isEven ? 'left-0 md:left-1/2 transform md:translate-x-4' : 'left-0 md:left-1/2 transform md:-translate-x-6'}
                `}>
                  <div className={`
                    w-12 h-12 rounded-full flex items-center justify-center
                    ${colors.iconBg} text-white
                    shadow-lg border-4 border-white
                    transition-transform duration-300 group-hover:scale-110
                  `}>
                    {getTypeIcon(exp.type)}
                  </div>
                </div>
                
                {/* Tarjeta de experiencia */}
                <div className={`
                  relative ml-14 md:ml-0
                  ${isEven ? 'md:pr-12' : 'md:pl-12'}
                `}>
                  <div className={`
                    group bg-white rounded-2xl p-6
                    border border-gray-200
                    shadow-sm hover:shadow-xl
                    transition-all duration-300
                    hover:-translate-y-1
                    ${colors.bg}
                  `}>
                    {/* Cinta de tiempo */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                          {getTypeIcon(exp.type)}
                        </div>
                        <div>
                          <span className="text-sm font-semibold text-gray-700">
                            {exp.period}
                          </span>
                          <div className={`inline-block ml-3 px-3 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                            {exp.type}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Encabezado */}
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{exp.role}</h3>
                      <p className="text-gray-700 font-medium text-sm">{exp.company}</p>
                    </div>
                    
                    {/* Descripción */}
                    <p className="text-gray-600 mb-5 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    {/* Tecnologías/Habilidades */}
                    <div className="mb-5">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                        Tecnologías & Habilidades
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.highlights.map((h) => (
                          <span 
                            key={h} 
                            className="text-xs px-3 py-1.5 bg-white text-gray-700 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all hover:scale-105"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Pie de sección */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 text-sm text-gray-500">
              <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
              <span>Experiencia continua en el desarrollo de soluciones tecnológicas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}