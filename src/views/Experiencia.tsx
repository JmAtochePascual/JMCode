import { useState, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// Icono de trabajo
import { BriefcaseIcon, ChevronDoubleDownIcon } from '@heroicons/react/24/solid';

const config = {
  background: 'rgba( 255, 255, 255, 0.05 )',
  color: '#fff',
  backdropFilter: 'blur(4px)',
  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
  borderRadius: '16px',
  backDropFilter: 'blur(4px)',
}

const Experiencia = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-11/12 max-w-7xl mx-auto pt-40 md:pt-50" id="experiencia">
      <h2 className="mb-4 text-4xl font-bold text-center text-white md:text-5xl lg:text-6xl uppercase">Experiencia</h2>

      <p className="mb-20 text-center max-w-xl mx-auto text-white">
        Descubre mi trayectoria profesional y las habilidades que he desarrollado a lo largo de los años.
      </p>

      <VerticalTimeline animate={!isMobile}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={config}
          contentArrowStyle={{ borderRight: '7px solid  rgba( 255, 255, 255, 0.05 )' }}
          date="Período: 01/2018 - 12/2019"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">FREELANCER</h3>
          <h4 className="mb-4 italic">Maquetador Web y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside flex flex-col gap-2">
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
          contentStyle={config}
          contentArrowStyle={{ borderRight: '7px solid  rgba( 255, 255, 255, 0.05 )' }}
          date="Período: 02/2020 - 06/2021"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">CALIFORNIA S.A</h3>
          <h4 className="mb-4 italic">Maquetador Web y Desarrollador Frontend</h4>
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li className="text-sm">
              Diseñé y desarrollé interfaces web interactivas utilizando
              JavaScript y librerías como jQuery
            </li>
            <li className="text-sm">
              Colaboré con los equipos de diseño y marketing para
              implementar campañas digitales con diseño optimizado
            </li>
            <li className="text-sm">
              Realicé la maquetación de sitios web corporativos y
              landing pages responsivas utilizando Bootstrap.

            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={config}
          contentArrowStyle={{ borderRight: '7px solid  rgba( 255, 255, 255, 0.05 )' }}
          date="Período: 07/2021 - 07/2022"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">DEV MASTER PERU</h3>
          <h4 className="mb-4 italic">Desarrollador Full Stack y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li className="text-sm">
              Diseñé wireframes y prototipos interactivos en Figma,
              garantizando una experiencia de usuario intuitiva.

            </li>
            <li className="text-sm">
              Implementé APIs REST con Node.js y Express, conectando
              aplicaciones frontend con bases de datos MongoDB.
            </li>
            <li className="text-sm">
              Lideré el desarrollo frontend utilizando React y Tailwind
              CSS, asegurando un diseño moderno y responsivo.
            </li>
          </ul>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={config}
          contentArrowStyle={{ borderRight: '7px solid  rgba( 255, 255, 255, 0.05 )' }}
          date="Período: 08/2023 - 30/12/2024"
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
          icon={<BriefcaseIcon />}
        >
          <h3 className="text-2xl font-extrabold vertical-timeline-element-title">IDM TECHNOLOGY</h3>
          <h4 className="mb-4 italic">Desarrollador Full Stack y Diseñador UX/UI</h4>
          <ul className="list-disc list-inside flex flex-col gap-2">
            <li className="text-sm">
              Realicé mantenimiento y optimización de la base de datos,
              mejorando la velocidad de consultas y gestión de datos.

            </li>
            <li className="text-sm">
              Participé en la migración de un proyecto interno de una
              arquitectura monolítica a microservicios, mejorando la
              escalabilidad del sistema.
            </li>
            <li className="text-sm">
              Participé en la creación y publicación en la "App Store" de una aplicación móvil utilizando
              Genexus.
            </li>
          </ul>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<ChevronDoubleDownIcon />}
        />
      </VerticalTimeline>
    </section >
  )
}

export default Experiencia