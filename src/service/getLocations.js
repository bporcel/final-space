import { get } from "@/service/http.js";
import { arrayToString } from "@/service/helper";

const getAllLocations = () => {
  const url = "https://finalspaceapi.com/api/v0/location/";
  return new Promise((resolve, reject) => {
    get(url)
      .then(res => {
        res.forEach(item => {
          item.inhabitants = arrayToString(item.inhabitants);
        });
        resolve(res);
      })
      .catch(reject);
  });
};

export { getAllLocations };
