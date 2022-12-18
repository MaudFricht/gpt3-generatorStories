import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `Écrit un conte pour enfants avec un début, un élément perturbateur et une fin.
    Si le lecteur à moins de 3 ans, écrit une histoire de moins de 1000 signes. Si le lecteur a entre 3 et 4 ans écrit une histoire entre 2000 et 3000 signes avec un rebondissement. Si le lecteur a entre 5 et 6 ans, ecrit une histoire entre 4000 et 5000 signes, avec un méchant à combattre et un rebondissement.
    Rends l'histoire captivante. Évite les répétitions de mots et utilise des synonymes. La fin de l'histoire n'a pas besoin d'être heureuse.
    Âge du lecteur: ${req.body.userInputAge}
    Paramètres de l'histoire:
    Personnage : Il ou elle s'appelle ${req.body.userInputName}. C'est un ${req.body.userInputJob} de sexe ${req.body.userInputGender}.
    Contexte : C'est une histoire ${req.body.userInputType}. L'histoire se passe ${req.body.userInputContext}.
    Histoire :\n
    `;

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}`,
    temperature: 0.7,
    max_tokens: 3000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
