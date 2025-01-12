import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

interface IconoProps {
  icono: string;
}

const Icono = ({ icono }: IconoProps) => {
  return (
    <>
      <div
        className="py-4"
        data-tooltip-id={icono}
        data-tooltip-content={icono.charAt(0).toUpperCase() + icono.slice(1)}
      >
        <img
          src={`icons/icono-${icono}.svg`}
          alt={icono}
          className="w-14 h-14 block p-2 rounded-full border-primary-color border-2 hover:scale-125 transition-all duration-300"
        />
      </div>
      <Tooltip
        id={icono}
        place="top"
        className="!bg-primary-color !text-white capitalize"
      />
    </>
  )
}

export default Icono