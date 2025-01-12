import Cabecera from "../components/Cabecera"
import Card from "../components/Card"

const Proyectos = () => {
  return (
    <section className="w-11/12 max-w-7xl mx-auto pt-20 mb-20 md:pt-30 lg:pt-40 lg:mb-40" id="proyectos">
      <Cabecera
        title="Proyectos"
        description="Explora mi portafolio de proyectos, donde he construido soluciones digitales innovadoras y eficientes. Recuerda que puedes ver más de mis proyectos en mi repositorio de GitHub."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        <Card
          title="LA CAFÉRIA"
          description="Bienvenido a La Cafería, un proyecto web que captura la esencia y pasión por el café de calidad. Nuestro sitio web está diseñado para transportar a los visitantes a una experiencia única, donde cada elemento visual tiene un diseño..."
          image="https://i.postimg.cc/MKBGMPrn/cafeteria.png"
          urlPage="https://jmatochepascual.github.io/Cafeteria/"
          urlCode="https://github.com/JmAtochePascual/Cafeteria"
          iconos={['mongo', 'vite', 'tailwind', 'react']}
        />
        <Card
          title="NUCLEUS"
          description="Nucleus es una innovadora plataforma de pagos móviles diseñada para transformar tu celular en una poderosa herramienta financiera. La página web presenta una interfaz moderna y atractiva que destaca las principales..."
          image="https://i.postimg.cc/7P5ZmJG8/600shots-so.png"
          urlPage="https://jmatochepascual.github.io/Nucleus/"
          urlCode="https://github.com/JmAtochePascual/Nucleus"
          iconos={['mongo', 'vite', 'tailwind', 'react']}
        />
        <Card
          title="TECHPRO"
          description="TechPRO es una página web moderna y elegante diseñada para una tienda especializada en audífonos de alta gama. El sitio presenta un diseño minimalista y profesional que resalta las características premium de los productos..."
          image="https://i.postimg.cc/FK2N6DkM/techpro.png"
          urlPage="https://jmatochepascual.github.io/TechPRO/"
          urlCode="https://github.com/JmAtochePascual/TechPRO"
          iconos={['mongo', 'vite', 'tailwind', 'react']}
        />
        <Card
          title="ARQUITECTURA BOSQUE"
          description="Arquitectura Bosque ofrece una plataforma web profesional enfocada en servicios de diseño y construcción arquitectónica en armonía con entornos naturales. Sitio corporativo tiene una sección dedicada a..."
          image="https://i.postimg.cc/7PzMj6dd/arquitectura.png"
          urlPage="https://jmatochepascual.github.io/Arquitectura/"
          urlCode="https://github.com/JmAtochePascual/Arquitectura"
          iconos={['mongo', 'vite', 'tailwind', 'react']}
        />
        <Card
          title="REAL STATE"
          description="Real State es una página web moderna y elegante diseñada para una agencia de bienes raíces. El sitio presenta un diseño minimalista y profesional que resalta las características de los productos ofrecidos..."
          image="https://i.postimg.cc/FsqWmWS4/realstate.png"
          urlPage="https://jmatochepascual.github.io/RealState/"
          urlCode="https://github.com/JmAtochePascual/RealState"
          iconos={['mongo', 'vite', 'tailwind', 'react']}
        />
        <Card
          title="CAROLINA SPA"
          description="Carolina Spa es una página web moderna y elegante diseñada para un centro de spa. El sitio presenta un diseño minimalista y profesional que resalta las características premium de los productos..."
          image="https://i.postimg.cc/MGwYKhKh/carolinaspa.png"
          urlPage="https://jmatochepascual.github.io/CarolinaSpa/"
          urlCode="https://github.com/JmAtochePascual/CarolinaSpa"
          iconos={['mongo', 'vite', 'tailwind', 'react']}
        />
      </div>
    </section>
  )
}

export default Proyectos