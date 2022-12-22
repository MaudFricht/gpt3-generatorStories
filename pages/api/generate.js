import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `Écrit une histoire pour enfants, bien rédigée, avec un début, un milieu et une fin. Rends l'histoire captivante.
    Évite les répétitions de mots et utilise des synonymes. Fait attention à la concordance des temps.
    \n
    L'histoire doit ${req.body.userInputAge}.
    \n
    Paramètres de l'histoire:
    Personnage : Il ou elle s'appelle ${req.body.userInputName}. C'est un ${req.body.userInputJob} de sexe ${req.body.userInputGender}.
    Contexte : C'est une histoire ${req.body.userInputType}. L'histoire se passe ${req.body.userInputContext}.
    Histoire :\n
    `;

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}`,
    temperature: 0.75,
    max_tokens: 3000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
