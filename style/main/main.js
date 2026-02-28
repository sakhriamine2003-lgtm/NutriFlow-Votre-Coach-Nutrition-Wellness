import { obtenirToutesLesRecettes } from "../api/recipeProvider.js";
import { renderRecettes } from "../ui/render.js";
import { showLoader, hideLoader } from "../ui/loader.js";

document.addEventListener("DOMContentLoaded", init);

async function init() {
  try {
    showLoader();

    const recettes = await obtenirToutesLesRecettes();
    renderRecettes(recettes);

  } catch (error) {
    console.error("Erreur initialisation:", error);
  } finally {
    hideLoader();
  }
}