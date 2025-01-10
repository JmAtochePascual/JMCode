import Card from "./Card"

const Proyectos = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto pt-40">
      <h2 className="mb-20 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl uppercase">Proyectos</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        {/* <Card />
        <Card />
        <Card /> */}
      </div>
    </section>
  )
}

export default Proyectos