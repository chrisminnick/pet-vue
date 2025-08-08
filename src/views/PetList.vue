<template>
  <div class="pet-list-page">
    <!-- Hero Section -->
    <div class="hero-section text-center py-5 mb-4 rounded">
      <h1 class="display-4 fw-bold mb-3">Find Your Perfect Companion</h1>
      <p class="lead">
        Every pet deserves a loving home. Browse our available pets and find your new best friend
        today.
      </p>
    </div>

    <!-- Filters -->
    <div class="card mb-4">
      <div class="card-body">
        <div class="row g-3">
          <div class="col-md-3">
            <label for="type-filter" class="form-label">Pet Type:</label>
            <select id="type-filter" v-model="filters.type" class="form-select">
              <option value="">All Types</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="size-filter" class="form-label">Size:</label>
            <select id="size-filter" v-model="filters.size" class="form-select">
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>

          <div class="col-md-3">
            <label for="energy-filter" class="form-label">Energy Level:</label>
            <select id="energy-filter" v-model="filters.energy" class="form-select">
              <option value="">All Energy Levels</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <div class="col-md-3 d-flex align-items-end">
            <div class="form-check">
              <input
                type="checkbox"
                v-model="filters.showAdopted"
                class="form-check-input"
                id="show-adopted"
              />
              <label class="form-check-label" for="show-adopted"> Show adopted pets </label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Results Summary -->
    <div class="d-flex justify-content-between align-items-center mb-4">
      <h2>Available Pets ({{ filteredPets.length }})</h2>
    </div>

    <!-- No Results -->
    <div v-if="filteredPets.length === 0" class="text-center py-5">
      <div class="card">
        <div class="card-body">
          <h3>No pets found</h3>
          <p class="text-muted">
            No pets match your current filters. Try adjusting your search criteria.
          </p>
        </div>
      </div>
    </div>

    <!-- Pet Grid -->
    <div v-else class="row g-4">
      <div v-for="pet in filteredPets" :key="pet.id" class="col-md-6 col-lg-4">
        <PetCard :pet="pet" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { pets as samplePets } from '../data/pets'
import PetCard from '../components/PetCard.vue'

const pets = ref(samplePets)

// Filter state
const filters = ref({
  type: '',
  size: '',
  energy: '',
  showAdopted: false,
})

// Computed filtered pets
const filteredPets = computed(() => {
  return pets.value.filter((pet) => {
    // Filter by adoption status
    if (!filters.value.showAdopted && pet.adopted) {
      return false
    }

    // Filter by type
    if (filters.value.type && pet.type !== filters.value.type) {
      return false
    }

    // Filter by size
    if (filters.value.size && pet.size !== filters.value.size) {
      return false
    }

    // Filter by energy
    if (filters.value.energy && pet.energy !== filters.value.energy) {
      return false
    }

    return true
  })
})
</script>

<style scoped>
/* Bootstrap handles most styling */
</style>
