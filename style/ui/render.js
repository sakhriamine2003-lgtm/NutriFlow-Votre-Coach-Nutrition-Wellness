// render.js

export function CreePlat(data) {
  const plat = document.getElementById("plat");
  plat.innerHTML = "";

  data.forEach((meal) => {

    plat.insertAdjacentHTML("beforeend", `
      <div class="reci cursor-pointer bg-white rounded-2xl shadow-md overflow-hidden mb-5 hover:shadow-lg transition">

        <img 
          src="${meal.image}"
          class="w-full h-48 object-cover"
        />

        <div class="p-4">
          <p class="text-sm text-gray-500">${meal.cuisine}</p>
          <h3 class="font-bold text-lg mt-1">${meal.name}</h3>

          <div class="flex justify-between text-sm text-gray-600 mt-2">
            <span>${meal.cookTimeMinutes} min</span>
            <span>${meal.caloriesPerServing} Kcal</span>
          </div>
        </div>

      </div>
    `);

  });

  afficherDetail(data);
}


export function afficherDetail(data) {

  const cards = document.querySelectorAll(".reci");
  const home = document.getElementById("home");
  const detail = document.getElementById("detail");

  cards.forEach((card, index) => {

    card.addEventListener("click", function () {

      const meal = data[index];

      home.classList.add("hidden");

      let ingredientsHTML = "";

      meal.ingredients.forEach((ing, i) => {
        ingredientsHTML += `
          <li class="flex justify-between ${i % 2 === 0 ? 'bg-gray-100' : 'bg-gray-200'} p-3 rounded-lg">
            <span>${ing}</span>
          </li>
        `;
      });

      detail.innerHTML = `
        <div class="bg-white p-4 rounded-2xl shadow-md">

          <div class="flex justify-between items-center mb-4 font-bold text-lg">
            <div id="backBtn" class="cursor-pointer text-2xl">&#8592;</div>
            <div>${meal.name}</div>
            <div class="text-2xl cursor-pointer">&#8942;</div>
          </div>

          <img 
            src="${meal.image}"
            class="w-full rounded-xl mb-4"
          />

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

          <div class="flex justify-between items-center">
            <button class="w-12 h-12 bg-gray-200 rounded-full text-xl hover:text-red-500 transition">
              ♥
            </button>

            <button class="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-bold shadow-lg transition">
              Start cooking >
            </button>
          </div>

        </div>
      `;

      document.getElementById("backBtn").addEventListener("click", function () {
        detail.innerHTML = "";
        home.classList.remove("hidden");
      });

    });

  });
}