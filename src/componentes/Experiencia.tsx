import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// Icono de trabajo
import { BriefcaseIcon } from '@heroicons/react/24/solid';

const Experiencia = () => {
  return (
    <section className="py-40">
      <h2 className="mb-20 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl">Mi Experiencia</h2>

      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Período: 01/2018 - 12/2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">FREELANCER</h3>
          <h4 className="italic vertical-timeline-element-subtitle">Maquetador Web y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside">
            <li className="text-sm">
              Diseñé y maqueté sitios web responsivos utilizando HTML, CSS y Bootstrap.
            </li>
            <li className="text-sm">
              Brindé mantenimiento a páginas web, optimizando su rendimiento.
            </li>
            <li className="text-sm">
              Realicé diseños básicos de interfaces y prototipos en Adobe XD para proyectos pequeños y medianos
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#3b82f6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #3b82f6' }}
          date="Período: 01/2018 - 12/2019"
          iconStyle={{ background: '#3b82f6', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">CALIFORNIA S.A</h3>
          <h4 className="italic vertical-timeline-element-subtitle">Maquetador Web y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside">
            <li className="text-sm">
              Diseñé y maqueté sitios web responsivos utilizando HTML, CSS y Bootstrap.
            </li>
            <li className="text-sm">
              Brindé mantenimiento a páginas web, optimizando su rendimiento.
            </li>
            <li className="text-sm">
              Realicé diseños básicos de interfaces y prototipos en Adobe XD para proyectos pequeños y medianos
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          date="Período: 01/2018 - 12/2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">FREELANCER</h3>
          <h4 className="italic vertical-timeline-element-subtitle">Maquetador Web y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside">
            <li className="text-sm">
              Diseñé y maqueté sitios web responsivos utilizando HTML, CSS y Bootstrap.
            </li>
            <li className="text-sm">
              Brindé mantenimiento a páginas web, optimizando su rendimiento.
            </li>
            <li className="text-sm">
              Realicé diseños básicos de interfaces y prototipos en Adobe XD para proyectos pequeños y medianos
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#3b82f6', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #3b82f6' }}
          date="Período: 01/2018 - 12/2019"
          iconStyle={{ background: '#3b82f6', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">CALIFORNIA S.A</h3>
          <h4 className="italic vertical-timeline-element-subtitle">Maquetador Web y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside">
            <li className="text-sm">
              Diseñé y maqueté sitios web responsivos utilizando HTML, CSS y Bootstrap.
            </li>
            <li className="text-sm">
              Brindé mantenimiento a páginas web, optimizando su rendimiento.
            </li>
            <li className="text-sm">
              Realicé diseños básicos de interfaces y prototipos en Adobe XD para proyectos pequeños y medianos
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
        // icon={<StarIcon />}
        />
      </VerticalTimeline>
    </section>
  )
}

export default Experiencia