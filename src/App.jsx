import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import axios from 'axios'

import { useSelector, useDispatch } from 'react-redux'

function App() {
  const current = useSelector((state) => state.current)
  const [count, setCount] = useState(0)
  const [fact, setFact] = useState("")
  const [favs, setFavs] = useState([])

  useEffect(() => {
    axios.get('https://catfact.ninja/fact')
      .then(function (response) {
        // handle success
        console.log(response);
        setFact(response.data.fact)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, [])


  const addFav = () => {
    setFavs([...favs, fact])
  }

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
