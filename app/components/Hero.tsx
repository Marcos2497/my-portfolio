export default function Hero() {
  return (
    <section className="pt-20 pb-12 px-4 bg-gradient-to-br from-blue-50 to-emerald-50 min-h-[85vh] flex items-center">
      <div className="container mx-auto max-w-4xl">
        {/* Contenido completamente centrado */}
        <div className="flex flex-col items-center text-center">
          
          {/* Avatar centrado - más compacto */}
          <div className="relative mb-6">
            <div className="w-56 h-56 bg-gradient-to-br from-blue-500 to-emerald-500 rounded-full shadow-xl overflow-hidden flex items-center justify-center border-6 border-white mx-auto">
              {/* Placeholder con inicial */}
              <div className="text-center">
                <span className="text-7xl font-bold text-white mb-2 block">M</span>
                <span className="text-white/80 text-xs block">Foto próxima</span>
              </div>
            </div>
            
            {/* Badge de disponibilidad más pequeño */}
            <div className="absolute -bottom-2 -right-2 bg-white px-3 py-1.5 rounded-lg shadow-md border">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium text-gray-700">Disponible Remoto</span>
              </div>
            </div>
          </div>

          {/* Saludo compacto */}
          <div className="mb-4">
            <h2 className="text-xl md:text-3xl font-medium text-gray-700">
              ¡Hola, soy
            </h2>
          </div>

          {/* Nombre completo */}
          <div className="mb-6">
            <h1 className="text-4xl md:text-2xl lg:text-3xl font-bold text-gray-900">
              Marcos Natanael Da Silva
            </h1>
          </div>

          {/* Títulos profesionales - más compactos */}
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
              <span className="text-x md:text-1xl font-semibold text-blue-700 bg-blue-50 px-6 py-3 rounded-full border border-blue-200">
                Analista de Sistemas
              </span>
              <span className="text-x md:text-1xl font-semibold text-emerald-700 bg-emerald-50 px-6 py-3 rounded-full border border-emerald-200">
                Desarrollador Full Stack
              </span>
            </div>
          </div>

          {/* Botones CTA */}
          <div className="flex flex-wrap justify-center gap-2">
            <a 
              href="#" 
              className="bg-gradient-to-r from-blue-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-emerald-700 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2 text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
              Descargar CV
            </a>
            <a 
              href="#contacto" 
              className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-md hover:shadow-lg border border-gray-200 hover:-translate-y-0.5 flex items-center gap-2 text-base"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              Contáctame
            </a>
          </div>

          {/* Info de contacto minimalista */}
          <div className="mt-8 pt-6 border-t border-gray-200 max-w-md">
            <div className="flex flex-col items-center gap-2 text-gray-600 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                </svg>
                <span>Argentina, Misiones</span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}