import Icono from "../components/Icono"
import Marquee from 'react-fast-marquee';
import 'react-tooltip/dist/react-tooltip.css';

const skills = ['asana', 'babel', 'bootstrap', 'confluence', 'css', 'discord', 'express', 'figma', 'git', 'html', 'javascript', 'less', 'meet', 'miro', 'notion', 'github', 'mongo', 'node', 'postgres', 'react', 'tailwind', 'typescript', 'vite', 'slack', 'teams', 'trello', 'webpack']

const Skills = () => {
  return (
    <section className="py-20 bg-[#041135] border-primary-color border-y-4">
      <div className="w-11/12 mx-auto max-w-7xl">
        <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl uppercase">Skills</h2>
        <p className="mb-20 text-center max-w-xl mx-auto text-white">
          Estas son algunas de las tecnologías que he trabajado y aprendido durante mi carrera.
        </p>

        <Marquee
          speed={50}
          gradient={false}
          direction="left"
          pauseOnHover
        >
          <div className="flex gap-8 px-4">
            {skills.map((skill) => (
              <div key={skill} className="mx-4">
                <Icono icono={skill} />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}

export default Skills