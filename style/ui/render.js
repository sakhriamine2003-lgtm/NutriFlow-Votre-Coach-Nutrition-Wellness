export function renderRecettes(recettes) {
  const container = document.getElementById("plat");
  container.innerHTML = "";

  recettes.forEach((meal) => {

    const card = document.createElement("div");
    card.className = "reci cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden mb-5 hover:shadow-lg transition";

    card.innerHTML = `
      <img src="${meal.image}" class="w-full h-48 object-cover" />

      <div class="p-4">
        <p class="text-sm text-gray-500">${meal.cuisine}</p>
        <h3 class="font-bold text-lg mt-1">${meal.name}</h3>

        <div class="flex justify-between text-sm text-gray-600 mt-2">
          <span>${meal.cookTimeMinutes} min</span>
          <span>${meal.caloriesPerServing} Kcal</span>
        </div>
      </div>
    `;

    card.addEventListener("click", () => {
      afficherDetail(meal);
    });

    container.appendChild(card);
  });
}


export function afficherDetail(meal) {
  const home = document.getElementById("home");
  const detail = document.getElementById("detail");

  home.classList.add("hidden");

  const ingredientsHTML = meal.ingredients
    .map((ing, i) => `
      <li class="flex justify-between ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} p-3 rounded-lg">
        <span>${ing}</span>
      </li>
    `)
    .join("");

  detail.innerHTML = `
    <div class="bg-white p-4 rounded-2xl shadow-md">

      <div class="flex justify-between items-center mb-4 font-bold text-lg">
        <div id="backBtn" class="cursor-pointer text-2xl">&#8592;</div>
        <div>${meal.name}</div>
        <div></div>
      </div>

      <img src="${meal.image}" class="w-full rounded-xl mb-4" />

      <p class="font-semibold mb-4">
        ${meal.instructions}
      </p>

      <div class="border border-gray-800 rounded-2xl flex justify-around py-3 mb-4 text-center">

        <div class="font-bold text-green-500">
          ${meal.caloriesPerServing}
          <span class="block text-xs text-gray-600 font-normal">Kcal</span>
        </div>

        <div class="font-bold text-green-500">
          ${meal.servings}
          <span class="block text-xs text-gray-600 font-normal">Servings</span>
        </div>

        <div class="font-bold text-green-500">
          ${meal.rating}
          <span class="block text-xs text-gray-600 font-normal">Rating</span>
        </div>

        <div class="font-bold text-green-500">
          ${meal.cookTimeMinutes}
          <span class="block text-xs text-gray-600 font-normal">Minutes</span>
        </div>
      </div>

      <h3 class="font-black mb-3">INGREDIENTS</h3>

      <ul class="space-y-2 mb-6">
        ${ingredientsHTML}
      </ul>

      <button id="startCooking" 
        class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition w-full">
        Start cooking >
      </button>

    </div>
  `;

  document.getElementById("backBtn").addEventListener("click", () => {
    detail.innerHTML = "";
    home.classList.remove("hidden");
  });
}