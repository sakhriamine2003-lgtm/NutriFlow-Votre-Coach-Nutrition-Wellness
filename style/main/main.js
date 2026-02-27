// main.js

import { obtenirToutesLesRecettes } from "../api/recipeProvider.js";
import { CreePlat } from "../ui/render.js";

document.addEventListener("DOMContentLoaded", async function () {

  try {
    const data = await obtenirToutesLesRecettes();
    CreePlat(data.recipes);
  } catch (error) {
    console.error("Erreur API:", error);
  }

});