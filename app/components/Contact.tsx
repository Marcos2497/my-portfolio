export default function Contact() {
  const contactInfo = [
    {
      icon: "✉️",
      title: "Email",
      value: "contacto@natanael.dev",
      link: "mailto:contacto@natanael.dev"
    },
    {
      icon: "📱",
      title: "LinkedIn",
      value: "linkedin.com/in/tuperfil",
      link: "https://linkedin.com/in/tuperfil"
    },
    {
      icon: "⚡",
      title: "GitHub",
      value: "github.com/tuperfil",
      link: "https://github.com/tuperfil"
    }
  ];

  return (
    <section id="contacto" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Contacto
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ¿Interesado en trabajar juntos? No dudes en contactarme.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-md transition text-center"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.value}</p>
            </a>
          ))}
        </div>

        {/* Email directo */}
        <div className="text-center">
          <a
            href="mailto:contacto@natanael.dev"
            className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition text-lg"
          >
            ✉️ Enviar email directo
          </a>
          <p className="mt-4 text-gray-500">
            Normalmente respondo en menos de 24 horas
          </p>
        </div>

        {/* Disponibilidad */}
        <div className="mt-12 pt-8 border-t border-gray-300 text-center">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Disponible para oportunidades remotas
          </div>
        </div>
      </div>
    </section>
  );
}