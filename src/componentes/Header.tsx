const Header = () => {
  return (
    <header className="py-6">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <img
            src="/usuario.jpg"
            alt="Imagem do logo"
            className="w-10 h-10 rounded-full"
          />
          <p className="text-white text-lg font-bold">JMCode</p>
        </div>

        <nav className="flex flex-col items-center gap-4 md:flex-row lg:gap-6">
          <a href="/" className="text-white text-lg">Inicio</a>
          <a href="/" className="text-white text-lg">Experiencias</a>
          <a href="/" className="text-white text-lg">Proyectos</a>
          <a href="/" className="text-white text-lg">Sobre mí</a>
          <a href="/" className="text-white text-lg">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header