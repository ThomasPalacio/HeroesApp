import { useMemo } from 'react';
import { useParams, Navigate,useNavigate } from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';
import { heroImages } from '../helpers/heroImages';



export const HeroScreen = () => {

  
  const {heroId} = useParams();

  const navigate = useNavigate();
  
  const hero = useMemo(() => getHeroById(heroId), [heroId])
  
  if (!hero) {
    return <Navigate to='/' />
  }

  const handleReturn = () => {
   navigate(-1)
  }


  

  return (
    <div className="row mt-5">
      <div className="col-4">
      <img src={heroImages(`./${heroId}.jpg`)} alt={hero.superhero} className="img-thumbnail animate__animated animate__fadeInLeftBig"/>
      </div>
      <div className="col-8 animate__animated animate__fadeInRightBig">
          <h3>{hero.superhero}</h3>
          <ul className="list-group">
            <li className="list-group-item">
              <b>Alter Ego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>Primer Aparicion:</b> {hero.first_appearance}
            </li>
          </ul>
          <div className="mt-3">
            <h5>Characters</h5>
            <p>{hero.characters}</p>
          </div>

          <button
          onClick={handleReturn}
          className="btn btn-primary"
          >
            Regresar
          </button>
      </div>
    </div>
  )
}
