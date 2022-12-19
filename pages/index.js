/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import * as React from "react";
import ReactGA from "react-ga";
const TRACKING_ID = "G-NWK71QMRYB"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);

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
import moon from "../assets/moon.png";
import sun from "../assets/sun.png";
import adventure from "../assets/adventure.png";
import war from "../assets/war.png";
import parents from "../assets/parents.png";
import friends from "../assets/friend.png";
import love from "../assets/heart.png";
import logo from "../assets/logo.png";
import logoNoBg from "../assets/logoNoBg.svg";

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
      <div className="questions">
        <p className="label">Vous souhaitez une histoire pour un enfant de</p>
        <div className="buttons">
          <div
            className="button"
            onClick={() => setUserInputAge("moins de 3 ans")}
          >
            <p className="button-age">- de 3 ans</p>
          </div>
          <div
            className="button"
            onClick={() => setUserInputAge("entre 3 et 4 ans")}
          >
            <p className="button-age">3 - 4 ans</p>
          </div>
          <div
            className="button"
            onClick={() => setUserInputAge("entre 5 et 6 ans")}
          >
            <p className="button-age">5 - 6 ans</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GenderComponent = ({ setUserInputGender }) => {
  return (
    <div className="page section sexe">
      {/*<h2 className="rules">Choisi ton personnage&nbsp;!</h2>*/}
      <p className="label">Ton personnage est</p>
      <div className="buttons">
        <div
          className="button"
          value="Feminin"
          onClick={() => setUserInputGender("feminin")}
        >
          <Image className="button-image" src={girl} alt="fille" />
          <p className="button-description">Fille</p>
        </div>
        <div
          className="button"
          value="Masculin"
          onClick={() => setUserInputGender("masculin")}
        >
          <Image className="button-image" src={boy} alt="garçon" />
          <p className="button-description">Garçon</p>
        </div>
      </div>
    </div>
  );
};

const JobComponent = ({ setUserInputJob }) => {
  return (
    <div className="page job">
      <p className="label">C'est un</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputJob("une personne de sang royal")}
        >
          <Image className="button-image" src={crown} alt="prince.sse" />
          <p className="button-description">Prince.sse</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("un guerrier ou chevalier")}
        >
          <Image className="button-image" src={knight} alt="knight" />
          <p className="button-description">Chevalier.e</p>
        </div>
        <div className="button" onClick={() => setUserInputJob("un animal")}>
          <Image className="button-image" src={animal} alt="animal" />
          <p className="button-description">Animal</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("une créature magique")}
        >
          <Image className="button-image" src={magic} alt="magicien" />
          <p className="button-description">Mage</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("un cosmonaute")}
        >
          <Image className="button-image" src={astronaut} alt="astronaute" />
          <p className="button-description">Astronaute</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob("un robot intelligent et qui parle")}
        >
          <Image className="button-image" src={robot} alt="robot" />
          <p className="button-description">Robot</p>
        </div>
      </div>
    </div>
  );
};

const ContextComponent = ({ setUserInputContext }) => {
  return (
    <div className="page context">
      <p className="label">Ton histoire se situe</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputContext("dans un chateau")}
        >
          <Image className="button-image" src={castle} alt="Chateau" />
          <p className="button-description">Chateau</p>
        </div>
        <div className="button" onClick={() => setUserInputContext("en ville")}>
          <Image className="button-image" src={city} alt="Ville" />
          <p className="button-description">Ville</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("dans une foret")}
        >
          <Image className="button-image" src={forest} alt="Foret" />
          <p className="button-description">Forêt</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("à la montagne")}
        >
          <Image className="button-image" src={mountain} alt="Montagne" />
          <p className="button-description">Montagne</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("sous la mer")}
        >
          <Image className="button-image" src={sea} alt="Mer" />
          <p className="button-description">Océan</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext("dans l'espace")}
        >
          <Image className="button-image" src={space} alt="Espace" />
          <p className="button-description">Espace</p>
        </div>
      </div>
    </div>
  );
};

/** const AreaComponent = ({ setUserInputArea }) => {
  return (
    <div className="page area">
      <p className="label">Le moment de la journée est</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputArea("lors d'une journée ensoleillée")}
        >
          <Image className="button-image" src={sun} alt="Journée" />
        </div>
        <div
          className="button"
          onClick={() => setUserInputArea("durant la nuit")}
        >
          <Image className="button-image" src={moon} alt="Nuit" />
        </div>
      </div>
    </div>
  );
}; */

