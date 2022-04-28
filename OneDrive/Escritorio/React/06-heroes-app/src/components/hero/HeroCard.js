import React from 'react'
import {Link} from 'react-router-dom'
export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters}) => {
  
    const imagePath = `./assets/${id}.jpg`;


  
    return (
            <div className="col-4 animate__animated animate__fadeIn">
                <div className="card m-2">
                    <img src={imagePath} className="card-img" alt={superhero}/>
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {
                            (alter_ego !== characters)&& <p className="text-muted"><small className="text-muted">{characters}</small></p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id}`}>
                        <button className="btn btn-primary">Ver mas</button>
                        </Link>
                    </div>
                </div>
            </div>
  )
}
