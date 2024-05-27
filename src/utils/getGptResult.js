import { GENAPI_KEY } from "./constants";
import { GoogleGenerativeAI } from "@google/generative-ai";

const getGptResult = async (data) => {
  const genAI = new GoogleGenerativeAI(GENAPI_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const prompt =
    "Act as a movie recommendation system and suggest some movies for the query" +
    data +
    ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, sholay, Hangover, Captain america.";

  const result = await model.generateContent(prompt);

  if (!result.response) {
    //error handling
  }

  return result;
};

export default getGptResult;
