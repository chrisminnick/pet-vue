<template>
  <div class="pet-detail-page">
    <div v-if="pet" class="pet-detail">
      <!-- Navigation -->
      <nav class="detail-nav">
        <button @click="$router.back()" class="btn btn-outline">← Back to Pets</button>
      </nav>

      <!-- Pet Header -->
      <header class="pet-header">
        <div class="pet-image-container">
          <img :src="pet.image" :alt="pet.name" class="pet-image" />
          <div v-if="pet.adopted" class="adopted-overlay">
            <div class="adopted-message">
              <span class="adopted-icon">✓</span>
              <h3>Already Adopted!</h3>
              <p>This pet has found their forever home</p>
            </div>
          </div>
        </div>

        <div class="pet-info">
          <div class="pet-title">
            <h1>{{ pet.name }}</h1>
            <span class="age-badge">{{ pet.age }} {{ pet.age === 1 ? 'year' : 'years' }} old</span>
          </div>

          <div class="pet-basics">
            <div class="basic-info">
              <span class="label">Breed:</span>
              <span class="value">{{ pet.breed }}</span>
            </div>
            <div class="basic-info">
              <span class="label">Gender:</span>
              <span class="value">{{ pet.gender }}</span>
            </div>
            <div class="basic-info">
              <span class="label">Size:</span>
              <span class="value">{{ pet.size }}</span>
            </div>
            <div class="basic-info">
              <span class="label">Energy Level:</span>
              <span class="value energy-badge" :class="`energy-${pet.energy.toLowerCase()}`">
                {{ pet.energy }}
              </span>
            </div>
          </div>

          <div class="location-info">
            <span class="location-icon">📍</span>
            <span>{{ pet.location }}</span>
          </div>
        </div>
      </header>

      <!-- Pet Details -->
      <section class="pet-details">
        <div class="detail-card">
          <h2>About {{ pet.name }}</h2>
          <p class="bio">{{ pet.bio }}</p>
        </div>

        <div class="detail-card">
          <h3>Good With</h3>
          <div class="tags">
            <span v-for="trait in pet.goodWith" :key="trait" class="tag">
              {{ trait }}
            </span>
          </div>
        </div>

        <div class="detail-card">
          <h3>Health & Care</h3>
          <div class="health-info">
            <div class="health-item">
              <span class="health-label">Vaccinated:</span>
              <span class="health-status" :class="{ positive: pet.vaccinated }">
                {{ pet.vaccinated ? '✓ Yes' : '✗ No' }}
              </span>
            </div>
            <div class="health-item">
              <span class="health-label">{{
                pet.gender === 'Male' ? 'Neutered:' : 'Spayed:'
              }}</span>
              <span class="health-status" :class="{ positive: pet.neutered || pet.spayed }">
                {{ pet.neutered || pet.spayed ? '✓ Yes' : '✗ No' }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Adoption Action -->
      <section class="adoption-action">
        <div class="action-card">
          <h2>
            {{ pet.adopted ? 'This pet has been adopted' : `Interested in adopting ${pet.name}?` }}
          </h2>
          <p v-if="!pet.adopted">
            Contact our adoption team to learn more about {{ pet.name }} and start the adoption
            process.
          </p>
          <p v-else>
            Thank you for your interest! Check out our other available pets looking for homes.
          </p>

          <div class="action-buttons">
            <button v-if="!pet.adopted" class="btn btn-primary btn-large">
              Contact About {{ pet.name }}
            </button>
            <router-link v-else to="/pets" class="btn btn-secondary btn-large">
              View Other Pets
            </router-link>
          </div>
        </div>
      </section>
    </div>

    <!-- Pet Not Found -->
    <div v-else class="not-found">
      <div class="not-found-content">
        <h2>Pet Not Found</h2>
        <p>Sorry, we couldn't find the pet you're looking for.</p>
        <router-link to="/pets" class="btn btn-primary"> View All Available Pets </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { pets as samplePets } from '../data/pets'

const route = useRoute()
const pet = computed(() => samplePets.find((p) => p.id === Number(route.params.id)))
</script>

<style scoped>
.pet-detail-page {
  max-width: 1000px;
  margin: 0 auto;
}

.detail-nav {
  margin-bottom: 2rem;
}

.pet-header {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
  background: var(--background-white);
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: var(--shadow-medium);
}

.pet-image-container {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.pet-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.adopted-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.adopted-message h3 {
  color: white;
  margin: 0.5rem 0;
}

.adopted-message p {
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.adopted-icon {
  font-size: 3rem;
  color: var(--success-color);
}

.pet-info {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pet-title {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.pet-title h1 {
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0;
}

.age-badge {
  background: var(--secondary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 600;
}

.pet-basics {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-bottom: 2rem;
}

.basic-info {
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--border-color);
}

.label {
  font-weight: 600;
  color: var(--text-medium);
}

.value {
  font-weight: 500;
  color: var(--text-dark);
}

.energy-badge {
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
}

.energy-low {
  background: var(--success-color);
  color: white;
}

.energy-medium {
  background: var(--warning-color);
  color: var(--text-dark);
}

.energy-high {
  background: var(--primary-color);
  color: white;
}

.location-info {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--text-medium);
  font-size: 1.1rem;
}

.pet-details {
  display: grid;
  gap: 2rem;
  margin-bottom: 3rem;
}

.detail-card {
  background: var(--background-white);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.detail-card h2,
.detail-card h3 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.bio {
  font-size: 1.1rem;
  line-height: 1.6;
  color: var(--text-medium);
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.tag {
  background: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
}

.health-info {
  display: grid;
  gap: 1rem;
}

.health-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: var(--background-light);
  border-radius: var(--border-radius);
}

.health-label {
  font-weight: 600;
  color: var(--text-dark);
}

.health-status {
  font-weight: 600;
  color: var(--text-medium);
}

.health-status.positive {
  color: var(--success-color);
}

.adoption-action {
  background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
  border-radius: var(--border-radius);
  color: white;
  margin-bottom: 2rem;
}

.action-card {
  padding: 3rem;
  text-align: center;
}

.action-card h2 {
  color: white;
  margin-bottom: 1rem;
}

.action-card p {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

.action-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
}

.not-found {
  text-align: center;
  padding: 4rem 2rem;
}

.not-found-content {
  background: var(--background-white);
  padding: 3rem;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.not-found h2 {
  color: var(--text-dark);
  margin-bottom: 1rem;
}

.not-found p {
  color: var(--text-medium);
  margin-bottom: 2rem;
}

@media (max-width: 768px) {
  .pet-header {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .pet-info {
    padding: 1.5rem;
  }

  .pet-title {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .pet-title h1 {
    font-size: 2rem;
  }

  .pet-basics {
    grid-template-columns: 1fr;
  }

  .action-card {
    padding: 2rem 1rem;
  }

  .action-buttons {
    flex-direction: column;
    align-items: center;
  }

  .btn-large {
    width: 100%;
    max-width: 300px;
  }
}
</style>
