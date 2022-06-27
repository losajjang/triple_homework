import { useState, useEffect } from "react";

const useFadein = (): [boolean, boolean] => {
  const [opacity, setOpacity] = useState(false);
  const [transY, setTransY] = useState(false);

  useEffect(() => {
    setOpacity(true);
    setTransY(true);
  });

  return [opacity, transY];
};

export default useFadein;
