// import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto pt-32 mb-40 grid gap-20 justify-items-center md:pt-40 md:grid-cols-[2fr_1fr] md:justify-items-start" id="hero">

      <div className="max-w-md flex flex-col gap-4 md:items-start md:max-w-lg lg:max-w-4xl">
        <p className="text-lg text-center text-white md:text-left">Hola! Soy Jeancarlos</p>

        <div>
          <h1 className="mb-2 text-3xl font-bold text-center text-white sm:text-4xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Web <span className="text-primary-color">Developer+</span>
          </h1>
          <p className="text-3xl font-bold text-center text-white sm:text-4xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            UX/UI <span className="text-primary-color">Designer</span>
          </p>
        </div>

        <p className="mb-8 text-center italic text-white md:text-left md:max-w-sm lg:max-w-md 2xl:text-xl 2xl:max-w-lg">
          Mi objetivo es construir soluciones digitales completas, desde interfaces intuitivas hasta sistemas backend eficientes y escalables.
        </p>

        <div className="w-full flex flex-col gap-4 md:flex-row-reverse md:justify-end md:items-center">
          <div className="flex justify-center gap-4">
            <img
              src="icons/icono-github.svg"
              alt="Icono githuv"
              className="block p-2 rounded-full border-primary-color border-2" />

            <img
              src="icons/icono-linkedin.svg"
              alt="Icono linkedin"
              className="block p-2 rounded-full border-primary-color border-2" />

            <img
              src="icons/icono-instagram.svg"
              alt="Icono twitter"
              className="block p-2 rounded-full border-primary-color border-2" />
          </div>
          <a
            href="Curriculum Jeancarlos Atoche Pascual.pdf"
            download
            className="bg-primary-color text-white px-4 py-2 rounded-md hover:bg-primary-color/80 shadow-2xl">
            Descargar CV
          </a>
        </div>
      </div>

      {/* animate-pulse */}

      <img
        src="Img-user.png"
        alt="Imagen de Jeancarlos"
        className="w-11/12 max-w-80 h-auto md:justify-self-end md:max-w-96 lg:w-full" />
    </section>
  )
}

export default Hero