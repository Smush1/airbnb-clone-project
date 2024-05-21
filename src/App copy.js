import Airbnb from './Airbnb.svg';
import heroSingleImage from './images/hero-image.png'
import './App.css';
import Header from './header';
import ImageSection from './image-section';
import Card from './card';

import Joke from './joke';
import {data} from './data'

console.log(data)

function App() {
//const colors = ["red", "blue", "green", "black"]

const cards= data

const AirBnbCards = cards.map((card)=> {
return <Card 
key={card.id}
imgsrc = {card.imgsrc1}
ratings={card.ratings1}
country={card.country1}
cost= {card.cost1}
message={card.message}
openSpots ={card.openSpots}
location={card.location}
 />})

 
  return (
    <div>
      {/* {colors.map((item)=> {return <h3>{item}</h3> })} */}
    <Header 
    brandlogo = {Airbnb}/>
    <ImageSection 
    heroImage ={heroSingleImage}  />
    <div className='all-card-container'>
           {AirBnbCards}
    </div>
    < Joke 
    setup = "This is Joke 1"
    punchline="This is punchline 1"/>
    < Joke 
    setup = "This is Joke 2"
    punchline="This is punchline 2"
    />
    < Joke 
    setup = "This is Joke 3"
    punchline="This is punchline 3"/>
    </div>
  );
}

export default App;
