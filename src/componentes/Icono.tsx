type IconoProps = {
  icono: string
}

const Icono = ({ icono }: IconoProps) => {
  return (
    <img
      src={`/icons/icono-${icono}.svg`}
      alt={icono}
      key={icono}
      className="w-14 h-14 p-2 rounded-full border-primary-color border" />
  )
}

export default Icono