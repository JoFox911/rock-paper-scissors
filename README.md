GH Pages https://jofox911.github.io/rock-paper-scissors/

# Rock Paper Scissors Lizard Spock
A modern, responsive game built with Vue 3 and Vite that brings the classic "Rock Paper Scissors" to life—with a twist! This version supports the extended Lizard-Spock variant from The Big Bang Theory and offers a polished, interactive UI with state persistence.

# ✨ Features & Technologies
This project was developed with a focus on clean architecture, accessibility, and responsive design. Here's what powers it:

## ✅ Vue 3 + <script setup>:
Fully utilizing Composition API for cleaner component logic.

## 📁 Modular Structure:
Organized by feature (GameStart, GamePlay, GameResult), separating reusable components, logic, and assets.

## 🎮 Gameplay Mechanics:
- Supports Rock, Paper, Scissors, Lizard, Spock
- Randomized house pick logic
- Winner is calculated with a flexible rule system
- Game flow: Start → Pick → Reveal → Result

## 🧠 Persistent Score Tracking:
- Score stored in localStorage
- Automatically restores on page reload

## 📸 Rules Modal:
- Displays full game logic diagram
- Centered popup on desktop
- Fullscreen modal with close button at the bottom on mobile

## ⚙️ Fully Typed with TypeScript:
- Choice, Result, and GameStep enums
- Strong typing for props and emits

## 📦 Vite: For fast development and optimized builds.

# 📁 Folder Structure
src/
├── assets/
│   └── styles/        → Global SCSS variables
├── components/        → Reusable UI components (Buttons, Modals, etc.)
├── logic/             → Game logic (enums, rules, types)
├── modules/           → Feature modules (GameStart, GamePlay, GameResult)
├── App.vue            → Root application logic
├── main.ts            → Entry point

# 🧠 Gameplay Logic
Game state is handled in App.vue using local reactive state. The logic includes:
handlePick – Sets the player’s choice and triggers house choice
getRandomChoice – Randomly selects from 5 options
getResult – Determines the game result based on win rules
restart – Resets the game state

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```
