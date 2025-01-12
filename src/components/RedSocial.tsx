import { Tooltip } from "react-tooltip"

type RedSocialProps = {
  href: string
  icono: string
}

const RedSocial = ({ href, icono }: RedSocialProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      data-tooltip-id={icono}
      data-tooltip-content={icono}
    >
      <img
        src={`icons/icono-${icono}.svg`}
        alt={`Icono de ${icono}`}
        loading="lazy"
        className="block p-2 rounded-full border-primary-color border-2 hover:scale-125 transition-all duration-300" />
      <Tooltip
        id={icono}
        place="top"
        className="!bg-primary-color !text-white" />
    </a>
  )
}

export default RedSocial