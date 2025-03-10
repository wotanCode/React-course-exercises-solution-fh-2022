import { useNavigate, useLocation } from "react-router-dom";
import queryString from "query-string";
import { useForm } from "../../hooks/useForm";
import { getHeroByName } from "../../selectors/getHeroByName";
import { HeroCard } from "../hero/HeroCard";
import { useMemo } from "react";

export const SearchScreen = () => {

  const location = useLocation();
  const navigate = useNavigate();

  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  })

  const { searchText } = formValues;

  const heroesFileted = useMemo(() => getHeroByName(q), [q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
    // console.log(q)
  }

  return (
    <>
      <h1>Busqueda</h1>
      <hr />

      <div className="row">

        <div className="col-5">
          <h4>Buscar</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              className="form-control"
              placeholder="Buscar"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button
              type="submit"
              className="btn btn-outline-primary mt-1"
            >
              Buscar
            </button>
          </form>
        </div>

        <div className="col-7">
          <h4>Resultado</h4>
          <hr />

          {
            (q === '') ? (
              <div className='alert alert-info'>YO QUIERO UN HÉROE!</div>
            ) : (
              heroesFileted.length === 0 &&
              <div className='alert alert-danger'>No hay resultados: {q}</div>
            )
          }

          {
            heroesFileted.map(hero => (
              <HeroCard
                key={hero.id}
                {...hero}
              />
            ))
          }
        </div>

      </div>
    </>
  )
}