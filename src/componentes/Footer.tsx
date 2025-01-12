
const Footer = () => {
  return (
    <footer className="pb-24 bg-[#090D18] py-10 md:py-4">
      <div className="w-11/12 max-w-7xl mx-auto py-10 flex flex-col items-center gap-4 md:flex-row md:justify-between md:py-4">
        <nav className="flex flex-col items-center gap-4 md:flex-row">
          <a href="#hero" className="text-white text-lg">Inicio</a>
          <a href="#experiencia" className="text-white text-lg">Experiencias</a>
          <a href="#proyectos" className="text-white text-lg">Proyectos</a>
          <a href="#about" className="text-white text-lg">Sobre mí</a>
          <a href="#testimonios" className="text-white text-lg">Testimonios</a>
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