"use client";

import { useState } from 'react';

const projects = [
  {
    title: "Sistema de Logística Alimentos",
    description: "Sistema completo para gestión de transporte de alimentos balanceados para una Cooperativa Frigorifica.",
    stack: ["Laravel", "Livewire", "MySQL", "Tailwind", "Blade", "HTML/CSS", "Docker", "GitHub", "API(OpenRouteService)"],
    highlight: "Proyecto Real",
    color: "from-emerald-100 to-emerald-50",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-200",
    githubUrl: "https://github.com/Marcos2497/Proyecto-de-Software---LogiPack.git"
  },
  {
    title: "Monitoreo IoT Energético",
    description: "Sistema IoT para monitoreo de consumo energético con Python, MQTT y valores simulados de sensores.",
    stack: ["Python", "MQTT", "Firebase", "HTML/CSS", "JavaScript", "GitHub"],
    highlight: "Proyecto Académico",
    color: "from-purple-100 to-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    bg: "bg-purple-300",
    githubUrl: "https://github.com/tu-usuario/monitoreo-iot"
  },
{
  title: "E-commerce Spring Boot",
  description: "Versión inicial de plataforma de comercio electrónico desarrollada con Java Spring Boot, creada principalmente para aprender y explorar el framework.",
  stack: ["Java", "Spring Boot", "PostgreSQL", "GitHub"],
  highlight: "Proyecto de Aprendizaje",
  category: "Backend & APIs",
  color: "from-amber-100 to-amber-50",
  textColor: "text-amber-700",
  borderColor: "border-amber-200",
  githubUrl: "https://github.com/tu-usuario/ecommerce-spring"
},
  {
    title: "Sistema de Gimnasio",
    description: "Sistema de gestión de evolución fisica para un gimnasio. Permite registrar y monitorear el progreso de los clientes a lo largo del tiempo.",
    stack: ["Java", "JavaFX", "PostgreSQL", "OOP", "Docker", "SceneBuilder"],
    highlight: "Proyecto Académico",
    color: "from-blue-100 to-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    githubUrl: "https://github.com/Marcos2497/Gimnasio-LaFuerza---Integrador-POO-I"
  }
];

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  
  // Mostrar solo 2 proyectos inicialmente
  const visibleProjects = showAll ? projects : projects.slice(0, 2);
  
  return (
    <section id="proyectos" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Últimos Proyectos en los que he Trabajado
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Algunos de los proyectos en los que he trabajado que demuestran mis capacidades técnicas
          </p>
        </div>
        
        {/* Grid de proyectos - diseño más compacto */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {visibleProjects.map((project, idx) => (
            <div 
              key={idx} 
              className={`
                group bg-white rounded-xl overflow-hidden 
                border ${project.borderColor}
                shadow-sm hover:shadow-lg
                transition-all duration-300
                hover:-translate-y-1
              `}
            >
{/* Header con título a la izquierda y badges a la derecha */}
<div className={`p-5 bg-gray-50 ${project.color} border-x ${project.borderColor}`}>
  <div className="flex items-start justify-between mb-3">
    {/* Título principal a la izquierda */}
    <h3 className={`text-lg font-bold ${project.textColor} pr-4`}>
      {project.title}
    </h3>
    
    {/* Badges a la derecha - en columna para el de Logística */}
    <div className="flex flex-col items-end gap-2">
      {/* Badge principal (Proyecto Real/Académico) */}
      <span className={`text-xs font-semibold ${project.textColor} px-3 py-1 rounded-full bg-white/90 border ${project.borderColor}`}>
        {project.highlight}
      </span>
      
      {/* Badge adicional para Logística */}
      {project.title.includes("Logística") && (
        <span className="text-xs font-medium text-gray-700 bg-white/90 px-2.5 py-1 rounded-md border border-gray-300">
          🎓 Proyecto de graduación
        </span>
      )}
    </div>
  </div>
</div>
              
              {/* Contenido compacto */}
              <div className="p-5 bg-gray-100">
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tecnologías - diseño más compacto */}
                <div className="mb-4">
                  <h4 className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
                    Tecnologías utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2.5 py-1 bg-gray-50 text-gray-700 rounded-md border border-gray-200 hover:border-gray-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Espacio para enlace de GitHub */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-gray-500">Código disponible en</span>
                    </div>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        text-xs font-medium px-3 py-1.5 rounded-md
                        transition-all duration-200
                        flex items-center gap-1.5
                        ${project.textColor} 
                        bg-white border ${project.borderColor}
                        hover:bg-gray-50 hover:scale-105
                      `}
                    >
                      Ver en GitHub
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botón "Mostrar más / Mostrar menos" - diseño más elegante */}
        <div className="text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className={`
              px-6 py-2.5 rounded-lg font-medium transition-all duration-300
              flex items-center gap-2 mx-auto text-sm
              ${showAll 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300' 
                : 'bg-gradient-to-r from-blue-500/10 to-emerald-500/10 text-blue-700 hover:from-blue-500/20 hover:to-emerald-500/20 border border-blue-200'
              }
              hover:shadow-md hover:-translate-y-0.5
            `}
          >
            {showAll ? (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                </svg>
                Mostrar menos proyectos
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
                Mostrar más proyectos ({projects.length - 2})
              </>
            )}
          </button>
          
          {/* Contador discreto */}
          <p className="mt-3 text-xs text-gray-400">
            {showAll 
              ? `Mostrando ${projects.length} proyectos` 
              : `Mostrando 2 de ${projects.length} proyectos`
            }
          </p>
        </div>
      </div>
    </section>
  );
}