
const About = () => {
  return (
    <section className="pt-20 bg-[#090D18] md:pt-30 lg:pt-40" id="about">

      <div className="w-11/12 max-w-7xl mx-auto pb-20">
        <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl uppercase">
          Sobre mí
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col gap-4">
            <p className="text-white leading-8">¡Hola! Soy Jean Carlos, un desarrollador web y diseñador UX/UI apasionado por crear soluciones digitales completas. Con conocimientos en Frontend, Backend y Diseño UX/UI, domino herramientas como React, Node.js y Tailwind CSS, además de metodologías ágiles para garantizar un flujo de trabajo eficiente en equipo.
            </p>

            <p className="text-white hidden lg:block leading-8">Me destaco no solo por mis habilidades técnicas, sino también por mis habilidades blandas: comunicación efectiva, liderazgo colaborativo y una gran capacidad para resolver problemas. Creo firmemente que un buen diseño y un desarrollo sólido son claves para transformar ideas en productos digitales exitosos.

              Si buscas alguien que combine creatividad, técnica y un enfoque centrado en el usuario, ¡hablemos y hagamos algo increíble juntos!
            </p>
          </div>

          <div className="overflow-hidden">
            <img
              src="about.png"
              alt="Sobre mí"
              className="w-full h-full object-cover object-bottom loading-lazy hover:scale-150 transition-all duration-300 hover:rotate-12" />
          </div>
        </div>

        <a
          href="Curriculum Jeancarlos Atoche Pascual.pdf"
          download
          className="inline-block w-full mt-4 bg-primary-color text-white px-4 py-2 rounded-md hover:bg-primary-color/80 shadow-2xl md:w-auto hover:scale-125 transition-all duration-300 text-center">
          Descargar CV
        </a>
      </div>


      <img
        src="wave.svg"
        alt="imagen de hola"
        className="w-full h-auto" />
    </section>
  )
}

export default About