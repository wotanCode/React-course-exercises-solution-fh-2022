import { useEffect, useState } from "react"

export const Message = () => {

  const [coors, setCoords] = useState({x:0, y:0})
  const {x,y} = coors;

  useEffect(() => {

    const mouseMove = (e) => {
      const coors = {x: e.x, y: e.y}
      console.log(coors)
      setCoords(coors)
    }

    window.addEventListener('mousemove',mouseMove);

    return () => {
      window.removeEventListener('mousemove',mouseMove);
    };
  }, []);
  

  return (
    <div>
      <h3>eres genial!</h3>
      <h4>x: {x}</h4>
      <h4>y: {y}</h4>
    </div>
  )
}
