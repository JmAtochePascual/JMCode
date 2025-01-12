type CabeceraProps = {
  title: string
  description: string
}

const Cabecera = ({ title, description }: CabeceraProps) => {
  return (
    <>
      <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl uppercase">{title}</h2>

      <p className="mb-20 text-center max-w-xl mx-auto text-white">
        {description}
      </p>

    </>
  )
}

export default Cabecera