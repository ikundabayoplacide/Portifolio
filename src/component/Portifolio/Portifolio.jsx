import React from 'react'
import './Portifolio.css'
import sport from '../../Assets/sport.png';
import food from '../../Assets/food.png';
import Shun from '../../Assets/Shun.png';
import Webteck from '../../Assets/Web.png';
import photo1 from '../../Assets/photo1.png';
import photo from '../../Assets/foodcategory (2).png';
function Portifolio() {
  return (
    <section id='portifolio'>
    <h5>My Recent Work</h5>
    <h2> Portfolio</h2>
    <div className="container about_portifolio">
    <article className='item'>
      <div className="potImage">
        <img src={sport} alt="world" width={300} height={250}/>
      </div>
      <div className='maincontent'>
      <h3>Sport supporting project</h3>
      <div className="cta">
      <a href="https://github.com" className='btn' target="_blank" rel="noreferrer">GitHub</a>
      <a href="http://localhost:3002/" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
      </div>
      </div>
    </article>
    <article className='item'>
      <div className="potImage">
        <img src={food} alt="world" width={300} height={250}/>
      </div>
      <div className='maincontent'>
      <h3>Learn Basics for Balanced Diet </h3>
      <div className="cta">
      <a href="https://github.com/ikundabayoplacide/REACTJS-FOR-LEARNING-BALANCED-DIET" className='btn' target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://.com" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
      </div>
      </div>
    </article>
    <article className='item'>
      <div className="potImage">
      <img src={photo} alt="world" width={300} height={250}/>
      </div>
      <div className='maincontent'>
      <h3>Mobile app for Directing people Basic food according to there deseases</h3>
      <div className="cta">
      <a href="https://github.com/ikundabayoplacide/Food-react-native-app" className='btn' target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://.com" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
      </div>
      </div>
    </article>
    
    <article className='item' id='hide'>
      <div className="potImage">
        <img src={photo1} alt="world" width={300} height={350}/>
      </div>
      <div className='maincontent'>
      <h3>Mobile app for Individual </h3>
      <div className="cta">
      <a href="https://github.com/ikundabayoplacide/Mobile-small-app-for-Jane" className='btn' target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://.com" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
      </div>
      </div>
    </article>
    <article className='item' id='hide'>
      <div className="potImage">
        <img src={Shun} alt="world" width={300} height={350}/>
      </div>
      <div className='maincontent'>
      <h3>Mobile App for School Management Both Student & Teatcher</h3>
      <div className="cta">
      <a href="https://github.com/michell8176/PlacideFrontendTrial/tree/Placide-dev" className='btn' target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://.com" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
      </div>
      </div>
    </article>
    <article className='item' id='hide'>
      <div className="potImage">
        <img src={Webteck} alt="world" width={300} height={350}/>
      </div>
      <div className='maincontent'>
      <h3>Tecknology Support website </h3>
      <div className="cta">
      <a href="https://github.com/ikundabayoplacide/webTeck" className='btn' target="_blank" rel="noreferrer">GitHub</a>
      <a href="https://.com" className='btn btn-primary' target='_blank' rel="noreferrer"> Live Demo</a>
      </div>
      </div>
    </article>
    </div>
     

    </section>
  )
}

export default Portifolio