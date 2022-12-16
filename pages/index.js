/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';

import girl from '../assets/girl.png';
import boy from '../assets/boy.png';
import castle from '../assets/castle.png';
import crown from '../assets/crown.png';
import magic from '../assets/magic-wand.png';
import robot from '../assets/robot.png';
import animal from '../assets/wild-animals.png';
import dino from '../assets/dinosaur.png';
import astronaut from '../assets/astronaut.png';
import knight from '../assets/knight.png';
import city from '../assets/office.png';
import forest from '../assets/forest.png';
import sea from '../assets/seaweed.png';
import mountain from '../assets/mountain.png';
import space from '../assets/planet.png';
import egypt from '../assets/pyramids.png';
import ma from '../assets/sword.png';
import eighties from '../assets/dance-floor.png';
import whenever from '../assets/question-mark.png';

function Home() {
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
  // const [nameIsFilled, setNameIsFilled] = useState(false);
  const [sexeIsClicked, setSexeIsClicked] = useState(false);
  const [jobIsClicked, setJobIsClicked] = useState(false);
  const [contextIsClicked, setContextIsClicked] = useState(false);
  const [areaIsClicked, setAreaIsClicked] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log('Calling OpenAI...');
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      // eslint-disable-next-line max-len
      body: JSON.stringify({
        userInputAge, userInputJob, userInputName, userInputSexe, userInputContext, userInputArea,
      }),
    });

    const data = await response.json();
    const { output } = data;
    console.log('OpenAI replied...', output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    setIsGenerated(true);
  };

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
    } */

  const resetValues = () => {
    setAgeIsClicked(false);
    // setNameIsFilled(false);
    setSexeIsClicked(false);
    setJobIsClicked(false);
    setContextIsClicked(false);
    setAreaIsClicked(false);
    setIsGenerated(false);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="root">
      <Head>
        <title>I-ya-gi - Generateur d&apos;histoires</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>I-ya-gi</h1>
          </div>
          <div
            className="reload"
            onClick={resetValues}
          >
            <p>Créer une nouvelle histoire</p>
          </div>
        </div>

        {/* Set reader age */}
        <div className="page section age" style={{ display: ageIsClicked ? 'none' : '' }}>
          <div className="rules">
            <h2>Génerez une histoire personnalisée avec votre enfant !</h2>
            <h3>Clique sur les boutons pour définir tous les paramètres de ton histoire.</h3>
          </div>
          <div className='questions'>
            <label>Quel age as tu?</label>
            <div className="buttons">
              <div
                className="button"
                value="moins de 3 ans"
                onClick={onUserChangedAge}
              >
                <p>- 3 ans</p>
              </div>
              <div
                className="button"
                value="entre 5 et 8 ans"
                onClick={onUserChangedAge}
              >
                <p>3 - 5 ans</p>
              </div>
              <div
                className="button"
                value="entre 8 et 12 ans"
                onClick={onUserChangedAge}
              >
                <p>5 - 8 ans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Set character parameters */}
        <div className="page section sexe" style={{ display: sexeIsClicked ? 'none' : '' }}>
          <h2 className="rules">Choisi ton personnage !</h2>
          <label>Ton personnage est</label>
          <div className="buttons">
            <div
              className="button"
              value="Feminin"
              onClick={onUserChangedSexe}
            >
              <Image className="button-image" src={girl} alt="fille" />
            </div>
            <div
              className="button"
              value="Masculin"
              onClick={onUserChangedSexe}
            >
              <Image className="button-image" src={boy} alt="garçon" />
            </div>
          </div>
        </div>

        <div className="page job" style={{ display: jobIsClicked ? 'none' : '' }}>
          <label>Qui est ton personnage?</label>
          <div className="buttons">
            <div
              className="button"
              value="une personne de sang royal"
              onClick={onUserChangedJob}
            >
              <Image className="button-image" src={crown} alt="prince.sse" />
            </div>
            <div
              className="button"
              value="un guerrier ou chevalier"
              onClick={onUserChangedJob}
            >
              <Image className="button-image" src={knight} alt="knight" />
            </div>
            <div
              className="button"
              value="un animal"
              onClick={onUserChangedJob}
            >
              <Image className="button-image" src={animal} alt="animal" />
            </div>
            <div
              className="button"
              value="une créature magique"
              onClick={onUserChangedJob}
            >
              <Image className="button-image" src={magic} alt="magicien" />
            </div>
            <div
              className="button"
              value="un austronaute aventurier"
              onClick={onUserChangedJob}
            >
              <Image className="button-image" src={astronaut} alt="astronaute" />
            </div>
            <div
              className="button"
              value="un robot intelligent et qui parle"
              onClick={onUserChangedJob}
            >
              <Image className="button-image" src={robot} alt="robot" />
            </div>
          </div>
        </div>

        <div className="page context" style={{ display: contextIsClicked ? 'none' : '' }}>
          <label>Où se passe ton histoire ?</label>
          <div className="buttons">
            <div
              className="button"
              value="dans un chateau"
              onClick={onUserChangedContext}
            >
              <Image className="button-image" src={castle} alt="Chateau" />
            </div>
            <div
              className="button"
              value="en ville"
              onClick={onUserChangedContext}
            >
              <Image className="button-image" src={city} alt="Ville" />
            </div>
            <div
              className="button"
              value="dans une foret"
              onClick={onUserChangedContext}
            >
              <Image className="button-image" src={forest} alt="Foret" />
            </div>
            <div
              className="button"
              value="à la montagne"
              onClick={onUserChangedContext}
            >
              <Image className="button-image" src={mountain} alt="Montagne" />
            </div>
            <div
              className="button"
              value="sous la mer"
              onClick={onUserChangedContext}
            >
              <Image className="button-image" src={sea} alt="Mer" />
            </div>
            <div
              className="button"
              value="dans l'espace"
              onClick={onUserChangedContext}
            >
              <Image className="button-image" src={space} alt="Espace" />
            </div>
          </div>
        </div>

        {/* epoque */}

        <div className="page area" style={{ display: areaIsClicked ? 'none' : '' }}>
          <label>Quand est ce que cela à lieu ?</label>
          <div className="buttons">
            <div
              className="button"
              value="à l'époque des dinosaures"
              onClick={onUserChangedArea}
            >
              <Image className="button-image" src={dino} alt="Epoque des dinosaures" />
            </div>
            <div
              className="button"
              value="en egypte antique"
              onClick={onUserChangedArea}
            >
              <Image className="button-image" src={egypt} alt="Egypte antique" />
            </div>
            <div
              className="button"
              value="au moyen age"
              onClick={onUserChangedArea}
            >
              <Image className="button-image" src={ma} alt="Moyen Age" />
            </div>
            <div
              className="button"
              value="dans les années 80 avec des hippies et de la musique disco"
              onClick={onUserChangedArea}
            >
              <Image className="button-image" src={eighties} alt="Années 80" />
            </div>
            <div
              className="button"
              value="à un moment important de l'histoire"
              onClick={onUserChangedArea}
            >
              <Image className="button-image" src={whenever} alt="N'importe quand" />
            </div>
          </div>
        </div>

        <div className="page section perso name" style={{ display: isGenerated ? 'none' : '' }}>
          <label>Le personnage s&apos;appelle </label>
          <textarea
            className="text-name"
            placeholder="Choisi le nom de ton personnage."
            value={userInputName}
            onChange={onUserChangedName}
          />
          {/* <button className='confirm-name' onClick={setName}>Confirmer le nom</button> */}

          {/* Button for generation */}
          <div className="generate-buttons">
            <a
              className={isGenerating ? 'loading' : 'generate-button'}
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? <span className="loader" /> : <p>Créer mon histoire</p>}
              </div>
            </a>
          </div>

        </div>

        {/* OUTPUT */}
        <div className="page result" style={{ display: isGenerated ? '' : 'none' }}>
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

          <div
            className="button restart"
            onClick={resetValues}
          >
            <p>Créer une nouvelle histoire</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Home;
