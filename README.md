# Virtual Dinner Chef

A web app where users input ingredients they have on hand, and get dinner recipe suggestions they can make. Styled with a warm restaurant/kitchen theme.

## Features

- **My Kitchen** — Check off ingredients you have at home, organized by category
- **What Can I Cook?** — Get recipe suggestions based on your available ingredients, with filters for perfect matches or near-matches (missing 1-3 ingredients)
- **Search Recipes** — Find any recipe by name
- **Favorites** — Rate recipes with thumbs up/down and view your liked/disliked list
- **Add Recipe** — Create and save your own custom recipes
- **Shopping List** — See what ingredients you're missing for any recipe
- **User Profiles** — Sign in with your name to save your kitchen, ratings, and custom recipes
- **Responsive Design** — Works on desktop and mobile

## Project Structure

```
public/
  index.html      — Main page with login, navigation, and recipe display
  style.css       — Restaurant/kitchen themed styling (warm colors, dark mode)
  app.js          — Application logic (pantry, suggestions, search, favorites)
  recipes.js      — Built-in recipe database with 50+ recipes across multiple cuisines
package.json      — Project metadata
vercel.json       — Deployment configuration for Vercel
```

## Getting Started

Open `public/index.html` in a browser, or deploy to any static hosting service.

For Vercel deployment:

```bash
npm install -g vercel
vercel
```

## How It Works

1. Enter your name to sign in
2. Go to **My Kitchen** and check off ingredients you have
3. Switch to **What Can I Cook?** to see matching recipes
4. Filter by cuisine, meal type, or how many ingredients you're missing
5. Click any recipe card to view full instructions and a shopping list for missing items
