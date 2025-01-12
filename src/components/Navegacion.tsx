
const Navegacion = () => {
  return (
    <nav className="hidden md:flex items-center gap-4 lg:gap-6">
      <a href="#hero" className="text-white text-lg font-semibold hover:text-primary-color transition-all duration-300">Inicio</a>
      <a href="#experiencia" className="text-white text-lg font-semibold hover:text-primary-color transition-all duration-300">Experiencias</a>
      <a href="#proyectos" className="text-white text-lg font-semibold hover:text-primary-color transition-all duration-300">Proyectos</a>
      <a href="#about" className="text-white text-lg font-semibold hover:text-primary-color transition-all duration-300">Sobre mí</a>
      <a href="#testimonios" className="text-white text-lg font-semibold hover:text-primary-color transition-all duration-300">Testimonios</a>
    </nav>
  )
}

export default Navegacion