//api :
document.addEventListener("DOMContentLoaded", () => {
  fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
    .then(response => response.json())
    .then(data => {
      CreePlat(data.meals);
    })
    .catch(error => {
      console.error("Erreur fetch :", error);
    });
});
function CreePlat(data) {

  const plat = document.getElementById("plat");
  plat.innerHTML = ""; 
  data.forEach((x) => {

    plat.innerHTML += `
      <div class="reci cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden mb-5 hover:shadow-lg transition">
        <img 
          src="${meal.strMealThumb}"
          class="w-full h-48 object-cover"
        />
        <div class="p-4">
          <p class="text-sm text-gray-500">${meal.strCategory}</p>
          <h3 class="font-bold text-lg mt-1">${meal.strMeal}</h3>

          <div class="flex justify-between text-sm text-gray-600 mt-2">
            <span>${x.time} min</span>
            <span>${meal.strCategory} Kcal</span>
          </div>
        </div>

      </div>
    `;
  });

}