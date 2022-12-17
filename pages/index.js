/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

import girl from "../assets/girl.png";
import boy from "../assets/boy.png";
import castle from "../assets/castle.png";
import crown from "../assets/crown.png";
import magic from "../assets/magic-wand.png";
import robot from "../assets/robot.png";
import animal from "../assets/wild-animals.png";
import dino from "../assets/dinosaur.png";
import astronaut from "../assets/astronaut.png";
import knight from "../assets/knight.png";
import city from "../assets/office.png";
import forest from "../assets/forest.png";
import sea from "../assets/seaweed.png";
import mountain from "../assets/mountain.png";
import space from "../assets/planet.png";
import egypt from "../assets/pyramids.png";
import ma from "../assets/sword.png";
import eighties from "../assets/dance-floor.png";
import whenever from "../assets/question-mark.png";
/* 
import {
  girl,
  boy,
  castle,
  crown,
  magic,
  robot,
  animal,
  dino,
  astronaut,
  knight,
  city,
  forest,
  sea,
  mountain,
  space,
  egypt,
  ma,
  eighties,
  whenever,
} from "../assets"; */

const AgeComponent = ({ setUserInputAge }) => {
  return (
    <div className="page section age">
      <div className="rules">
        <h2>Génerez une histoire personnalisée avec votre enfant !</h2>
        <h3>
          Clique sur les boutons pour définir tous les paramètres de ton
          histoire.
        </h3>
      </div>
      <div className="questions">
        <p className="label">Quel age as tu?</p>
        <div className="buttons">
          <div
            className="button"
            onClick={() => setUserInputAge("moins de 3 ans")}
          >
            <p>- de 3 ans</p>
          </div>
          <div
            className="button"
            onClick={() => setUserInputAge("entre 3 et 4 ans")}
          >
            <p>3 - 4 ans</p>
          </div>
          <div
            className="button"
            onClick={() => setUserInputAge("entre 5 et 6 ans")}
          >
            <p>5 - 6 ans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GenderComponent = ({ setUserInputGender }) => {
  return (
    <div className="page section sexe">
      <h2 className="rules">Choisi ton personnage !</h2>
      <p className="label">Ton personnage est</p>
      <div className="buttons">
        <div
          className="button"
          value="Feminin"
          onClick={() => setUserInputGender("feminin")}
        >
          <Image className="button-image" src={girl} alt="fille" />
        </div>
        <div
          className="button"
          value="Masculin"
          onClick={() => setUserInputGender("masculin")}
        >
          <Image className="button-image" src={boy} alt="garçon" />
        </div>
      </div>
    </div>
  );
};

const JobComponent = ({ setUserInputJob }) => {
  return (
    <div className="page job">
      <p className="label">Qui est ton personnage?</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputJob("une personne de sang royal")}
        >
          <Image className="button-image" src={crown} alt="prince.sse" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("un guerrier ou chevalier")}
        >
          <Image className="button-image" src={knight} alt="knight" />
        </div>
        <div className="button" onClick={() => setUserInputJob("un animal")}>
          <Image className="button-image" src={animal} alt="animal" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("une créature magique")}
        >
          <Image className="button-image" src={magic} alt="magicien" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("un cosmonaute")}
        >
          <Image className="button-image" src={astronaut} alt="astronaute" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("un robot intelligent et qui parle")}
        >
          <Image className="button-image" src={robot} alt="robot" />
        </div>
      </div>
    </div>
  );
};

const ContextComponent = ({ setUserInputContext }) => {
  return (
    <div className="page context">
      <p className="label">Où se situe ton histoire ?</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputContext("dans un chateau")}
        >
          <Image className="button-image" src={castle} alt="Chateau" />
        </div>
        <div className="button" onClick={() => setUserInputContext("en ville")}>
          <Image className="button-image" src={city} alt="Ville" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("dans une foret")}
        >
          <Image className="button-image" src={forest} alt="Foret" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("à la montagne")}
        >
          <Image className="button-image" src={mountain} alt="Montagne" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("sous la mer")}
        >
          <Image className="button-image" src={sea} alt="Mer" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("dans l'espace")}
        >
          <Image className="button-image" src={space} alt="Espace" />
        </div>
      </div>
    </div>
  );
};

