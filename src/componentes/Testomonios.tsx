import Testimonio from "./Testimonio"

const Testomonios = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-10 md:pb-20 lg:pb-40" id="testimonios">
      <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl uppercase">Testimonios</h2>

      <p className="mb-20 text-center max-w-xl mx-auto text-white">
        Aquí puedes ver lo que dicen las personas que han trabajado conmigo y lo que opinan de mi trabajo.
      </p>

      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-gray-300 md:grid md:grid-cols-2 lg:grid-cols-4">
        <Testimonio
          nombre="Sofía López"
          cargo="Directora Creativa"
          testimonio="El servicio fue excepcional, con atención a cada detalle y resultados que superaron mis expectativas."
        />
        <Testimonio
          nombre="Mario Torres"
          cargo="Jefe de Tecnología"
          testimonio="La experiencia de trabajar con este equipo fue excelente. Su enfoque profesional marca la diferencia siempre."
        />
        <Testimonio
          nombre="Clara Gómez"
          cargo="Gerente General"
          testimonio="Un equipo comprometido que entiende tus necesidades. Su trabajo refleja calidad y atención a los detalles."
        />
        <Testimonio
          nombre="Luis Ramírez"
          cargo="Consultor de Negocios"
          testimonio="Desde el inicio hasta el final, su dedicación y profesionalismo hicieron de esta experiencia algo único."
        />
        <Testimonio
          nombre="Elena Vargas"
          cargo="Líder de Innovación"
          testimonio="Altamente recomendados. Sus ideas innovadoras y su dedicación generan resultados que impresionan mucho."
        />
        <Testimonio
          nombre="Andrés Peña"
          cargo="Analista Financiero"
          testimonio="Su servicio se destaca por la puntualidad y calidad. Estoy muy satisfecho con el trabajo que realizaron."
        />
        <Testimonio
          nombre="Camila Flores"
          cargo="Diseñadora UX"
          testimonio="Un equipo increíble que logró interpretar nuestras necesidades y entregar resultados más allá de lo esperado."
        />
        <Testimonio
          nombre="Javier Soto"
          cargo="Estratega de Marca"
          testimonio="El nivel de profesionalismo y dedicación de este equipo es incomparable. Estoy encantado con el resultado."
        />
      </div>
    </section>
  )
}

export default Testomonios