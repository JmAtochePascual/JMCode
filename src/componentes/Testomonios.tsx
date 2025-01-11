import Testimonio from "./Testimonio"

const Testomonios = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-10 md:pb-20 lg:pb-40" id="testimonios">
      <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl uppercase">Testimonios</h2>

      <p className="mb-20 text-center max-w-xl mx-auto text-white">
        Aquí puedes ver lo que dicen las personas que han trabajado conmigo y lo que opinan de mi trabajo.
      </p>

      <div className="flex gap-4 overflow-x-auto scrollbar-thin scrollbar-thumb-primary-color scrollbar-track-gray-300 md:grid md:grid-cols-2 lg:grid-cols-4">
        <Testimonio />
        <Testimonio />
        <Testimonio />
        <Testimonio />
        <Testimonio />
        <Testimonio />
        <Testimonio />
        <Testimonio />
      </div>
    </section>
  )
}

export default Testomonios