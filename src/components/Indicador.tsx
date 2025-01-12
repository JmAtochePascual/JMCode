import CountUp from 'react-countup';

type IndicadorProps = {
  end: number
  label: string
  subLabel: string
}

const Indicador = ({ end, label, subLabel }: IndicadorProps) => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-7xl font-bold text-white lg:text-8xl">
        <CountUp end={end} duration={2.5} enableScrollSpy />
      </p>
      <div className="pt-4">
        <p className="text-white">{label}</p>
        <p className="text-white">{subLabel}</p>
      </div>
    </div>
  )
}

export default Indicador