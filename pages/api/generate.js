import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  const basePromptPrefix = `Ecrit un joli compte pour enfant à la manière de grimm. Utilise des mots simples.
    Si le lecteur à moins de 3 ans, écrit une histoire de moins de 2000 signes. Si le lecteur a entre 3 et 5 ans écrit une histoire entre 3000 et 5000 signes. Si le lecteur a entre 5 et 8 ans, ecrit une histoire entre 5000 et 8000 signes.
    Age du lecteur: ${req.body.userInputAge}
    Paramètres de l'histoire:
    Personnage : Le personnage de l'histoire s'appelle ${req.body.userInputName}. Il est de sexe ${req.body.userInputSexe}. C'est ${req.body.userInputJob}.
    Contexte : L'histoire se passe ${req.body.userInputContext} ${req.body.userInputArea}
    Histoire :
    `;
  // Run first prompt
  console.log(`API: ${basePromptPrefix}`);

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${basePromptPrefix}`,
    temperature: 0.82,
    max_tokens: 1250,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;
