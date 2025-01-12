import Indicador from '../components/Indicador';

const Indicadores = () => {
  const indicadores = [
    { end: 94, label: 'Commits', subLabel: 'Realizados' },
    { end: 32, label: 'Proyectos', subLabel: 'Realizados' },
    { end: 8, label: 'Recomendaciones', subLabel: 'Asegurados' },
  ]
  return (
    <div className="w-11/12 max-w-4xl mx-auto flex flex-col gap-12 items-center justify-center md:flex-row md:gap-8 md:justify-between">
      {
        indicadores.map((indicador) =>
          <Indicador
            key={indicador.label}
            end={indicador.end}
            label={indicador.label}
            subLabel={indicador.subLabel} />
        )
      }
    </div>
  )
}

export default Indicadores