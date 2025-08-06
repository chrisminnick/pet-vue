# 🐾 PetVue Adoption App

A modern, responsive pet adoption website built with Vue.js 3 and Vite. This project demonstrates key Vue.js concepts through a real-world application that connects loving families with pets in need of homes.

![PetVue Demo](https://via.placeholder.com/800x400/ff6b35/ffffff?text=PetVue+Adoption+App)

## 📚 Learning Objectives

This project is designed to teach Vue.js progressively through the following modules:

1. **Introduction to Vue** - Basic syntax and reactivity
2. **Setting up Vue with Vite** - Modern development environment
3. **Basic Vue Reactivity** - Data binding and state management
4. **Conditionals, Loops, and Dynamic Styles** - Template logic and styling
5. **Components** - Reusable UI components and communication
6. **Vue Routing** - Single Page Application navigation

## ✨ Features

### 🎨 Modern UI/UX

- **Responsive design** that works on all devices
- **Modern color scheme** with warm, pet-friendly colors
- **Card-based layouts** with smooth hover animations
- **Professional typography** and consistent spacing
- **Accessibility-focused** design patterns

### 🐕 Pet Management

- **Browse available pets** with detailed information
- **Filter by type** (Dogs, Cats), size, and energy level
- **Detailed pet profiles** with photos, descriptions, and care info
- **Adoption status tracking** with visual indicators
- **Search and filter capabilities**

### 🚀 Technical Features

- **Vue 3 Composition API** for modern reactive programming
- **Vue Router** for seamless navigation
- **Responsive CSS Grid** layouts
- **CSS Custom Properties** for consistent theming
- **Component-based architecture**
- **Scoped styling** for maintainable CSS

## 🛠️ Tech Stack

- **Vue.js 3** - Progressive JavaScript framework
- **Vite** - Fast build tool and development server
- **Vue Router** - Official router for Vue.js
- **CSS3** - Modern styling with Grid and Flexbox
- **ES6+** - Modern JavaScript features

## 🚀 Quick Start

### Prerequisites

- Node.js (v20.19.0 or ≥22.12.0)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd pet-vue
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Available Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build for production                     |
| `npm run preview` | Preview production build locally         |
| `npm run format`  | Format code with Prettier                |

## 📁 Project Structure

```
pet-vue/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/           # Global styles and assets
│   │   ├── base.css      # CSS reset and base styles
│   │   ├── main.css      # Main application styles
│   │   └── logo.svg      # Vue logo
│   ├── components/       # Reusable Vue components
│   │   ├── HelloWorld.vue
│   │   ├── PetCard.vue   # Pet listing card component
│   │   └── TheWelcome.vue
│   ├── data/
│   │   └── pets.js       # Sample pet data
│   ├── router/
│   │   └── index.js      # Vue Router configuration
│   ├── views/            # Page-level components
│   │   ├── AboutView.vue # About page
│   │   ├── HomeView.vue  # Home page
│   │   ├── PetDetail.vue # Individual pet details
│   │   └── PetList.vue   # Pet listing page
│   ├── App.vue           # Root component
│   └── main.js           # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── README.md            # This file
└── vite.config.js       # Vite configuration
```

## 🧩 Key Components

### PetCard.vue

Reusable component for displaying pet information in a card format.

**Props:**

- `pet` (Object) - Pet data including name, breed, age, image, etc.

**Features:**

- Responsive design
- Adoption status indicators
- Energy level badges
- Click-to-navigate functionality

### PetList.vue

Main listing page with filtering capabilities.

**Features:**

- Filter by pet type, size, and energy level
- Show/hide adopted pets toggle
- Responsive grid layout
- Real-time filter updates

### PetDetail.vue

Detailed view for individual pets.

**Features:**

- Comprehensive pet information
- Health and care status
- Adoption call-to-action
- Responsive image gallery

## 🎨 Design System

### Color Palette

```css
--primary-color: #ff6b35; /* Warm orange */
--secondary-color: #4ecdc4; /* Teal */
--success-color: #28a745; /* Green */
--text-dark: #2c3e50; /* Dark blue-gray */
--text-medium: #6c757d; /* Medium gray */
```

### Typography

- **Headings**: System font stack with appropriate weights
- **Body**: Optimized line heights for readability
- **Interactive elements**: Clear visual hierarchy

## 📱 Responsive Design

The app uses a mobile-first approach with breakpoints at:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🧪 Learning Exercises

### Module 1: Vue Basics

- Explore template syntax in `PetCard.vue`
- Modify pet data in `pets.js`
- Practice data binding with `{{ }}` syntax

### Module 2: Reactivity

- Add new reactive properties to pet objects
- Implement computed properties for filtering
- Practice with `ref()` and `reactive()`

### Module 3: Conditionals & Loops

- Study `v-for` implementation in `PetList.vue`
- Practice `v-if/v-else` in adoption status display
- Experiment with dynamic classes

### Module 4: Components

- Create new pet-related components
- Practice prop passing between components
- Implement custom events for component communication

### Module 5: Routing

- Add new routes to the application
- Practice route parameters and navigation
- Implement route guards for protected pages

## 🤝 Contributing

This is an educational project. Students and instructors are welcome to:

- Report issues or bugs
- Suggest improvements
- Submit pull requests for enhancements
- Add new features for learning purposes

## 📖 Additional Resources

### Vue.js Documentation

- [Vue 3 Official Guide](https://vuejs.org/guide/)
- [Vue Router](https://router.vuejs.org/)
- [Vue 3 Migration Guide](https://v3-migration.vuejs.org/)

### Development Tools

- [Vue DevTools](https://devtools.vuejs.org/) - Browser extension for debugging
- [Vite Documentation](https://vitejs.dev/) - Build tool documentation
- [VS Code Vue Extensions](https://marketplace.visualstudio.com/items?itemName=Vue.volar) - IDE support

### Design Resources

- [Vue.js Design Principles](https://vuejs.org/guide/extras/design-principles.html)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [Responsive Design Patterns](https://web.dev/responsive-web-design-basics/)

## 📄 License

This project is created for educational purposes. Feel free to use it as a learning resource or starting point for your own Vue.js projects.

---

**Happy coding! 🎉**

_Built with ❤️ for Vue.js learners_
