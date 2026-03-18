// Virtual Dinner Chef - Recipe Database
// Organized by cuisine and meal type

const RECIPE_DATABASE = [
  // ========== ITALIAN ==========
  {
    name: "Spaghetti Carbonara",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Spaghetti", a: "1 lb"},
      {n: "Pancetta", a: "8 oz"},
      {n: "Eggs", a: "4"},
      {n: "Parmesan Cheese", a: "1 cup grated"},
      {n: "Black Pepper", a: "to taste"},
      {n: "Garlic", a: "2 cloves"},
      "Salt"
    ],
    instructions: "Cook spaghetti in salted boiling water until al dente. Meanwhile, cook diced pancetta until crispy. Whisk eggs with parmesan and pepper. Drain pasta, toss with pancetta and fat, then remove from heat. Add egg mixture and toss vigorously until creamy. Serve immediately with extra parmesan."
  },
  {
    name: "Chicken Parmesan",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Chicken Breast", a: "4 pieces"},
      {n: "Breadcrumbs", a: "1 cup"},
      {n: "Parmesan Cheese", a: "1/2 cup grated"},
      {n: "Mozzarella Cheese", a: "8 oz"},
      {n: "Marinara Sauce", a: "2 cups"},
      {n: "Eggs", a: "2"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Olive Oil", a: "1/4 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Pound chicken to even thickness. Set up breading station: flour, beaten eggs, breadcrumbs mixed with parmesan. Bread chicken and pan-fry in olive oil until golden. Place in baking dish, top with marinara and mozzarella. Bake at 400°F for 15-20 minutes until cheese is bubbly."
  },
  {
    name: "Pasta Aglio e Olio",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Spaghetti", a: "1 lb"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Olive Oil", a: "1/3 cup"},
      {n: "Red Pepper Flakes", a: "1 tsp"},
      {n: "Fresh Parsley", a: "1/4 cup"},
      {n: "Parmesan Cheese", a: "to taste"},
      "Salt"
    ],
    instructions: "Cook pasta in well-salted water. Thinly slice garlic and cook slowly in olive oil until golden. Add red pepper flakes. Toss drained pasta with garlic oil, pasta water, and parsley. Serve with parmesan."
  },
  {
    name: "Margherita Pizza",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Pizza Dough", a: "1 lb"},
      {n: "Crushed Tomatoes", a: "1 cup"},
      {n: "Fresh Mozzarella", a: "8 oz"},
      {n: "Fresh Basil", a: "handful"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt"
    ],
    instructions: "Preheat oven to 500°F with pizza stone. Stretch dough thin, top with seasoned crushed tomatoes, torn mozzarella, and drizzle of olive oil. Bake 8-12 minutes until crust is charred and cheese is bubbly. Top with fresh basil."
  },
  {
    name: "Risotto alla Milanese",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Arborio Rice", a: "1.5 cups"},
      {n: "Chicken Broth", a: "6 cups"},
      {n: "Onion", a: "1 medium"},
      {n: "Butter", a: "3 tbsp"},
      {n: "White Wine", a: "1/2 cup"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Saffron", a: "pinch"},
      "Salt"
    ],
    instructions: "Warm broth with saffron. Sauté diced onion in butter. Add rice and toast 2 minutes. Add wine, stir until absorbed. Add broth one ladle at a time, stirring constantly. Cook 18-20 minutes until creamy. Finish with butter and parmesan."
  },
  {
    name: "Penne alla Vodka",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Penne", a: "1 lb"},
      {n: "Crushed Tomatoes", a: "28 oz can"},
      {n: "Heavy Cream", a: "1/2 cup"},
      {n: "Vodka", a: "1/4 cup"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Onion", a: "1 small"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Red Pepper Flakes", a: "1/4 tsp"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Fresh Basil", a: "handful"},
      "Salt"
    ],
    instructions: "Sauté onion and garlic in olive oil. Add red pepper flakes and crushed tomatoes, simmer 15 min. Add vodka, cook 2 min. Stir in cream. Toss with cooked penne and parmesan. Garnish with basil."
  },
  {
    name: "Eggplant Parmesan",
    category: "Italian",
    type: "Main",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Eggplant", a: "2 large"},
      {n: "Marinara Sauce", a: "3 cups"},
      {n: "Mozzarella Cheese", a: "12 oz"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Breadcrumbs", a: "1 cup"},
      {n: "Eggs", a: "3"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Olive Oil", a: "for frying"},
      "Salt",
      "Fresh Basil"
    ],
    instructions: "Slice eggplant 1/4 inch thick, salt and drain 30 min. Bread: flour, egg, breadcrumbs. Fry until golden. Layer in baking dish: sauce, eggplant, mozzarella, parmesan. Repeat layers. Bake 375°F for 25-30 minutes. Rest 10 min before serving."
  },
  {
    name: "Caprese Salad",
    category: "Italian",
    type: "Appetizer",
    servings: 4,
    time: "10 min",
    ingredients: [
      {n: "Fresh Mozzarella", a: "8 oz"},
      {n: "Tomatoes", a: "3 large"},
      {n: "Fresh Basil", a: "bunch"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Balsamic Vinegar", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Slice mozzarella and tomatoes into 1/4 inch rounds. Alternate on platter with basil leaves. Drizzle with olive oil and balsamic. Season with salt and pepper."
  },
  {
    name: "Lasagna Bolognese",
    category: "Italian",
    type: "Main",
    servings: 8,
    time: "2 hours",
    ingredients: [
      {n: "Ground Beef", a: "1.5 lbs"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Carrots", a: "2 diced"},
      {n: "Celery", a: "2 stalks"},
      {n: "Crushed Tomatoes", a: "28 oz"},
      {n: "Tomato Paste", a: "3 tbsp"},
      {n: "Ricotta Cheese", a: "15 oz"},
      {n: "Mozzarella Cheese", a: "1 lb shredded"},
      {n: "Parmesan Cheese", a: "1 cup grated"},
      {n: "Eggs", a: "2"},
      {n: "Lasagna Noodles", a: "12 sheets"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Red Wine", a: "1/2 cup"},
      {n: "Fresh Basil", a: "1/4 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté diced onion, carrots, and celery in olive oil. Add garlic and ground beef, brown well. Add wine, cook until reduced. Add tomatoes, tomato paste, salt, pepper. Simmer 30 min. Mix ricotta with eggs, half the parmesan, and basil. Cook lasagna noodles. In a 9x13 dish, layer: sauce, noodles, ricotta mixture, mozzarella. Repeat 3 times, end with sauce and cheese. Cover with foil, bake 375°F for 35 min. Uncover, bake 15 min more until bubbly. Rest 15 min before cutting."
  },
  {
    name: "Chicken Piccata",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Chicken Breast", a: "4 pieces"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Lemon", a: "2"},
      {n: "White Wine", a: "1/2 cup"},
      {n: "Chicken Broth", a: "1/2 cup"},
      {n: "Fresh Parsley", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Pound chicken to 1/2 inch thick. Season and dredge in flour. Sauté in olive oil and 2 tbsp butter until golden, 3-4 min per side. Remove. Add wine to pan, scrape up bits. Add broth and lemon juice, simmer 3 min. Swirl in remaining butter. Return chicken, spoon sauce over. Garnish with parsley and lemon slices."
  },
  {
    name: "Osso Buco",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "2.5 hours",
    ingredients: [
      {n: "Beef Chuck", a: "4 thick-cut pieces"},
      {n: "Onion", a: "1"},
      {n: "Carrots", a: "2"},
      {n: "Celery", a: "2 stalks"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Crushed Tomatoes", a: "14 oz"},
      {n: "White Wine", a: "1 cup"},
      {n: "Chicken Broth", a: "1 cup"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Flour", a: "1/4 cup"},
      {n: "Fresh Parsley", a: "3 tbsp"},
      {n: "Lemon", a: "1 zested"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season beef and dredge in flour. Brown in olive oil on all sides. Remove. Sauté diced onion, carrots, celery, and garlic until soft. Add wine, reduce by half. Add tomatoes, broth, and return beef. Cover tightly. Braise in 325°F oven for 2 hours until fork-tender. Make gremolata: mix parsley, lemon zest, and 1 minced garlic clove. Serve with gremolata on top."
  },
  {
    name: "Cacio e Pepe",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Spaghetti", a: "1 lb"},
      {n: "Parmesan Cheese", a: "2 cups finely grated"},
      {n: "Black Pepper", a: "2 tbsp freshly cracked"},
      {n: "Butter", a: "2 tbsp"},
      "Salt"
    ],
    instructions: "Cook spaghetti in well-salted water, reserving 2 cups pasta water. Toast cracked pepper in a dry pan 1 min. Add butter and 1 cup pasta water, simmer. Add drained pasta, toss vigorously. Remove from heat, add cheese in handfuls, tossing constantly and adding pasta water as needed until a creamy, glossy sauce coats the pasta. Serve immediately."
  },
  {
    name: "Minestrone Soup",
    category: "Italian",
    type: "Soup",
    servings: 6,
    time: "40 min",
    ingredients: [
      {n: "Onion", a: "1"},
      {n: "Carrots", a: "2"},
      {n: "Celery", a: "2 stalks"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Zucchini", a: "1"},
      {n: "Crushed Tomatoes", a: "14 oz"},
      {n: "Kidney Beans", a: "1 can"},
      {n: "Elbow Macaroni", a: "1 cup"},
      {n: "Chicken Broth", a: "6 cups"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Parmesan Cheese", a: "for serving"},
      {n: "Dried Oregano", a: "1 tsp"},
      {n: "Fresh Basil", a: "for garnish"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté diced onion, carrots, celery, and garlic in olive oil until soft. Add zucchini, cook 3 min. Add crushed tomatoes, broth, beans, and oregano. Bring to boil, simmer 15 min. Add pasta, cook 8 min more until tender. Season with salt and pepper. Serve topped with parmesan and fresh basil."
  },
  {
    name: "Bruschetta",
    category: "Italian",
    type: "Appetizer",
    servings: 6,
    time: "15 min",
    ingredients: [
      {n: "Bread", a: "1 baguette"},
      {n: "Tomatoes", a: "4 diced"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Fresh Basil", a: "1/4 cup"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Balsamic Vinegar", a: "1 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Dice tomatoes, mix with minced garlic, chopped basil, olive oil, balsamic, salt, and pepper. Let sit 15 min. Slice bread diagonally, brush with olive oil, toast under broiler until golden. Rub toast with a halved garlic clove. Spoon tomato mixture on top. Serve immediately."
  },
  {
    name: "Pesto Genovese with Linguine",
    category: "Italian",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Linguine", a: "1 lb"},
      {n: "Fresh Basil", a: "2 cups packed"},
      {n: "Pine Nuts", a: "1/3 cup"},
      {n: "Parmesan Cheese", a: "1 cup grated"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Olive Oil", a: "1/2 cup"},
      "Salt"
    ],
    instructions: "Toast pine nuts in a dry pan until golden. Blend basil, pine nuts, garlic, and salt in a food processor. With motor running, drizzle in olive oil until smooth. Stir in parmesan. Cook linguine al dente, reserve 1 cup pasta water. Toss pasta with pesto, adding pasta water as needed for a silky sauce."
  },
  {
    name: "Italian Wedding Soup",
    category: "Italian",
    type: "Soup",
    servings: 6,
    time: "35 min",
    ingredients: [
      {n: "Ground Beef", a: "1/2 lb"},
      {n: "Eggs", a: "2"},
      {n: "Breadcrumbs", a: "1/4 cup"},
      {n: "Parmesan Cheese", a: "1/2 cup grated"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Spinach", a: "4 cups"},
      {n: "Angel Hair Pasta", a: "1 cup broken"},
      {n: "Chicken Broth", a: "8 cups"},
      {n: "Onion", a: "1"},
      {n: "Olive Oil", a: "1 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Mix beef, 1 egg, breadcrumbs, half the parmesan, minced garlic, salt, and pepper. Roll into small meatballs. Sauté onion in olive oil, add broth, bring to boil. Add meatballs, simmer 10 min. Add broken pasta, cook 5 min. Add spinach, cook 2 min until wilted. Beat remaining egg, drizzle into soup while stirring. Serve with parmesan."
  },
  {
    name: "Tiramisu Classico",
    category: "Italian",
    type: "Dessert",
    servings: 8,
    time: "30 min",
    ingredients: [
      {n: "Mascarpone Cheese", a: "16 oz"},
      {n: "Eggs", a: "4 separated"},
      {n: "Sugar", a: "1/2 cup"},
      {n: "Espresso", a: "2 cups cooled"},
      {n: "Ladyfingers", a: "24"},
      {n: "Cocoa Powder", a: "for dusting"},
      {n: "Vanilla Extract", a: "1 tsp"}
    ],
    instructions: "Whisk egg yolks with sugar until pale and thick. Fold in mascarpone and vanilla. Whip egg whites to stiff peaks, gently fold into mascarpone mixture. Dip ladyfingers quickly in espresso (don't soak). Layer in dish: ladyfingers, cream, ladyfingers, cream. Chill at least 4 hours. Dust generously with cocoa powder before serving."
  },

  // ========== MEXICAN ==========
  {
    name: "Chicken Tacos",
    category: "Mexican",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Chicken Breast", a: "1.5 lbs"},
      {n: "Tortillas", a: "12 small"},
      {n: "Lime", a: "2"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Onion", a: "1"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Chili Powder", a: "1 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season chicken with cumin, chili powder, garlic, salt, and pepper. Cook in oiled skillet over medium-high heat until done, about 6-7 minutes per side. Rest, then slice. Warm tortillas. Serve with diced onion, cilantro, and lime wedges."
  },
  {
    name: "Beef Burritos",
    category: "Mexican",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Ground Beef", a: "1 lb"},
      {n: "Large Tortillas", a: "4"},
      {n: "Rice", a: "1 cup cooked"},
      {n: "Black Beans", a: "1 can"},
      {n: "Cheddar Cheese", a: "1 cup shredded"},
      {n: "Sour Cream", a: "1/2 cup"},
      {n: "Salsa", a: "1/2 cup"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Garlic", a: "2 cloves"},
      "Salt"
    ],
    instructions: "Brown ground beef with garlic, cumin, chili powder, and salt. Drain beans and warm. Warm tortillas. Layer rice, beef, beans, cheese, salsa, and sour cream on each tortilla. Fold sides in, roll tightly."
  },
  {
    name: "Chicken Enchiladas",
    category: "Mexican",
    type: "Main",
    servings: 6,
    time: "45 min",
    ingredients: [
      {n: "Chicken Breast", a: "2 lbs"},
      {n: "Tortillas", a: "12"},
      {n: "Enchilada Sauce", a: "2 cans"},
      {n: "Cheddar Cheese", a: "2 cups shredded"},
      {n: "Sour Cream", a: "1/2 cup"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Cumin", a: "1 tsp"},
      "Salt",
      "Cilantro"
    ],
    instructions: "Poach and shred chicken. Mix with half the cheese, sour cream, diced onion, cumin. Roll filling in tortillas. Place seam-down in sauced baking dish. Cover with remaining sauce and cheese. Bake 375°F for 20-25 minutes."
  },
  {
    name: "Guacamole",
    category: "Mexican",
    type: "Appetizer",
    servings: 4,
    time: "10 min",
    ingredients: [
      {n: "Avocado", a: "3 ripe"},
      {n: "Lime", a: "1"},
      {n: "Cilantro", a: "1/4 cup"},
      {n: "Onion", a: "1/4 small"},
      {n: "Jalapeño", a: "1"},
      {n: "Tomatoes", a: "1 small"},
      "Salt"
    ],
    instructions: "Mash avocados to desired consistency. Mix in diced onion, jalapeño, tomato, and cilantro. Add lime juice and salt to taste. Serve immediately with chips."
  },
  {
    name: "Quesadillas",
    category: "Mexican",
    type: "Main",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Large Tortillas", a: "4"},
      {n: "Cheddar Cheese", a: "2 cups shredded"},
      {n: "Chicken Breast", a: "1 cup cooked/shredded"},
      {n: "Bell Pepper", a: "1"},
      {n: "Onion", a: "1/2"},
      {n: "Butter", a: "2 tbsp"},
      "Sour Cream",
      "Salsa"
    ],
    instructions: "Sauté sliced peppers and onions. Fill tortillas with cheese, chicken, and vegetables. Cook in buttered skillet over medium heat until golden and cheese melts, about 2-3 minutes per side. Cut into wedges. Serve with sour cream and salsa."
  },
  {
    name: "Mexican Street Corn (Elote)",
    category: "Mexican",
    type: "Side",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Corn on the Cob", a: "4 ears"},
      {n: "Mayonnaise", a: "1/4 cup"},
      {n: "Lime", a: "2"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Cotija Cheese", a: "1/2 cup"},
      "Cilantro",
      "Salt"
    ],
    instructions: "Grill or boil corn until tender and slightly charred. Spread with mayo, squeeze lime juice, sprinkle with chili powder and crumbled cotija. Garnish with cilantro."
  },

  // ========== ASIAN ==========
  {
    name: "Chicken Stir-Fry",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Chicken Breast", a: "1.5 lbs"},
      {n: "Broccoli", a: "2 cups"},
      {n: "Bell Pepper", a: "2"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Sesame Oil", a: "1 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp minced"},
      {n: "Cornstarch", a: "1 tbsp"},
      {n: "Rice", a: "2 cups cooked"},
      {n: "Vegetable Oil", a: "2 tbsp"}
    ],
    instructions: "Slice chicken thin, toss with cornstarch. Stir-fry chicken in oil over high heat until browned. Remove. Stir-fry broccoli and peppers 3 minutes. Add garlic and ginger. Return chicken. Add soy sauce and sesame oil. Serve over rice."
  },
  {
    name: "Beef and Broccoli",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Flank Steak", a: "1 lb"},
      {n: "Broccoli", a: "3 cups"},
      {n: "Soy Sauce", a: "1/3 cup"},
      {n: "Brown Sugar", a: "2 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Cornstarch", a: "2 tbsp"},
      {n: "Sesame Oil", a: "1 tsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Slice steak thin against the grain, toss with 1 tbsp cornstarch. Mix soy sauce, brown sugar, remaining cornstarch, and sesame oil for sauce. Stir-fry beef in batches over high heat. Stir-fry broccoli. Combine with sauce, cook until thickened. Serve over rice."
  },
  {
    name: "Fried Rice",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Rice", a: "4 cups cooked/cold"},
      {n: "Eggs", a: "3"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Sesame Oil", a: "1 tbsp"},
      {n: "Green Onions", a: "4"},
      {n: "Peas", a: "1 cup frozen"},
      {n: "Carrots", a: "1 diced"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Vegetable Oil", a: "3 tbsp"}
    ],
    instructions: "Scramble eggs in oiled wok, set aside. Stir-fry carrots and peas 2 min. Add garlic. Add cold rice, break up clumps. Pour soy sauce around edges of wok. Add egg back, toss. Finish with sesame oil and green onions."
  },
  {
    name: "Pad Thai",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Rice Noodles", a: "8 oz"},
      {n: "Shrimp", a: "1 lb"},
      {n: "Eggs", a: "2"},
      {n: "Bean Sprouts", a: "2 cups"},
      {n: "Green Onions", a: "4"},
      {n: "Peanuts", a: "1/3 cup crushed"},
      {n: "Lime", a: "2"},
      {n: "Fish Sauce", a: "3 tbsp"},
      {n: "Brown Sugar", a: "2 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Red Pepper Flakes", a: "to taste"}
    ],
    instructions: "Soak noodles in hot water until pliable. Mix fish sauce, brown sugar, and lime juice for sauce. Stir-fry shrimp until pink, remove. Scramble eggs in wok. Add noodles and sauce, toss until absorbed. Add shrimp, bean sprouts, green onions. Top with peanuts and lime."
  },
  {
    name: "Teriyaki Salmon",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Salmon Fillets", a: "4 pieces"},
      {n: "Soy Sauce", a: "1/4 cup"},
      {n: "Honey", a: "2 tbsp"},
      {n: "Rice Vinegar", a: "1 tbsp"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Ginger", a: "1 tsp"},
      {n: "Sesame Seeds", a: "1 tbsp"},
      {n: "Green Onions", a: "2"},
      {n: "Rice", a: "for serving"},
      {n: "Vegetable Oil", a: "1 tbsp"}
    ],
    instructions: "Mix soy sauce, honey, rice vinegar, garlic, and ginger for teriyaki sauce. Sear salmon skin-side up in oiled pan 4 minutes. Flip, add sauce, cook 3-4 more minutes basting. Garnish with sesame seeds and green onions. Serve with rice."
  },
  {
    name: "Chicken Kung Pao",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Chicken Breast", a: "1.5 lbs"},
      {n: "Peanuts", a: "1/2 cup"},
      {n: "Bell Pepper", a: "1"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Rice Vinegar", a: "2 tbsp"},
      {n: "Brown Sugar", a: "1 tbsp"},
      {n: "Cornstarch", a: "1 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Red Pepper Flakes", a: "1 tsp"},
      {n: "Green Onions", a: "4"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Cube chicken, toss with cornstarch. Mix soy sauce, rice vinegar, and brown sugar. Stir-fry chicken until golden. Add garlic, ginger, peppers, red pepper flakes. Pour in sauce. Add peanuts and green onions. Serve over rice."
  },
  {
    name: "Miso Soup",
    category: "Asian",
    type: "Appetizer",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Miso Paste", a: "3 tbsp"},
      {n: "Tofu", a: "6 oz"},
      {n: "Green Onions", a: "3"},
      {n: "Seaweed (Wakame)", a: "2 tbsp dried"},
      {n: "Dashi Stock", a: "4 cups"}
    ],
    instructions: "Bring dashi to a simmer. Add cubed tofu and rehydrated wakame. Remove from heat. Dissolve miso paste in a ladleful of broth, then stir back in (don't boil). Serve garnished with sliced green onions."
  },
  {
    name: "Chicken Ramen",
    category: "Asian",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Ramen Noodles", a: "4 packs"},
      {n: "Chicken Broth", a: "6 cups"},
      {n: "Chicken Breast", a: "2"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Sesame Oil", a: "1 tbsp"},
      {n: "Eggs", a: "4"},
      {n: "Green Onions", a: "4"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Corn", a: "1 cup"},
      "Nori"
    ],
    instructions: "Simmer broth with garlic, ginger, soy sauce, and sesame oil. Poach chicken in broth until cooked, then shred. Soft-boil eggs (6.5 min). Cook noodles separately. Assemble bowls: noodles, broth, shredded chicken, halved egg, corn, green onions, and nori."
  },

  // ========== AMERICAN ==========
  {
    name: "Classic Cheeseburger",
    category: "American",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Ground Beef", a: "1.5 lbs"},
      {n: "Cheddar Cheese", a: "4 slices"},
      {n: "Hamburger Buns", a: "4"},
      {n: "Lettuce", a: "4 leaves"},
      {n: "Tomatoes", a: "1 sliced"},
      {n: "Onion", a: "1 sliced"},
      {n: "Ketchup", a: "to taste"},
      {n: "Mustard", a: "to taste"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Form beef into 4 patties, season generously with salt and pepper. Grill or pan-fry over high heat 3-4 minutes per side for medium. Add cheese in last minute. Toast buns. Assemble with lettuce, tomato, onion, and condiments."
  },
  {
    name: "Mac and Cheese",
    category: "American",
    type: "Main",
    servings: 6,
    time: "30 min",
    ingredients: [
      {n: "Elbow Macaroni", a: "1 lb"},
      {n: "Cheddar Cheese", a: "3 cups shredded"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Flour", a: "3 tbsp"},
      {n: "Milk", a: "3 cups"},
      {n: "Mustard", a: "1 tsp"},
      {n: "Paprika", a: "1/2 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cook macaroni al dente. Make roux: melt butter, whisk in flour, cook 1 minute. Slowly add milk, whisk until thick. Add mustard, paprika, salt, pepper. Remove from heat, stir in cheese until melted. Combine with pasta. Optional: top with breadcrumbs and broil."
  },
  {
    name: "BBQ Pulled Pork",
    category: "American",
    type: "Main",
    servings: 8,
    time: "4 hours",
    ingredients: [
      {n: "Pork Shoulder", a: "4 lbs"},
      {n: "BBQ Sauce", a: "2 cups"},
      {n: "Brown Sugar", a: "2 tbsp"},
      {n: "Paprika", a: "1 tbsp"},
      {n: "Garlic Powder", a: "1 tbsp"},
      {n: "Onion", a: "1"},
      {n: "Apple Cider Vinegar", a: "1/4 cup"},
      {n: "Hamburger Buns", a: "8"},
      "Salt",
      "Black Pepper",
      "Cumin"
    ],
    instructions: "Rub pork with brown sugar, paprika, garlic powder, cumin, salt, and pepper. Place in slow cooker with sliced onion and apple cider vinegar. Cook low 8 hours or high 4 hours. Shred with forks. Mix with BBQ sauce. Serve on buns."
  },
  {
    name: "Caesar Salad",
    category: "American",
    type: "Side",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Romaine Lettuce", a: "2 heads"},
      {n: "Parmesan Cheese", a: "1/2 cup shaved"},
      {n: "Croutons", a: "1 cup"},
      {n: "Lemon", a: "1"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Olive Oil", a: "1/3 cup"},
      {n: "Dijon Mustard", a: "1 tsp"},
      {n: "Anchovy Paste", a: "1 tsp"},
      {n: "Eggs", a: "1 yolk"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Make dressing: whisk egg yolk, minced garlic, anchovy paste, lemon juice, and mustard. Slowly drizzle in olive oil while whisking. Season with salt and pepper. Chop romaine, toss with dressing, parmesan, and croutons."
  },
  {
    name: "Meatloaf",
    category: "American",
    type: "Main",
    servings: 6,
    time: "75 min",
    ingredients: [
      {n: "Ground Beef", a: "2 lbs"},
      {n: "Breadcrumbs", a: "3/4 cup"},
      {n: "Eggs", a: "2"},
      {n: "Onion", a: "1 diced"},
      {n: "Ketchup", a: "1/2 cup"},
      {n: "Milk", a: "1/4 cup"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Worcestershire Sauce", a: "1 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Mix beef, breadcrumbs, eggs, onion, garlic, milk, worcestershire, salt and pepper. Form into loaf on baking sheet. Top with ketchup. Bake at 350°F for 55-65 minutes until internal temp reaches 160°F. Rest 10 minutes before slicing."
  },
  {
    name: "Grilled Cheese & Tomato Soup",
    category: "American",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Bread", a: "8 slices"},
      {n: "Cheddar Cheese", a: "8 slices"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Crushed Tomatoes", a: "28 oz can"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Heavy Cream", a: "1/4 cup"},
      {n: "Chicken Broth", a: "1 cup"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt",
      "Black Pepper",
      "Fresh Basil"
    ],
    instructions: "Soup: Sauté onion and garlic in olive oil. Add crushed tomatoes and broth, simmer 15 min. Blend smooth, stir in cream. Grilled cheese: Butter bread, layer cheese, cook in skillet until golden on both sides. Serve together."
  },

  // ========== MEDITERRANEAN ==========
  {
    name: "Greek Salad",
    category: "Mediterranean",
    type: "Side",
    servings: 4,
    time: "10 min",
    ingredients: [
      {n: "Cucumber", a: "1 large"},
      {n: "Tomatoes", a: "3"},
      {n: "Red Onion", a: "1/2"},
      {n: "Feta Cheese", a: "6 oz"},
      {n: "Kalamata Olives", a: "1/2 cup"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Red Wine Vinegar", a: "1 tbsp"},
      {n: "Dried Oregano", a: "1 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Chop cucumber, tomatoes, and red onion into chunks. Combine in bowl. Add olives and crumbled feta. Dress with olive oil, red wine vinegar, oregano, salt and pepper. Toss gently."
  },
  {
    name: "Chicken Shawarma",
    category: "Mediterranean",
    type: "Main",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs"},
      {n: "Yogurt", a: "1/2 cup"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Paprika", a: "2 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Lemon", a: "1"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Pita Bread", a: "4"},
      "Salt",
      "Black Pepper",
      "Cinnamon"
    ],
    instructions: "Marinate chicken in yogurt, cumin, paprika, turmeric, cinnamon, garlic, lemon juice, olive oil, salt and pepper (at least 30 min). Grill or roast at 425°F for 20-25 min. Slice thin. Serve in warm pita with tahini, pickles, and vegetables."
  },
  {
    name: "Falafel",
    category: "Mediterranean",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Chickpeas", a: "2 cans drained"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Fresh Parsley", a: "1/2 cup"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Flour", a: "2 tbsp"},
      {n: "Lemon", a: "1"},
      {n: "Pita Bread", a: "4"},
      {n: "Vegetable Oil", a: "for frying"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Pulse chickpeas, onion, garlic, herbs, cumin, salt and pepper in food processor (don't purée). Mix in flour. Form into patties. Fry in 1 inch oil at 350°F until deep golden, about 3-4 minutes per side. Drain. Serve in pita with tahini and vegetables."
  },
  {
    name: "Hummus",
    category: "Mediterranean",
    type: "Appetizer",
    servings: 6,
    time: "10 min",
    ingredients: [
      {n: "Chickpeas", a: "2 cans drained"},
      {n: "Tahini", a: "1/3 cup"},
      {n: "Lemon", a: "2"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Cumin", a: "1/2 tsp"},
      "Salt",
      "Paprika"
    ],
    instructions: "Blend chickpeas, tahini, lemon juice, garlic, cumin, and salt until very smooth. Add ice water 1 tbsp at a time for desired consistency. Serve drizzled with olive oil and paprika."
  },
  {
    name: "Lamb Gyros",
    category: "Mediterranean",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Ground Lamb", a: "1 lb"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Dried Oregano", a: "2 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Pita Bread", a: "4"},
      {n: "Yogurt", a: "1 cup"},
      {n: "Cucumber", a: "1"},
      {n: "Tomatoes", a: "2"},
      {n: "Red Onion", a: "1/2"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Process lamb with grated onion, garlic, oregano, cumin, salt and pepper. Pack into loaf pan. Bake 325°F for 45 min. Make tzatziki: mix yogurt, grated cucumber, garlic, lemon. Slice meat thin. Serve in pita with tzatziki, tomatoes, and onion."
  },

  // ========== INDIAN ==========
  {
    name: "Butter Chicken",
    category: "Indian",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs"},
      {n: "Yogurt", a: "1/2 cup"},
      {n: "Crushed Tomatoes", a: "14 oz can"},
      {n: "Heavy Cream", a: "1/2 cup"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Garam Masala", a: "2 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Rice", a: "for serving"},
      "Salt"
    ],
    instructions: "Marinate chicken in yogurt, garam masala, turmeric 30 min. Sear chicken in butter until browned. Sauté onion, garlic, ginger. Add spices, then tomatoes. Simmer 15 min. Add cream and chicken, cook 10 min. Serve over basmati rice."
  },
  {
    name: "Chickpea Curry (Chana Masala)",
    category: "Indian",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Chickpeas", a: "2 cans"},
      {n: "Crushed Tomatoes", a: "14 oz can"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Garam Masala", a: "2 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Turmeric", a: "1/2 tsp"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Cilantro", a: "for garnish"},
      {n: "Rice", a: "for serving"},
      "Salt"
    ],
    instructions: "Sauté diced onion until golden. Add garlic, ginger, and all spices, cook 1 minute. Add tomatoes and chickpeas, simmer 20 minutes until thickened. Adjust salt and spice. Garnish with cilantro. Serve with rice or naan."
  },
  {
    name: "Dal (Lentil Curry)",
    category: "Indian",
    type: "Main",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Red Lentils", a: "1.5 cups"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Crushed Tomatoes", a: "14 oz can"},
      {n: "Coconut Milk", a: "1/2 cup"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Garam Masala", a: "1 tsp"},
      {n: "Butter", a: "2 tbsp"},
      {n: "Cilantro", a: "for garnish"},
      {n: "Rice", a: "for serving"},
      "Salt"
    ],
    instructions: "Cook lentils in water with turmeric until soft (20 min). Sauté onion in butter, add garlic, ginger, cumin, garam masala. Add tomatoes, cook 5 min. Combine with lentils. Stir in coconut milk. Simmer until thick. Garnish with cilantro, serve with rice."
  },
  {
    name: "Naan Bread",
    category: "Indian",
    type: "Side",
    servings: 8,
    time: "60 min",
    ingredients: [
      {n: "Flour", a: "3 cups"},
      {n: "Yogurt", a: "1/2 cup"},
      {n: "Yeast", a: "1 tsp"},
      {n: "Sugar", a: "1 tsp"},
      {n: "Butter", a: "3 tbsp melted"},
      {n: "Garlic", a: "2 cloves"},
      "Salt"
    ],
    instructions: "Dissolve yeast and sugar in warm water. Mix with flour, yogurt, and salt to form dough. Knead 5 min, let rise 45 min. Divide into 8 balls, roll thin. Cook in hot skillet or cast iron 2 min per side until blistered. Brush with garlic butter."
  },

  // ========== COMFORT FOOD ==========
  {
    name: "Chicken Pot Pie",
    category: "Comfort Food",
    type: "Main",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Chicken Breast", a: "2 cups cooked/cubed"},
      {n: "Pie Crust", a: "2 sheets"},
      {n: "Peas", a: "1 cup frozen"},
      {n: "Carrots", a: "2 diced"},
      {n: "Onion", a: "1"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Flour", a: "3 tbsp"},
      {n: "Chicken Broth", a: "1.5 cups"},
      {n: "Milk", a: "1/2 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté onion and carrots in butter. Add flour, cook 1 min. Add broth and milk, stir until thick. Add chicken, peas, salt and pepper. Pour into pie crust-lined dish. Top with second crust, crimp edges, cut vents. Bake 375°F for 35-40 minutes until golden."
  },
  {
    name: "Beef Stew",
    category: "Comfort Food",
    type: "Main",
    servings: 6,
    time: "2.5 hours",
    ingredients: [
      {n: "Beef Chuck", a: "2 lbs cubed"},
      {n: "Potatoes", a: "4 medium"},
      {n: "Carrots", a: "4"},
      {n: "Onion", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Beef Broth", a: "4 cups"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Flour", a: "2 tbsp"},
      {n: "Red Wine", a: "1 cup"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt",
      "Black Pepper",
      "Dried Thyme"
    ],
    instructions: "Toss beef in flour, salt, pepper. Brown in batches in olive oil. Sauté onion and garlic. Deglaze with red wine. Add broth, tomato paste, thyme. Return beef, bring to simmer. Cook 1.5 hours. Add chunked potatoes and carrots, cook 45 more minutes until tender."
  },
  {
    name: "Chili Con Carne",
    category: "Comfort Food",
    type: "Main",
    servings: 8,
    time: "60 min",
    ingredients: [
      {n: "Ground Beef", a: "2 lbs"},
      {n: "Kidney Beans", a: "2 cans"},
      {n: "Crushed Tomatoes", a: "28 oz can"},
      {n: "Onion", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Bell Pepper", a: "2"},
      {n: "Chili Powder", a: "3 tbsp"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt",
      "Black Pepper",
      "Cheddar Cheese",
      "Sour Cream"
    ],
    instructions: "Brown beef in olive oil, drain excess fat. Add diced onion, peppers, garlic. Add chili powder, cumin, paprika. Stir in tomato paste, crushed tomatoes, and drained beans. Simmer 45 minutes, stirring occasionally. Serve with cheddar, sour cream, and cornbread."
  },
  {
    name: "Shepherd's Pie",
    category: "Comfort Food",
    type: "Main",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Ground Lamb", a: "1.5 lbs"},
      {n: "Potatoes", a: "3 lbs"},
      {n: "Carrots", a: "2"},
      {n: "Peas", a: "1 cup"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Beef Broth", a: "1 cup"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Milk", a: "1/2 cup"},
      {n: "Worcestershire Sauce", a: "1 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Boil potatoes until tender, mash with butter and milk. Brown lamb with onion and garlic. Add carrots, peas, tomato paste, broth, worcestershire. Simmer 10 min. Pour into baking dish, top with mashed potatoes. Broil until golden, about 5-8 minutes."
  },
  {
    name: "Chicken Noodle Soup",
    category: "Comfort Food",
    type: "Main",
    servings: 6,
    time: "45 min",
    ingredients: [
      {n: "Chicken Breast", a: "1.5 lbs"},
      {n: "Egg Noodles", a: "8 oz"},
      {n: "Chicken Broth", a: "8 cups"},
      {n: "Carrots", a: "3"},
      {n: "Celery", a: "3 stalks"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Fresh Parsley", a: "2 tbsp"},
      "Salt",
      "Black Pepper",
      "Dried Thyme"
    ],
    instructions: "Sauté diced onion, carrots, and celery in olive oil 5 min. Add garlic and thyme. Pour in broth, add whole chicken breasts. Simmer 20 min until chicken is cooked. Remove chicken, shred, return to pot. Add noodles, cook until tender. Season and garnish with parsley."
  },

  // ========== SEAFOOD ==========
  {
    name: "Garlic Butter Shrimp",
    category: "Seafood",
    type: "Main",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Shrimp", a: "1.5 lbs"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Garlic", a: "6 cloves"},
      {n: "White Wine", a: "1/4 cup"},
      {n: "Lemon", a: "1"},
      {n: "Fresh Parsley", a: "2 tbsp"},
      {n: "Red Pepper Flakes", a: "1/4 tsp"},
      {n: "Bread", a: "for serving"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Melt butter over medium-high heat. Add garlic and red pepper flakes, cook 30 seconds. Add shrimp in single layer, cook 2 minutes per side. Add white wine and lemon juice, cook 1 more minute. Garnish with parsley. Serve with crusty bread."
  },
  {
    name: "Fish Tacos",
    category: "Seafood",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "White Fish Fillets", a: "1 lb"},
      {n: "Tortillas", a: "8 small"},
      {n: "Cabbage", a: "2 cups shredded"},
      {n: "Lime", a: "2"},
      {n: "Sour Cream", a: "1/2 cup"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Cumin", a: "1/2 tsp"},
      {n: "Garlic Powder", a: "1/2 tsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Cilantro",
      "Salt"
    ],
    instructions: "Season fish with chili powder, cumin, garlic powder, and salt. Pan-fry in olive oil 3-4 min per side until flaky. Make crema: mix sour cream with lime juice and salt. Warm tortillas. Break fish into chunks, serve in tortillas with cabbage, crema, cilantro, and lime."
  },
  {
    name: "Lemon Herb Baked Salmon",
    category: "Seafood",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Salmon Fillets", a: "4 pieces"},
      {n: "Lemon", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Dijon Mustard", a: "1 tbsp"},
      {n: "Honey", a: "1 tbsp"},
      {n: "Fresh Dill", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Mix olive oil, lemon juice, minced garlic, mustard, honey, dill, salt and pepper. Place salmon on foil-lined baking sheet. Spread herb mixture on top. Top with lemon slices. Bake 400°F for 12-15 minutes until fish flakes easily."
  },
  {
    name: "Shrimp Scampi",
    category: "Seafood",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Shrimp", a: "1.5 lbs"},
      {n: "Linguine", a: "12 oz"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Garlic", a: "6 cloves"},
      {n: "White Wine", a: "1/2 cup"},
      {n: "Lemon", a: "2"},
      {n: "Red Pepper Flakes", a: "1/4 tsp"},
      {n: "Fresh Parsley", a: "1/4 cup"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cook linguine. Sauté shrimp in olive oil 1 min per side, remove. Add butter, garlic, red pepper flakes. Add wine and lemon juice, simmer 2 min. Return shrimp, add pasta and pasta water. Toss until coated. Finish with parsley."
  },

  // ========== QUICK & EASY ==========
  {
    name: "One-Pan Lemon Chicken & Veggies",
    category: "Quick & Easy",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Chicken Thighs", a: "4"},
      {n: "Potatoes", a: "1 lb baby"},
      {n: "Broccoli", a: "2 cups"},
      {n: "Lemon", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Dried Oregano", a: "1 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Toss halved potatoes with olive oil, salt, pepper. Spread on sheet pan, roast 400°F for 10 min. Season chicken with oregano, salt, pepper. Add chicken and broccoli to pan. Squeeze lemon over everything, add garlic. Roast 20-25 more minutes until chicken is 165°F."
  },
  {
    name: "15-Minute Shrimp Pasta",
    category: "Quick & Easy",
    type: "Main",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Angel Hair Pasta", a: "12 oz"},
      {n: "Shrimp", a: "1 lb"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Cherry Tomatoes", a: "1 pint"},
      {n: "Fresh Basil", a: "handful"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Red Pepper Flakes", a: "1/4 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cook pasta. Meanwhile, sauté shrimp in olive oil 2 min per side. Add garlic and halved cherry tomatoes, cook until tomatoes burst. Toss with drained pasta, basil, and parmesan. Season with red pepper flakes, salt, and pepper."
  },
  {
    name: "Breakfast for Dinner (Shakshuka)",
    category: "Quick & Easy",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Eggs", a: "6"},
      {n: "Crushed Tomatoes", a: "28 oz can"},
      {n: "Onion", a: "1"},
      {n: "Bell Pepper", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Chili Powder", a: "1/2 tsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Feta Cheese", a: "1/4 cup"},
      {n: "Bread", a: "for serving"},
      "Salt",
      "Cilantro"
    ],
    instructions: "Sauté diced onion and pepper in olive oil. Add garlic, cumin, paprika, chili powder. Add crushed tomatoes, simmer 10 min. Make 6 wells, crack eggs in. Cover and cook 5-7 min until whites are set. Top with crumbled feta and cilantro. Serve with crusty bread."
  },
  {
    name: "Black Bean Tacos",
    category: "Quick & Easy",
    type: "Main",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Black Beans", a: "2 cans"},
      {n: "Tortillas", a: "8"},
      {n: "Avocado", a: "2"},
      {n: "Lime", a: "1"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Garlic", a: "2 cloves"},
      "Salt",
      "Cilantro",
      "Salsa",
      "Sour Cream"
    ],
    instructions: "Mash half the beans, leave rest whole. Heat with cumin, chili powder, garlic, and salt until hot. Warm tortillas. Slice avocado, squeeze with lime. Fill tortillas with beans, avocado, salsa, sour cream, and cilantro."
  },
  {
    name: "Caprese Chicken",
    category: "Quick & Easy",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Chicken Breast", a: "4"},
      {n: "Fresh Mozzarella", a: "8 oz"},
      {n: "Tomatoes", a: "2"},
      {n: "Fresh Basil", a: "bunch"},
      {n: "Balsamic Vinegar", a: "2 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season chicken with salt and pepper, sear in olive oil 5-6 min per side. Top each breast with sliced tomato and mozzarella. Cover and cook 2-3 min until cheese melts. Drizzle with balsamic, top with fresh basil."
  },

  // ========== VEGETARIAN ==========
  {
    name: "Mushroom Risotto",
    category: "Vegetarian",
    type: "Main",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Arborio Rice", a: "1.5 cups"},
      {n: "Mushrooms", a: "12 oz mixed"},
      {n: "Vegetable Broth", a: "6 cups"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "White Wine", a: "1/2 cup"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Fresh Thyme", a: "1 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté sliced mushrooms in butter until golden, set aside. Sauté onion, add rice and toast. Deglaze with wine. Add warm broth one ladle at a time, stirring constantly for 18-20 min. Fold in mushrooms, parmesan, thyme. Season to taste."
  },
  {
    name: "Vegetable Curry",
    category: "Vegetarian",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Coconut Milk", a: "1 can"},
      {n: "Sweet Potato", a: "2 medium"},
      {n: "Chickpeas", a: "1 can"},
      {n: "Spinach", a: "4 cups"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Curry Powder", a: "2 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Rice", a: "for serving"},
      "Salt",
      "Lime"
    ],
    instructions: "Sauté onion, garlic, ginger. Add curry powder, cook 1 min. Add cubed sweet potato and coconut milk. Simmer 15 min. Add chickpeas and spinach, cook until potato is tender and spinach wilts. Season with salt and lime. Serve over rice."
  },
  {
    name: "Stuffed Bell Peppers",
    category: "Vegetarian",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Bell Pepper", a: "4 large"},
      {n: "Rice", a: "1 cup cooked"},
      {n: "Black Beans", a: "1 can"},
      {n: "Corn", a: "1 cup"},
      {n: "Crushed Tomatoes", a: "1 cup"},
      {n: "Cheddar Cheese", a: "1 cup shredded"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Garlic", a: "2 cloves"},
      "Salt",
      "Cilantro"
    ],
    instructions: "Cut tops off peppers, remove seeds. Mix rice, drained beans, corn, half the tomatoes, half the cheese, cumin, chili powder, garlic, salt. Stuff peppers, place in baking dish. Pour remaining tomatoes around peppers. Bake 375°F 30 min. Top with remaining cheese, bake 5 more minutes."
  },
  {
    name: "Pasta Primavera",
    category: "Vegetarian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Penne", a: "1 lb"},
      {n: "Zucchini", a: "2"},
      {n: "Bell Pepper", a: "1"},
      {n: "Cherry Tomatoes", a: "1 pint"},
      {n: "Broccoli", a: "2 cups"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Fresh Basil", a: "handful"},
      {n: "Lemon", a: "1"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cook pasta. Sauté sliced zucchini, peppers, and broccoli in olive oil until tender-crisp. Add garlic and halved tomatoes, cook until tomatoes soften. Toss with pasta, lemon juice, parmesan, and basil. Season to taste."
  },
  {
    name: "Spinach & Ricotta Stuffed Shells",
    category: "Vegetarian",
    type: "Main",
    servings: 6,
    time: "50 min",
    ingredients: [
      {n: "Jumbo Pasta Shells", a: "24"},
      {n: "Ricotta Cheese", a: "2 cups"},
      {n: "Spinach", a: "10 oz frozen"},
      {n: "Mozzarella Cheese", a: "2 cups shredded"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Marinara Sauce", a: "3 cups"},
      {n: "Eggs", a: "1"},
      {n: "Garlic", a: "2 cloves"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cook shells al dente. Squeeze spinach dry. Mix ricotta, spinach, 1 cup mozzarella, parmesan, egg, garlic, salt and pepper. Spread 1 cup marinara in baking dish. Stuff shells, arrange in dish. Top with remaining sauce and mozzarella. Bake covered 375°F 25 min, uncovered 10 min."
  },

  // ========== DESSERTS ==========
  {
    name: "Chocolate Lava Cakes",
    category: "Dessert",
    type: "Dessert",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Dark Chocolate", a: "6 oz"},
      {n: "Butter", a: "1/2 cup"},
      {n: "Eggs", a: "2 + 2 yolks"},
      {n: "Sugar", a: "1/4 cup"},
      {n: "Flour", a: "2 tbsp"},
      {n: "Vanilla Extract", a: "1 tsp"},
      "Salt"
    ],
    instructions: "Melt chocolate and butter together. Whisk eggs, yolks, and sugar until thick. Fold in chocolate mixture, then flour, vanilla, and salt. Pour into buttered ramekins. Bake 425°F for 12-14 minutes (edges set, center jiggly). Invert onto plates immediately."
  },
  {
    name: "Classic Brownies",
    category: "Dessert",
    type: "Dessert",
    servings: 12,
    time: "40 min",
    ingredients: [
      {n: "Butter", a: "1/2 cup"},
      {n: "Sugar", a: "1 cup"},
      {n: "Eggs", a: "2"},
      {n: "Cocoa Powder", a: "1/3 cup"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Vanilla Extract", a: "1 tsp"},
      "Salt"
    ],
    instructions: "Melt butter. Stir in sugar, eggs, and vanilla. Add cocoa, flour, and salt. Pour into greased 8x8 pan. Bake 350°F for 25-30 minutes. Cool before cutting. For fudgier brownies, pull at 25 minutes."
  },
  {
    name: "Tiramisu",
    category: "Dessert",
    type: "Dessert",
    servings: 8,
    time: "30 min + chill",
    ingredients: [
      {n: "Mascarpone Cheese", a: "16 oz"},
      {n: "Heavy Cream", a: "1 cup"},
      {n: "Sugar", a: "1/2 cup"},
      {n: "Eggs", a: "3 yolks"},
      {n: "Espresso", a: "1.5 cups cooled"},
      {n: "Ladyfingers", a: "24"},
      {n: "Cocoa Powder", a: "for dusting"},
      {n: "Vanilla Extract", a: "1 tsp"}
    ],
    instructions: "Whisk yolks and sugar until pale. Fold in mascarpone and vanilla. Whip cream to stiff peaks, fold into mascarpone mixture. Dip ladyfingers briefly in espresso. Layer: ladyfingers, cream, ladyfingers, cream. Chill 4+ hours. Dust with cocoa before serving."
  },
  {
    name: "Apple Crisp",
    category: "Dessert",
    type: "Dessert",
    servings: 6,
    time: "45 min",
    ingredients: [
      {n: "Apples", a: "6 medium"},
      {n: "Brown Sugar", a: "3/4 cup"},
      {n: "Oats", a: "1 cup"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Butter", a: "1/2 cup cold"},
      {n: "Cinnamon", a: "2 tsp"},
      {n: "Lemon", a: "1"},
      "Salt",
      "Vanilla Extract"
    ],
    instructions: "Slice apples, toss with 1/4 cup brown sugar, cinnamon, lemon juice, vanilla. Place in baking dish. Mix oats, flour, remaining brown sugar, salt. Cut in cold butter until crumbly. Spread over apples. Bake 375°F for 35-40 minutes until golden and bubbly. Serve with vanilla ice cream."
  },
  {
    name: "Panna Cotta",
    category: "Dessert",
    type: "Dessert",
    servings: 4,
    time: "15 min + chill",
    ingredients: [
      {n: "Heavy Cream", a: "2 cups"},
      {n: "Sugar", a: "1/4 cup"},
      {n: "Vanilla Extract", a: "1 tsp"},
      {n: "Gelatin", a: "1 packet"},
      {n: "Milk", a: "1/4 cup"},
      "Fresh Berries"
    ],
    instructions: "Sprinkle gelatin over cold milk, let bloom 5 min. Heat cream and sugar until simmering. Remove from heat, stir in gelatin until dissolved. Add vanilla. Pour into ramekins or glasses. Chill 4+ hours until set. Serve topped with fresh berries."
  },

  // ========== JAPANESE ==========
  {
    name: "Tonkotsu Ramen",
    category: "Japanese",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Ramen Noodles", a: "4 servings"},
      {n: "Pork Shoulder", a: "1 lb"},
      {n: "Eggs", a: "4"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Miso Paste", a: "2 tbsp"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Sesame Oil", a: "1 tbsp"},
      {n: "Green Onions", a: "4"},
      {n: "Corn", a: "1 cup"},
      {n: "Pork Broth", a: "6 cups"},
      "Nori"
    ],
    instructions: "Simmer pork broth with garlic, ginger, miso paste, and soy sauce for 20 minutes. Slice pork shoulder thin and pan-fry until caramelized. Soft-boil eggs 6.5 minutes, then marinate in soy sauce and water. Cook ramen noodles per package. Assemble bowls: noodles, rich broth, pork slices, halved marinated egg, corn, green onions, sesame oil drizzle, and nori."
  },
  {
    name: "Chicken Katsu",
    category: "Japanese",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Chicken Breast", a: "4 pieces"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Eggs", a: "2"},
      {n: "Panko Breadcrumbs", a: "2 cups"},
      {n: "Vegetable Oil", a: "1/2 cup"},
      {n: "Soy Sauce", a: "2 tbsp"},
      {n: "Cabbage", a: "2 cups shredded"},
      {n: "Rice", a: "for serving"},
      {n: "Tonkatsu Sauce", a: "4 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Pound chicken breasts to even 1/2-inch thickness. Season with salt and pepper. Set up breading station: flour, beaten eggs, panko breadcrumbs. Coat each piece thoroughly. Shallow-fry in vegetable oil over medium-high heat 3-4 minutes per side until deep golden and cooked through. Drain on paper towels. Slice diagonally. Serve over steamed rice with shredded cabbage and tonkatsu sauce."
  },
  {
    name: "Salmon Teriyaki Donburi",
    category: "Japanese",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Salmon Fillets", a: "4 pieces"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Honey", a: "2 tbsp"},
      {n: "Rice Vinegar", a: "1 tbsp"},
      {n: "Mirin", a: "2 tbsp"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Sesame Seeds", a: "1 tbsp"},
      {n: "Green Onions", a: "3"},
      {n: "Rice", a: "3 cups cooked"},
      {n: "Cucumber", a: "1"},
      {n: "Sesame Oil", a: "1 tsp"}
    ],
    instructions: "Mix soy sauce, honey, rice vinegar, mirin, and minced garlic for teriyaki glaze. Marinate salmon 15 minutes. Sear salmon in lightly oiled pan over medium-high heat 3 minutes per side, basting with glaze. Thinly slice cucumber and toss with rice vinegar and sesame oil. Serve salmon over bowls of rice, topped with glazed pan juices, sesame seeds, green onions, and cucumber."
  },
  {
    name: "Agedashi Tofu",
    category: "Japanese",
    type: "Appetizer",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Tofu", a: "14 oz firm"},
      {n: "Cornstarch", a: "1/2 cup"},
      {n: "Dashi Stock", a: "1 cup"},
      {n: "Soy Sauce", a: "2 tbsp"},
      {n: "Mirin", a: "2 tbsp"},
      {n: "Vegetable Oil", a: "2 cups for frying"},
      {n: "Ginger", a: "1 tsp grated"},
      {n: "Green Onions", a: "3"},
      {n: "Daikon Radish", a: "1/4 cup grated"},
      "Sesame Seeds"
    ],
    instructions: "Press tofu between paper towels 15 minutes to remove excess moisture. Cut into 2-inch cubes. Dredge each piece in cornstarch, shaking off excess. Deep-fry in vegetable oil at 350°F until light golden and crispy, about 3 minutes. Meanwhile, simmer dashi, soy sauce, and mirin together for the tsuyu broth. Serve tofu in shallow bowls, pour warm broth around. Top with grated daikon, ginger, green onions, and sesame seeds."
  },
  {
    name: "Oyakodon",
    category: "Japanese",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Chicken Thighs", a: "1.5 lbs boneless"},
      {n: "Eggs", a: "6"},
      {n: "Onion", a: "1 large"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Mirin", a: "3 tbsp"},
      {n: "Dashi Stock", a: "1 cup"},
      {n: "Sugar", a: "1 tbsp"},
      {n: "Rice", a: "4 cups cooked"},
      {n: "Green Onions", a: "3"}
    ],
    instructions: "Slice chicken thighs into bite-size pieces. Thinly slice onion. Combine dashi, soy sauce, mirin, and sugar in a wide skillet and bring to a simmer. Add onion and cook 3 minutes until softened. Add chicken and simmer 5 minutes until cooked through. Beat eggs lightly, pour over the chicken in a circular motion. Cover and cook on low heat 1-2 minutes until eggs are just set but still silky. Slide over bowls of steamed rice and garnish with green onions."
  },
  {
    name: "Japanese Cucumber Sunomono",
    category: "Japanese",
    type: "Side",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Cucumber", a: "2 medium"},
      {n: "Rice Vinegar", a: "3 tbsp"},
      {n: "Sugar", a: "1 tbsp"},
      {n: "Soy Sauce", a: "1 tsp"},
      {n: "Sesame Oil", a: "1 tsp"},
      {n: "Sesame Seeds", a: "1 tbsp"},
      {n: "Ginger", a: "1 tsp grated"},
      "Salt"
    ],
    instructions: "Thinly slice cucumbers. Sprinkle with 1/2 tsp salt and let sit 10 minutes to draw out water. Squeeze out excess moisture. Whisk together rice vinegar, sugar, soy sauce, and sesame oil until sugar dissolves. Toss cucumbers with dressing and grated ginger. Chill 10 minutes. Serve garnished with sesame seeds. This refreshing vinegared salad pairs perfectly with any Japanese main dish."
  },

  // ========== KOREAN ==========
  {
    name: "Bibimbap",
    category: "Korean",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Rice", a: "3 cups cooked"},
      {n: "Ground Beef", a: "3/4 lb"},
      {n: "Spinach", a: "2 cups"},
      {n: "Carrots", a: "2 julienned"},
      {n: "Mushrooms", a: "1 cup sliced"},
      {n: "Bean Sprouts", a: "1 cup"},
      {n: "Eggs", a: "4"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Sesame Oil", a: "2 tbsp"},
      {n: "Gochujang", a: "3 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Brown Sugar", a: "1 tsp"},
      {n: "Sesame Seeds", a: "1 tbsp"}
    ],
    instructions: "Season beef with soy sauce, garlic, sesame oil, and brown sugar; cook until browned. Separately blanch spinach, sauté carrots, sauté mushrooms, and blanch bean sprouts; season each with a little sesame oil and soy sauce. Fry eggs sunny-side up. Divide rice into bowls, arrange each topping in sections over rice. Add fried egg on top. Mix gochujang with a little sesame oil and water for sauce. Drizzle sauce over bowls, garnish with sesame seeds, and mix everything together before eating."
  },
  {
    name: "Bulgogi",
    category: "Korean",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Flank Steak", a: "1.5 lbs"},
      {n: "Soy Sauce", a: "1/4 cup"},
      {n: "Brown Sugar", a: "3 tbsp"},
      {n: "Sesame Oil", a: "2 tbsp"},
      {n: "Garlic", a: "5 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Pear", a: "1/2 grated"},
      {n: "Green Onions", a: "4"},
      {n: "Sesame Seeds", a: "1 tbsp"},
      {n: "Vegetable Oil", a: "1 tbsp"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Freeze steak 30 minutes for easier slicing, then cut paper-thin against the grain. Whisk soy sauce, brown sugar, sesame oil, minced garlic, ginger, and grated pear (natural tenderizer). Marinate beef at least 30 minutes or up to overnight. Cook in batches in a very hot, lightly oiled pan or grill, 1-2 minutes per side. Don't crowd the pan. Serve over rice garnished with green onions and sesame seeds. Wrap in lettuce leaves if desired."
  },
  {
    name: "Doenjang Jjigae",
    category: "Korean",
    type: "Soup",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Tofu", a: "14 oz firm"},
      {n: "Pork Shoulder", a: "1/2 lb"},
      {n: "Zucchini", a: "1 medium"},
      {n: "Mushrooms", a: "1 cup"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Korean Fermented Soybean Paste", a: "3 tbsp"},
      {n: "Gochujang", a: "1 tbsp"},
      {n: "Dashi Stock", a: "4 cups"},
      {n: "Green Onions", a: "3"},
      {n: "Sesame Oil", a: "1 tsp"}
    ],
    instructions: "Bring dashi to a boil. Dissolve Korean fermented soybean paste and gochujang in broth. Add sliced pork and cook 5 minutes. Add diced onion, zucchini, and mushrooms; simmer 8 minutes. Add cubed tofu and minced garlic, simmer 5 more minutes. Adjust saltiness with more paste if needed. Finish with sesame oil. Serve in hot stone bowls if available, garnished with sliced green onions. Accompanies steamed rice."
  },
  {
    name: "Japchae",
    category: "Korean",
    type: "Side",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Glass Noodles", a: "8 oz"},
      {n: "Flank Steak", a: "1/2 lb"},
      {n: "Spinach", a: "2 cups"},
      {n: "Carrots", a: "2 julienned"},
      {n: "Mushrooms", a: "1 cup sliced"},
      {n: "Onion", a: "1"},
      {n: "Bell Pepper", a: "1"},
      {n: "Soy Sauce", a: "4 tbsp"},
      {n: "Sesame Oil", a: "2 tbsp"},
      {n: "Brown Sugar", a: "2 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Sesame Seeds", a: "1 tbsp"}
    ],
    instructions: "Soak glass noodles in hot water 15 minutes, drain. Slice steak thin and marinate in half the soy sauce, brown sugar, garlic, and sesame oil. Blanch spinach, squeeze dry. Stir-fry each vegetable separately: carrots, mushrooms, bell pepper, onion. Stir-fry marinated beef until cooked. In large wok, combine all ingredients including noodles. Add remaining soy sauce, brown sugar, and sesame oil. Toss over high heat until evenly coated and noodles are translucent. Garnish with sesame seeds."
  },
  {
    name: "Korean Fried Chicken",
    category: "Korean",
    type: "Main",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs bone-in"},
      {n: "Cornstarch", a: "1/2 cup"},
      {n: "Flour", a: "1/4 cup"},
      {n: "Gochujang", a: "2 tbsp"},
      {n: "Soy Sauce", a: "2 tbsp"},
      {n: "Honey", a: "2 tbsp"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Sesame Seeds", a: "1 tbsp"},
      {n: "Green Onions", a: "3"},
      {n: "Vegetable Oil", a: "for frying"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season chicken with salt and pepper. Mix cornstarch and flour, dredge chicken pieces thoroughly. Double-fry: first fry at 325°F for 12 minutes, rest 5 minutes, then fry again at 375°F for 5 minutes until extra crispy. Meanwhile, make sauce: combine gochujang, soy sauce, honey, minced garlic, and ginger in a pan, simmer 2 minutes until glossy. Toss fried chicken in sauce to coat. Garnish with sesame seeds and sliced green onions. Serve immediately."
  },

  // ========== THAI ==========
  {
    name: "Green Curry",
    category: "Thai",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Chicken Thighs", a: "1.5 lbs"},
      {n: "Coconut Milk", a: "2 cans (13.5 oz each)"},
      {n: "Thai Green Curry Paste", a: "3 tbsp"},
      {n: "Zucchini", a: "2"},
      {n: "Bell Pepper", a: "1"},
      {n: "Fish Sauce", a: "2 tbsp"},
      {n: "Brown Sugar", a: "1 tsp"},
      {n: "Lemongrass", a: "2 stalks"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Fresh Basil", a: "1/2 cup"},
      {n: "Lime", a: "1"},
      {n: "Rice", a: "for serving"},
      {n: "Vegetable Oil", a: "1 tbsp"}
    ],
    instructions: "Heat oil in wok, fry green curry paste 1 minute until fragrant. Add half the coconut milk, stir until oil separates. Add chicken pieces and cook 5 minutes. Add remaining coconut milk, bruised lemongrass, ginger, zucchini, and bell pepper. Simmer 12 minutes. Season with fish sauce and brown sugar. Discard lemongrass. Finish with fresh basil and a squeeze of lime. Serve over jasmine rice."
  },
  {
    name: "Tom Yum Soup",
    category: "Thai",
    type: "Soup",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Shrimp", a: "1 lb"},
      {n: "Mushrooms", a: "2 cups"},
      {n: "Lemongrass", a: "3 stalks"},
      {n: "Ginger", a: "2 tbsp sliced"},
      {n: "Fish Sauce", a: "3 tbsp"},
      {n: "Lime", a: "3"},
      {n: "Tomatoes", a: "2 medium"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Green Onions", a: "3"},
      {n: "Sriracha", a: "2 tsp"},
      {n: "Thai Chili Peppers", a: "3-4"},
      {n: "Vegetable Oil", a: "1 tbsp"}
    ],
    instructions: "Bruise lemongrass stalks and slice ginger into coins. Simmer in 5 cups water 10 minutes to make aromatic broth. Add quartered mushrooms and tomatoes, simmer 5 minutes. Add shrimp and cook until pink, 2-3 minutes. Season with fish sauce, lime juice, and sriracha. Remove lemongrass and ginger. Ladle into bowls and garnish with fresh cilantro, green onions, and sliced Thai chilies. Serve immediately."
  },
  {
    name: "Thai Basil Stir-Fry",
    category: "Thai",
    type: "Main",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "Ground Beef", a: "1.5 lbs"},
      {n: "Fresh Basil", a: "1 cup packed"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Bell Pepper", a: "1"},
      {n: "Fish Sauce", a: "2 tbsp"},
      {n: "Soy Sauce", a: "1 tbsp"},
      {n: "Brown Sugar", a: "1 tsp"},
      {n: "Thai Chili Peppers", a: "4"},
      {n: "Eggs", a: "4"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Heat oil over high heat. Fry sliced garlic and Thai chilies 30 seconds. Add ground beef and cook, breaking up, until browned. Add sliced bell pepper, cook 2 minutes. Season with fish sauce, soy sauce, and brown sugar. Stir in fresh basil off heat until wilted. Fry eggs separately until edges are crispy. Serve beef over jasmine rice, topped with a crispy fried egg."
  },
  {
    name: "Mango Sticky Rice",
    category: "Thai",
    type: "Dessert",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Glutinous Rice", a: "2 cups"},
      {n: "Coconut Milk", a: "1 can (13.5 oz)"},
      {n: "Ripe Mangoes", a: "3 large"},
      {n: "Sugar", a: "1/3 cup"},
      {n: "Sesame Seeds", a: "1 tsp"},
      "Salt"
    ],
    instructions: "Soak glutinous rice in water 4 hours or overnight. Steam in a bamboo steamer over boiling water 20-25 minutes until tender. Meanwhile, heat coconut milk with sugar and a pinch of salt until just dissolved; do not boil. Reserve 1/3 cup coconut sauce for topping. Mix remaining sauce into hot sticky rice and let absorb 20 minutes. Peel and slice mangoes. Serve sticky rice portions with fresh mango slices. Drizzle reserved coconut sauce over top and sprinkle with sesame seeds."
  },
  {
    name: "Larb Gai",
    category: "Thai",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Ground Beef", a: "1.5 lbs"},
      {n: "Shallots", a: "4"},
      {n: "Lemongrass", a: "1 stalk"},
      {n: "Fresh Basil", a: "1/2 cup"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Fish Sauce", a: "3 tbsp"},
      {n: "Lime", a: "3"},
      {n: "Red Pepper Flakes", a: "1 tbsp"},
      {n: "Toasted Rice Powder", a: "2 tbsp"},
      {n: "Green Onions", a: "4"},
      {n: "Vegetable Oil", a: "1 tbsp"}
    ],
    instructions: "Cook ground beef in lightly oiled pan over medium heat until just cooked through; don't brown too much. Transfer to bowl and let cool slightly. Toast uncooked rice in dry pan until golden, then grind to powder. Finely slice shallots and lemongrass. Toss warm meat with fish sauce, lime juice, sliced shallots, red pepper flakes, and toasted rice powder. Fold in fresh basil, cilantro, and green onions. Adjust seasoning with more fish sauce and lime. Serve warm or at room temperature with sticky rice."
  },

  // ========== VIETNAMESE ==========
  {
    name: "Pho Bo",
    category: "Vietnamese",
    type: "Soup",
    servings: 4,
    time: "60 min",
    ingredients: [
      {n: "Flank Steak", a: "1 lb thinly sliced"},
      {n: "Rice Noodles", a: "12 oz"},
      {n: "Onion", a: "1 large"},
      {n: "Ginger", a: "3 inches"},
      {n: "Star Anise", a: "4 whole"},
      {n: "Fish Sauce", a: "3 tbsp"},
      {n: "Beef Broth", a: "8 cups"},
      {n: "Bean Sprouts", a: "2 cups"},
      {n: "Fresh Basil", a: "1 cup"},
      {n: "Lime", a: "2"},
      {n: "Green Onions", a: "4"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Sriracha", a: "to taste"}
    ],
    instructions: "Char onion and ginger directly over flame or under broiler until blackened; rinse. Simmer beef broth with charred onion, ginger, star anise, and fish sauce 30 minutes. Strain broth and return to heat. Soak rice noodles in hot water until pliable. Freeze steak 20 minutes then slice paper-thin. Divide noodles into bowls, place raw beef slices on top. Ladle boiling broth over beef to cook it. Serve with bean sprouts, Thai basil, lime wedges, cilantro, green onions, and sriracha on the side."
  },
  {
    name: "Bun Bo Hue",
    category: "Vietnamese",
    type: "Soup",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Pork Shoulder", a: "1 lb"},
      {n: "Shrimp", a: "1/2 lb"},
      {n: "Rice Noodles", a: "12 oz thick"},
      {n: "Lemongrass", a: "3 stalks"},
      {n: "Fish Sauce", a: "2 tbsp"},
      {n: "Shrimp Paste", a: "1 tbsp"},
      {n: "Korean Chili Flakes", a: "2 tbsp"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Onion", a: "1"},
      {n: "Pork Broth", a: "6 cups"},
      {n: "Bean Sprouts", a: "1 cup"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Lime", a: "2"},
      {n: "Green Onions", a: "4"}
    ],
    instructions: "Simmer pork broth with bruised lemongrass, halved onion, and garlic 20 minutes. Add pork shoulder and cook until tender, about 25 minutes. Remove pork and slice thin. Make chili oil by frying Korean chili flakes in 2 tbsp oil. Stir shrimp paste and chili oil into broth. Add shrimp and cook 2 minutes. Season with fish sauce. Cook rice noodles per package. Assemble bowls: noodles, pork slices, shrimp, hot broth. Serve with bean sprouts, cilantro, green onions, and lime."
  },
  {
    name: "Vietnamese Spring Rolls",
    category: "Vietnamese",
    type: "Appetizer",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Shrimp", a: "1/2 lb cooked"},
      {n: "Rice Paper Wrappers", a: "16 sheets"},
      {n: "Rice Noodles", a: "4 oz"},
      {n: "Carrots", a: "2 julienned"},
      {n: "Cucumber", a: "1 julienned"},
      {n: "Bean Sprouts", a: "1 cup"},
      {n: "Fresh Basil", a: "1 cup"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Fish Sauce", a: "2 tbsp"},
      {n: "Lime", a: "2"},
      {n: "Peanuts", a: "1/3 cup crushed"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Honey", a: "1 tsp"}
    ],
    instructions: "Cook rice noodles per package, rinse under cold water. Slice cooked shrimp in half lengthwise. Prepare all fillings. Make peanut dipping sauce: mix crushed peanuts, fish sauce, lime juice, minced garlic, honey, and 2 tbsp warm water. Dip each rice paper in warm water 10-15 seconds until pliable. Lay flat, place shrimp near the bottom, top with noodles, vegetables, and herbs. Fold sides in, roll tightly from bottom. Serve with peanut dipping sauce."
  },
  {
    name: "Bun Cha",
    category: "Vietnamese",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Pork Shoulder", a: "1 lb ground"},
      {n: "Rice Noodles", a: "8 oz"},
      {n: "Fish Sauce", a: "3 tbsp"},
      {n: "Sugar", a: "2 tbsp"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Shallots", a: "3"},
      {n: "Rice Vinegar", a: "2 tbsp"},
      {n: "Lime", a: "2"},
      {n: "Cilantro", a: "1 cup"},
      {n: "Fresh Basil", a: "1 cup"},
      {n: "Bean Sprouts", a: "1 cup"},
      {n: "Carrots", a: "1 julienned"},
      {n: "Red Pepper Flakes", a: "1/2 tsp"}
    ],
    instructions: "Mix ground pork with 1 tbsp fish sauce, 1 tsp sugar, minced shallots, and garlic. Form into small patties and grill or pan-fry until charred and cooked through, about 3 minutes per side. Make dipping broth: combine remaining fish sauce, sugar, rice vinegar, lime juice, red pepper flakes, and 1/2 cup warm water. Cook rice noodles, rinse cold. Serve patties in dipping broth bowls alongside plates of noodles and fresh herb platters with cilantro, basil, bean sprouts, and carrots. Dip noodles and herbs into the broth."
  },
  {
    name: "Vietnamese Caramel Ginger Fish",
    category: "Vietnamese",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "White Fish Fillets", a: "1.5 lbs"},
      {n: "Brown Sugar", a: "1/4 cup"},
      {n: "Fish Sauce", a: "3 tbsp"},
      {n: "Ginger", a: "2 tbsp julienned"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Green Onions", a: "4"},
      {n: "Black Pepper", a: "1 tsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Cilantro", a: "1/4 cup"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Make caramel: heat brown sugar in dry pan over medium heat until it melts and turns amber, swirling pan. Carefully add 2 tbsp water, then fish sauce. Add garlic and ginger, cook 1 minute. Season fish fillets with black pepper. Add to caramel sauce and cook over medium-low heat 4-5 minutes per side, basting constantly. Sauce will thicken and coat fish. Scatter green onions in the last minute. Serve over steamed rice, spooning caramel sauce over everything. Garnish with fresh cilantro."
  },

  // ========== SOUTHERN AMERICAN ==========
  {
    name: "Chicken and Waffles",
    category: "Southern American",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs bone-in"},
      {n: "Flour", a: "1.5 cups"},
      {n: "Buttermilk", a: "2 cups"},
      {n: "Eggs", a: "2"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Garlic Powder", a: "1 tsp"},
      {n: "Honey", a: "3 tbsp"},
      {n: "Hot Sauce", a: "2 tbsp"},
      {n: "Vegetable Oil", a: "for frying"},
      "Salt",
      "Black Pepper",
      "Cayenne Pepper"
    ],
    instructions: "Marinate chicken in buttermilk, hot sauce, salt, and pepper for at least 1 hour. Mix flour with paprika, garlic powder, cayenne, salt, and pepper. Dredge chicken in flour mixture. Fry in 350°F oil for 12-15 minutes until golden and cooked through. Make waffles from your favorite batter. Drizzle chicken and waffles with honey mixed with a splash of hot sauce and serve immediately."
  },
  {
    name: "Shrimp and Grits",
    category: "Southern American",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Shrimp", a: "1 lb peeled and deveined"},
      {n: "Stone-Ground Grits", a: "1 cup"},
      {n: "Andouille Sausage", a: "6 oz"},
      {n: "Cheddar Cheese", a: "1 cup shredded"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Heavy Cream", a: "1/2 cup"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Green Onions", a: "4"},
      {n: "Lemon", a: "1"},
      {n: "Hot Sauce", a: "1 tsp"},
      {n: "Chicken Broth", a: "3 cups"},
      "Salt",
      "Black Pepper",
      "Paprika"
    ],
    instructions: "Bring chicken broth and 1 cup water to a boil. Whisk in grits, reduce heat, and cook 20-25 minutes stirring often. Stir in butter, heavy cream, and cheddar cheese. Season with salt. Meanwhile, brown sliced andouille in a skillet. Add shrimp, garlic, paprika, salt, and pepper. Cook 3-4 minutes until shrimp are pink. Finish with lemon juice and hot sauce. Spoon shrimp mixture over grits and garnish with sliced green onions."
  },
  {
    name: "Cajun Red Beans and Rice",
    category: "Southern American",
    type: "Main",
    servings: 6,
    time: "90 min",
    ingredients: [
      {n: "Kidney Beans", a: "2 cans"},
      {n: "Andouille Sausage", a: "12 oz"},
      {n: "Onion", a: "1 large"},
      {n: "Bell Pepper", a: "1"},
      {n: "Celery", a: "3 stalks"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Chicken Broth", a: "3 cups"},
      {n: "Rice", a: "2 cups"},
      {n: "Tomato Paste", a: "1 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Green Onions", a: "4"},
      "Salt",
      "Black Pepper",
      "Dried Thyme",
      "Dried Oregano",
      "Cayenne Pepper"
    ],
    instructions: "Brown sliced andouille in olive oil in a large pot. Remove sausage. Sauté diced onion, bell pepper, and celery in the same pot for 8 minutes. Add garlic, thyme, oregano, and cayenne, cook 1 minute. Stir in tomato paste. Add drained beans and chicken broth. Simmer 45 minutes, mashing some beans against the pot to thicken. Return sausage. Cook rice separately. Serve beans over rice, garnished with green onions."
  },
  {
    name: "Southern Chicken Gumbo",
    category: "Southern American",
    type: "Soup",
    servings: 8,
    time: "90 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs"},
      {n: "Andouille Sausage", a: "12 oz"},
      {n: "Okra", a: "2 cups sliced"},
      {n: "Onion", a: "1 large"},
      {n: "Bell Pepper", a: "1"},
      {n: "Celery", a: "3 stalks"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Flour", a: "1/2 cup"},
      {n: "Vegetable Oil", a: "1/2 cup"},
      {n: "Crushed Tomatoes", a: "14 oz can"},
      {n: "Chicken Broth", a: "6 cups"},
      {n: "Rice", a: "for serving"},
      {n: "Green Onions", a: "4"},
      {n: "Filé Powder", a: "1 tsp"},
      "Salt",
      "Black Pepper",
      "Dried Thyme",
      "Cayenne Pepper"
    ],
    instructions: "Make roux: cook flour and oil over medium heat, stirring constantly, for 20-30 minutes until dark chocolate brown. Add diced onion, bell pepper, and celery; cook 5 minutes. Add garlic, thyme, and cayenne. Add broth, crushed tomatoes, and chicken. Simmer 30 minutes. Remove chicken, shred, and return. Add sliced andouille and okra, cook 20 more minutes. Stir in filé powder off heat. Serve over rice with green onions."
  },
  {
    name: "Sweet Potato Pie",
    category: "Southern American",
    type: "Dessert",
    servings: 8,
    time: "75 min",
    ingredients: [
      {n: "Sweet Potato", a: "2 lbs"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Sugar", a: "3/4 cup"},
      {n: "Brown Sugar", a: "1/4 cup"},
      {n: "Eggs", a: "2"},
      {n: "Heavy Cream", a: "1/2 cup"},
      {n: "Cinnamon", a: "1 tsp"},
      {n: "Pie Crust", a: "1 unbaked 9-inch"},
      {n: "Vanilla Extract", a: "1 tsp"},
      {n: "Ground Nutmeg", a: "1/4 tsp"},
      "Salt"
    ],
    instructions: "Bake sweet potatoes at 400°F for 50 minutes until very soft. Let cool, peel and mash until smooth. Mix mashed sweet potato with softened butter, both sugars, beaten eggs, heavy cream, cinnamon, nutmeg, vanilla, and a pinch of salt. Pour into unbaked pie crust. Bake at 350°F for 45-50 minutes until filling is set and lightly puffed at edges. Cool completely before slicing. Serve with whipped cream."
  },

  // ========== CARIBBEAN ==========
  {
    name: "Jerk Chicken",
    category: "Caribbean",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Chicken Thighs", a: "3 lbs bone-in"},
      {n: "Scotch Bonnet Pepper", a: "2"},
      {n: "Green Onions", a: "6"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Ginger", a: "2 tbsp"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Brown Sugar", a: "2 tbsp"},
      {n: "Lime", a: "2"},
      {n: "Allspice", a: "2 tsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Fresh Thyme", a: "1 tbsp"},
      "Black Pepper",
      "Cinnamon",
      "Salt"
    ],
    instructions: "Blend scotch bonnet peppers, green onions, garlic, ginger, soy sauce, brown sugar, lime juice, allspice, cinnamon, thyme, oil, salt, and pepper into a smooth paste. Score chicken thighs deeply and coat thoroughly with jerk paste. Marinate at least 4 hours or overnight. Grill over medium-high heat 20-25 minutes, turning occasionally, until charred and cooked through (165°F). Serve with rice and peas or fried plantains."
  },
  {
    name: "Caribbean Rice and Peas",
    category: "Caribbean",
    type: "Side",
    servings: 6,
    time: "35 min",
    ingredients: [
      {n: "Rice", a: "2 cups"},
      {n: "Kidney Beans", a: "1 can"},
      {n: "Coconut Milk", a: "1 can"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Green Onions", a: "4"},
      {n: "Fresh Thyme", a: "4 sprigs"},
      {n: "Scotch Bonnet Pepper", a: "1 whole"},
      {n: "Vegetable Oil", a: "1 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté minced garlic and sliced green onions in oil 2 minutes. Add drained kidney beans, coconut milk, and 1 cup water. Add whole scotch bonnet pepper (left intact), thyme, salt, and pepper. Bring to a boil. Add rice, stir once, reduce heat to very low, and cover. Cook 18-20 minutes until liquid is absorbed. Remove scotch bonnet pepper and thyme sprigs. Fluff with a fork and serve."
  },
  {
    name: "Oxtail Stew",
    category: "Caribbean",
    type: "Main",
    servings: 6,
    time: "3 hours",
    ingredients: [
      {n: "Oxtail", a: "3 lbs"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "5 cloves"},
      {n: "Carrots", a: "2"},
      {n: "Tomatoes", a: "2"},
      {n: "Butter Beans", a: "1 can"},
      {n: "Soy Sauce", a: "2 tbsp"},
      {n: "Worcestershire Sauce", a: "1 tbsp"},
      {n: "Brown Sugar", a: "1 tbsp"},
      {n: "Allspice", a: "1 tsp"},
      {n: "Fresh Thyme", a: "4 sprigs"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Tomato Paste", a: "2 tbsp"},
      "Salt",
      "Black Pepper",
      "Cayenne Pepper"
    ],
    instructions: "Season oxtail with salt, pepper, soy sauce, worcestershire, and allspice; marinate 1 hour. Brown oxtail in batches in hot oil. Remove and set aside. Sauté sliced onion and garlic. Add tomato paste, diced tomatoes, and carrots. Return oxtail to pot, cover with water. Add thyme, brown sugar, cayenne, and salt. Pressure cook 1.5 hours or simmer covered 2.5 hours until very tender. Add butter beans the last 20 minutes. Skim fat, adjust seasoning. Serve over white rice."
  },
  {
    name: "Fried Plantains (Maduros)",
    category: "Caribbean",
    type: "Side",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Plantains", a: "3 very ripe (black)"},
      {n: "Vegetable Oil", a: "1/3 cup"},
      "Salt"
    ],
    instructions: "Peel plantains and cut on the diagonal into 1/2-inch slices. Heat oil in a wide skillet over medium heat. Add plantain slices in a single layer without crowding. Fry 2-3 minutes per side until golden brown and caramelized. Remove and drain on paper towels. Sprinkle lightly with salt. Serve immediately as a side dish. The riper and blacker the skin, the sweeter the plantain."
  },
  {
    name: "Curried Goat",
    category: "Caribbean",
    type: "Main",
    servings: 6,
    time: "2 hours",
    ingredients: [
      {n: "Goat Meat", a: "3 lbs bone-in"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "5 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Scotch Bonnet Pepper", a: "1"},
      {n: "Potatoes", a: "2 medium"},
      {n: "Tomatoes", a: "2"},
      {n: "Jamaican Curry Powder", a: "3 tbsp"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Fresh Thyme", a: "4 sprigs"},
      {n: "Allspice", a: "1/2 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season goat with salt, pepper, curry powder, and allspice. Marinate 2 hours or overnight. Brown meat in batches in hot oil. Remove. Sauté diced onion, garlic, ginger, and scotch bonnet. Return goat, add diced tomatoes, thyme, and enough water to cover. Simmer covered 1.5 hours. Add quartered potatoes and cook 25 more minutes until potatoes are tender and sauce has thickened. Adjust seasoning. Serve with rice and roti."
  },

  // ========== BRAZILIAN ==========
  {
    name: "Feijoada",
    category: "Brazilian",
    type: "Main",
    servings: 8,
    time: "3 hours",
    ingredients: [
      {n: "Black Beans", a: "3 cans"},
      {n: "Pork Shoulder", a: "1 lb"},
      {n: "Andouille Sausage", a: "12 oz"},
      {n: "Smoked Bacon", a: "6 oz"},
      {n: "Onion", a: "2"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Tomatoes", a: "2"},
      {n: "Orange", a: "2"},
      {n: "Bay Leaves", a: "3"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Cilantro", a: "1/4 cup"},
      {n: "Rice", a: "for serving"},
      "Salt",
      "Black Pepper",
      "Cumin"
    ],
    instructions: "Cut pork shoulder into 2-inch cubes. Brown pork and sliced sausage in olive oil in a large pot. Remove meats. Sauté diced onion and garlic in the same pot until golden. Add diced tomatoes, cumin, bay leaves, and the browned meats. Add drained black beans and juice of 1 orange. Cover with water, simmer 1.5-2 hours until pork is very tender and broth is thick and flavorful. Skim fat as needed. Remove bay leaves, adjust seasoning. Serve over white rice with orange slices and garnish with cilantro."
  },
  {
    name: "Coxinha (Chicken Croquettes)",
    category: "Brazilian",
    type: "Appetizer",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Chicken Breast", a: "1 lb"},
      {n: "Cream Cheese", a: "4 oz"},
      {n: "Onion", a: "1/2"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Flour", a: "2 cups"},
      {n: "Chicken Broth", a: "2 cups"},
      {n: "Butter", a: "2 tbsp"},
      {n: "Eggs", a: "2"},
      {n: "Breadcrumbs", a: "1.5 cups"},
      {n: "Vegetable Oil", a: "for frying"},
      {n: "Cilantro", a: "2 tbsp"},
      "Salt",
      "Black Pepper",
      "Paprika"
    ],
    instructions: "Poach chicken in broth with onion and garlic. Shred finely. Mix shredded chicken with cream cheese, cilantro, salt, and pepper for filling. Use remaining broth to make dough: bring 2 cups broth with butter to a boil, remove from heat, add flour all at once and stir vigorously. Let cool. Take a portion of dough, flatten in palm, add filling, and shape into a teardrop. Dip in beaten egg, then breadcrumbs. Fry at 350°F for 4-5 minutes until golden brown. Drain and serve hot."
  },
  {
    name: "Moqueca (Brazilian Fish Stew)",
    category: "Brazilian",
    type: "Main",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "White Fish Fillets", a: "1.5 lbs"},
      {n: "Shrimp", a: "1/2 lb"},
      {n: "Coconut Milk", a: "1 can"},
      {n: "Tomatoes", a: "2"},
      {n: "Onion", a: "1"},
      {n: "Bell Pepper", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Lime", a: "2"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Dendê (Palm Oil)", a: "2 tbsp"},
      {n: "Olive Oil", a: "1 tbsp"},
      {n: "Rice", a: "for serving"},
      "Salt",
      "Black Pepper",
      "Paprika"
    ],
    instructions: "Marinate fish in lime juice, garlic, salt, and pepper for 20 minutes. Layer sliced onion and bell pepper in a clay pot or large skillet. Place marinated fish on top. Add diced tomatoes, coconut milk, palm oil, olive oil, and paprika. Bring to a simmer, cover, and cook 15 minutes. Add shrimp and cook 5 more minutes until shrimp are pink and fish flakes. Adjust seasoning. Garnish generously with cilantro. Serve with white rice."
  },
  {
    name: "Pão de Queijo (Cheese Bread)",
    category: "Brazilian",
    type: "Side",
    servings: 6,
    time: "35 min",
    ingredients: [
      {n: "Tapioca Flour", a: "2 cups"},
      {n: "Milk", a: "1/2 cup"},
      {n: "Eggs", a: "2"},
      {n: "Olive Oil", a: "1/3 cup"},
      {n: "Cheddar Cheese", a: "1 cup grated"},
      {n: "Parmesan Cheese", a: "1/2 cup grated"},
      "Salt"
    ],
    instructions: "Preheat oven to 400°F. Combine tapioca flour and salt. Heat milk and oil until simmering, then pour over flour and stir until mixed. Let cool 5 minutes. Add eggs one at a time, mixing well. Fold in grated cheeses. The dough will be sticky. With wet hands or a small cookie scoop, form into walnut-sized balls. Place on parchment-lined baking sheet. Bake 20-25 minutes until puffed and golden. Serve warm immediately."
  },
  {
    name: "Brigadeiros (Brazilian Chocolate Truffles)",
    category: "Brazilian",
    type: "Dessert",
    servings: 24,
    time: "30 min",
    ingredients: [
      {n: "Condensed Milk", a: "14 oz can"},
      {n: "Cocoa Powder", a: "3 tbsp"},
      {n: "Butter", a: "1 tbsp"},
      {n: "Chocolate Sprinkles", a: "1 cup"},
      "Salt"
    ],
    instructions: "Combine condensed milk, cocoa powder, butter, and a pinch of salt in a medium saucepan. Cook over medium-low heat, stirring constantly with a wooden spoon. After 10-15 minutes the mixture will thicken and begin to pull away from the sides of the pan. When you can drag a spoon across the bottom and it stays clear for a moment, remove from heat. Pour into a buttered dish and let cool to room temperature. Butter your hands, roll into small balls (about 1 tablespoon each), and roll in chocolate sprinkles. Place in paper candy cups. Refrigerate until firm."
  },

  // ========== PERUVIAN ==========
  {
    name: "Lomo Saltado",
    category: "Peruvian",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Flank Steak", a: "1.5 lbs"},
      {n: "Tomatoes", a: "2"},
      {n: "Red Onion", a: "1 large"},
      {n: "Jalapeño", a: "2"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Apple Cider Vinegar", a: "2 tbsp"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Potatoes", a: "3 medium"},
      {n: "Cilantro", a: "1/3 cup"},
      {n: "Rice", a: "for serving"},
      "Salt",
      "Black Pepper",
      "Cumin"
    ],
    instructions: "Cut steak into 1-inch strips, season with salt, pepper, and cumin. Cut potatoes into fries and fry at 375°F until golden, or roast at high heat. In a very hot wok, stir-fry beef strips in batches in vegetable oil until browned, about 2 minutes. Remove. In same wok, stir-fry sliced red onion and jalapeños 2 minutes. Add garlic and sliced tomatoes. Return beef. Add soy sauce and apple cider vinegar, toss everything together over high heat 1 minute. Fold in fries. Garnish with cilantro. Serve with white rice."
  },
  {
    name: "Aji de Gallina",
    category: "Peruvian",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Chicken Breast", a: "2 lbs"},
      {n: "Aji Amarillo Paste", a: "3 tbsp"},
      {n: "Bread", a: "4 slices white"},
      {n: "Milk", a: "1/2 cup"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Walnuts", a: "1/2 cup"},
      {n: "Parmesan Cheese", a: "1/4 cup"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Potatoes", a: "3 medium boiled"},
      {n: "Eggs", a: "3 hard-boiled"},
      {n: "Black Olives", a: "1/4 cup"},
      "Salt",
      "Black Pepper",
      "Cumin",
      "Turmeric"
    ],
    instructions: "Poach chicken breast in salted water until cooked through. Shred finely. Soak bread in milk. Sauté diced onion and garlic in oil. Add aji amarillo paste, cumin, and turmeric; cook 2 minutes. Squeeze excess milk from bread and add to pan. Process mixture with walnuts and parmesan until smooth. Add shredded chicken and mix over medium heat, adding reserved poaching liquid to achieve a creamy, thick sauce consistency. Season with salt and pepper. Serve over sliced boiled potatoes, garnish with hard-boiled egg slices and black olives."
  },
  {
    name: "Ceviche Peruano",
    category: "Peruvian",
    type: "Appetizer",
    servings: 4,
    time: "20 min",
    ingredients: [
      {n: "White Fish Fillets", a: "1 lb sea bass or flounder"},
      {n: "Lime", a: "8"},
      {n: "Red Onion", a: "1"},
      {n: "Jalapeño", a: "2"},
      {n: "Cilantro", a: "1/3 cup"},
      {n: "Corn", a: "2 ears"},
      {n: "Sweet Potato", a: "1 large boiled"},
      {n: "Garlic", a: "2 cloves"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cut very fresh fish into 1/2-inch cubes. Thinly slice red onion and soak in cold salted water 5 minutes; drain. Mince jalapeños and garlic. Combine fish, jalapeño, garlic, lime juice (must fully submerge fish), salt, and pepper. Let cure 10-15 minutes, stirring once, until fish turns opaque on the outside but is still slightly translucent in center. Add sliced red onion and cilantro. Taste and adjust salt. Serve immediately with boiled sweet potato slices and corn on the cob cut into rounds."
  },
  {
    name: "Arroz con Leche",
    category: "Peruvian",
    type: "Dessert",
    servings: 6,
    time: "40 min",
    ingredients: [
      {n: "Rice", a: "1 cup"},
      {n: "Milk", a: "4 cups"},
      {n: "Sugar", a: "1/2 cup"},
      {n: "Cinnamon Sticks", a: "2"},
      {n: "Lemon", a: "1 zest only"},
      {n: "Butter", a: "1 tbsp"},
      {n: "Vanilla Extract", a: "1 tsp"},
      "Cinnamon"
    ],
    instructions: "Rinse rice and cook in 1.5 cups water with cinnamon sticks and lemon zest until water is absorbed. Add milk one cup at a time, stirring frequently over medium-low heat and waiting for each addition to be absorbed before adding the next. This takes about 25-30 minutes total. Stir in sugar, vanilla, and butter. Cook 5 more minutes until thick and creamy. Remove cinnamon sticks. Serve warm or chilled in individual bowls, dusted generously with ground cinnamon."
  },
  {
    name: "Papa a la Huancaína",
    category: "Peruvian",
    type: "Appetizer",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Potatoes", a: "2 lbs yellow"},
      {n: "Aji Amarillo Paste", a: "2 tbsp"},
      {n: "Cream Cheese", a: "8 oz"},
      {n: "Milk", a: "1/4 cup"},
      {n: "Saltine Crackers", a: "4"},
      {n: "Lemon", a: "1"},
      {n: "Eggs", a: "3 hard-boiled"},
      {n: "Black Olives", a: "1/4 cup"},
      {n: "Olive Oil", a: "2 tbsp"},
      "Salt"
    ],
    instructions: "Boil potatoes in salted water until tender, about 20 minutes. Cool and slice into 1/2-inch rounds. Make huancaína sauce: blend cream cheese, aji amarillo paste, crushed crackers, milk, olive oil, lemon juice, and salt until very smooth and creamy. The sauce should be pourable but thick; add more milk if needed. Arrange potato slices on a bed of lettuce leaves. Pour sauce generously over potatoes. Garnish with sliced hard-boiled eggs and black olives. Serve at room temperature."
  },

  // ========== CUBAN ==========
  {
    name: "Ropa Vieja",
    category: "Cuban",
    type: "Main",
    servings: 6,
    time: "2.5 hours",
    ingredients: [
      {n: "Flank Steak", a: "2 lbs"},
      {n: "Bell Pepper", a: "2"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Crushed Tomatoes", a: "14 oz can"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Dried Oregano", a: "1 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Bay Leaves", a: "2"},
      {n: "Capers", a: "2 tbsp"},
      {n: "Pitted Green Olives", a: "1/3 cup"},
      {n: "Rice", a: "for serving"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Simmer flank steak in water with salt, garlic, and bay leaves for 1.5 hours until very tender. Reserve 1 cup of the cooking broth. Shred beef into long strips with two forks. Sauté sliced onion and bell pepper in olive oil until softened. Add remaining garlic, cumin, oregano, paprika. Stir in tomato paste, crushed tomatoes, and reserved broth. Add shredded beef, capers, and olives. Simmer 20 minutes until sauce thickens and beef absorbs the flavors. Adjust seasoning. Serve over white rice with fried plantains."
  },
  {
    name: "Cuban Black Bean Soup",
    category: "Cuban",
    type: "Soup",
    servings: 6,
    time: "50 min",
    ingredients: [
      {n: "Black Beans", a: "3 cans"},
      {n: "Onion", a: "1 large"},
      {n: "Bell Pepper", a: "1 green"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Dried Oregano", a: "1 tsp"},
      {n: "Apple Cider Vinegar", a: "2 tbsp"},
      {n: "Sugar", a: "1 tsp"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Chicken Broth", a: "3 cups"},
      {n: "Bay Leaves", a: "2"},
      {n: "Sour Cream", a: "for serving"},
      {n: "Rice", a: "for serving"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté diced onion and bell pepper in olive oil 8 minutes until very soft. Add minced garlic, cumin, and oregano; cook 2 minutes until fragrant. Add drained black beans, chicken broth, bay leaves, salt, and pepper. Bring to a boil, reduce heat, and simmer 25 minutes. Remove bay leaves. Use an immersion blender to partially blend the soup, leaving some beans whole for texture. Stir in apple cider vinegar and sugar. Adjust seasoning. Serve in bowls with a drizzle of olive oil, a dollop of sour cream, and white rice on the side."
  },
  {
    name: "Cuban Sandwich (Cubano)",
    category: "Cuban",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Pork Shoulder", a: "1 lb roasted and sliced"},
      {n: "Cuban Bread", a: "1 loaf"},
      {n: "Sliced Ham", a: "8 oz"},
      {n: "Swiss Cheese Slices", a: "8"},
      {n: "Dill Pickles", a: "8 slices"},
      {n: "Mustard", a: "3 tbsp"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Lime", a: "1"},
      {n: "Cumin", a: "1/2 tsp"},
      "Salt"
    ],
    instructions: "Season sliced pork with garlic, lime juice, cumin, and salt; quickly sear in a hot pan to heat through. Cut bread into 4 sections and split horizontally. Spread mustard on both cut sides. Layer on the bottom: pickles, roasted pork, sliced ham, and Swiss cheese. Close sandwich. Brush outside with softened garlic butter. Press in a hot panini press or heavy cast-iron skillet with another heavy pan on top, cooking 3-4 minutes per side until bread is golden, crispy, and cheese is melted. Slice on the diagonal and serve immediately."
  },
  {
    name: "Picadillo",
    category: "Cuban",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Ground Beef", a: "1.5 lbs"},
      {n: "Onion", a: "1"},
      {n: "Bell Pepper", a: "1 green"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Crushed Tomatoes", a: "14 oz can"},
      {n: "Tomato Paste", a: "1 tbsp"},
      {n: "Pitted Green Olives", a: "1/3 cup"},
      {n: "Capers", a: "2 tbsp"},
      {n: "Raisins", a: "1/4 cup"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Dried Oregano", a: "1 tsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Rice", a: "for serving"},
      {n: "Black Beans", a: "1 can for serving"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Brown ground beef in olive oil, breaking up clumps, over medium-high heat. Drain excess fat. Add diced onion and bell pepper, cook 5 minutes. Add garlic, cumin, and oregano; cook 1 minute. Stir in tomato paste, then crushed tomatoes. Add olives, capers, and raisins. Reduce heat and simmer 15-20 minutes until sauce thickens. Adjust salt and pepper. Serve over white rice alongside black beans. The sweet-savory combination of raisins and olives is the signature of authentic Cuban picadillo."
  },
  {
    name: "Tres Leches Cake",
    category: "Cuban",
    type: "Dessert",
    servings: 12,
    time: "60 min",
    ingredients: [
      {n: "Flour", a: "1 cup"},
      {n: "Sugar", a: "1 cup"},
      {n: "Eggs", a: "5"},
      {n: "Milk", a: "1 cup"},
      {n: "Heavy Cream", a: "1 cup"},
      {n: "Condensed Milk", a: "14 oz can"},
      {n: "Butter", a: "2 tbsp melted"},
      {n: "Vanilla Extract", a: "1 tsp"},
      {n: "Baking Powder", a: "1.5 tsp"},
      "Salt",
      "Cinnamon"
    ],
    instructions: "Beat eggs and sugar until pale and fluffy, 5 minutes. Fold in sifted flour, baking powder, and a pinch of salt. Add melted butter and vanilla. Pour into a greased 9x13 pan and bake at 350°F for 25-30 minutes until a toothpick comes out clean. Let cool 10 minutes. Poke cake all over with a fork. Whisk together milk, condensed milk, and half the heavy cream. Pour slowly over warm cake, letting it absorb completely. Refrigerate at least 2 hours or overnight. Before serving, whip remaining heavy cream with sugar to stiff peaks and spread over cake. Dust with cinnamon."
  },

  // ========== CHINESE ==========
  {
    name: "Mapo Tofu",
    category: "Chinese",
    type: "Main",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Tofu", a: "14 oz soft"},
      {n: "Ground Beef", a: "1/2 lb"},
      {n: "Doubanjiang", a: "2 tbsp"},
      {n: "Soy Sauce", a: "1 tbsp"},
      {n: "Sesame Oil", a: "1 tsp"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Green Onions", a: "4"},
      {n: "Cornstarch", a: "1 tbsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Sichuan Peppercorns", a: "1 tsp"},
      {n: "Chicken Broth", a: "1 cup"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Toast and grind Sichuan peppercorns. Cut tofu into 1-inch cubes, simmer in salted water 3 minutes, drain gently. Stir-fry ground beef in oil until cooked, push aside. Add doubanjiang, garlic, and ginger, fry 1 minute until fragrant and oil turns red. Add chicken broth, bring to simmer. Gently add tofu. Season with soy sauce. Mix cornstarch with 2 tbsp water, drizzle in to thicken. Finish with sesame oil and ground Sichuan peppercorns. Serve over rice garnished with green onions."
  },
  {
    name: "Dan Dan Noodles",
    category: "Chinese",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Egg Noodles", a: "12 oz"},
      {n: "Ground Beef", a: "1/2 lb"},
      {n: "Peanuts", a: "1/3 cup crushed"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Sesame Oil", a: "2 tbsp"},
      {n: "Rice Vinegar", a: "1 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Doubanjiang", a: "1 tbsp"},
      {n: "Tahini Paste", a: "3 tbsp"},
      {n: "Green Onions", a: "4"},
      {n: "Spinach", a: "2 cups"},
      {n: "Red Pepper Flakes", a: "1 tsp"}
    ],
    instructions: "Cook noodles per package, reserving 1/2 cup pasta water. Stir-fry ground beef with garlic, ginger, and doubanjiang until browned and fragrant. Make sauce: whisk tahini, soy sauce, sesame oil, rice vinegar, red pepper flakes, and a splash of pasta water until smooth. Blanch spinach in the pasta water. Divide noodles into bowls, pour sauce over, top with beef, spinach, green onions, and crushed peanuts. Toss before eating. Add more pasta water to loosen if needed."
  },
  {
    name: "Char Siu Pork",
    category: "Chinese",
    type: "Main",
    servings: 4,
    time: "60 min",
    ingredients: [
      {n: "Pork Shoulder", a: "2 lbs"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Honey", a: "3 tbsp"},
      {n: "Brown Sugar", a: "2 tbsp"},
      {n: "Rice Vinegar", a: "1 tbsp"},
      {n: "Sesame Oil", a: "1 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tbsp"},
      {n: "Five-Spice Powder", a: "1 tsp"},
      {n: "Red Food Coloring", a: "optional"},
      {n: "Rice", a: "for serving"}
    ],
    instructions: "Cut pork shoulder into 2-inch thick strips. Mix soy sauce, honey, brown sugar, rice vinegar, sesame oil, garlic, ginger, and five-spice powder. Marinate pork at least 2 hours or overnight. Roast at 400°F on a rack over a foil-lined baking sheet for 25 minutes. Brush with honey glaze, broil 3-5 minutes until edges char and glaze is sticky. Rest 10 minutes. Slice thin and serve over rice with drizzled pan juices."
  },
  {
    name: "Hot and Sour Soup",
    category: "Chinese",
    type: "Soup",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Tofu", a: "8 oz firm"},
      {n: "Mushrooms", a: "1 cup sliced"},
      {n: "Carrots", a: "1 julienned"},
      {n: "Eggs", a: "2"},
      {n: "Soy Sauce", a: "3 tbsp"},
      {n: "Rice Vinegar", a: "3 tbsp"},
      {n: "Cornstarch", a: "3 tbsp"},
      {n: "Sesame Oil", a: "1 tsp"},
      {n: "White Pepper", a: "1 tsp"},
      {n: "Bamboo Shoots", a: "1/2 cup"},
      {n: "Chicken Broth", a: "6 cups"},
      {n: "Green Onions", a: "3"},
      "Sriracha"
    ],
    instructions: "Bring chicken broth to a boil. Add mushrooms, carrots, bamboo shoots, and julienned tofu; simmer 5 minutes. Add soy sauce, rice vinegar, and white pepper. Mix cornstarch with 4 tbsp cold water, pour slowly into simmering soup while stirring to thicken. Beat eggs and drizzle in slowly while stirring in one direction to create egg ribbons. Finish with sesame oil. Serve garnished with green onions and a dash of sriracha for extra heat."
  },

  // ========== GREEK ==========
  {
    name: "Chicken Souvlaki",
    category: "Greek",
    type: "Main",
    servings: 4,
    time: "30 min + marinate",
    ingredients: [
      {n: "Chicken Breast", a: "1.5 lbs"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Lemon", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Dried Oregano", a: "2 tsp"},
      {n: "Pita Bread", a: "4"},
      {n: "Yogurt", a: "1 cup"},
      {n: "Cucumber", a: "1/2"},
      {n: "Fresh Dill", a: "2 tbsp"},
      {n: "Red Onion", a: "1/2"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cut chicken into 1-inch cubes. Marinate in olive oil, lemon juice, minced garlic, oregano, salt, and pepper for at least 1 hour. Thread onto skewers and grill over high heat 10-12 minutes, turning occasionally. For tzatziki, mix yogurt with grated cucumber, dill, garlic, and lemon juice. Warm pita bread on grill. Serve souvlaki in pita with tzatziki and sliced red onion."
  },
  {
    name: "Spanakopita",
    category: "Greek",
    type: "Appetizer",
    servings: 6,
    time: "55 min",
    ingredients: [
      {n: "Spinach", a: "1 lb fresh"},
      {n: "Feta Cheese", a: "8 oz"},
      {n: "Eggs", a: "2"},
      {n: "Onion", a: "1 medium"},
      {n: "Green Onions", a: "4"},
      {n: "Fresh Dill", a: "3 tbsp"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Phyllo Dough", a: "1 lb"},
      {n: "Butter", a: "4 tbsp melted"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Wilt spinach in olive oil, cool and squeeze dry. Sauté onion until soft. Combine spinach, onion, crumbled feta, beaten eggs, green onions, dill, salt, and pepper. Brush baking pan with butter. Layer 8 sheets of phyllo, brushing each with butter. Spread filling evenly. Top with 8 more phyllo sheets, each buttered. Score top into squares. Bake at 375°F for 35-40 minutes until golden and crisp."
  },
  {
    name: "Moussaka",
    category: "Greek",
    type: "Main",
    servings: 6,
    time: "90 min",
    ingredients: [
      {n: "Ground Lamb", a: "1.5 lbs"},
      {n: "Eggplant", a: "2 large"},
      {n: "Tomatoes", a: "3 medium"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Red Wine", a: "1/2 cup"},
      {n: "Cinnamon", a: "1 tsp"},
      {n: "Milk", a: "2 cups"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Flour", a: "3 tbsp"},
      {n: "Parmesan Cheese", a: "1/2 cup"},
      {n: "Eggs", a: "2 yolks"},
      {n: "Olive Oil", a: "4 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Slice eggplant 1/2-inch thick, brush with olive oil, and roast at 400°F for 20 minutes. Brown lamb with onion and garlic. Add tomato paste, diced tomatoes, red wine, and cinnamon. Simmer 20 minutes. Make béchamel: melt butter, whisk in flour, add warm milk gradually, cook until thick. Remove from heat, stir in egg yolks and parmesan. Layer in baking dish: eggplant, meat sauce, eggplant, béchamel. Bake at 375°F for 40 minutes until golden."
  },
  {
    name: "Horiatiki (Greek Village Salad)",
    category: "Greek",
    type: "Side",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Tomatoes", a: "4 large"},
      {n: "Cucumber", a: "1 large"},
      {n: "Red Onion", a: "1/2"},
      {n: "Bell Pepper", a: "1 green"},
      {n: "Kalamata Olives", a: "1/2 cup"},
      {n: "Feta Cheese", a: "6 oz"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Red Wine Vinegar", a: "1 tbsp"},
      {n: "Dried Oregano", a: "1 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cut tomatoes into wedges, cucumber into half-moons, and bell pepper into strips. Thinly slice red onion. Combine in a large bowl with olives. Drizzle with olive oil and red wine vinegar. Season with salt, pepper, and dried oregano. Top with a thick slab of feta and a final drizzle of olive oil. Serve without tossing — the layered presentation is traditional."
  },

  // ========== TURKISH ==========
  {
    name: "Lamb Köfte",
    category: "Turkish",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Ground Lamb", a: "1.5 lbs"},
      {n: "Onion", a: "1 medium"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Fresh Parsley", a: "1/4 cup"},
      {n: "Cumin", a: "1.5 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Cinnamon", a: "1/4 tsp"},
      {n: "Red Pepper Flakes", a: "1/2 tsp"},
      {n: "Yogurt", a: "1 cup"},
      {n: "Lemon", a: "1"},
      {n: "Pita Bread", a: "4"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Grate onion and squeeze out excess liquid. Combine lamb with grated onion, minced garlic, chopped parsley, cumin, paprika, cinnamon, red pepper flakes, salt, and pepper. Mix well and shape into elongated oval patties. Grill or pan-fry over medium-high heat 4-5 minutes per side until cooked through with char. Mix yogurt with lemon juice and a pinch of salt for a sauce. Serve with warm pita and yogurt sauce."
  },
  {
    name: "Mercimek Çorbası (Red Lentil Soup)",
    category: "Turkish",
    type: "Soup",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Red Lentils", a: "1.5 cups"},
      {n: "Onion", a: "1 large"},
      {n: "Carrots", a: "2"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Turmeric", a: "1/2 tsp"},
      {n: "Lemon", a: "2"},
      {n: "Butter", a: "2 tbsp"},
      {n: "Red Pepper Flakes", a: "1 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté diced onion in olive oil until soft. Add minced garlic, diced carrots, cumin, paprika, and turmeric, cook 2 minutes. Stir in tomato paste. Add rinsed lentils and 6 cups of water. Bring to a boil, reduce heat, and simmer 25 minutes until lentils are very soft. Blend until smooth with an immersion blender. Season with salt, pepper, and lemon juice. In a small pan, melt butter and toast red pepper flakes until sizzling. Drizzle the spiced butter over each bowl before serving."
  },
  {
    name: "Tavuk Pilav (Turkish Chicken Pilaf)",
    category: "Turkish",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Chicken Thighs", a: "4 bone-in"},
      {n: "Rice", a: "2 cups"},
      {n: "Onion", a: "1 large"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Tomato Paste", a: "1 tbsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Cinnamon", a: "1/2 tsp"},
      {n: "Pine Nuts", a: "3 tbsp"},
      {n: "Fresh Parsley", a: "3 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season chicken thighs and brown in butter and olive oil on all sides until deep golden. Remove and set aside. In same pot, sauté diced onion until golden. Add tomato paste, cumin, and cinnamon. Add rinsed rice and stir to coat in the fat. Pour in 3 cups hot chicken broth (or water), nestle chicken on top. Bring to a boil, cover tightly, reduce to lowest heat, cook 20 minutes undisturbed. Let rest 10 minutes with lid on. Toast pine nuts in butter until golden. Fluff rice, garnish with pine nuts and parsley."
  },

  // ========== LEBANESE ==========
  {
    name: "Chicken Shawarma",
    category: "Lebanese",
    type: "Main",
    servings: 4,
    time: "40 min + marinate",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs boneless"},
      {n: "Yogurt", a: "1/4 cup"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Lemon", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Turmeric", a: "1/2 tsp"},
      {n: "Cinnamon", a: "1/4 tsp"},
      {n: "Pita Bread", a: "4"},
      {n: "Tomatoes", a: "2"},
      {n: "Tahini", a: "1/4 cup"},
      {n: "Cucumber", a: "1"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Combine yogurt, olive oil, lemon juice, minced garlic, cumin, paprika, turmeric, and cinnamon. Coat chicken thighs thoroughly and marinate at least 2 hours or overnight. Roast at 425°F for 25-30 minutes or grill over high heat. Rest 5 minutes then slice thinly. Make tahini sauce by mixing tahini with lemon juice, water, and a clove of minced garlic until pourable. Serve sliced chicken in warm pita with sliced tomato, cucumber, and tahini sauce."
  },
  {
    name: "Hummus",
    category: "Lebanese",
    type: "Appetizer",
    servings: 6,
    time: "15 min",
    ingredients: [
      {n: "Chickpeas", a: "2 cans (15 oz each)"},
      {n: "Tahini", a: "1/3 cup"},
      {n: "Lemon", a: "2"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Cumin", a: "1/2 tsp"},
      {n: "Paprika", a: "1/4 tsp"},
      "Salt"
    ],
    instructions: "Drain chickpeas, reserving the liquid. For extra smooth hummus, simmer chickpeas in water for 20 minutes until very soft. In a food processor, blend tahini and lemon juice for 1 minute until creamy. Add garlic and process 30 seconds. Add chickpeas, cumin, salt, and 3-4 tbsp of the reserved liquid. Process 4-5 minutes until ultra-smooth, adding more liquid to adjust consistency. Transfer to a bowl, make a well in the center, drizzle with olive oil, and dust with paprika. Serve with warm pita."
  },
  {
    name: "Tabbouleh",
    category: "Lebanese",
    type: "Side",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Bulgur Wheat", a: "1/2 cup fine"},
      {n: "Fresh Parsley", a: "2 large bunches"},
      {n: "Tomatoes", a: "3 medium"},
      {n: "Cucumber", a: "1"},
      {n: "Green Onions", a: "6"},
      {n: "Fresh Mint", a: "1/4 cup"},
      {n: "Lemon", a: "3"},
      {n: "Olive Oil", a: "4 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Soak bulgur in cold water for 20 minutes, then squeeze out all excess water. Finely chop parsley, removing thick stems — tabbouleh should be mostly parsley with bulgur as accent, not the other way around. Finely dice tomatoes and cucumber and let drain. Finely chop green onions and fresh mint. Combine all ingredients with drained bulgur. Dress generously with lemon juice and olive oil. Season with salt and pepper. Let rest 15 minutes before serving."
  },
  {
    name: "Shorbat Adas (Lebanese Lentil Soup)",
    category: "Lebanese",
    type: "Soup",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Red Lentils", a: "1.5 cups"},
      {n: "Onion", a: "2 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Carrots", a: "2"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Lemon", a: "2"},
      {n: "Sumac", a: "1 tsp"},
      {n: "Fresh Parsley", a: "1/4 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté diced onion in olive oil over medium-high heat until deeply caramelized, about 15 minutes. Reserve half for topping. Add garlic, cumin, and turmeric to remaining onion and cook 1 minute. Add rinsed lentils, diced carrots, and 7 cups of water. Simmer 25 minutes until lentils are very soft. Blend until smooth, adjust consistency with water, and season with salt, pepper, and lemon juice. Serve topped with caramelized onions, a sprinkle of sumac, fresh parsley, and a drizzle of olive oil."
  },
  {
    name: "Kafta (Lebanese Beef Kebabs)",
    category: "Lebanese",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Ground Beef", a: "1.5 lbs"},
      {n: "Onion", a: "1 medium"},
      {n: "Fresh Parsley", a: "1/3 cup"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Cinnamon", a: "1/2 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Red Pepper Flakes", a: "1/4 tsp"},
      {n: "Tomatoes", a: "2"},
      {n: "Pita Bread", a: "4"},
      {n: "Tahini", a: "3 tbsp"},
      {n: "Lemon", a: "1"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Grate onion and squeeze dry. Finely chop parsley and garlic. Combine beef with onion, parsley, garlic, cumin, cinnamon, paprika, red pepper flakes, salt, and pepper. Mix thoroughly until the mixture is cohesive. Shape around flat skewers or into oval patties. Grill over high heat 3-4 minutes per side until charred outside and cooked through. Thin tahini with lemon juice and water to make a sauce. Serve with warm pita, sliced tomatoes, and tahini sauce."
  },

  // ========== MOROCCAN ==========
  {
    name: "Chicken Tagine with Olives and Lemon",
    category: "Moroccan",
    type: "Main",
    servings: 4,
    time: "75 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs bone-in"},
      {n: "Onion", a: "2 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Kalamata Olives", a: "1 cup"},
      {n: "Lemon", a: "2"},
      {n: "Cumin", a: "1.5 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Ginger", a: "1 tsp ground"},
      {n: "Cinnamon", a: "1/2 tsp"},
      {n: "Saffron", a: "pinch"},
      {n: "Fresh Parsley", a: "1/4 cup"},
      {n: "Cilantro", a: "1/4 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Marinate chicken with cumin, paprika, turmeric, ginger, cinnamon, and olive oil for 30 minutes. Brown chicken in a wide heavy pot over medium-high heat. Remove and sauté sliced onion until soft. Add garlic and saffron bloomed in 1 cup warm water. Return chicken, cover and simmer 40 minutes. Add olives and lemon slices and juice. Cook uncovered 10 more minutes to reduce the sauce. Garnish with parsley and cilantro. Serve over couscous or with crusty bread."
  },
  {
    name: "Moroccan Harira Soup",
    category: "Moroccan",
    type: "Soup",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Ground Lamb", a: "1/2 lb"},
      {n: "Chickpeas", a: "1 can (15 oz)"},
      {n: "Red Lentils", a: "1/2 cup"},
      {n: "Tomatoes", a: "4 large"},
      {n: "Onion", a: "1 large"},
      {n: "Celery", a: "3 stalks"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Cinnamon", a: "1/2 tsp"},
      {n: "Ginger", a: "1 tsp ground"},
      {n: "Cilantro", a: "1/2 cup"},
      {n: "Fresh Parsley", a: "1/4 cup"},
      {n: "Lemon", a: "2"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Brown lamb in olive oil in a large pot. Add diced onion, celery, and garlic and cook until soft. Add cumin, turmeric, cinnamon, and ginger. Stir in tomato paste and diced fresh tomatoes. Add chickpeas, rinsed lentils, and 8 cups of water. Bring to a boil, reduce heat, and simmer 35 minutes until thick and hearty. Stir in chopped cilantro and parsley. Season with salt, pepper, and lemon juice. Serve with lemon wedges."
  },
  {
    name: "Moroccan Spiced Lamb with Couscous",
    category: "Moroccan",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Ground Lamb", a: "1.5 lbs"},
      {n: "Couscous", a: "2 cups"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Tomatoes", a: "2 large"},
      {n: "Chickpeas", a: "1 can (15 oz)"},
      {n: "Carrots", a: "2"},
      {n: "Zucchini", a: "1"},
      {n: "Olive Oil", a: "3 tbsp"},
      {n: "Cumin", a: "2 tsp"},
      {n: "Paprika", a: "1.5 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Cinnamon", a: "1/2 tsp"},
      {n: "Harissa Paste", a: "1 tbsp"},
      {n: "Honey", a: "1 tbsp"},
      {n: "Cilantro", a: "1/4 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Brown lamb in olive oil, breaking up lumps. Add diced onion and garlic, cook until soft. Add cumin, paprika, turmeric, and cinnamon. Stir in harissa paste and diced tomatoes. Add chickpeas, sliced carrots, and 1.5 cups of water. Simmer 20 minutes. Add diced zucchini and honey, cook 10 more minutes. Prepare couscous by pouring 2 cups boiling salted water over couscous with a knob of butter. Cover and steam 5 minutes, then fluff with a fork. Serve lamb over couscous, garnished with cilantro."
  },
  {
    name: "Zaalouk (Moroccan Eggplant Salad)",
    category: "Moroccan",
    type: "Side",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Eggplant", a: "2 large"},
      {n: "Tomatoes", a: "3 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Cumin", a: "1.5 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Harissa Paste", a: "1 tsp"},
      {n: "Lemon", a: "1"},
      {n: "Fresh Parsley", a: "3 tbsp"},
      {n: "Cilantro", a: "3 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Roast eggplant directly over a gas flame or under the broiler, turning occasionally, until charred and completely collapsed, about 15 minutes. Cool, peel, and roughly chop. In a wide pan, cook crushed garlic in olive oil for 1 minute. Add diced tomatoes, cumin, paprika, and harissa. Cook 10 minutes until sauce thickens. Add chopped eggplant and mash into the sauce. Cook 5 more minutes. Finish with lemon juice, parsley, and cilantro. Serve warm or at room temperature with bread."
  },

  // ========== SPANISH ==========
  {
    name: "Chicken and Chorizo Paella",
    category: "Spanish",
    type: "Main",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Chicken Thighs", a: "1.5 lbs bone-in"},
      {n: "Spanish Chorizo", a: "8 oz"},
      {n: "Paella Rice", a: "2 cups"},
      {n: "Onion", a: "1 large"},
      {n: "Bell Pepper", a: "2 (red and green)"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Tomatoes", a: "2 large"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Saffron", a: "1/2 tsp"},
      {n: "Paprika", a: "2 tsp"},
      {n: "White Wine", a: "1/2 cup"},
      {n: "Lemon", a: "1"},
      {n: "Fresh Parsley", a: "3 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Bloom saffron in 1/4 cup warm water. Season and brown chicken thighs in olive oil in a wide paella pan, remove. Brown sliced chorizo, remove. Sauté diced onion and peppers until soft. Add garlic and paprika. Add grated tomatoes and cook down to a paste. Add rice, stir to coat. Add wine and let absorb. Pour in 4 cups hot broth and the saffron water. Arrange chicken and chorizo on top. Bring to a boil, reduce to a steady simmer, cook uncovered 18-20 minutes without stirring. Let rest 5 minutes — a crispy socarrat bottom should form. Serve with lemon wedges and parsley."
  },
  {
    name: "Gambas al Ajillo (Garlic Shrimp)",
    category: "Spanish",
    type: "Appetizer",
    servings: 4,
    time: "15 min",
    ingredients: [
      {n: "Shrimp", a: "1.5 lbs large, peeled"},
      {n: "Garlic", a: "8 cloves"},
      {n: "Olive Oil", a: "1/2 cup"},
      {n: "Red Pepper Flakes", a: "1/2 tsp"},
      {n: "Smoked Paprika", a: "1/2 tsp"},
      {n: "White Wine", a: "1/4 cup"},
      {n: "Lemon", a: "1"},
      {n: "Fresh Parsley", a: "3 tbsp"},
      {n: "Bread", a: "for serving"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Heat olive oil in a wide skillet or cazuela over medium heat. Add thinly sliced garlic and red pepper flakes. Cook gently until garlic is just golden — watch carefully as it burns quickly. Add shrimp in a single layer, season with smoked paprika, salt, and pepper. Cook 1 minute, add white wine, and cook until shrimp are pink and just curled, about 2-3 minutes total. Squeeze lemon juice over and scatter parsley. Serve immediately in the pan with crusty bread to soak up the fragrant garlic oil."
  },
  {
    name: "Patatas Bravas",
    category: "Spanish",
    type: "Side",
    servings: 4,
    time: "40 min",
    ingredients: [
      {n: "Potatoes", a: "2 lbs"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Crushed Tomatoes", a: "1/2 cup"},
      {n: "Smoked Paprika", a: "2 tsp"},
      {n: "Red Pepper Flakes", a: "1/4 tsp"},
      {n: "Red Wine Vinegar", a: "1 tbsp"},
      {n: "Honey", a: "1 tsp"},
      {n: "Fresh Parsley", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Cut potatoes into 1.5-inch chunks. Parboil 8 minutes until just tender, drain, and let steam dry. Toss with olive oil, salt, and pepper. Roast at 425°F for 25-30 minutes until crispy and golden, turning once. For bravas sauce, sauté minced garlic in olive oil, add tomato paste and cook 1 minute. Add crushed tomatoes, smoked paprika, and red pepper flakes. Simmer 10 minutes. Stir in red wine vinegar and honey. Blend smooth, adjust seasoning. Drizzle sauce over crispy potatoes and garnish with parsley."
  },
  {
    name: "Gazpacho",
    category: "Spanish",
    type: "Soup",
    servings: 4,
    time: "20 min + chill",
    ingredients: [
      {n: "Tomatoes", a: "2 lbs ripe"},
      {n: "Cucumber", a: "1 large"},
      {n: "Bell Pepper", a: "1 red"},
      {n: "Red Onion", a: "1/4"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Bread", a: "2 slices day-old"},
      {n: "Olive Oil", a: "1/4 cup"},
      {n: "Red Wine Vinegar", a: "3 tbsp"},
      {n: "Lemon", a: "1"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Soak bread in water for 5 minutes, then squeeze out excess. Core and roughly chop tomatoes, saving juices. Peel and chop cucumber. Remove seeds from bell pepper. Blend tomatoes, cucumber, pepper, onion, garlic, and soaked bread until very smooth. With blender running, drizzle in olive oil to emulsify. Add red wine vinegar, lemon juice, salt, and pepper. Strain through a fine mesh sieve for a silky texture. Chill at least 2 hours or overnight. Serve very cold with a drizzle of olive oil and a garnish of finely diced cucumber and tomato."
  },

  // ========== FRENCH ==========
  {
    name: "Coq au Vin",
    category: "French",
    type: "Main",
    servings: 4,
    time: "90 min",
    ingredients: [
      {n: "Chicken Thighs", a: "4 bone-in"},
      {n: "Chicken Breast", a: "2 pieces"},
      {n: "Red Wine", a: "2 cups"},
      {n: "Mushrooms", a: "12 oz"},
      {n: "Carrots", a: "2"},
      {n: "Celery", a: "2 stalks"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Fresh Thyme", a: "4 sprigs"},
      {n: "Flour", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Season chicken and brown in butter and olive oil until deep golden on all sides. Remove and set aside. Sauté diced onion, carrots, and celery in the same pot until soft. Add garlic and tomato paste, cook 1 minute. Sprinkle in flour and cook 1 minute more. Add red wine and 1 cup water, scraping up browned bits. Add thyme and return chicken. Bring to a simmer, cover and cook 45 minutes. Remove chicken. Sauté quartered mushrooms in butter until golden. Return chicken to pot with mushrooms, simmer uncovered 15 minutes to reduce sauce. Serve with crusty bread or mashed potatoes."
  },
  {
    name: "French Onion Soup",
    category: "French",
    type: "Soup",
    servings: 4,
    time: "75 min",
    ingredients: [
      {n: "Onion", a: "4 large"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Olive Oil", a: "2 tbsp"},
      {n: "Red Wine", a: "1/2 cup"},
      {n: "Fresh Thyme", a: "4 sprigs"},
      {n: "Flour", a: "1 tbsp"},
      {n: "Bread", a: "4 thick slices"},
      {n: "Gruyère Cheese", a: "8 oz grated"},
      {n: "Sugar", a: "1 tsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Thinly slice all onions. Melt butter with olive oil in a heavy pot over medium-low heat. Add onions with a pinch of salt and sugar. Cook slowly 45-50 minutes, stirring occasionally, until deeply caramelized and rich golden-brown. Do not rush this step. Sprinkle in flour and cook 1 minute. Deglaze with red wine and scrape the bottom. Add 6 cups of beef broth (or water) and thyme sprigs. Simmer 20 minutes. Season with salt and pepper. Ladle into oven-safe bowls, top with bread slices and generous mounds of grated gruyère. Broil until cheese is bubbly and golden in spots."
  },
  {
    name: "Ratatouille",
    category: "French",
    type: "Side",
    servings: 4,
    time: "70 min",
    ingredients: [
      {n: "Eggplant", a: "1 large"},
      {n: "Zucchini", a: "2"},
      {n: "Tomatoes", a: "4 large"},
      {n: "Bell Pepper", a: "2 (red and yellow)"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Olive Oil", a: "5 tbsp"},
      {n: "Fresh Thyme", a: "3 sprigs"},
      {n: "Fresh Basil", a: "handful"},
      {n: "Tomato Paste", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Make a sauce: sauté diced onion and garlic in 3 tbsp olive oil until soft. Add tomato paste and 2 of the diced tomatoes. Season and simmer 15 minutes until thick. Spread in a wide baking dish. Thinly slice remaining tomatoes, eggplant, zucchini, and bell peppers into rounds about 1/8-inch thick. Arrange alternating vegetable slices overlapping in rows on top of the sauce. Drizzle with remaining olive oil, season with salt, pepper, and lay thyme sprigs on top. Cover tightly with foil and bake at 375°F for 40 minutes. Uncover and bake 15 more minutes. Garnish with fresh basil."
  },
  {
    name: "Salmon en Papillote",
    category: "French",
    type: "Main",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Salmon Fillets", a: "4 (6 oz each)"},
      {n: "Zucchini", a: "1"},
      {n: "Cherry Tomatoes", a: "1 cup"},
      {n: "Lemon", a: "2"},
      {n: "Garlic", a: "2 cloves"},
      {n: "Fresh Thyme", a: "4 sprigs"},
      {n: "Butter", a: "2 tbsp"},
      {n: "White Wine", a: "4 tbsp"},
      {n: "Fresh Parsley", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Preheat oven to 400°F. Cut 4 large pieces of parchment paper, about 15x12 inches each. Place a handful of sliced zucchini and halved cherry tomatoes in the center of each piece. Season salmon fillets and place on top. Add a small pat of butter, 2 slices of lemon, a few thin garlic slices, a thyme sprig, and 1 tbsp white wine to each packet. Fold parchment over and crimp edges tightly in overlapping folds to seal each packet completely. Bake 12-15 minutes until packets are puffed. Open carefully at the table to release the fragrant steam. Garnish with fresh parsley."
  },
  {
    name: "Soupe au Pistou",
    category: "French",
    type: "Soup",
    servings: 6,
    time: "55 min",
    ingredients: [
      {n: "Zucchini", a: "2"},
      {n: "Carrots", a: "3"},
      {n: "Potatoes", a: "2 medium"},
      {n: "Green Beans", a: "6 oz"},
      {n: "Tomatoes", a: "2 large"},
      {n: "Onion", a: "1 large"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Chickpeas", a: "1 can (15 oz)"},
      {n: "Olive Oil", a: "4 tbsp"},
      {n: "Fresh Basil", a: "2 large bunches"},
      {n: "Parmesan Cheese", a: "1/2 cup grated"},
      {n: "Elbow Pasta", a: "1/2 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Sauté diced onion in 2 tbsp olive oil until soft. Add diced carrots, potatoes, and zucchini. Pour in 8 cups of water and bring to a boil. Add chickpeas, trimmed green beans, and diced tomatoes. Simmer 20 minutes. Add pasta and cook 8 more minutes until tender. Season generously with salt and pepper. Make pistou: blend fresh basil leaves, 4 garlic cloves, parmesan, and remaining olive oil into a rough paste. Ladle soup into bowls and stir a heaping spoonful of pistou into each bowl — the pistou should not be cooked, just stirred in at the end."
  },

  // ========== INDIAN (Additional) ==========
  {
    name: "Palak Paneer",
    category: "Indian",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Paneer", a: "14 oz cubed"},
      {n: "Spinach", a: "1 lb"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Heavy Cream", a: "1/4 cup"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Garam Masala", a: "1 tsp"},
      {n: "Turmeric", a: "1/2 tsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      "Salt"
    ],
    instructions: "Blanch spinach 2 min, shock in ice water, blend to smooth puree. Sauté onion, garlic, and ginger in oil until golden. Add cumin, turmeric, cook 1 min. Add spinach puree, simmer 5 min. Add cream and garam masala. Fry paneer cubes until golden, add to sauce. Simmer 5 min. Serve with naan or rice."
  },
  {
    name: "Chicken Tikka Masala",
    category: "Indian",
    type: "Main",
    servings: 4,
    time: "45 min",
    ingredients: [
      {n: "Chicken Breast", a: "2 lbs cubed"},
      {n: "Yogurt", a: "1 cup"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Crushed Tomatoes", a: "14 oz"},
      {n: "Heavy Cream", a: "1/2 cup"},
      {n: "Garam Masala", a: "2 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Turmeric", a: "1/2 tsp"},
      {n: "Paprika", a: "1 tsp"},
      {n: "Butter", a: "2 tbsp"},
      {n: "Cilantro", a: "for garnish"},
      "Salt"
    ],
    instructions: "Marinate chicken in yogurt, garam masala, cumin, turmeric, paprika, and salt for 30 min. Broil or grill chicken until charred. Sauté onion, garlic, and ginger in butter. Add tomatoes, simmer 15 min. Blend sauce until smooth. Return to pan, add cream and chicken. Simmer 10 min. Garnish with cilantro. Serve with rice or naan."
  },
  {
    name: "Aloo Gobi",
    category: "Indian",
    type: "Side",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Potatoes", a: "2 large cubed"},
      {n: "Cauliflower", a: "1 head"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Garam Masala", a: "1 tsp"},
      {n: "Tomatoes", a: "2"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Cilantro", a: "for garnish"},
      "Salt"
    ],
    instructions: "Cut cauliflower into florets. Sauté cumin seeds in oil until they pop. Add onion, garlic, ginger, cook until golden. Add turmeric and diced tomatoes. Add potatoes and cauliflower, stir to coat. Add 1/4 cup water, cover, cook on low 20 min. Add garam masala and salt. Garnish with cilantro."
  },
  {
    name: "Samosas",
    category: "Indian",
    type: "Appetizer",
    servings: 12,
    time: "60 min",
    ingredients: [
      {n: "Potatoes", a: "3 medium"},
      {n: "Peas", a: "1/2 cup"},
      {n: "Flour", a: "2 cups"},
      {n: "Vegetable Oil", a: "for frying"},
      {n: "Onion", a: "1"},
      {n: "Ginger", a: "1 tsp grated"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Garam Masala", a: "1 tsp"},
      {n: "Chili Powder", a: "1/2 tsp"},
      {n: "Cilantro", a: "2 tbsp"},
      {n: "Lemon", a: "1 juiced"},
      "Salt"
    ],
    instructions: "Boil potatoes until tender, mash roughly. Sauté onion, add cumin, garam masala, chili powder, ginger. Add potatoes, peas, cilantro, lemon juice, salt. Make dough with flour, 3 tbsp oil, salt, and water. Roll thin circles, cut in half. Form cones, fill with potato mixture, seal edges. Deep fry at 350°F until golden."
  },
  {
    name: "Lamb Biryani",
    category: "Indian",
    type: "Main",
    servings: 6,
    time: "90 min",
    ingredients: [
      {n: "Ground Lamb", a: "1.5 lbs"},
      {n: "Basmati Rice", a: "2 cups"},
      {n: "Onion", a: "3 large"},
      {n: "Yogurt", a: "1/2 cup"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Ginger", a: "2 inch"},
      {n: "Garam Masala", a: "2 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Cardamom", a: "4 pods"},
      {n: "Cinnamon", a: "1 stick"},
      {n: "Saffron", a: "pinch"},
      {n: "Butter", a: "3 tbsp"},
      {n: "Cilantro", a: "1/4 cup"},
      "Salt"
    ],
    instructions: "Soak rice 30 min. Fry sliced onions until deeply golden. Marinate lamb in yogurt, garlic, ginger, garam masala, turmeric, cumin, and salt. Cook lamb until browned. Par-boil rice with cardamom and cinnamon until 70% done. Layer rice over lamb. Top with fried onions, saffron in warm milk, cilantro, and butter. Seal with foil and lid. Cook on lowest heat 25 min. Gently mix and serve."
  },
  {
    name: "Chicken Vindaloo",
    category: "Indian",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Chicken Thighs", a: "2 lbs cubed"},
      {n: "Onion", a: "2"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Ginger", a: "2 inch"},
      {n: "Red Wine Vinegar", a: "3 tbsp"},
      {n: "Crushed Tomatoes", a: "14 oz"},
      {n: "Chili Powder", a: "2 tsp"},
      {n: "Cumin", a: "1 tsp"},
      {n: "Turmeric", a: "1/2 tsp"},
      {n: "Paprika", a: "2 tsp"},
      {n: "Cinnamon", a: "1/2 tsp"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      "Salt"
    ],
    instructions: "Blend garlic, ginger, chili powder, cumin, turmeric, paprika, cinnamon, vinegar into a paste. Marinate chicken 30 min. Sauté sliced onions in oil until golden. Add chicken with marinade, brown 5 min. Add tomatoes and 1/2 cup water. Simmer covered 30 min until tender. Serve with rice."
  },

  // ========== ETHIOPIAN ==========
  {
    name: "Doro Wat",
    category: "Ethiopian",
    type: "Main",
    servings: 4,
    time: "75 min",
    ingredients: [
      {n: "Chicken Thighs", a: "8 pieces"},
      {n: "Onion", a: "4 large"},
      {n: "Garlic", a: "6 cloves"},
      {n: "Ginger", a: "2 inch"},
      {n: "Berbere Spice", a: "3 tbsp"},
      {n: "Butter", a: "4 tbsp"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Eggs", a: "4 hard-boiled"},
      {n: "Lemon", a: "1"},
      "Salt"
    ],
    instructions: "Finely dice onions. Dry-cook in pot, stirring frequently, 15-20 min until deeply browned. Add butter, garlic, and ginger, cook 5 min. Add berbere spice and tomato paste, cook 5 min. Add 1.5 cups water. Score chicken, add to sauce. Simmer covered 35 min. Add peeled eggs last 10 min. Squeeze lemon over. Serve with rice."
  },
  {
    name: "Misir Wat (Spiced Red Lentils)",
    category: "Ethiopian",
    type: "Main",
    servings: 4,
    time: "35 min",
    ingredients: [
      {n: "Red Lentils", a: "1.5 cups"},
      {n: "Onion", a: "2 large"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Berbere Spice", a: "2 tbsp"},
      {n: "Tomato Paste", a: "2 tbsp"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      "Salt"
    ],
    instructions: "Finely dice onions and dry-cook, stirring often, 10-15 min until browned. Add oil, garlic, ginger, cook 3 min. Add berbere and tomato paste, stir 2 min. Add rinsed lentils and 3 cups water. Simmer 20 min until soft and stew-like. Season with salt. Serve with rice."
  },
  {
    name: "Ethiopian Cabbage (Tikil Gomen)",
    category: "Ethiopian",
    type: "Side",
    servings: 4,
    time: "25 min",
    ingredients: [
      {n: "Cabbage", a: "1 small head"},
      {n: "Carrots", a: "2"},
      {n: "Potatoes", a: "2"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Slice cabbage, dice carrots and potatoes. Sauté onion in oil until soft. Add garlic, ginger, turmeric. Add potatoes and carrots, cook 5 min. Add cabbage, salt, and pepper. Cover and cook on medium-low 15-20 min until tender."
  },

  // ========== WEST AFRICAN ==========
  {
    name: "Jollof Rice",
    category: "West African",
    type: "Main",
    servings: 6,
    time: "55 min",
    ingredients: [
      {n: "Rice", a: "2 cups"},
      {n: "Crushed Tomatoes", a: "14 oz"},
      {n: "Tomato Paste", a: "3 tbsp"},
      {n: "Onion", a: "1 large"},
      {n: "Bell Pepper", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Chicken Broth", a: "2 cups"},
      {n: "Curry Powder", a: "1 tsp"},
      {n: "Dried Thyme", a: "1 tsp"},
      {n: "Vegetable Oil", a: "1/4 cup"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Blend tomatoes, bell pepper, half the onion, garlic, and ginger into smooth paste. Sauté remaining diced onion in oil. Add tomato paste, fry 3 min. Add blended mixture, cook 15 min until oil floats on top. Add broth, curry powder, thyme, salt. Bring to boil. Add washed rice, stir once. Cover tightly, cook on lowest heat 30 min. Rest 10 min. Fluff and serve."
  },
  {
    name: "Peanut Stew (Maafe)",
    category: "West African",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Chicken Thighs", a: "1.5 lbs"},
      {n: "Peanut Butter", a: "1/2 cup"},
      {n: "Crushed Tomatoes", a: "14 oz"},
      {n: "Sweet Potato", a: "2 cubed"},
      {n: "Onion", a: "1"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Cabbage", a: "2 cups chopped"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      {n: "Rice", a: "for serving"},
      "Salt"
    ],
    instructions: "Brown chicken in oil, remove. Sauté onion, garlic, ginger. Add tomatoes and cook 5 min. Whisk in peanut butter and 2 cups water until smooth. Return chicken, add sweet potato and chili powder. Simmer 25 min. Add cabbage, cook 10 more min. Season with salt. Serve over rice."
  },
  {
    name: "Suya (Spiced Beef Skewers)",
    category: "West African",
    type: "Appetizer",
    servings: 4,
    time: "30 min",
    ingredients: [
      {n: "Flank Steak", a: "1.5 lbs"},
      {n: "Peanuts", a: "1/2 cup ground"},
      {n: "Paprika", a: "1 tbsp"},
      {n: "Garlic Powder", a: "1 tsp"},
      {n: "Ginger", a: "1 tsp ground"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Onion", a: "1 sliced"},
      {n: "Tomatoes", a: "2 sliced"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      "Salt"
    ],
    instructions: "Slice beef thinly against the grain. Mix ground peanuts, paprika, garlic powder, ginger, chili powder, and salt for suya spice. Coat beef in oil then suya spice. Thread onto skewers. Grill over high heat 2-3 min per side until charred. Serve with sliced onion and tomatoes."
  },

  // ========== SOUTH AFRICAN ==========
  {
    name: "Bobotie",
    category: "South African",
    type: "Main",
    servings: 6,
    time: "60 min",
    ingredients: [
      {n: "Ground Beef", a: "2 lbs"},
      {n: "Onion", a: "2"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Bread", a: "2 slices"},
      {n: "Milk", a: "1 cup"},
      {n: "Eggs", a: "3"},
      {n: "Curry Powder", a: "2 tbsp"},
      {n: "Turmeric", a: "1 tsp"},
      {n: "Apple Cider Vinegar", a: "2 tbsp"},
      {n: "Brown Sugar", a: "1 tbsp"},
      {n: "Raisins", a: "1/4 cup"},
      {n: "Butter", a: "2 tbsp"},
      "Salt",
      "Black Pepper"
    ],
    instructions: "Soak bread in milk, squeeze out, reserve milk. Sauté onion and garlic in butter. Add beef, brown well. Add curry powder, turmeric, vinegar, sugar, raisins, soaked bread, salt, and pepper. Transfer to baking dish. Whisk eggs with reserved milk, pour over meat. Bake 350°F for 30-35 min until custard is set and golden."
  },
  {
    name: "Bunny Chow",
    category: "South African",
    type: "Main",
    servings: 4,
    time: "50 min",
    ingredients: [
      {n: "Chicken Thighs", a: "1.5 lbs cubed"},
      {n: "Bread", a: "1 unsliced loaf"},
      {n: "Onion", a: "2"},
      {n: "Garlic", a: "4 cloves"},
      {n: "Ginger", a: "1 inch"},
      {n: "Tomatoes", a: "3"},
      {n: "Potatoes", a: "2 cubed"},
      {n: "Curry Powder", a: "3 tbsp"},
      {n: "Garam Masala", a: "1 tsp"},
      {n: "Vegetable Oil", a: "3 tbsp"},
      {n: "Cilantro", a: "for garnish"},
      "Salt"
    ],
    instructions: "Sauté onion in oil until golden. Add garlic, ginger, curry powder, garam masala, cook 2 min. Add chicken, brown 5 min. Add diced tomatoes, potatoes, and 1 cup water. Simmer 25 min until tender. Cut bread into quarters, hollow out each piece. Fill with curry. Garnish with cilantro."
  },
  {
    name: "Chakalaka",
    category: "South African",
    type: "Side",
    servings: 6,
    time: "30 min",
    ingredients: [
      {n: "Onion", a: "1 large"},
      {n: "Bell Pepper", a: "2"},
      {n: "Carrots", a: "3 grated"},
      {n: "Tomatoes", a: "3"},
      {n: "Kidney Beans", a: "1 can"},
      {n: "Garlic", a: "3 cloves"},
      {n: "Ginger", a: "1 tsp"},
      {n: "Curry Powder", a: "2 tsp"},
      {n: "Chili Powder", a: "1 tsp"},
      {n: "Vegetable Oil", a: "2 tbsp"},
      "Salt"
    ],
    instructions: "Sauté diced onion and bell peppers in oil until soft. Add garlic, ginger, curry powder, and chili powder, cook 1 min. Add grated carrots and diced tomatoes, cook 10 min. Add drained kidney beans, simmer 10 more min. Season with salt. Serve warm or at room temperature as a side dish."
  }

];

// ========== INGREDIENT CATEGORIES ==========
const INGREDIENT_CATEGORIES = {
  "Proteins": [
    "Chicken Breast", "Chicken Thighs", "Ground Beef", "Flank Steak", "Beef Chuck",
    "Pork Shoulder", "Ground Lamb", "Pancetta", "Shrimp", "Salmon Fillets",
    "White Fish Fillets", "Tofu", "Eggs", "Anchovy Paste", "Ham",
    "Andouille Sausage", "Paneer"
  ],
  "Dairy & Eggs": [
    "Butter", "Heavy Cream", "Milk", "Sour Cream", "Yogurt", "Buttermilk",
    "Cheddar Cheese", "Mozzarella Cheese", "Fresh Mozzarella", "Parmesan Cheese",
    "Feta Cheese", "Cotija Cheese", "Ricotta Cheese", "Mascarpone Cheese",
    "Cream Cheese"
  ],
  "Vegetables": [
    "Onion", "Red Onion", "Garlic", "Tomatoes", "Cherry Tomatoes",
    "Bell Pepper", "Jalapeño", "Broccoli", "Spinach", "Lettuce",
    "Romaine Lettuce", "Cabbage", "Carrots", "Celery", "Potatoes",
    "Sweet Potato", "Zucchini", "Mushrooms", "Eggplant", "Cucumber",
    "Corn", "Corn on the Cob", "Peas", "Bean Sprouts", "Avocado",
    "Apples", "Cauliflower", "Okra", "Plantains", "Daikon Radish",
    "Bamboo Shoots", "Shallots"
  ],
  "Herbs & Aromatics": [
    "Fresh Basil", "Fresh Parsley", "Fresh Dill", "Fresh Thyme",
    "Cilantro", "Green Onions", "Ginger", "Lemon", "Lime",
    "Nori", "Seaweed (Wakame)", "Lemongrass"
  ],
  "Pantry Staples": [
    "Olive Oil", "Vegetable Oil", "Sesame Oil", "Flour", "Sugar",
    "Brown Sugar", "Cornstarch", "Breadcrumbs", "Panko Breadcrumbs",
    "Rice", "Basmati Rice", "Arborio Rice",
    "Oats", "Yeast", "Gelatin", "Balsamic Vinegar", "Red Wine Vinegar",
    "Rice Vinegar", "Apple Cider Vinegar", "Tapioca Starch",
    "Pine Nuts", "Peanut Butter", "Raisins"
  ],
  "Spices & Seasonings": [
    "Salt", "Black Pepper", "White Pepper", "Cumin", "Paprika", "Chili Powder",
    "Garlic Powder", "Garam Masala", "Turmeric", "Curry Powder",
    "Cinnamon", "Dried Oregano", "Dried Thyme", "Red Pepper Flakes",
    "Saffron", "Sesame Seeds", "Cardamom", "Five-Spice Powder",
    "Berbere Spice", "Sumac", "Star Anise",
    "Sichuan Peppercorns", "Korean Chili Flakes"
  ],
  "Canned & Jarred": [
    "Crushed Tomatoes", "Tomato Paste", "Marinara Sauce", "Enchilada Sauce",
    "Black Beans", "Kidney Beans", "Chickpeas", "Coconut Milk",
    "Kalamata Olives", "Salsa", "BBQ Sauce", "Dashi Stock", "Miso Paste",
    "Tahini", "Dijon Mustard", "Mustard", "Ketchup", "Mayonnaise",
    "Worcestershire Sauce", "Fish Sauce", "Soy Sauce", "Honey",
    "Peanuts", "Hot Sauce", "Sriracha", "Gochujang", "Doubanjiang",
    "Thai Green Curry Paste", "Mirin", "Tonkatsu Sauce",
    "Chicken Broth", "Beef Broth", "Pork Broth",
    "Korean Fermented Soybean Paste", "Shrimp Paste"
  ],
  "Pasta & Grains": [
    "Spaghetti", "Penne", "Linguine", "Elbow Macaroni", "Angel Hair Pasta",
    "Jumbo Pasta Shells", "Lasagna Noodles", "Egg Noodles", "Rice Noodles",
    "Ramen Noodles", "Glass Noodles", "Red Lentils", "Bulgur Wheat",
    "Grits", "Glutinous Rice"
  ],
  "Breads & Wraps": [
    "Bread", "Hamburger Buns", "Tortillas", "Large Tortillas",
    "Pita Bread", "Pizza Dough", "Pie Crust", "Ladyfingers", "Croutons",
    "Phyllo Dough", "Rice Paper Wrappers"
  ],
  "Baking & Sweets": [
    "Dark Chocolate", "Cocoa Powder", "Vanilla Extract", "Espresso",
    "Fresh Berries", "Ripe Mangoes", "Dill Pickles"
  ],
  "Beverages (Cooking)": [
    "White Wine", "Red Wine", "Vodka"
  ]
};
