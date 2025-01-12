import Testimonio from "../components/Testimonio"
import Cabecera from "../components/Cabecera"
const Testomonios = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-10 md:pb-20 lg:pb-40" id="testimonios">
      <Cabecera
        title="Testimonios"
        description="Estos son algunos de los comentarios que he recibido de mis compañeros de trabajo que me respaldan mi trabajo."
      />

      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-gray-300 md:grid md:grid-cols-2 lg:grid-cols-4">
        <Testimonio
          imagen="img-female-01.png"
          nombre="Sofía López"
          cargo="Directora Creativa"
          testimonio="Trabajar con Jean fue una experiencia transformadora. Su enfoque en el cliente y su dedicación a la excelencia son verdaderamente inspiradoras."
        />
        <Testimonio
          imagen="img-male-01.png"
          nombre="Mario Torres"
          cargo="Jefe de Tecnología"
          testimonio="Demostró ser un líder con visión y un profesional comprometido con el éxito de la empresa, siempre buscando la innovación y la excelencia en cada proyecto."
        />
        <Testimonio
          imagen="img-female-02.png"
          nombre="Clara Gómez"
          cargo="Gerente General"
          testimonio="Mi experiencia trabajando con Jean fue grata. Su enfoque en la excelencia y su dedicación a la innovación son verdaderamente inspiradoras siempre."
        />
        <Testimonio
          imagen="img-male-02.png"
          nombre="Luis Ramírez"
          cargo="Consultor de Negocios"
          testimonio="Atoche es una persona profesional con una visión clara, su proactividad y su dedicación llaman la atención a la hora de trabajar en equipo."
        />
        <Testimonio
          imagen="img-female-03.png"
          nombre="Elena Vargas"
          cargo="Líder de Innovación"
          testimonio="JeanCarlos siempre esta dispuesto a seguir nuevas tendencias, ideas arriegandose a la hora de proponer nuevas ideas para alcanzar el objetivo."
        />
        <Testimonio
          imagen="img-male-03.png"
          nombre="Andrés Peña"
          cargo="Analista Desarrollador"
          testimonio="Me gusta trabajar con JeanCarlos, siempre esta dispuesto a aseguir las buenas practicas de desarrollo de software. siempre buscando la mejora continua."
        />
        <Testimonio
          imagen="img-female-04.png"
          nombre="Camila Flores"
          cargo="Diseñadora UX"
          testimonio="La imagginación de JeanCarlos es impresionante, me gusta su proactividad, es algo que siempre voy a recordar. excelente persona y profesional."
        />
        <Testimonio
          imagen="img-male-04.png"
          nombre="Javier Soto"
          cargo="Gerente de Proyectos"
          testimonio="Excelente persona, siempre esta dispuesto a proponer nuevas tecnologías, siempre esta estudiando y certificandose en nuevas tecnologías para mejorar."
        />
      </div>
    </section>
  )
}

export default Testomonios