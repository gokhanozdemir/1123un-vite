import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { fetchFact, addFav, removeFav } from './store/actions'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const { current, favs, loading, error } = useSelector((state) => state)
  const dispatch = useDispatch()

  const addFavHandler = () => {
    dispatch(fetchFact())
    dispatch(addFav(current))
  }

  const removeFavHandler = (fav) => {
    dispatch(removeFav(fav))
  }

  useEffect(() => {
    dispatch(fetchFact())
  }, [])

  return (
    <div className="App">
      <p>🐈  🐈‍⬛</p>
      {loading && <p>loading...</p>}
      {error && <p>error...</p>}
      {current && <>
        <div className="card">
          <button onClick={addFavHandler}>
            favladım
          </button>
          <button onClick={() => dispatch(fetchFact())}>
            fetch fact Sebastian
          </button>
        </div>
        <h1>{current}</h1>

      </>}
      <div>
        <h2>Favoriler</h2>
        {favs.map((fav, index) => (
          <div>
            <p key={index}>{fav}</p>
            <button onClick={() => removeFavHandler(fav)}>
              unfarovladım
            </button>
          </div>

        ))}
      </div>

    </div>

  )
}

export default App
