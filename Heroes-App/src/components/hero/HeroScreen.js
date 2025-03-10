import { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom"
import { getHeroByID } from "../../selectors/getHeroById";

// import batman from '../../assets/dc-batman.jpg'; // recurso estatico
import { heroImg } from "../../helpers/heroImages"; // recurso dinamico con webpack

export const HeroScreen = () => {
  const { heroeId } = useParams();
  const navigate = useNavigate();

  const hero = useMemo(() => getHeroByID(heroeId), [heroeId]);

  if (!hero) {
    return <Navigate to="/" />
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;

  const handleReturn = () => {
    navigate(-1);
  }

  // const imgPath = `/assets/img/${hero.id}.jpg`; //Recurso estatico
  const imgPath = heroImg(`./${hero.id}.jpg`);  //recurso dinamico con webpack

  return (

    <div className='row mt-5'>
      <div className='col-md-4'>
        <img
          // src={imgPath}
          src={imgPath}
          alt={superhero}
          className='img-thumbnail animate__animated animate__fadeInLeft'
        />
      </div>
      <div className="col-8">
        <h3>{superhero}</h3>
        <ul className="list-group list-group-flush animate__animated animate__fadeIn">
          <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
          <li className="list-group-item"><b>Alter-ego:</b> {alter_ego}</li>
          <li className="list-group-item"><b>First appearance:</b> {first_appearance}</li>

        </ul>
        <h5 className="mt-3">Characters</h5>
        <p>{characters}</p>

        <button
          className="btn btn-outline-info"
          onClick={handleReturn}
        >
          Regresar
        </button>

      </div>
    </div>
  )
}