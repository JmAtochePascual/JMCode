import CountUp from 'react-countup';

const Indicadores = () => {
  return (
    <div className="w-11/12 max-w-4xl mx-auto flex flex-col gap-12 items-center justify-center md:flex-row md:gap-8 md:justify-between">

      <div className="flex items-center gap-2">
        <p className="text-7xl font-bold text-white lg:text-8xl">
          <CountUp end={94} duration={2.5} enableScrollSpy />
        </p>
        <div className="pt-4">
          <p className="text-white">Commits</p>
          <p className="text-white">Realizados</p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-7xl font-bold text-white lg:text-8xl">
          <CountUp end={32} duration={2.5} enableScrollSpy suffix="+" />
        </p>
        <div className="pt-4">
          <p className="text-white">Proyectos</p>
          <p className="text-white">Realizados </p>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-7xl font-bold text-white lg:text-8xl">
          <CountUp end={8} duration={2.5} enableScrollSpy />
        </p>
        <div className="pt-4">
          <p className="text-white">Recomendaciones</p>
          <p className="text-white">Asegurados</p>
        </div>
      </div>
    </div>
  )
}

export default Indicadores