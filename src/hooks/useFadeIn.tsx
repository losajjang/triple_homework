import { useState, useEffect } from "react";

const useFadeIn = (): [boolean, boolean] => {
  const [opacity, setOpacity] = useState(false);
  const [transY, setTransY] = useState(false);

  useEffect(() => {
    setOpacity(true);
    setTransY(true);
  },[]);

  return [opacity, transY];
};

export default useFadeIn;
 