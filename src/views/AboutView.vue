<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>About PetVue Adoption</h1>
        <p class="hero-subtitle">Connecting loving families with pets in need since 2024</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission">
      <div class="mission-content">
        <h2>Our Mission</h2>
        <p>
          At PetVue Adoption, we believe every pet deserves a loving, permanent home. Our mission is
          to rescue, rehabilitate, and rehome pets while educating the community about responsible
          pet ownership and the benefits of adoption.
        </p>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats">
      <div class="stats-grid">
        <div class="stat-card">
          <h3 class="stat-number">500+</h3>
          <p class="stat-label">Pets Adopted</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-number">50+</h3>
          <p class="stat-label">Volunteer Families</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-number">3</h3>
          <p class="stat-label">Years of Service</p>
        </div>
        <div class="stat-card">
          <h3 class="stat-number">100%</h3>
          <p class="stat-label">Love Guaranteed</p>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="process">
      <h2>Adoption Process</h2>
      <div class="process-steps">
        <div class="step">
          <div class="step-icon">🔍</div>
          <h3>Browse Pets</h3>
          <p>Explore our available pets and find the perfect match for your family.</p>
        </div>
        <div class="step">
          <div class="step-icon">📋</div>
          <h3>Apply</h3>
          <p>Fill out our adoption application and tell us about your home and lifestyle.</p>
        </div>
        <div class="step">
          <div class="step-icon">🤝</div>
          <h3>Meet & Greet</h3>
          <p>Schedule a visit to meet your potential new family member in person.</p>
        </div>
        <div class="step">
          <div class="step-icon">🏠</div>
          <h3>Welcome Home</h3>
          <p>Complete the adoption and welcome your new companion home!</p>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta">
      <div class="cta-content">
        <h2>Ready to Find Your New Best Friend?</h2>
        <p>Browse our available pets and start your adoption journey today.</p>
        <router-link to="/pets" class="btn btn-primary btn-large">
          View Available Pets
        </router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
// About page - static content, no additional logic needed
</script>

<style scoped>
.about-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  border-radius: var(--border-radius);
  margin-bottom: 4rem;
  color: white;
}

.hero h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: white;
}

.hero-subtitle {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.9);
  max-width: 600px;
  margin: 0 auto;
}

.mission {
  background: var(--background-white);
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  margin-bottom: 4rem;
  text-align: center;
}

.mission h2 {
  color: var(--text-dark);
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.mission p {
  font-size: 1.2rem;
  line-height: 1.6;
  color: var(--text-medium);
  max-width: 800px;
  margin: 0 auto;
}

.stats {
  margin-bottom: 4rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: var(--background-white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  text-align: center;
  transition: var(--transition);
}

.stat-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-hover);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1rem;
  color: var(--text-medium);
  font-weight: 500;
  margin: 0;
}

.process {
  background: var(--background-white);
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  margin-bottom: 4rem;
}

.process h2 {
  text-align: center;
  color: var(--text-dark);
  margin-bottom: 3rem;
  font-size: 2.5rem;
}

.process-steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.step {
  text-align: center;
  padding: 2rem 1rem;
}

.step-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.step h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.step p {
  color: var(--text-medium);
  line-height: 1.6;
}

.cta {
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  border-radius: var(--border-radius);
  padding: 4rem 2rem;
  text-align: center;
  color: white;
  margin-bottom: 2rem;
}

.cta h2 {
  color: white;
  margin-bottom: 1rem;
  font-size: 2.5rem;
}

.cta p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
}

@media (max-width: 768px) {
  .hero {
    padding: 3rem 1rem;
  }

  .hero h1 {
    font-size: 2rem;
  }

  .mission {
    padding: 2rem 1rem;
  }

  .mission h2 {
    font-size: 2rem;
  }

  .mission p {
    font-size: 1.1rem;
  }

  .stats-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1rem;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .stat-number {
    font-size: 2rem;
  }

  .process {
    padding: 2rem 1rem;
  }

  .process h2 {
    font-size: 2rem;
  }

  .process-steps {
    grid-template-columns: 1fr;
  }

  .cta {
    padding: 3rem 1rem;
  }

  .cta h2 {
    font-size: 2rem;
  }
}
</style>
