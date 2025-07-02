import { useState } from "react";

const cities = [
  { id: "1", name: "Kraków", country: "Polska" },
  { id: "2", name: "Paryż", country: "Francja" },
  { id: "3", name: "Madryt", country: "Hiszpania" },
  { id: "4", name: "Berlin", country: "Niemcy" },
  { id: "5", name: "Rzym", country: "Włochy" },
];

const App = () => {
  const [selectedCityId, setSelectedCityId] = useState("1");
  const selectedCity = cities.find((city) => city.id === selectedCityId);

  return (
    <div>
      <h1 htmlFor="city-select">Wybierz miasto:</h1>
      <select
        onChange={(e) => setSelectedCityId(e.target.value)}
        id="city-select"
      >
        {cities.map((city) => (
          <option key={city.id} value={city.id}>
            {city.name}
          </option>
        ))}
      </select>
      {selectedCity && (
        <p>
          Wybrałeś: {selectedCity.name}, {selectedCity.country}
        </p>
      )}
    </div>
  );
};
export default App;
