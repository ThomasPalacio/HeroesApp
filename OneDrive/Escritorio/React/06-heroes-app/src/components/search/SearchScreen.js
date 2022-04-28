import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import {useForm} from '../hooks/useForm'
import queryString from 'query-string'

const SearchScreen = () => {

 const navigate = useNavigate()
 const location = useLocation()

 const {q = ''} = queryString.parse(location.search);

  const [formValues,handleInputChange] = useForm({
    searchText:q,
  })

 const {searchText}= formValues;

 
const heroFilter = useMemo(() => getHeroByName(q), [q])



  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`?q=${searchText}`)

  }



  return (
    <>
        <h1> Busqueda</h1>
        <hr></hr>

        <div className='row'>
            <div className='col-5'>
              <h4>Buscar</h4>
              <hr></hr>

              <form  onSubmit={handleSubmit}>

                <input 
                type="text"
                placeholder='Buscar tu heroe'
                className='form-control'
                name="searchText"
                autoComplete='off'
                value={ searchText }
                onChange={handleInputChange}
                />

                <button type="submit"
                className='btn btn-outline-primary mt-3'>
                  Buscar...
                </button>
              </form>
            </div>
            
            <div className='col-7'>
              <h4> Resultados</h4>
              <hr></hr>

              {
                (q === '')? 
                <div className='alert alert-info'>
                  Buscar un heroe
                </div>:(heroFilter === 0)
                &&<div className='alert alert-danger'>
                  No hay resultados {q}
                </div>
              }



              {
                heroFilter.map(hero => (
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

export default SearchScreen