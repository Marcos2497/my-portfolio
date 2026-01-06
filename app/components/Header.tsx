import Link from 'next/link'

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold text-gray-900">
            N<span className="text-blue-600">.</span>
          </Link>
          
          <div className="flex gap-6">
            <Link href="#proyectos" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Proyectos
            </Link>
            <Link href="#skills" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#contacto" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Contacto
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}