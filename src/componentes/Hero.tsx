import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <div className="w-11/12 max-w-7xl mx-auto py-20 md:py-40 flex flex-col gap-10 md:flex-row md:justify-between md:items-center">
      <div className="mb-4 flex flex-col gap-4 max-w-2xl">
        <h1 className="text-5xl font-bold text-center text-white md:text-left lg:text-7xl">
          Jeancarlos <span className="block text-blue-500">ATOCHE PASCUAL</span>
        </h1>
        <div className="text-2xl text-white text-center md:text-left md:text-3xl lg:text-4xl">
          <Typewriter
            options={{
              strings: ['Desarrollador FullStack', 'Diseñador UI/UX'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Hero