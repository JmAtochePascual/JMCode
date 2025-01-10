
const Card = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md max-w-md">
      <img
        src="https://i.postimg.cc/MKBGMPrn/cafeteria.png"
        alt="Proyecto 1"
        className="w-full h-auto rounded-lg" />
      <h3 className="mt-4 text-xl font-bold text-center text-white">Cafeteria</h3>
      <p className="mt-2 text-sm text-center text-gray-400">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      </p>
      <div className="mt-4 flex flex-col gap-4 justify-between md:flex-row">
        <a
          href="https://github.com/jeancarlosatoche/Cafeteria"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Ver Proyecto
        </a>
        <a
          href="https://github.com/jeancarlosatoche/Cafeteria"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full block text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          Ver Proyecto
        </a>
      </div>
    </div>
  )
}

export default Card