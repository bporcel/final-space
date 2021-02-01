import { get } from "@/service/http.js";

const getAllCharacters = () => {
  const url = "https://finalspaceapi.com/api/v0/character/";
  return new Promise((resolve, reject) => {
    get(url)
      .then(resolve)
      .catch(reject);
  });
};

export { getAllCharacters };
