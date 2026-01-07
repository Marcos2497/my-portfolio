const skillCategories = [
  {
    category: "Backend & APIs",
    skills: [
      { name: "Laravel", level: 90 },
      { name: "Java/Spring Boot", level: 85 },
      { name: "Python", level: 80 },
      { name: "PHP", level: 90 },
      { name: "Node.js", level: 75 }
    ],
    icon: "⚙️"
  },
  {
    category: "Frontend & UI", 
    skills: [
      { name: "Next.js/React", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "Tailwind CSS", level: 90 },
      { name: "HTML5/CSS3", level: 95 }
    ],
    icon: "🎨"
  },
  {
    category: "Bases de Datos",
    skills: [
      { name: "MySQL", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "Firebase", level: 75 }
    ],
    icon: "🗄️"
  },
  {
    category: "DevOps & Testing",
    skills: [
      { name: "Docker", level: 70 },
      { name: "Git", level: 90 },
      { name: "Cypress", level: 75 },
      { name: "Vercel", level: 85 }
    ],
    icon: "🚀"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stack tecnológico completo para desarrollo Full Stack
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{cat.category}</h3>
              </div>
              
              <div className="space-y-4">
                {cat.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Nota adicional */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Además: Testing con Cypress, CI/CD básico, Virtualización VMware, MQTT para IoT
          </p>
        </div>
      </div>
    </section>
  )
}