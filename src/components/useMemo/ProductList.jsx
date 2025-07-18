import { useState, useMemo } from "react";

const products = [
  { id: 1, name: "Jabłko", category: "food", price: 3 },
  { id: 2, name: "Koszulka", category: "clothing", price: 50 },
  { id: 3, name: "Laptop", category: "electronics", price: 3000 },
  { id: 4, name: "Chleb", category: "food", price: 5 },
  { id: 5, name: "Słuchawki", category: "electronics", price: 200 },
  { id: 6, name: "Spodnie", category: "clothing", price: 120 },
];

export const ProductList = () => {
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("asc");

  const filteredAndSorted = useMemo(() => {
    let result = [...products];

    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    result.sort((a, b) => {
      return sort === "asc" ? a.price - b.price : b.price - a.price;
    });

    return result;
  }, [category, sort]);

  return (
    <div className="flex flex-col p-10">
      <h2>Lista produktów</h2>
      <label>
        Filtruj kategorię:
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">Wszystkie</option>
          <option value="food">Jedzenie</option>
          <option value="clothing">Ubrania</option>
          <option value="electronics">Elektronika</option>
        </select>
      </label>

      <label>
        Sortowanie:
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="asc">Cena rosnąco</option>
          <option value="desc">Cena malejąco</option>
        </select>
      </label>

      <ul>
        {filteredAndSorted.map((item) => (
          <li key={item.id}>
            {item.name} – {item.price} zł
          </li>
        ))}
      </ul>
    </div>
  );
};
