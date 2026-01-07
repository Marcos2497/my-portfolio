const projects = [
  {
    title: "Sistema de Logística Alimentos",
    description: "Sistema completo para gestión de transporte de alimentos balanceados para empresa real. Implementado con Laravel y Livewire.",
    stack: ["Laravel", "Livewire", "MySQL", "Tailwind", "Blade"],
    highlight: "Proyecto Real",
    icon: "🚚",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Monitoreo IoT Energético",
    description: "Sistema IoT para monitoreo de consumo energético con Python, MQTT y valores simulados de sensores.",
    stack: ["Python", "MQTT", "Firebase", "HTML/CSS"],
    highlight: "Proyecto Académico",
    icon: "⚡",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    title: "E-commerce Spring Boot",
    description: "Plataforma de comercio electrónico completo con Java Spring Boot y PostgreSQL.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    highlight: "Proyecto Académico",
    icon: "🛒",
    color: "from-amber-500 to-amber-600"
  },
  {
    title: "Sistema de Gimnasio",
    description: "Aplicación de gestión para gimnasio desarrollada con JavaFX y PostgreSQL.",
    stack: ["Java", "JavaFX", "PostgreSQL", "OOP"],
    highlight: "Proyecto Académico",
    icon: "💪",
    color: "from-purple-500 to-purple-600"
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Proyectos Destacados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Casos de estudio reales que demuestran mis capacidades técnicas
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:-translate-y-2"
            >
              {/* Header con gradiente */}
              <div className={`bg-gradient-to-r ${project.color} p-6`}>
                <div className="flex items-center justify-between">
                  <div className="text-3xl">{project.icon}</div>
                  <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {project.highlight}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{project.title}</h3>
              </div>
              
              {/* Contenido */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 mb-2">Tecnologías utilizadas:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span 
                        key={tech} 
                        className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Nota adicional según el proyecto */}
                {project.title.includes("Logística") && (
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r">
                    <p className="text-sm text-gray-700">
                      <span className="font-semibold">Proyecto de graduación:</span> Implementado para empresa real como trabajo final de carrera.
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}