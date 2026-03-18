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
  }
];

// ========== INGREDIENT CATEGORIES ==========
const INGREDIENT_CATEGORIES = {
  "Proteins": [
    "Chicken Breast", "Chicken Thighs", "Ground Beef", "Flank Steak", "Beef Chuck",
    "Pork Shoulder", "Ground Lamb", "Pancetta", "Shrimp", "Salmon Fillets",
    "White Fish Fillets", "Tofu", "Eggs", "Anchovy Paste"
  ],
  "Dairy & Eggs": [
    "Butter", "Heavy Cream", "Milk", "Sour Cream", "Yogurt",
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
    "Apples"
  ],
  "Herbs & Aromatics": [
    "Fresh Basil", "Fresh Parsley", "Fresh Dill", "Fresh Thyme",
    "Cilantro", "Green Onions", "Ginger", "Lemon", "Lime",
    "Nori", "Seaweed (Wakame)"
  ],
  "Pantry Staples": [
    "Olive Oil", "Vegetable Oil", "Sesame Oil", "Flour", "Sugar",
    "Brown Sugar", "Cornstarch", "Breadcrumbs", "Rice", "Arborio Rice",
    "Oats", "Yeast", "Gelatin", "Balsamic Vinegar", "Red Wine Vinegar",
    "Rice Vinegar", "Apple Cider Vinegar"
  ],
  "Spices & Seasonings": [
    "Salt", "Black Pepper", "Cumin", "Paprika", "Chili Powder",
    "Garlic Powder", "Garam Masala", "Turmeric", "Curry Powder",
    "Cinnamon", "Dried Oregano", "Dried Thyme", "Red Pepper Flakes",
    "Saffron", "Sesame Seeds"
  ],
  "Canned & Jarred": [
    "Crushed Tomatoes", "Tomato Paste", "Marinara Sauce", "Enchilada Sauce",
    "Black Beans", "Kidney Beans", "Chickpeas", "Coconut Milk",
    "Kalamata Olives", "Salsa", "BBQ Sauce", "Dashi Stock", "Miso Paste",
    "Tahini", "Dijon Mustard", "Mustard", "Ketchup", "Mayonnaise",
    "Worcestershire Sauce", "Fish Sauce", "Soy Sauce", "Honey",
    "Peanuts"
  ],
  "Pasta & Grains": [
    "Spaghetti", "Penne", "Linguine", "Elbow Macaroni", "Angel Hair Pasta",
    "Jumbo Pasta Shells", "Egg Noodles", "Rice Noodles", "Ramen Noodles",
    "Red Lentils"
  ],
  "Breads & Wraps": [
    "Bread", "Hamburger Buns", "Tortillas", "Large Tortillas",
    "Pita Bread", "Pizza Dough", "Pie Crust", "Ladyfingers", "Croutons"
  ],
  "Baking & Sweets": [
    "Dark Chocolate", "Cocoa Powder", "Vanilla Extract", "Espresso",
    "Fresh Berries"
  ],
  "Beverages (Cooking)": [
    "White Wine", "Red Wine", "Vodka"
  ]
};
