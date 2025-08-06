<template>
  <div id="app">
    <header class="app-header">
      <div class="container">
        <nav class="navbar">
          <router-link to="/pets" class="brand">
            <span class="brand-icon">🐾</span>
            <span class="brand-text">PetVue Adoption</span>
          </router-link>
          <div class="nav-links">
            <router-link to="/pets" class="nav-link">Available Pets</router-link>
            <router-link to="/about" class="nav-link">About Us</router-link>
          </div>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <div class="container">
        <router-view />
      </div>
    </main>

    <footer class="app-footer">
      <div class="container">
        <p class="text-center text-muted">
          Made with ❤️ for pets in need of homes | PetVue Adoption Center
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Main app component - no additional logic needed yet
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  color: white;
  box-shadow: var(--shadow-medium);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
}

.brand {
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  transition: var(--transition);
}

.brand:hover {
  color: white;
  transform: scale(1.05);
}

.brand-icon {
  font-size: 2rem;
  margin-right: 0.5rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  transition: var(--transition);
  text-decoration: none;
}

.nav-link:hover,
.nav-link.router-link-active {
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
}

.main-content {
  min-height: calc(100vh - 200px);
  padding: 2rem 0;
}

.app-footer {
  background-color: var(--text-dark);
  color: var(--text-light);
  padding: 2rem 0;
  margin-top: 3rem;
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1rem;
  }

  .brand-text {
    font-size: 1.2rem;
  }

  .main-content {
    padding: 1rem 0;
  }
}
</style>
