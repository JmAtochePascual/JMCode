
const About = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto py-40">

      <h2 className="mb-8 text-4xl font-bold text-white md:text-5xl lg:text-6xl uppercase">
        Sobre mí
      </h2>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="flex flex-col gap-4">
          <p className="text-gray-400">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>

          <p className="text-gray-400 hidden lg:block">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          </p>
        </div>

        <img
          src="./about1.jpg"
          alt="Sobre mí"
          className="w-full h-auto rounded-lg" />

      </div>
    </section>
  )
}

export default About