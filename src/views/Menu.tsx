
const Menu = () => {
  return (
    <nav className="fixed z-50 bottom-0 left-0 w-full py-4 bg-black bg-opacity-35 backdrop-blur-lg md:hidden">
      <div className="w-11/12 max-w-7xl mx-auto flex justify-between gap-4">
        <a
          href="#hero"
          id="home"
          className="flex flex-col items-center text-white text-sm">
          <img
            src="icons/icono-home.svg"
            alt="Inicio de la sección home"
            className="w-6 h-6" />
          Home
        </a>


        <a
          href="#experiencia"
          id="experiencia"
          className="flex flex-col items-center text-white text-sm">
          <img
            src="icons/icono-experiencia.svg"
            alt="Experiencias"
            className="w-6 h-6" />
          Experiencias
        </a>


        <a
          href="#proyectos"
          id="proyectos"
          className="flex flex-col items-center text-white text-sm">
          <img
            src="icons/icono-proyectos.svg"
            alt="Proyectos"
            className="w-6 h-6" />
          Proyectos
        </a>

        <a
          href="#testimonios"
          id="testimonios"
          className="flex flex-col items-center text-white text-sm">
          <img
            src="icons/icono-testomonios.svg"
            alt="Testimonios"
            className="w-6 h-6" />
          Testimonios
        </a>
      </div>
    </nav>
  )
}

export default Menu