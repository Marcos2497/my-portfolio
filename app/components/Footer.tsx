export default function Footer() {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer id="contacto" className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-6">¿Trabajamos juntos?</h2>
          <p className="text-gray-300 mb-8 max-w-md mx-auto">
            Estoy disponible para oportunidades remotas como desarrollador Full Stack.
          </p>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a 
              href="mailto:tuemail@ejemplo.com"
              className="text-gray-300 hover:text-white flex items-center gap-2"
            >
              <span>✉️</span> tuemail@ejemplo.com
            </a>
            <a 
              href="https://linkedin.com/in/tuperfil"
              target="_blank"
              className="text-gray-300 hover:text-white flex items-center gap-2"
            >
              <span>💼</span> LinkedIn
            </a>
            <a 
              href="https://github.com/tuperfil"
              target="_blank"
              className="text-gray-300 hover:text-white flex items-center gap-2"
            >
              <span>⚡</span> GitHub
            </a>
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400">
              © {currentYear} Natanael. Hecho con Next.js y Tailwind CSS.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}