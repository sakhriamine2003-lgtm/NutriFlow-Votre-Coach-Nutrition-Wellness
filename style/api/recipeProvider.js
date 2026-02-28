const BASE_URL = "https://dummyjson.com/recipes";

export async function obtenirToutesLesRecettes() {
  try {
    const res = await fetch(BASE_URL);

    if (!res.ok) {
      throw new Error("Erreur lors du fetch des recettes");
    }

    const data = await res.json();
    return data.recipes;

  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
}
