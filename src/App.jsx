import './assets/style.css'
import Nav from './components/nav'
import Hero from './components/hero'
import Card from './components/card'
import data from './data'

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            img={item.coverImg}
            rating={item.stats.rating}
            reviewCount={item.stats.reviewCount}
            location={item.location}
            title={item.title}
            price={item.price}
        />
    )
})        

  return (
    <div className="App">
      <Nav/>
      <Hero/>
      {cards}
  
    </div>
  )
}

export default App
