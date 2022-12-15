import Head from 'next/head';
import Image from 'next/image';
import girl from '../assets/girl.png';
import boy from '../assets/boy.png';
import { useState } from 'react';

const Home = () => {
  const [userInputAge, setUserInputAge] = useState('');
  const [userInputName, setUserInputName] = useState('');
  const [userInputSexe, setUserInputSexe] = useState('');
  const [userInputJob, setUserInputJob] = useState('');
  const [userInputContext, setUserInputContext] = useState('');
  const [userInputArea, setUserInputArea] = useState('');


  const [apiOutput, setApiOutput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const [ageIsClicked, setAgeIsClicked] = useState(false);
  //const [nameIsFilled, setNameIsFilled] = useState(false);
  const [sexeIsClicked, setSexeIsClicked] = useState(false);
  const [jobIsClicked, setJobIsClicked] = useState(false);
  const [contextIsClicked, setContextIsClicked] = useState(false);
  const [areaIsClicked, setAreaIsClicked] = useState(false);


  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
  
    console.log("Calling OpenAI...")
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInputAge, userInputJob, userInputName, userInputSexe, userInputContext, userInputArea }),
    });

    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text)

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    setIsGenerated(true);
  }

  const onUserChangedAge = (event) => {
    console.log(event.target.value);
    setUserInputAge(event.target.value);
    setAgeIsClicked(true);
  };

  const onUserChangedName = (event) => {
    setUserInputName(event.target.value);
  };

  const onUserChangedSexe = (event) => {
    console.log(event.target.value);
    setUserInputSexe(event.target.value);
    setSexeIsClicked(true);
  };

  const onUserChangedJob = (event) => {
    setUserInputJob(event.target.value);
    setJobIsClicked(true);
  };

  const onUserChangedContext = (event) => {
    setUserInputContext(event.target.value); 
    setContextIsClicked(true);
  };

  const onUserChangedArea = (event) => {
    setUserInputArea(event.target.value); 
    setAreaIsClicked(true);
  };

  /** const setName = (event) => {
    setNameIsFilled(true);
  }*/

  const resetValues = (event) => {
    setAgeIsClicked(false);
    //setNameIsFilled(false);
    setSexeIsClicked(false);
    setJobIsClicked(false);
    setIsGenerated(false)
  }
  

  
  return (
    <div className="root">
      <Head>
        <title>Sou-ri - Generateur d'histoires</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Sou-ri</h1>
          </div>
          <div className="header-subtitle">
            <h2>Génerez une histoire personnalisée avec votre enfant !</h2>
          </div>
        </div>

        

        {/* Set reader age */}
        <div className='page section age' style={{display: ageIsClicked ? 'none' : ''}}>
          <h2 className="rules">Clique sur les boutons pour définir tous les paramètres de ton histoire.</h2>
          <label>Quel age as tu?</label> 
          <div className='buttons'>
            <button value="moins de 3 ans" className="button-age" id="age-young"
                onClick={onUserChangedAge}>
                  moins de 3 ans </button>
            <button value="entre 5 et 8 ans" className="button-age" id="age-middle"
                onClick={onUserChangedAge}>
                  3 à 5 ans </button>
            <button value="entre 8 et 12 ans" className="button-age" id="age-old"
                onClick={onUserChangedAge}>
                5 à 8 ans </button>
          </div>
        </div>


        {/* Set character parameters */}
        
          <div className='page section sexe' style={{display: sexeIsClicked ? 'none' : ''}}>
          <h2 className="rules">Choisi ton personnage !</h2>
            <label>Ton personnage est</label> 
            <div className='buttons'>
              <button value="Feminin" className="button-perso" id="feminin"
                  onClick={onUserChangedSexe}>👩🏽</button>
              <button value="Masculin" className="button-perso" id="masculin"
                onClick={onUserChangedSexe}> Garcon </button>
            </div>
          </div>
          

        <div className='page job' style={{display: jobIsClicked ? 'none' : ''}}>
          <label>Qui est ton personnage?</label> 
          <div className='buttons'>
            <button value="une personne de sang royal" className="button-job" id="prince"
                onClick={onUserChangedJob}> Prince/Princesse </button>
            <button button value="un guerrier ou chevalier" className="button-job" id="chevalier"
                onClick={onUserChangedJob}> chevalier </button>
            <button value="un animal" className="button-job" id="animal"
                onClick={onUserChangedJob}> Animal </button>
            <button value="une créature magique" className="button-job" id="sportif"
                onClick={onUserChangedJob}> magicien / magique</button>
            <button value="un austronaute aventurier" className="button-job" id="alien"
                onClick={onUserChangedJob}> austronaute</button>
            <button value="un objet animé et qui parle" className="button-job" id="alien"
                onClick={onUserChangedJob}> objet</button>
          </div>
        </div>

        <div className='page context' style={{display: contextIsClicked ? 'none' : ''}}>
          <label>Où se passe ton histoire ?</label> 
          <div className='buttons'>
            <button value="dans une foret" className="button-context"
                onClick={onUserChangedContext}> Dans la foret </button>
            <button value="à la campagne" className="button-context"
                onClick={onUserChangedContext}> Campagne </button>
            <button value="sous la mer" className="button-context"
                onClick={onUserChangedContext}> mer </button>
            <button value="dans un chateau" className="button-context"
                onClick={onUserChangedContext}> chateau </button>
            <button value="en ville" className="button-context"
                onClick={onUserChangedContext}> Ville </button>
            <button value="dans l'espace" className="button-context"
                onClick={onUserChangedContext}> Espace </button>
          </div>
        </div>

        {/* epoque */}

        <div className='page area' style={{display: areaIsClicked ? 'none' : ''}}>
          <label>Quand est ce que cela à lieu ?</label> 
          <div className='buttons'>
            <button value="à l'époque des dinosaures" className="button-area"
                onClick={onUserChangedArea}> dino </button>
            <button value="en egypte antique" className="button-area"
                onClick={onUserChangedArea}> egypte </button>
            <button value="au moyen age" className="button-area"
                onClick={onUserChangedArea}> moyen age </button>
            <button value="dans les années 80 avec des hippies et de la musique disco" className="button-area"
                onClick={onUserChangedArea}> 80's </button>
            <button value="dans un futur technophile remplis de robots, voitures volantes et innovations" className="button-area"
                onClick={onUserChangedArea}> futur </button>
            
          </div>
        </div>

        <div className='page section perso name' style={{display: isGenerated ? 'none' : ''}}>
          <label>Son nom est </label> 
          <textarea
          className="text-name"
          placeholder="Choisi le nom de ton personnage."
          value={userInputName}
          onChange={onUserChangedName}/>
          {/*<button className='confirm-name' onClick={setName}>Confirmer le nom</button>*/}
          
          {/* Button for generation */}
          <div className="generate-buttons">
            <a className={isGenerating ? 'loading' : 'generate-button'}
          onClick={callGenerateEndpoint}>
              <div className="generate">
              {isGenerating ? <span className="loader"></span> : <p>Créer mon histoire</p>}
             </div>
            </a>
          </div>
        
        </div>
        
    
        
        

      {/* OUTPUT */}
      <div className='page result'>
        {apiOutput && (
          <div className="output">
            <div className="output-header-container">
              <div className="output-header">
                <h3>Mon histoire</h3>
              </div>
            </div>
            <div className="output-content">
              <p>{apiOutput}</p>
            </div>
          </div>
        )}

        <button className='restart' onClick={resetValues}>Créer une nouvelle histoire</button>
      </div>

      </div>
    </div>
  );
};

export default Home;
