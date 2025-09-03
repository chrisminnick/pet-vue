<template>
  <div class="container-lg">
    <!-- Pet not found -->
    <div v-if="!pet" class="text-center py-5">
      <h2 class="text-muted">Pet Not Found</h2>
      <p class="text-muted">The pet you're looking for doesn't exist.</p>
      <router-link to="/" class="btn btn-primary">
        ← Back to Pet List
      </router-link>
    </div>

    <!-- Pet details -->
    <div v-else>
      <!-- Pet Image and Basic Info -->
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="position-relative">
            <img
              :src="pet.image"
              :alt="pet.name"
              class="img-fluid rounded pet-detail-image"
            />
            <div v-if="pet.adopted" class="adoption-status-banner">
              <span class="badge bg-success p-2">ADOPTED!</span>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <h1 class="mb-3" :class="{ 'text-muted': pet.adopted }">
            {{ pet.name }}
          </h1>

          <p class="fs-5 mb-3">{{ pet.breed }} {{ pet.type }}</p>

          <p>
            <strong>Age:</strong> {{ pet.age }}
            {{ pet.age === 1 ? 'year' : 'years' }} old
          </p>
          <p><strong>Gender:</strong> {{ pet.gender }}</p>
          <p><strong>Size:</strong> {{ pet.size }}</p>
          <p>
            <strong>Energy:</strong>
            <span :class="getEnergyBadgeClass(pet.energy)" class="badge ms-1">
              {{ pet.energy }}
            </span>
          </p>
          <p><strong>Location:</strong> {{ pet.location }}</p>
        </div>
      </div>

      <!-- About Section -->
      <div class="card mb-4">
        <div class="card-body">
          <h3>About {{ pet.name }}</h3>
          <p class="lead">{{ pet.bio }}</p>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="row">
        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-body">
              <h4>Good With</h4>
              <div v-if="pet.goodWith && pet.goodWith.length > 0">
                <span
                  v-for="item in pet.goodWith"
                  :key="item"
                  class="badge bg-info me-2 mb-1"
                >
                  {{ item.charAt(0).toUpperCase() + item.slice(1) }}
                </span>
              </div>
              <p v-else class="text-muted">No information available</p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card mb-4">
            <div class="card-body">
              <h4>Health Information</h4>
              <p>
                <strong>Vaccinated:</strong>
                <span :class="pet.vaccinated ? 'text-success' : 'text-danger'">
                  {{ pet.vaccinated ? 'Yes' : 'No' }}
                </span>
              </p>
              <p>
                <strong
                  >{{
                    pet.gender === 'Female' ? 'Spayed' : 'Neutered'
                  }}:</strong
                >
                <span
                  :class="
                    pet.spayed || pet.neutered ? 'text-success' : 'text-danger'
                  "
                >
                  {{ pet.spayed || pet.neutered ? 'Yes' : 'No' }}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { pets as samplePets } from '../data/pets';

// Get route instance
const route = useRoute();

// Get pet directly from route parameter
const pet = computed(() => {
  const petId = parseInt(route.params.id);
  return samplePets.find((p) => p.id === petId);
});

// Simple utility method
const getEnergyBadgeClass = (energy) => {
  const classes = {
    High: 'bg-danger',
    Medium: 'bg-warning text-dark',
    Low: 'bg-success',
  };
  return classes[energy] || 'bg-secondary';
};
</script>

<style scoped>
.adoption-status-banner {
  position: absolute;
  top: 1rem;
  right: 1rem;
}
</style>
