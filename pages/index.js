/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable no-console */
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import * as React from "react";

import i18n from "../assets/i18n.js";
import { useTranslation } from "react-i18next";

// IMPORT IMAGES
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
import adventure from "../assets/adventure.png";
import war from "../assets/war.png";
import parents from "../assets/parents.png";
import friends from "../assets/friend.png";
import love from "../assets/heart.png";
import logo from "../assets/logo.png";
import logoNoBg from "../assets/logoNoBg.svg";
import logometa from "../assets/logo-meta.png";

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
  const { t, i18n } = useTranslation();
  return (
    <div className="page section age">
      <div className="questions">
        <p className="label">{t("age-label")}</p>
        <div className="buttons">
          <div
            className="button"
            onClick={() =>
              setUserInputAge(t("age-3-input"))
            }
          >
            <p className="button-age">{t("age-3")}</p>
          </div>
          <div
            className="button"
            onClick={() => setUserInputAge(t("age-5-input"))}
          >
            <p className="button-age">{t("age-5")}</p>
          </div>
          <div
            className="button"
            onClick={() =>
              setUserInputAge(t("age-7-input"))
            }
          >
            <p className="button-age">{t("age-7")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const GenderComponent = ({ setUserInputGender }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="page section sexe">
      {/*<h2 className="rules">Choisi ton personnage&nbsp;!</h2>*/}
      <p className="label">{t("gender-label")}</p>
      <div className="buttons">
        <div
          className="button"
          value={t("gender-girl-input")}
          onClick={() => setUserInputGender(t("gender-girl-input"))}
        >
          <Image className="button-image" src={girl} alt={t("gender-man")} />
          <p className="button-description">{t("gender-girl")}</p>
        </div>
        <div
          className="button"
          value={t("gender-man-input")}
          onClick={() => setUserInputGender(t("gender-man-input"))}
        >
          <Image className="button-image" src={boy} alt={t("gender-man")} />
          <p className="button-description">{t("gender-man")}</p>
        </div>
      </div>
    </div>
  );
};

const JobComponent = ({ setUserInputJob }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="page job">
      <p className="label">{t("job-label")}</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputJob(t("job-king-input"))}
        >
          <Image className="button-image" src={crown} alt={t("job-king")} />
          <p className="button-description">{t("job-king")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob(t("job-knight-input"))}
        >
          <Image className="button-image" src={knight} alt={t("job-knight")} />
          <p className="button-description">{t("job-knight")}</p>
        </div>
        <div className="button" onClick={() => setUserInputJob(t("job-animal-input"))}>
          <Image className="button-image" src={animal} alt={t("job-animal")} />
          <p className="button-description">{t("job-animal")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob(t("job-magic-input"))}
        >
          <Image className="button-image" src={magic} alt={t("job-magic")} />
          <p className="button-description">{t("job-magic")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputJob(t("job-astronaut-input"))}
        >
          <Image className="button-image" src={astronaut} alt={t("job-astronaut")} />
          <p className="button-description">{t("job-astronaut")}</p>
        </div>
        <div className="button" onClick={() => setUserInputJob(t("job-robot-input"))}>
          <Image className="button-image" src={robot} alt={t("job-robot")} />
          <p className="button-description">{t("job-robot")}</p>
        </div>
      </div>
    </div>
  );
};

const ContextComponent = ({ setUserInputContext }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="page context">
      <p className="label">{t("context-label")}</p>
      <div className="buttons">
        <div
          className="button"
          onClick={() => setUserInputContext(t("context-castle-input"))}
        >
          <Image className="button-image" src={castle} alt={t("context-castle")} />
          <p className="button-description">{t("context-castle")}</p>
        </div>
        <div className="button" onClick={() => setUserInputContext(t("context-city-input"))}>
          <Image className="button-image" src={city} alt={t("context-city")} />
          <p className="button-description">{t("context-city")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext(t("context-forest-input"))}
        >
          <Image className="button-image" src={forest} alt={t("context-forest")} />
          <p className="button-description">{t("context-forest")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext(t("context-montain-input"))}
        >
          <Image className="button-image" src={mountain} alt={t("context-montain")} />
          <p className="button-description">{t("context-montain")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext(t("context-sea-input"))}
        >
          <Image className="button-image" src={sea} alt={t("context-sea")} />
          <p className="button-description">{t("context-sea")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputContext(t("context-space-input"))}
        >
          <Image className="button-image" src={space} alt={t("context-space")} />
          <p className="button-description">{t("context-space")}</p>
        </div>
      </div>
    </div>
  );
};

