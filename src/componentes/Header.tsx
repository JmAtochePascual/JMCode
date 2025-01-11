const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full py-6 bg-black bg-opacity-35 backdrop-blur-lg">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/usuario.jpg"
            alt="Imagem do logo"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-white text-lg font-bold">JMCode</p>
        </div>

        <nav className="hidden md:flex items-center gap-4 lg:gap-6">
          <a href="#hero" className="text-white text-lg">Inicio</a>
          <a href="#experiencia" className="text-white text-lg">Experiencias</a>
          <a href="#proyectos" className="text-white text-lg">Proyectos</a>
          <a href="#about" className="text-white text-lg">Sobre mí</a>
          <a href="#testimonios" className="text-white text-lg">Testimonios</a>
        </nav>
      </div>
    </header>
  )
}

export default Header