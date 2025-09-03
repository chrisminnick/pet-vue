<template>
  <div id="app">
    <!-- Header -->
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <span>🐾 PetVue Adoption</span>
        </router-link>
        <div class="navbar-nav ms-auto">
          <router-link to="/" class="nav-link">Available Pets</router-link>
          <router-link to="/about" class="nav-link">About Us</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="container mt-4">
      <router-view />
    </main>

    <!-- Footer -->
    <footer class="bg-dark text-light text-center py-4 mt-5">
      <div class="container">
        <p class="mb-0">
          Made with ❤️ for pets in need of homes | PetVue Adoption Center
        </p>
      </div>
    </footer>
  </div>
</template>