const AreaComponent = ({ setUserInputArea }) => {
  return (
    <div className="page area">
      <p className="label">A quelle époque ?</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputArea("à l'époque des dinosaures")}
        >
          <Image
            className="button-image"
            src={dino}
            alt="epoque des dinosaures"
          />
        </div>
        <div
          className="button"
          onClick={() => setUserInputArea("en égypte antique")}
        >
          <Image className="button-image" src={egypt} alt="Egypte antique" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputArea("au moyen-age")}
        >
          <Image className="button-image" src={ma} alt="Moyen Age" />
        </div>
        <div
          className="button"
          onClick={() =>
            setUserInputArea(
              "dans les années 80 avec des hippies et de la musique disco"
            )
          }
        >
          <Image className="button-image" src={eighties} alt="Années 80" />
        </div>
        <div
          className="button"
          onClick={() =>
            setUserInputArea("à un moment important de l'histoire")
          }
        >
          <Image
            className="button-image"
            src={whenever}
            alt="N'importe quand"
          />
        </div>
      </div>
    </div>
  );
};

function Home() {
  const [userInputAge, setUserInputAge] = useState(null);
  const [userInputName, setUserInputName] = useState(null);
  const [userInputGender, setUserInputGender] = useState(null);
  const [userInputJob, setUserInputJob] = useState(null);
  const [userInputContext, setUserInputContext] = useState(null);
  const [userInputArea, setUserInputArea] = useState(null);

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log("Calling OpenAI...");
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // eslint-disable-next-line max-len
      body: JSON.stringify({
        userInputAge,
        userInputJob,
        userInputName,
        userInputGender,
        userInputContext,
        userInputArea,
      }),
    });
    const data = await response.json();
    const { output } = data;
    console.log("OpenAI replied...", output.text);

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
    setIsGenerated(true);
  };

  const onUserChangedName = (event) => {
    setUserInputName(event.target.value);
  };

  /** const setName = (event) => {
    setNameIsFilled(true);
    } */

  const resetValues = () => {
    setUserInputGender(null);
    setUserInputAge(null);
    setUserInputArea(null);
    setUserInputContext(null);
    setUserInputJob(null);
    setUserInputName("");
    setIsGenerated(false);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="root">
      <div className="container">
        <Head>
          <title>iyagi - Generateur d&apos;histoires</title>
        </Head>
        <div className="header">
          <div className="header-title">
            <h1>iyagi</h1>
          </div>
          <div className="reload" onClick={resetValues}>
            <p>Créer une nouvelle histoire</p>
          </div>
        </div>
        {!userInputAge && <AgeComponent setUserInputAge={setUserInputAge} />}
        {!userInputGender && (
          <GenderComponent setUserInputGender={setUserInputGender} />
        )}
        {!userInputJob && <JobComponent setUserInputJob={setUserInputJob} />}
        {!userInputContext && (
          <ContextComponent setUserInputContext={setUserInputContext} />
        )}
        {!userInputArea && (
          <AreaComponent setUserInputArea={setUserInputArea} />
        )}
        <div
          className="page section perso name"
          style={{ display: isGenerated ? "none" : "" }}
        >
          <p className="label">Mon personnage s&apos;appelle </p>
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
              className={isGenerating ? "loading" : "generate-button"}
              onClick={callGenerateEndpoint}
            >
              <div className="generate">
                {isGenerating ? (
                  <span className="loader" />
                ) : (
                  <p>Créer mon histoire</p>
                )}
              </div>
            </a>
          </div>
        </div>
        {/* OUTPUT */}
        <div
          className="page result"
          style={{ display: isGenerated ? "" : "none" }}
        >
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

          <div className="button restart" onClick={resetValues}>
            <p>Créer une nouvelle histoire</p>
          </div>
        </div>
      </div>
      <footer>
        <p>
          Made by{" "}
          <a href="https://www.linkedin.com/in/maudfrichement/">
            @MaudFri with Gpt-3
          </a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
