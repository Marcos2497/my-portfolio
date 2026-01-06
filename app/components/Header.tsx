export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Da Silva Marcos Natanael
          </h1>
          <div className="space-x-4">
            <a href="#proyectos" className="text-gray-600 hover:text-blue-600">
              Proyectos
            </a>
            <a href="#habilidades" className="text-gray-600 hover:text-blue-600">
              Habilidades
            </a>
            <a href="#contacto" className="text-gray-600 hover:text-blue-600">
              Contacto
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}