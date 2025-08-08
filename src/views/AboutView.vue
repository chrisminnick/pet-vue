<template>
  <div class="about-page">
    <!-- Hero Section -->
    <div class="hero-section text-center py-5 mb-5 rounded">
      <h1 class="display-4 fw-bold">About PetVue Adoption</h1>
      <p class="lead">Connecting loving families with pets in need since 2024</p>
    </div>

    <!-- Mission Section -->
    <div class="card mb-5">
      <div class="card-body text-center p-5">
        <h2 class="display-5 mb-4">Our Mission</h2>
        <p class="lead">
          At PetVue Adoption, we believe every pet deserves a loving, permanent home. Our mission is
          to rescue, rehabilitate, and rehome pets while educating the community about responsible
          pet ownership and the benefits of adoption.
        </p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="row mb-5">
      <div class="col-md-3 col-6 mb-4">
        <div class="card text-center h-100">
          <div class="card-body">
            <h3 class="display-4 text-primary">500+</h3>
            <p class="card-text">Pets Adopted</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-4">
        <div class="card text-center h-100">
          <div class="card-body">
            <h3 class="display-4 text-primary">50+</h3>
            <p class="card-text">Volunteer Families</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-4">
        <div class="card text-center h-100">
          <div class="card-body">
            <h3 class="display-4 text-primary">3</h3>
            <p class="card-text">Years of Service</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-6 mb-4">
        <div class="card text-center h-100">
          <div class="card-body">
            <h3 class="display-4 text-primary">100%</h3>
            <p class="card-text">Love Guaranteed</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Process Section -->
    <div class="card mb-5">
      <div class="card-body p-5">
        <h2 class="text-center display-5 mb-5">Adoption Process</h2>
        <div class="row">
          <div class="col-md-3 col-6 mb-4 text-center">
            <div class="display-1 mb-3">🔍</div>
            <h4>Browse Pets</h4>
            <p>Explore our available pets and find the perfect match for your family.</p>
          </div>
          <div class="col-md-3 col-6 mb-4 text-center">
            <div class="display-1 mb-3">📋</div>
            <h4>Apply</h4>
            <p>Fill out our adoption application and tell us about your home and lifestyle.</p>
          </div>
          <div class="col-md-3 col-6 mb-4 text-center">
            <div class="display-1 mb-3">🤝</div>
            <h4>Meet & Greet</h4>
            <p>Schedule a visit to meet your potential new family member in person.</p>
          </div>
          <div class="col-md-3 col-6 mb-4 text-center">
            <div class="display-1 mb-3">🏠</div>
            <h4>Welcome Home</h4>
            <p>Complete the adoption and welcome your new companion home!</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Call to Action -->
    <div class="hero-section text-center py-5 rounded">
      <h2 class="display-5 mb-3">Ready to Find Your New Best Friend?</h2>
      <p class="lead mb-4">Browse our available pets and start your adoption journey today.</p>
      <router-link to="/pets" class="btn btn-light btn-lg"> View Available Pets </router-link>
    </div>
  </div>
</template>

<script setup>
// About page - static content, no additional logic needed
</script>

<style scoped>
/* Bootstrap handles all the styling */
</style>
