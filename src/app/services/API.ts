export const API = (parm1 = null, parm2 = null, parm3 = null) => {
  const API_URL = "https://api.edamam.com/api";
  const API_TOKEN = "d28718060b8adfd39783ead254df7f92";
  const id = "47379841";
  const APis = {
    nutrition_detailss: `${API_URL}/nutrition-details?app_id=${id}&app_key=${API_TOKEN}`,
  };
  return APis;
};
