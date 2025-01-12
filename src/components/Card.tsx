import Icono from "./Icono";

type CardProps = {
  title: string;
  description: string;
  image: string;
  urlPage: string;
  urlCode: string;
  iconos: string[];
}

const Card = ({ title, description, image, urlPage, urlCode, iconos }: CardProps) => {
  return (
    <article className="p-4 pb-6 flex flex-col justify-between rounded-lg shadow-md max-w-md bg-card">
      <div className="overflow-hidden">
        <img
          src={image}
          alt="Proyecto 1"
          className="w-full h-auto rounded-lg hover:scale-150 transition-all duration-300" />
      </div>
      <h3 className="my-4 text-xl font-bold text-center text-white">{title}</h3>

      <p className="mb-8 text-sm text-center text-white">{description}</p>

      <div className="mb-8 flex justify-center gap-4">
        {
          iconos.map((icono) => (
            <Icono icono={icono} key={icono} />
          ))
        }
      </div>

      <div className="flex flex-col gap-4 justify-between md:flex-row">
        <a
          href={urlPage}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center text-sm bg-primary-color hover:bg-primary-color/80 text-white font-bold py-2 px-4 rounded transition duration-300">
          Ver Proyecto
        </a>
        <a
          href={urlCode}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center text-sm border-primary-color border text-white font-bold p-2 rounded transition duration-300">
          Ver código
        </a>
      </div>
    </article>
  )
}

export default Card