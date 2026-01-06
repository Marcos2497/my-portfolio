const projects = [
  {
    title: "Sistema de Logística Alimentos",
    description: "Sistema completo para gestión de transporte de alimentos balanceados para empresa real.",
    stack: ["Laravel", "Livewire", "MySQL", "Tailwind"],
    highlight: true
  },
  {
    title: "Monitoreo IoT Energético",
    description: "Sistema IoT para monitoreo de consumo energético con Python y MQTT.",
    stack: ["Python", "MQTT", "Firebase", "HTML/CSS"],
    highlight: true
  },
  {
    title: "E-commerce Spring Boot",
    description: "Plataforma de comercio electrónico completo con Java Spring Boot.",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Docker"],
    highlight: false
  }
]

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Proyectos Destacados</h2>
        
        <div className="space-y-8">
          {projects.map((project, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl p-6 border border-gray-200 hover:border-blue-300 transition"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                {project.highlight && (
                  <span className="inline-block mt-2 md:mt-0 bg-yellow-100 text-yellow-800 text-xs px-3 py-1 rounded-full">
                    Proyecto Académico Real
                  </span>
                )}
              </div>
              
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span 
                    key={tech} 
                    className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}