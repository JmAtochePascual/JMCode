import Icono from "../components/Icono"
import Marquee from 'react-fast-marquee';
import 'react-tooltip/dist/react-tooltip.css';
import Cabecera from "../components/Cabecera"

const skills = ['asana', 'babel', 'bootstrap', 'confluence', 'css', 'discord', 'express', 'figma', 'git', 'html', 'javascript', 'less', 'meet', 'miro', 'notion', 'github', 'mongo', 'node', 'postgres', 'react', 'tailwind', 'typescript', 'vite', 'slack', 'teams', 'trello', 'webpack']

const Skills = () => {
  return (
    <section className="py-10 bg-[#041135] border-primary-color border-y-4">
      <Cabecera
        title="Skills"
        description="Estas son algunas de las tecnologías con las que trabajo para crear soluciones digitales innovadoras y eficientes."
      />

      <Marquee
        speed={50}
        gradient={false}
        direction="left"
        pauseOnHover
      >
        <div className="flex gap-8 px-4">
          {
            skills.map((skill) =>
              <div key={skill} className="mx-4">
                <Icono icono={skill} />
              </div>
            )
          }
        </div>
      </Marquee>
    </section>
  )
}

export default Skills