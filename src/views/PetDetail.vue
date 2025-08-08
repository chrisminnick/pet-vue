<template>
  <div v-if="pet">
    <!-- Back Button -->
    <button @click="$router.back()" class="btn btn-outline-primary mb-4">← Back to Pets</button>

    <!-- Pet Header -->
    <div class="row mb-4">
      <div class="col-md-6">
        <div class="position-relative">
          <img :src="pet.image" :alt="pet.name" class="img-fluid rounded pet-detail-image" />
          <div v-if="pet.adopted" class="adopted-overlay rounded">
            <div class="text-center">
              <div class="display-1 text-success">✓</div>
              <h3>Already Adopted!</h3>
              <p>This pet has found their forever home</p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="d-flex align-items-center mb-3">
          <h1 class="me-3">{{ pet.name }}</h1>
          <span class="badge bg-secondary fs-6">
            {{ pet.age }} {{ pet.age === 1 ? 'year' : 'years' }} old
          </span>
        </div>

        <div class="row mb-3">
          <div class="col-6"><strong>Breed:</strong> {{ pet.breed }}</div>
          <div class="col-6"><strong>Gender:</strong> {{ pet.gender }}</div>
          <div class="col-6"><strong>Size:</strong> {{ pet.size }}</div>
          <div class="col-6">
            <strong>Energy:</strong>
            <span
              class="badge ms-1"
              :class="{
                'bg-success': pet.energy === 'Low',
                'bg-warning': pet.energy === 'Medium',
                'bg-primary': pet.energy === 'High',
              }"
            >
              {{ pet.energy }}
            </span>
          </div>
        </div>

        <div class="d-flex align-items-center text-muted">
          <span>📍</span>
          <span class="ms-1">{{ pet.location }}</span>
        </div>
      </div>
    </div>

    <!-- Pet Details -->
    <div class="row mb-4">
      <div class="col-12">
        <div class="card mb-4">
          <div class="card-body">
            <h3 class="card-title">About {{ pet.name }}</h3>
            <p class="card-text">{{ pet.bio }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Good With</h4>
            <div>
              <span v-for="trait in pet.goodWith" :key="trait" class="badge bg-primary me-2 mb-2">
                {{ trait }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Health & Care</h4>
            <div class="mb-2">
              <strong>Vaccinated:</strong>
              <span class="ms-2" :class="pet.vaccinated ? 'text-success' : 'text-danger'">
                {{ pet.vaccinated ? '✓ Yes' : '✗ No' }}
              </span>
            </div>
            <div>
              <strong>{{ pet.gender === 'Male' ? 'Neutered:' : 'Spayed:' }}</strong>
              <span
                class="ms-2"
                :class="pet.neutered || pet.spayed ? 'text-success' : 'text-danger'"
              >
                {{ pet.neutered || pet.spayed ? '✓ Yes' : '✗ No' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Adoption Action -->
    <div class="card bg-primary text-white">
      <div class="card-body text-center">
        <h2 class="card-title">
          {{ pet.adopted ? 'This pet has been adopted' : `Interested in adopting ${pet.name}?` }}
        </h2>
        <p class="card-text" v-if="!pet.adopted">
          Contact our adoption team to learn more about {{ pet.name }} and start the adoption
          process.
        </p>
        <p class="card-text" v-else>
          Thank you for your interest! Check out our other available pets looking for homes.
        </p>

        <button v-if="!pet.adopted" class="btn btn-light btn-lg">
          Contact About {{ pet.name }}
        </button>
        <router-link v-else to="/pets" class="btn btn-secondary btn-lg">
          View Other Pets
        </router-link>
      </div>
    </div>
  </div>

  <!-- Pet Not Found -->
  <div v-else class="text-center py-5">
    <div class="card">
      <div class="card-body">
        <h2>Pet Not Found</h2>
        <p class="text-muted">Sorry, we couldn't find the pet you're looking for.</p>
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
/* Minimal custom styles - Bootstrap handles most layout */
.pet-detail-image {
  width: 100%;
}
</style>
