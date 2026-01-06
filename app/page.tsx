import Header from './components/Header'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <section className="text-center py-20">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            Analista en Sistemas de Computación
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Desarrollador en Laravel, Java, Python y sistemas escalables
          </p>
        <a 
            href="#contacto" 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700"
          >
            Contáctame
          </a>
        </section>
      </main>
    </div>
  )
}