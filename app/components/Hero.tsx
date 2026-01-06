export default function Hero() {
  return (
    <section className="pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Avatar/Inicial (opcional) */}
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 rounded-full mb-6">
            <span className="text-3xl font-bold text-blue-600">N</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Da Silva Marcos Natanael
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Analista en Sistemas & Desarrollador Full Stack
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-2xl mx-auto">
            Especializado en crear sistemas escalables con Laravel, Java y Python.
            Apasionado por soluciones eficientes y código limpio.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#contacto" 
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Contactar
            </a>
            <a 
              href="/cv.pdf" 
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
            >
              Descargar CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}