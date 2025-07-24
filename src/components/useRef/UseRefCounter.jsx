import { useRef, useState } from "react";

const ClickCounter = () => {
  const clickCount = useRef(0);
  const [visibleCount, setVisibleCount] = useState(null);

  const handleClick = () => {
    clickCount.current += 1;
  };

  const handleShow = () => {
    setVisibleCount(clickCount.current);
  };

  return (
    <>
      <button onClick={handleClick}>Kliknij mnie</button>
      <button onClick={handleShow}>Pokaż wynik</button>
      <p>Licznik kliknięć: {visibleCount ?? "-"}</p>
    </>
  );
};

export default ClickCounter;
