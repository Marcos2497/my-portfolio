const skillCategories = [
  {
    category: "Backend",
    skills: ["Laravel", "Java/Spring Boot", "Python", "PHP", "Node.js"],
    color: "bg-blue-100 text-blue-800"
  },
  {
    category: "Frontend", 
    skills: ["Next.js/React", "JavaScript", "Tailwind CSS", "HTML5"],
    color: "bg-green-100 text-green-800"
  },
  {
    category: "Bases de Datos",
    skills: ["MySQL", "PostgreSQL", "Firebase"],
    color: "bg-purple-100 text-purple-800"
  },
  {
    category: "DevOps & Tools",
    skills: ["Docker", "Git", "Vercel", "Cypress"],
    color: "bg-orange-100 text-orange-800"
  }
]

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12">Habilidades Técnicas</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">{cat.category}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span 
                    key={skill} 
                    className={`px-3 py-1 rounded-full text-sm font-medium ${cat.color}`}
                  >
                    {skill}
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