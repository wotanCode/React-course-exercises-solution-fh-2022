import { Link } from 'react-router-dom';

const heroImg = require.context('../../assets/img', true); //webpack

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {

  // const imagePath = `/assets/img/${id}.jpg`
  const imagePath = heroImg(`./${id}.jpg`);  //recurso dinamico con webpack

  return (
    <div className="col animate__animated animate__fadeIn">
      <div className="card">

        <div className="row no-gutters">
          <div className="col-4">
            <img
              src={imagePath}
              className="card-img"
              alt={superhero}
            />
          </div>
          <div className='col-8'>
            <div className="card-body">
              <h5 className="card-title">{superhero}</h5>
              <p className="card-text">{alter_ego}</p>
              <p className="card-text">{publisher}</p>
              {
                (alter_ego !== characters) &&
                <p className="text-muted">{characters}</p>
              }
              <p className="card-text">
                <small className="text-muted">{first_appearance}</small>
              </p>

              <Link to={`/hero/${id}`}>
                mas...
              </Link>

            </div>
          </div>

        </div>


      </div>
    </div>
  )
}