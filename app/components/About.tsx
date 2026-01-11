export default function About() {
  return (
    <section id="about" className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre mí
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Columna principal - Presentación */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-50 to-emerald-50 rounded-2xl p-8 border border-blue-100">
              <div className="space-y-6">
                <p className="text-l text-gray-700 leading-relaxed">
                  Como <strong className="text-blue-700">Analista en Sistemas</strong> y <strong className="text-emerald-700">Desarrollador Full Stack</strong>, 
                  busco <strong>transformar desafíos empresariales en soluciones tecnológicas efectivas</strong>. 
                  Más que escribir código, me gusta entender el contexto del negocio, analizar procesos 
                  y desarrollar software que realmente optimice y mejore.
                </p>
                
                <p className="text-l text-gray-700 leading-relaxed">
                  Recién graduado como Analista y actualmente cursando el último año de la 
                  <strong> Licenciatura en Sistemas de Información</strong>, combino formación académica 
                  sólida con un enfoque <strong>autodidacta y proactivo</strong>. Mi compromiso con el trabajo, 
                  responsabilidad y aprendizaje continuo me permiten adaptarme rápidamente a nuevas 
                  tecnologías y metodologías.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 mt-6">
                  <p className="text-blue-800 font-semibold text-center text-lowercase">
                    <strong>↓ Explora mis proyectos más recientes</strong> para ver cómo aplico 
                    estas habilidades en soluciones reales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Datos clave compactos */}
          <div className="space-y-4">
            {/* Educación */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                </svg>
                Educación
              </h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Analista en Sistemas</p>
                    <p className="text-xs text-gray-600">Graduado 2024</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></div>
                  <div>
                    <p className="font-medium text-gray-900 text-sm">Lic. en Sistemas</p>
                    <p className="text-xs text-gray-600">Último año</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-lg p-5 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-3 text-sm flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Valores
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Autodidacta', 'Responsable', 'Proactivo', 'Comprometido'].map((value) => (
                  <span 
                    key={value} 
                    className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full border border-blue-200"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>


            {/* Disponibilidad */}
            <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-gray-900">Disponibilidad</h3>
              </div>
              <p className="text-gray-700 text-sm">
                Busco <strong>oportunidades remotas</strong> como desarrollador Full Stack. 
                Disponible para proyectos freelance o contratación.
              </p>
              <a 
                href="#contacto" 
                className="inline-block mt-4 text-blue-600 font-medium hover:text-blue-800"
              >
                Hablemos →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}