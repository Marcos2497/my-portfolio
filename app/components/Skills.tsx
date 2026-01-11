"use client";

import { useState } from 'react';

const skillCategories = [
  {
    category: "Backend & APIs",
    skills: [
      { name: "Python", imageUrl: "https://images.icon-icons.com/2415/PNG/512/python_original_logo_icon_146381.png" },
      { name: "PHP", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png" },
      { name: "Node.js", imageUrl: "https://www.monoforms.com/sites/default/files/node.png" },
      { name: "Java", imageUrl: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg" }
    ],
    color: "blue"
  },
  {
    category: "Frontend & UI",
    skills: [
      { name: "Livewire", imageUrl: "https://avatars.githubusercontent.com/u/51960834?s=400&v=4" },
      { name: "JavaScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" },
      { name: "TypeScript", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" },  
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
    
  }
];

export default function Skills() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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

    if (type === "gradient") {
      return {
        blue: "from-blue-50 to-blue-100",
        emerald: "from-emerald-50 to-emerald-100", 
        purple: "from-purple-50 to-purple-100",
        amber: "from-amber-50 to-amber-100",
        indigo: "from-indigo-50 to-indigo-100",
        red: "from-red-50 to-red-100"
      }[color] || "from-gray-50 to-gray-100";
    }
    
    if (type === "ring") {
      return {
        blue: "ring-blue-200",
        emerald: "ring-emerald-200", 
        purple: "ring-purple-200",
        amber: "ring-amber-200",
        indigo: "ring-indigo-200",
        red: "ring-red-200"
      }[color] || "ring-gray-200";
    }
    
    if (type === "shadow") {
      return {
        blue: "shadow-blue-200/30",
        emerald: "shadow-emerald-200/30", 
        purple: "shadow-purple-200/30",
        amber: "shadow-amber-200/30",
        indigo: "shadow-indigo-200/30",
        red: "shadow-red-200/30"
      }[color] || "shadow-gray-200/30";
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
            <div key={cat.category} className="bg-white rounded-lg p-6 border border-gray-100 shadow-sm">
              {/* Header simple */}
              <h3 className={`text-lg font-bold mb-6 ${getColorClasses(cat.color, "text")}`}>
                {cat.category}
              </h3>
              
              {/* Grid de tecnologías - con efectos de hover */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.skills.map((skill) => {
                  const hasError = imageErrors[skill.name];
                  const isHovered = hoveredSkill === skill.name;
                  
                  return (
                    <div 
                      key={skill.name} 
                      className="relative"
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <div 
                        className={`
                          flex flex-col items-center justify-center p-4 
                          rounded-xl border-2 border-transparent
                          bg-gradient-to-br from-white to-gray-50
                          transition-all duration-300 ease-out
                          hover:scale-105 hover:-translate-y-1
                          ${isHovered ? `shadow-lg ${getColorClasses(cat.color, "shadow")}` : 'shadow-sm'}
                          hover:border-gray-300
                          group
                        `}
                      >
                        {/* Efecto de fondo sutil al hacer hover */}
                        <div className={`
                          absolute inset-0 rounded-xl
                          bg-gradient-to-br opacity-0 group-hover:opacity-100
                          transition-opacity duration-300
                          ${getColorClasses(cat.color, "gradient")}
                          blur-sm
                        `}></div>
                        
                        {/* Contenedor para imagen - con efectos */}
                        <div className="relative z-10">
                          <div className={`
                            w-12 h-12 mb-3 flex items-center justify-center 
                            rounded-xl bg-white p-1.5
                            transition-all duration-300
                            group-hover:scale-110
                            ${isHovered ? `shadow-md ring-2 ${getColorClasses(cat.color, "ring")}` : 'shadow-sm'}
                          `}>
                            {skill.imageUrl && !hasError ? (
                              <img 
                                src={skill.imageUrl} 
                                alt={skill.name}
                                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                                onError={() => handleImageError(skill.name)}
                                loading="lazy"
                              />
                            ) : (
                              <div className={`
                                w-10 h-10 flex items-center justify-center 
                                rounded-lg text-sm font-medium
                                transition-all duration-300
                                ${isHovered 
                                  ? `${cat.color === 'blue' ? 'bg-blue-50 text-blue-600' : 
                                      cat.color === 'emerald' ? 'bg-emerald-50 text-emerald-600' : 
                                      cat.color === 'purple' ? 'bg-purple-50 text-purple-600' : 
                                      cat.color === 'amber' ? 'bg-amber-50 text-amber-600' : 
                                      cat.color === 'indigo' ? 'bg-indigo-50 text-indigo-600' : 
                                      'bg-gray-50 text-gray-600'}`
                                  : 'bg-gray-100 text-gray-500'
                                }
                              `}>
                                {skill.name.substring(0, 2)}
                              </div>
                            )}
                          </div>
                        </div>
                        
                        {/* Nombre de la tecnología con efecto de hover */}
                        <span className={`
                          relative z-10 text-sm font-medium text-center
                          transition-all duration-300
                          ${isHovered 
                            ? `${cat.color === 'blue' ? 'text-blue-700 font-semibold' : 
                                cat.color === 'emerald' ? 'text-emerald-700 font-semibold' : 
                                cat.color === 'purple' ? 'text-purple-700 font-semibold' : 
                                cat.color === 'amber' ? 'text-amber-700 font-semibold' : 
                                cat.color === 'indigo' ? 'text-indigo-700 font-semibold' : 
                                'text-gray-700 font-semibold'}`
                            : 'text-gray-900'
                          }
                        `}>
                          {skill.name}
                        </span>
                        
                        {/* Efecto sutil de brillo */}
                        <div className={`
                          absolute inset-0 rounded-xl
                          opacity-0 group-hover:opacity-30
                          transition-opacity duration-300
                          ${getColorClasses(cat.color, "gradient")}
                        `}></div>
                      </div>
                      
                      {/* Punto decorativo sutil */}
                      <div className={`
                        absolute -top-1 -right-1 w-2 h-2 rounded-full
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300
                        ${cat.color === 'blue' ? 'bg-blue-400' : 
                          cat.color === 'emerald' ? 'bg-emerald-400' : 
                          cat.color === 'purple' ? 'bg-purple-400' : 
                          cat.color === 'amber' ? 'bg-amber-400' : 
                          cat.color === 'indigo' ? 'bg-indigo-400' : 
                          'bg-gray-400'
                        }
                      `}></div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Ingeniería de Software y Metodologías */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl p-8 border border-blue-200">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Conocimientos en Ingeniería de Software
              </h3>
              <p className="text-gray-700 mb-6">
                Con formación en análisis de sistemas y experiencia práctica, aplico metodologías estructuradas 
                para el desarrollo de software de calidad, desde la planificación hasta la implementación.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Metodologías de Desarrollo</h4>
                  <div className="flex flex-wrap gap-2">
                    {["SCRUM", "Unified Process (UP)", "Cascada"].map((method) => (
                      <span 
                        key={method}
                        className="px-4 py-2 bg-white text-gray-800 text-sm font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:shadow-md transition-all hover:scale-105"
                      >
                        {method}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-900 mb-4 text-lg">Habilidades Complementarias</h4>
              <div className="space-y-3">
                {[
                  "Análisis de Requisitos",
                  "Fase de Diseño",
                  "Testing y Control de Calidad",
                  "Documentación Técnica",
                  "Gestión de Proyectos",
                  "Auditoría de Sistemas"
                ].map((skill) => (
                  <div key={skill} className="flex items-center gap-3 group cursor-default">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors duration-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}