type TestimonioProps = {
  nombre: string
  cargo: string
  testimonio: string
  imagen: string
}

const Testimonio = ({ nombre, cargo, testimonio, imagen }: TestimonioProps) => {
  return (
    <article className="relative w-60 pt-20 shrink-0 md:w-full" >

      <div className="h-full pt-12 flex flex-col gap-8 items-center bg-card p-4 shadow-black rounded-md">
        <img
          src={imagen}
          alt="Imagen de persona"
          className="absolute top-6 w-24 h-24 mb-4 rounded-full border-2 border-primary-color" />

        <div>
          <h3 className="text-2xl font-bold text-center text-white">{nombre}</h3>
          <p className="mb-2 text-center text-white italic text-xs">
            {cargo}
          </p>

          <div className="flex gap-2 justify-center">
            <img src="icons/icono-star.svg" alt="Icono de estrella" className="w-4 h-4" />
            <img src="icons/icono-star.svg" alt="Icono de estrella" className="w-4 h-4" />
            <img src="icons/icono-star.svg" alt="Icono de estrella" className="w-4 h-4" />
            <img src="icons/icono-star.svg" alt="Icono de estrella" className="w-4 h-4" />
            <img src="icons/icono-star.svg" alt="Icono de estrella" className="w-4 h-4" />
          </div>
        </div>

        <p className="relative pt-4 text-white text-center">
          {testimonio}
          <span className="absolute -left-2 -top-10 text-8xl text-primary-color opacity-15">❝</span>
        </p>
      </div>
    </article>
  )
}

export default Testimonio