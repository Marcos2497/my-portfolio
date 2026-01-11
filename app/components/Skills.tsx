"use client";

const skillCategories = [
  {
    category: "Backend & APIs",
    skills: [
      { name: "Python", imageUrl: "https://images.icon-icons.com/2415/PNG/512/python_original_logo_icon_146381.png" },
      { name: "PHP", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" },
      { name: "Node.js", imageUrl: "https://www.monoforms.com/sites/default/files/node.png" },
      {name: "Java", imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" }
    ],
    color: "blue"
  },
  {
    category: "Frontend & UI",
    skills: [
      { name: "Livewire", imageUrl: "https://avatars.githubusercontent.com/u/51960834?s=400&v=4" },
      { name: "JavaScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      {name: "TypeScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },  
      { name: "Tailwind CSS", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" },
      { name: "HTML5/CSS3", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" }
    ],
    color: "emerald"
  },
  {
    category: "Frameworks Principales",
    skills: [
      { name: "Laravel", imageUrl: "https://laravel.com/img/logomark.min.svg" },
      { name: "Spring Boot", imageUrl: "https://spring.io/img/spring.svg" }
    ],
    color: "purple"
  },
  {
    category: "Bases de Datos",
    skills: [
      { name: "MySQL", imageUrl: "https://www.mysql.com/common/logos/logo-mysql-170x115.png" },
      { name: "PostgreSQL", imageUrl: "https://www.postgresql.org/media/img/about/press/elephant.png" },
      { name: "Firebase", imageUrl: "https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png" }
    ],
    color: "amber"
  },
  {
    category: "DevOps & Testing",
    skills: [
      { name: "GitHub", imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
      { name: "Docker", imageUrl: "https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png" },
      { name: "Cypress", imageUrl: "https://www.cypress.io/images/layouts/cypress-logo.svg" },
      { name: "Vercel", imageUrl: "https://assets.vercel.com/image/upload/q_auto/front/favicon/vercel/57x57.png" }
    ],
    color: "indigo"
  },
  {
    category: "Metodologías & Ingeniería",
    skills: [
      { name: "SCRUM", imageUrl: "https://user-images.githubusercontent.com/68760595/164306020-120e8664-cb5b-459a-80a3-99e13b057b52.png" },
      { name: "Unified Process", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/UML_logo.svg/1200px-UML_logo.svg.png" },
      { name: "Arquitectura", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Socrates-color.svg/1200px-Socrates-color.svg.png" },
      { name: "Testing", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Unit_testing_icon.svg/1200px-Unit_testing_icon.svg.png" },
      { name: "Código Limpio", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png" },
      { name: "Documentación", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Markdown-mark.svg/1200px-Markdown-mark.svg.png" }
    ],
    color: "red"
  }
];


import { useState } from 'react';

export default function Skills() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const getColorClasses = (color: string, type = "bg") => {
    const base: Record<string, string> = {
      blue: "border-blue-200",
      emerald: "border-emerald-200", 
      purple: "border-purple-200",
      amber: "border-amber-200",
      indigo: "border-indigo-200",
      red: "border-red-200"
    };
    
    if (type === "text") {
      return {
        blue: "text-blue-700",
        emerald: "text-emerald-700",
        purple: "text-purple-700",
        amber: "text-amber-700",
        indigo: "text-indigo-700",
        red: "text-red-700"
      }[color] || "text-gray-700";
    }
    
    return base[color] || "border-gray-200";
  }

  const handleImageError = (skillName: string) => {
    setImageErrors(prev => ({ ...prev, [skillName]: true }));
  };

  return (
    <section id="skills" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Habilidades Técnicas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tecnologías y herramientas que domino
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <div key={cat.category} className="bg-white rounded-lg p-6 border border-gray-100">
              {/* Header simple */}
              <h3 className={`text-lg font-bold mb-6 ${getColorClasses(cat.color, "text")}`}>
                {cat.category}
              </h3>
              
              {/* Grid de tecnologías - diseño minimalista */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((skill) => {
                  const hasError = imageErrors[skill.name];
                  return (
                    <div 
                      key={skill.name} 
                      className="flex flex-col items-center justify-center p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                    >
                      {/* Contenedor para imagen - con fallback */}
                      <div className="w-12 h-12 mb-3 flex items-center justify-center">
                        {skill.imageUrl && !hasError ? (
                          <img 
                            src={skill.imageUrl} 
                            alt={skill.name}
                            className="w-10 h-10 object-contain"
                            onError={() => handleImageError(skill.name)}
                            loading="lazy"
                          />
                        ) : (
                          <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded text-sm font-medium text-gray-500">
                            {skill.name.substring(0, 2)}
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-medium text-gray-900 text-center">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Tecnologías adicionales - diseño minimalista */}
        <div className="mt-12 bg-gray-50 rounded-lg p-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Herramientas Adicionales
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-4">
            {[
              { name: "Open Route", short: "ORS", imageUrl: "" },
              { name: "VMware", short: "VM", imageUrl: "" },
              { name: "MQTT", short: "MQTT", imageUrl: "" },
              { name: "Postman", short: "PM", imageUrl: "" },
              { name: "Figma", short: "FG", imageUrl: "" },
              { name: "CI/CD", short: "CD", imageUrl: "" },
              { name: "Office", short: "OFF", imageUrl: "" },
              { name: "GitHub", short: "GH", imageUrl: "" }
            ].map((tech) => {
              const hasError = imageErrors[tech.name];
              return (
                <div 
                  key={tech.name}
                  className="bg-white p-4 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors flex flex-col items-center justify-center"
                >
                  {/* Contenedor para imagen */}
                  <div className="w-10 h-10 mb-2 flex items-center justify-center">
                    {tech.imageUrl && !hasError ? (
                      <img 
                        src={tech.imageUrl} 
                        alt={tech.name}
                        className="w-8 h-8 object-contain"
                        onError={() => handleImageError(tech.name)}
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded text-xs font-medium text-gray-500">
                        {tech.short}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-gray-900">{tech.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Nota aplicada */}
          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600 text-center">
              Experiencia aplicada en proyectos reales de logística, monitoreo energético y sistemas empresariales
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}