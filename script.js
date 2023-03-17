const mealList = document.getElementById('meal-list');

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
    .then(response => response.json())
    .then(data => {
        const meals = data.meals;
        meals.forEach(meal => {
            const mealDiv = document.createElement('div');
            mealDiv.className = 'meal';
            const mealImg = document.createElement('img');
            mealImg.src = meal.strMealThumb;
            mealImg.alt = meal.strMeal;
            const mealName = document.createElement('h2');
            mealName.textContent = meal.strMeal;
            mealDiv.appendChild(mealImg);
            mealDiv.appendChild(mealName);
            mealList.appendChild(mealDiv);
        });
    })
    .catch(error => console.log(error));