import { useEffect, useState, } from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import Head from './components/head'
import HouseFilter from './components/HouseFilter'

function App() {

  const [allHouses, setAllHouses] = useState([])
  useEffect(() => {
    const fetchHouse = async () => {
      const rsp = await fetch('/house.json')
      const houses = await rsp.json()
      setAllHouses(houses)
    }
    fetchHouse()
  }, [])

  // randomly selecting houses 
  // const featuredHouse = useMemo(() => {
  //   if (allHouses.length) {
  //     const randomIndex = Math.floor(Math.random() * allHouses.length)
  //     return allHouses[randomIndex]
  //   }
  // }, [allHouses])




  return (
    <Router>
      <div>
        <Head logo='/logoo.png' headingtext="Providing houses all over the World" />
        <HouseFilter allHouses={allHouses} />
        <Switch>
          <Router path="/">

          </Router>
        </Switch>
      </div>
    </Router>
  )
}

export default App
