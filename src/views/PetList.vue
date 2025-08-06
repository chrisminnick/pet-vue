<template>
  <div class="pet-list-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">Find Your Perfect Companion</h1>
        <p class="hero-subtitle">
          Every pet deserves a loving home. Browse our available pets and find your new best friend
          today.
        </p>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filters">
      <div class="filter-group">
        <label for="type-filter">Pet Type:</label>
        <select id="type-filter" v-model="filters.type">
          <option value="">All Types</option>
          <option value="Dog">Dogs</option>
          <option value="Cat">Cats</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="size-filter">Size:</label>
        <select id="size-filter" v-model="filters.size">
          <option value="">All Sizes</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>

      <div class="filter-group">
        <label for="energy-filter">Energy Level:</label>
        <select id="energy-filter" v-model="filters.energy">
          <option value="">All Energy Levels</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>

      <div class="filter-group">
        <label class="checkbox-label">
          <input type="checkbox" v-model="filters.showAdopted" />
          Show adopted pets
        </label>
      </div>
    </section>

    <!-- Results Summary -->
    <section class="results-summary">
      <h2>Available Pets ({{ filteredPets.length }})</h2>
      <p v-if="filteredPets.length === 0" class="no-results">
        No pets match your current filters. Try adjusting your search criteria.
      </p>
    </section>

    <!-- Pet Grid -->
    <section class="pet-grid" v-if="filteredPets.length > 0">
      <PetCard v-for="pet in filteredPets" :key="pet.id" :pet="pet" />
    </section>
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
.pet-list-page {
  max-width: 1200px;
  margin: 0 auto;
}

.hero {
  text-align: center;
  padding: 3rem 0;
  background: linear-gradient(135deg, var(--secondary-color) 0%, var(--accent-color) 100%);
  border-radius: var(--border-radius);
  margin-bottom: 3rem;
  color: white;
}

.hero-title {
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

.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  padding: 2rem;
  background: var(--background-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  margin-bottom: 2rem;
  align-items: end;
}

.filter-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 150px;
}

.filter-group label {
  font-weight: 600;
  color: var(--text-dark);
  font-size: 0.9rem;
}

.filter-group select {
  padding: 0.75rem;
  border: 2px solid var(--border-color);
  border-radius: var(--border-radius);
  font-size: 1rem;
  transition: var(--transition);
}

.filter-group select:focus {
  outline: none;
  border-color: var(--primary-color);
  box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
}

.checkbox-label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  font-weight: 500 !important;
}

.checkbox-label input[type='checkbox'] {
  width: 18px;
  height: 18px;
  accent-color: var(--primary-color);
}

.results-summary {
  margin-bottom: 2rem;
}

.results-summary h2 {
  color: var(--text-dark);
  margin-bottom: 0.5rem;
}

.no-results {
  color: var(--text-medium);
  font-size: 1.1rem;
  text-align: center;
  padding: 3rem;
  background: var(--background-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.pet-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .filters {
    flex-direction: column;
    gap: 1rem;
  }

  .filter-group {
    min-width: 100%;
  }

  .pet-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 2rem 1rem;
  }

  .filters {
    padding: 1rem;
  }

  .pet-grid {
    grid-template-columns: 1fr;
  }
}
</style>
