import React, { useState ,useEffect} from 'react'
import { Link } from 'react-router-dom'
import LogoImg  from '../../assets/images/logo.svg'
import LandingImg  from '../../assets/images/landing.svg'
import studyIcon  from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'
import api from '../../Services/api'


import './styles.css';

function Landing() {

  const [totalConnections,setTotalcoonections]=useState(0);

   useEffect(()=>{
     api.get('connections').then(response=>{
       const {total} = response.data;
       setTotalcoonections(total);
     })
   },[])

  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div id="logo-container">
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img
          src={LandingImg}
          alt="Plataforma de estudos"
          className="hero-image"
        />
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar Aulas" />
            Dar Aulas
          </Link>
        </div>
        <span className="totalconnections">
          Total de {totalConnections} conexões já realizadas{" "}
          <img src={purpleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;