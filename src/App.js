import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

function request(options) {
  return axios({
    baseURL: '/api',
    ...options,
  })
}

function App() {
  const [data, setData] = useState()

  const fetchData = async () => {
    const { data } = await request({
      url: '/user',
    })
    setData(data.title)
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {data}
        </a>
      </header>
    </div>
  )
}

export default App
