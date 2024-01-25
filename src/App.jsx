import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { fetchFact } from './store/actions'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const { current, favs, loading, error } = useSelector((state) => state)
  const dispatch = useDispatch()

  const addFav = () => {

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

        <h1>{current}</h1>
        <div className="card">

          <button onClick={addFav}>
            favladım
          </button>
          <button onClick={() => dispatch(fetchFact)}>
            fetch fact Sebastian
          </button>

        </div>
      </>}
      <div>
        <h2>Favoriler</h2>
        {favs.map((fav, index) => (
          <p key={index}>{fav}</p>
        ))}
      </div>

    </div>

  )
}

export default App
