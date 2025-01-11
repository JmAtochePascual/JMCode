
const Footer = () => {
  return (
    <footer className="bg-[#090D18] py-10 md:py-4">
      <div className="w-11/12 max-w-7xl mx-auto py-10 flex flex-col items-center gap-4 md:flex-row md:justify-between md:py-4">
        <nav className="flex flex-col items-center gap-4 md:flex-row">
          <a href="/" className="text-white text-lg">Inicio</a>
          <a href="/" className="text-white text-lg">Experiencias</a>
          <a href="/" className="text-white text-lg">Proyectos</a>
          <a href="/" className="text-white text-lg">Sobre mí</a>
          <a href="/" className="text-white text-lg">Contato</a>
        </nav>

        <p className="hidden md:block text-white text-lg font-bold">JMCode</p>
      </div>
      <p className="w-11/12 max-w-7xl mx-auto text-white text-center md:pt-4">
        Todos los derechos reservados &copy; Hecho con ♥ por @JMCode.
      </p>

    </footer>
  )
}

export default Footer