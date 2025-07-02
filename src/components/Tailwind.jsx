const ExampleComponent = () => {
  return (
    <div className="bg-gray-100 p-8 min-h-screen flex justify-center items-start">
      <div className="max-w-3xl w-full bg-white p-6 rounded shadow-md">
        <h1 className="text-4xl font-bold mb-4 text-center text-indigo-600">
          Witamy w Tailwind
        </h1>

        <h2 className="text-2xl font-semibold mb-2 text-gray-800">
          Formularz kontaktowy
        </h2>
        <p className="mb-6 text-gray-600">
          Wypełnij poniższe pola, aby się z nami skontaktować.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Twoje imię"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <input
            type="email"
            placeholder="Twój email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Wyślij
          </button>
        </form>

        <div className="mt-10">
          <h2 className="text-2xl font-semibold mb-3 text-gray-800">
            Lista zadań
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li className="hover:text-indigo-600 cursor-pointer">
              Nauczyć się Tailwind CSS
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
              Zbudować projekt w React
            </li>
            <li className="hover:text-indigo-600 cursor-pointer">
              Opublikować portfolio
            </li>
          </ul>
        </div>

        <div className="mt-8 flex space-x-4">
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition">
            Akceptuj
          </button>
          <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
            Anuluj
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExampleComponent;
