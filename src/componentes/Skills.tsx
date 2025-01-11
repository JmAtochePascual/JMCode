import Icono from "./Icono"

const skills = ['react', 'tailwind', 'vite', 'typescript', 'node', 'mongo', 'postgres', 'github']

const Skills = () => {
  return (
    <section className="py-20 bg-[#041135] border-primary-color border-y-4">
      <div className="w-11/12 mx-auto max-w-7xl">
        <h2 className="mb-20 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">Skills</h2>

        <div className="grid grid-cols-4 gap-4 justify-items-center md:grid-cols-6 lg:grid-cols-8 ">
          {
            skills.map((skill) => (
              <Icono icono={skill} key={skill} />
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Skills