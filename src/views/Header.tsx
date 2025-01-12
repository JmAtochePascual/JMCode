import Navegacion from "../components/Navegacion"

const Header = () => {
  return (
    <header className="fixed z-50 top-0 left-0 w-full py-6 hidden md:block bg-black bg-opacity-35 backdrop-blur-lg">
      <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        <div className="flex items-center gap-2">
          <p className="text-white text-lg font-bold">JMCode</p>
        </div>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header