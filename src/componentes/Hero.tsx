import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-11/12 max-w-7xl mx-auto pt-16 mb-20 grid gap-20 justify-items-center md:pt-40 md:mb-40 md:grid-cols-[2fr_1fr] md:justify-items-start md:gap-10" >

      <div className="max-w-md flex flex-col gap-4 md:items-start md:max-w-lg lg:max-w-4xl">
        <p className="text-lg text-center text-white md:text-left">Hola! soy <span className="font-bold text-primary-color">JMCode</span></p>

        <div>
          <h1 className="mb-2 text-3xl font-bold text-center text-white sm:text-4xl md:text-left md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
            Desarrollador{' '}
            <span className="text-primary-color">
              <Typewriter
                options={{
                  strings: ['FullStack', 'Backend', 'Frontend', 'Diseñador UX/UI'],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 50,
                }}
              />
            </span>
          </h1>
        </div>

        <p className="mb-8 text-center italic text-white md:text-left md:max-w-sm lg:max-w-md 2xl:text-xl 2xl:max-w-lg">
          Mi objetivo es construir soluciones digitales completas, desde interfaces intuitivas hasta sistemas backend eficientes y escalables.
        </p>

        <div className="w-full flex flex-col gap-4 md:flex-row-reverse md:justify-end md:items-center">
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/JmAtochePascual"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-tooltip-id="github"
              data-tooltip-content="GitHub"
            >
              <img
                src="icons/icono-github.svg"
                alt="Icono github"
                className="block p-2 rounded-full border-primary-color border-2 hover:scale-125 transition-all duration-300" />
              <Tooltip id="github" place="top" className="!bg-primary-color !text-white" />
            </a>

            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-tooltip-id="linkedin"
              data-tooltip-content="LinkedIn"
            >
              <img
                src="icons/icono-linkedin.svg"
                alt="Icono linkedin"
                className="block p-2 rounded-full border-primary-color border-2 hover:scale-125 transition-all duration-300" />
              <Tooltip id="linkedin" place="top" className="!bg-primary-color !text-white" />
            </a>

            <a
              href="https://www.instagram.com/atochepascual17"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-tooltip-id="instagram"
              data-tooltip-content="Instagram"
            >
              <img
                src="icons/icono-instagram.svg"
                alt="Icono instagram"
                className="block p-2 rounded-full border-primary-color border-2 hover:scale-125 transition-all duration-300" />
              <Tooltip id="instagram" place="top" className="!bg-primary-color !text-white" />
            </a>
          </div>
          <a
            href="Curriculum Jeancarlos Atoche Pascual.pdf"
            download
            className="bg-primary-color text-white px-4 py-2 rounded-md hover:bg-primary-color/80 shadow-2xl hover:scale-125 transition-all duration-300 text-center">
            Descargar CV
          </a>
        </div>
      </div>

      {/* animate-pulse */}

      <img
        src="img-home.png"
        // src="Img-user.png"
        alt="Imagen de Jeancarlos"
        className="w-full max-w-80 h-auto rounded-2xl md:justify-self-end md:max-w-96 lg:w-full" />
    </section>
  )
}

export default Hero