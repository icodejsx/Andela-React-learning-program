import { useEffect } from 'react'
import Head from './components/head'

function App() {

  useEffect(() => {
    const fetchHouse = async () => {
      const rsp = await fetch('/house.json')
      const houses = await rsp.json()
    }
    fetchHouse()
  }, [])
  return (
    <div>
      <Head />
    </div>
  )
}

export default App
