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
                <p className="text-lg text-gray-700 leading-relaxed">
                  Como <strong className="text-blue-700">Analista en Sistemas</strong> y <strong className="text-emerald-700">Desarrollador Full Stack</strong>, 
                  busco <strong>transformar desafíos empresariales en soluciones tecnológicas efectivas</strong>. 
                  Más que escribir código, me gusta entender el contexto del negocio, analizar procesos 
                  y desarrollar software que realmente optimice y mejore.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Recién graduado como Analista y actualmente cursando el último año de la 
                  <strong> Licenciatura en Sistemas de Información</strong>, combino formación académica 
                  sólida con un enfoque <strong>autodidacta y proactivo</strong>. Mi compromiso con el trabajo, 
                  responsabilidad y aprendizaje continuo me permiten adaptarme rápidamente a nuevas 
                  tecnologías y metodologías.
                </p>
                
                <div className="bg-white p-6 rounded-xl border border-blue-200 mt-6">
                  <p className="text-blue-800 font-semibold text-center text-lg">
                    <strong>↓ Explora mis proyectos más recientes</strong> para ver cómo aplico 
                    estas habilidades en soluciones reales.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Columna lateral - Datos clave */}
          <div className="space-y-6">
            {/* Educación */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" opacity="0.5"></path>
                </svg>
                Educación
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Analista en Sistemas</p>
                    <p className="text-sm text-gray-600">Graduado 2024</p>
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-gray-900">Lic. en Sistemas de Información</p>
                    <p className="text-sm text-gray-600">Último año en curso</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Valores */}
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Valores profesionales
              </h3>
              <div className="space-y-2">
                {['Autodidacta', 'Responsable', 'Comprometido', 'Proactivo', 'Aprendizaje continuo'].map((value) => (
                  <div key={value} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Disponibilidad */}
            <div className="bg-gradient-to-r from-blue-100 to-emerald-100 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-gray-900">Disponibilidad</h3>
              </div>
              <p className="text-gray-700">
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