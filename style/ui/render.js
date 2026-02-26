document.addEventListener("DOMContentLoaded", function () {
  afficherDetail();
});

function afficherDetail() {
  const cards = document.querySelectorAll(".reci");
  const home = document.getElementById("home");
  const detail = document.getElementById("detail");

  cards.forEach(card => {
    card.addEventListener("click", function () {

      home.classList.add("hidden");

      detail.innerHTML = `
        <div class="bg-white p-4 rounded-2xl shadow-md">

          <div class="flex justify-between items-center mb-4 font-bold text-lg">
            <div id="backBtn" class="cursor-pointer text-2xl">&#8592;</div>
            <div>Recipe</div>
            <div class="text-2xl cursor-pointer">&#8942;</div>
          </div>

          <img 
            src="https://cdn.pixabay.com/photo/2015/04/08/13/13/food-712665_1280.jpg"
            class="w-full rounded-xl mb-4"
          />

          <p class="font-semibold mb-4">
            Une richesse culinaire à explorer
          </p>

          <div class="border border-gray-800 rounded-2xl flex justify-around py-3 mb-4 text-center">

            <div class="font-bold text-green-500">
              500
              <span class="block text-xs text-gray-600 font-normal">Kcal</span>
            </div>

            <div class="font-bold text-green-500">
              240
              <span class="block text-xs text-gray-600 font-normal">grams</span>
            </div>

            <div class="font-bold text-green-500">
              5
              <span class="block text-xs text-gray-600 font-normal">rating</span>
            </div>

            <div class="font-bold text-green-500">
              15
              <span class="block text-xs text-gray-600 font-normal">minutes</span>
            </div>

          </div>

          <h3 class="font-black mb-3">INGREDIENTS</h3>

          <ul class="space-y-2 mb-6">
            <li class="flex justify-between bg-gray-100 p-3 rounded-lg">
              <span>Tomate</span>
              <span>3 pc</span>
            </li>
            <li class="flex justify-between bg-gray-200 p-3 rounded-lg">
              <span>Sauce</span>
              <span>3 pc</span>
            </li>
            <li class="flex justify-between bg-gray-100 p-3 rounded-lg">
              <span>Pasta</span>
              <span>3 pc</span>
            </li>
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
      const backBtn = document.getElementById("backBtn");
      if (backBtn) {
        backBtn.addEventListener("click", function () {
          detail.innerHTML = "";
          home.classList.remove("hidden");
        });
      }

    });
  });
}