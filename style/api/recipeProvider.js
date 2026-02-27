// recipeProvider.js

export async function obtenirToutesLesRecettes() {
  const res = await fetch("https://dummyjson.com/recipes");
  return res.json();
}

export async function rechercherDesRecettes(q) {
  const res = await fetch(`https://dummyjson.com/recipes/search?q=${q}`);
  return res.json();
}