const StoryTypeComponent = ({ setUserInputType }) => {
  return (
    <div className="page type">
      <p className="label">Quel type d'histoire souhaites tu écrire&nbsp;? </p>
      <div className="buttons">
        <div className="button" onClick={() => setUserInputType("d'amour pur")}>
          <Image className="button-image" src={love} alt="Histoire d'amour" />
          <p className="button-description">Amour</p>
        </div>
        <div
          className="button"
          onClick={() =>
            setUserInputType("avec une bataille contre un méchant")
          }
        >
          <Image className="button-image" src={war} alt="Une grande bataille" />
          <p className="button-description">Bataille</p>
        </div>

        <div
          className="button"
          onClick={() => setUserInputType("d'une famille aimante")}
        >
          <Image
            className="button-image"
            src={parents}
            alt="Histoire de famille"
          />
          <p className="button-description">Famille</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputType("d'amitié profonde et sincère")}
        >
          <Image
            className="button-image"
            src={friends}
            alt="Histoire d'amitié"
          />
          <p className="button-description">Amitié</p>
        </div>
        <div
          className="button"
          onClick={() =>
            setUserInputType("d'aventure et de découverte d'un monde")
          }
        >
          <Image
            className="button-image"
            src={adventure}
            alt="Histoire d'aventure"
          />
          <p className="button-description">Aventure</p>
        </div>
      </div>
    </div>
  );
};

function Home() {
  const [userInputAge, setUserInputAge] = useState(null);
  const [userInputName, setUserInputName] = useState("");
  const [userInputGender, setUserInputGender] = useState(null);
  const [userInputJob, setUserInputJob] = useState(null);
  const [userInputContext, setUserInputContext] = useState(null);
  const [userInputType, setUserInputType] = useState(null);

  const [apiOutput, setApiOutput] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        userInputType,
        userInputGender,
        userInputContext,
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
    setUserInputType(null);
    setUserInputContext(null);
    setUserInputJob(null);
    setUserInputName("");
    setIsGenerated(false);
  };

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="root" onLoad={handleOpen}>
      <div className="container">
        <Head>
          {/* Google tag (gtag.js) */}
          <title>iyagi - Generateur d&apos;histoires</title>
          <link rel="icon" href="favicon.ico" />
          <meta property="og:image" content={logo} />
          <meta name="twitter:card" content={logo} />
        </Head>
        <div className="header">
          <div className="header-title">
            <Image src={logoNoBg}></Image>
          </div>
          <div className="reload" onClick={resetValues}>
            <p>Créer une nouvelle histoire</p>
          </div>
        </div>

        <div className="modal">
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <div className="rules">
              <div className="rules-image">
                <Image className="logo" src={logo} alt="Logo Iyagi" />
              </div>
              <div className="rules-right">
                <h3>
                  Génerez une histoire personnalisée avec votre enfant&nbsp;!
                </h3>
                <p>
                  Cliquez sur les différents boutons pour définir tous les
                  paramètres de votre histoire.
                </p>
                <button className="modalButton" onClick={handleClose}>
                  Commencer
                </button>
              </div>
            </div>
          </Modal>
        </div>

        {!userInputAge && <AgeComponent setUserInputAge={setUserInputAge} />}
        {!userInputType && (
          <StoryTypeComponent setUserInputType={setUserInputType} />
        )}
        {!userInputGender && (
          <GenderComponent setUserInputGender={setUserInputGender} />
        )}
        {!userInputJob && <JobComponent setUserInputJob={setUserInputJob} />}
        {!userInputContext && (
          <ContextComponent setUserInputContext={setUserInputContext} />
        )}
        {/*!userInputArea && (
          <AreaComponent setUserInputArea={setUserInputArea} />
        )*/}
        <div
          className="page section perso name"
          style={{ display: isGenerated ? "none" : "" }}
        >
          <p className="label">Ton personnage s&apos;appelle </p>
          <textarea
            className="text-name"
            placeholder="Choisi le nom de ton personnage."
            value={userInputName}
            onChange={onUserChangedName}
          />
          {/* <button className='confirm-name' onClick={setName}>Confirmer le nom</button> */}

          {/* Button for generation */}
          {isGenerating ? (
            <div className="loader-box">
              <div className="loader" />
            </div>
          ) : (
            <div className="generate-buttons">
              <a
                className={isGenerating ? "loading" : "generate-button"}
                onClick={callGenerateEndpoint}
              >
                <div className="generate">
                  {isGenerating ? (
                    <span className="loader" />
                  ) : (
                    <p>Créer ton histoire</p>
                  )}
                </div>
              </a>
            </div>
          )}
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
          <a href="https://www.linkedin.com/in/maudfrichement/">@MaudFri</a>
          &nbsp;with Gpt-3
        </p>
      </footer>
    </div>
  );
}

export default Home;