const StoryTypeComponent = ({ setUserInputType }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="page type">
      <p className="label">{t("type-label")}</p>
      <div className="buttons">
        <div className="button" onClick={() => setUserInputType(t("type-love-input"))}>
          <Image className="button-image" src={love} alt={t("type-love")} />
          <p className="button-description">{t("type-love")}</p>
        </div>
        <div
          className="button"
          onClick={() =>
            setUserInputType(t("type-battle-input"))
          }
        >
          <Image className="button-image" src={war} alt={t("type-battle")} />
          <p className="button-description">{t("type-battle")}</p>
        </div>

        <div
          className="button"
          onClick={() => setUserInputType(t("type-family-input"))}
        >
          <Image
            className="button-image"
            src={parents}
            alt={t("type-family")}
          />
          <p className="button-description">{t("type-family")}</p>
        </div>
        <div
          className="button"
          onClick={() => setUserInputType(t("type-friend-input"))}
        >
          <Image
            className="button-image"
            src={friends}
            alt={t("type-friend")}
          />
          <p className="button-description">{t("type-friend")}</p>
        </div>
        <div
          className="button"
          onClick={() =>
            setUserInputType(t("type-adventure-input"))
          }
        >
          <Image
            className="button-image"
            src={adventure}
            alt={t("type-adventure")}
          />
          <p className="button-description">{t("type-adventure")}</p>
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

  const { t, i18n } = useTranslation();
  const [languageIsEn, setLanguageEn] = useState(true);

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
        prompt,
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


  const resetValues = () => {
    setUserInputGender(null);
    setUserInputAge(null);
    setUserInputType(null);
    setUserInputContext(null);
    setUserInputJob(null);
    setUserInputName("");
    setIsGenerated(false);
  };

  const changeLanguageHandlerToEn = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
    setLanguageEn(true);
    resetValues();
    
  };

  const changeLanguageHandlerToFr = (e) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue);
    setLanguageEn(false);
    resetValues();
  };

  const prompt = `${t("promptPart1")}\n
  ${t("promptPart2")}${userInputAge}.
  \n
  ${t("promptPart3")}${userInputName}. ${t("promptPart4")}${userInputJob}${t("promptPart5")}${userInputGender}.
  ${t("promptPart6")}${userInputType}. ${t("promptPart7")}${userInputContext}.
  ${t("promptPart8")}\n`;

  console.log(prompt);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="root" onLoad={handleOpen}>
      <div className="container">
        <Head>
          {/* Google tag (gtag.js) */}
          <title>{t("title")}</title>
          <link rel="icon" href="favicon.ico" />
          <meta name="description" content="iyagi - Générateur d'histoires pour enfants"/>
          <meta itemprop="name" content="iyagi"/>
          <meta itemprop="description" content="iyagi - Générateur d'histoires pour enfants"/>
          <meta itemprop="image" content="https://zupimages.net/viewer.php?id=22/51/teag.png"/>

          <meta property="og:url" content="https://www.iyagi.xyz"/>
          <meta property="og:type" content="website"/>
          <meta property="og:title" content="iyagi"/>
          <meta property="og:description" content="iyagi - Générateur d'histoires pour enfants"/>
          <meta property="og:image" content="https://zupimages.net/viewer.php?id=22/51/teag.png"/>

          <meta name="twitter:card" content="summary_large_image"/>
          <meta name="twitter:title" content="iyagi"/>
          <meta name="twitter:description" content="iyagi - Générateur d'histoires pour enfants"/>
          <meta name="twitter:image" content="https://zupimages.net/viewer.php?id=22/51/teag.png"/>         
        </Head>
        <div className="header">
          <div className="header-title">
            <Image src={logoNoBg}></Image>
          </div>
          <div className="header-right">
            <div className="language-switch"> 
            { languageIsEn ? (
                    <button className="language-selector en" value="en" onClick={changeLanguageHandlerToFr}>🇬🇧</button>
                  ) : (
                    <button className="language-selector fr" value="fr" onClick={changeLanguageHandlerToEn}>🇫🇷</button>
                  )}     
      
            </div>

            <div className="reload" onClick={resetValues}>
              <p>{t("header-newStory")}</p>
            </div>
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
                <h3>{t("rules-title") }</h3>
                <p>{t("rules-description")}</p>
                <button className="modalButton" onClick={handleClose}>
                  {t("rules-button")}
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
        
        <div
          className="page section perso name"
          style={{ display: isGenerated ? "none" : "" }}
        >
          <p className="label">{t("name-label")}</p>
          <textarea
            className="text-name"
            placeholder={t("name-placeholder")}
            value={userInputName}
            onChange={onUserChangedName}
          />

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
                    <p>{t("button-create")}</p>
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
                  <h3>{t("output-title")}</h3>
                </div>
              </div>
              <div className="output-content">
                <p>{apiOutput}</p>
              </div>
            </div>
          )}

          <div className="button restart" onClick={resetValues}>
            <p>{t("header-newStory")}</p>
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
