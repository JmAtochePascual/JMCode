
const Indicadores = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto flex flex-col gap-12 items-center justify-center md:flex-row md:gap-8 md:justify-between">

      <div className="flex items-center gap-2">
        <p className="text-7xl font-bold text-white lg:text-8xl">94</p>
        <div className="pt-4">
          <p className="text-white">Commits</p>
          <p className="text-white">Realizados</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-7xl font-bold text-white lg:text-8xl">32+</p>
        <div className="pt-4">
          <p className="text-white">Proyectos</p>
          <p className="text-white">Realizados </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-7xl font-bold text-white lg:text-8xl">8</p>
        <div className="pt-4">
          <p className="text-white">Recomendaciones</p>
          <p className="text-white">Asegurados</p>
        </div>
      </div>
    </div>
  )
}

export default Indicadores