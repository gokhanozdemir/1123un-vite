import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { fetchFact } from './store/actions'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const current = useSelector((state) => state.current)
  const [count, setCount] = useState(0)
  const [fact, setFact] = useState("")
  const [favs, setFavs] = useState([])
  const dispatch = useDispatch()

  const addFav = () => {
    setFavs([...favs, fact])
  }


  useEffect(() => {
    dispatch(fetchFact())
  }, [])

  return (
    <div className="App">

      <p>🐈  🐈‍⬛</p>
      <h1>{current}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={addFav}>
          favladım
        </button>
        <button onClick={() => dispatch(fetchFact)}>
          fetch fact Sebastian
        </button>
      </div>

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
