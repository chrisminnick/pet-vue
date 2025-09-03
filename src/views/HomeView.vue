<template>
  <div class="pet-list-page">
    <!-- Hero Section -->
    <div class="hero-section text-center py-5 mb-4 rounded">
      <h1 class="display-4 fw-bold mb-3">Find Your Perfect Companion</h1>
      <p class="lead">
        Every pet deserves a loving home. Browse our available pets and find
        your new best friend today.
      </p>
    </div>

    <!-- Filter Controls -->
    <div class="card mb-4">
      <div class="card-body">
        <h5 class="card-title mb-3">Filter Pets</h5>
        <div class="row g-3">
          <!-- Pet Type Filter -->
          <div class="col-md-2">
            <label for="typeFilter" class="form-label">Pet Type</label>
            <select id="typeFilter" v-model="selectedType" class="form-select">
              <option value="">All Types</option>
              <option value="Dog">Dogs</option>
              <option value="Cat">Cats</option>
            </select>
          </div>
          <!-- Size Filter -->
          <div class="col-md-2">
            <label for="sizeFilter" class="form-label">Size</label>
            <select id="sizeFilter" v-model="selectedSize" class="form-select">
              <option value="">All Sizes</option>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
            </select>
          </div>
          <!-- Show Adopted Toggle -->
          <div class="col-md-2">
            <label class="form-label d-block">Options</label>
            <div class="form-check">
              <input
                id="showAdopted"
                v-model="showAdopted"
                class="form-check-input"
                type="checkbox"
              />
              <label class="form-check-label" for="showAdopted">
                Show adopted pets
              </label>
            </div>
          </div>
        </div>
        <!-- Filter Summary -->
        <div class="mt-3">
          <small class="text-muted">
            Showing {{ filteredPets.length }} of {{ pets.length }} pets
            <span v-if="hasActiveFilters" class="ms-2">
              <button
                @click="clearFilters"
                class="btn btn-sm btn-outline-secondary"
              >
                Clear Filters
              </button>
            </span>
          </small>
        </div>
      </div>
      <!-- Pet Grid - Now using PetCard components -->
      <div v-if="filteredPets.length > 0" class="row g-4">
        <PetCard
          v-for="pet in filteredPets"
          :key="pet.id"
          :pet="pet"
          @pet-clicked="handlePetClicked"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { pets as samplePets } from '../data/pets';
import PetCard from '../components/PetCard.vue';

const router = useRouter();

// Reactive data
const pets = ref(samplePets);
// Reactive filter state
const selectedType = ref('');
const selectedSize = ref('');
const showAdopted = ref(false);

// Computed property for filtered pets
const filteredPets = computed(() => {
  return pets.value.filter((pet) => {
    // Type filter
    const matchesType =
      selectedType.value === '' || pet.type === selectedType.value;

    // Size filter
    const matchesSize =
      selectedSize.value === '' || pet.size === selectedSize.value;

    // Adoption status filter
    const matchesAdoption = showAdopted.value || !pet.adopted;

    return matchesType && matchesSize && matchesAdoption;
  });
});

// Check if any filters are active
const hasActiveFilters = computed(() => {
  return (
    selectedType.value !== '' || selectedSize.value !== '' || showAdopted.value
  );
});

const clearFilters = () => {
  selectedType.value = '';
  selectedSize.value = '';
  showAdopted.value = false;
};
const handlePetClicked = (pet) => {
  router.push({
    name: 'pet-detail',
    params: { id: pet.id.toString() },
  });
};
</script>
