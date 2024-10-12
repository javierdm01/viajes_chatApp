import {GoogleGenerativeAI} from '@google/generative-ai'


const generativeAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_KEY);

//GET CHAT DIFY
/*export default async function getChat(query,id){
  const response= await fetch('https://api.dify.ai/v1/chat-messages',{
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer (import.meta.env.VITE_DIFY_KEY',
      },
      body: JSON.stringify({
          "inputs": {},
          "query": query,
          "response_mode": "blocking",
          "conversation_id": id.toString(),
          "user": "abc-123",
      })
  })

  const data = await response.json()
  console.log(data)
  return data.answer
}*/

//GET CHAT GOOGLE GEMINI
export default async function getChat(query) {
  const model = generativeAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // Establece el prompt que deseas usar.
  const prompt = `
    Eres un asistente especializado en viajes. 
    Solo debes proporcionar información y respuestas sobre planificación de viajes.
    Pregunta: ${query}
  `;

  const result = await model.generateContent([prompt]);
  console.log(result.response.text());
  return result.response.text();
}
