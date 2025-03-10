//import { useState, useEffect } from "react";
// import PropTypes  from 'prop-types'

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {

  // const [images, setImages] = useState([])

  const { data:images, loading }  = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {
        loading && 'Loading'
      }

      <div className="card-grid">

        {images.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))

        }
      </div>
    </>
  )
}

// GifGrid.PropTypes = {
//   category: PropTypes.string.isRequired,
// }