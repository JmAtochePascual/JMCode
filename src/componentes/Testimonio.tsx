type TestimonioProps = {
  nombre: string
  cargo: string
  testimonio: string
}

const Testimonio = ({ nombre, cargo, testimonio }: TestimonioProps) => {
  return (
    <article className="w-60 bg-card p-4 flex-wrap shrink-0 rounded-md md:w-full" >
      <h3 className="text-xl font-bold text-white">{nombre}</h3>
      <p className="mb-4 text-white italic text-xs">
        {cargo}
      </p>

      <p className="text-white">
        {testimonio}
      </p>

    </article>
  )
}

export default Testimonio