<template>
  <div
    class="card pet-card h-100"
    @click="$router.push({ name: 'PetDetail', params: { id: pet.id } })"
  >
    <div class="position-relative">
      <img :src="pet.image" :alt="pet.name" class="card-img-top pet-image" />

      <!-- Adopted Overlay -->
      <div v-if="pet.adopted" class="adopted-overlay">
        <div class="text-center">
          <div class="fs-2 text-success">✓</div>
          <div class="fw-bold">ADOPTED</div>
        </div>
      </div>

      <!-- Energy Badge -->
      <span
        class="badge position-absolute top-0 end-0 m-2 energy-badge"
        :class="{
          'bg-success': pet.energy === 'Low',
          'bg-warning': pet.energy === 'Medium',
          'bg-primary': pet.energy === 'High',
        }"
      >
        {{ pet.energy }} Energy
      </span>
    </div>

    <div class="card-body d-flex flex-column">
      <div class="d-flex justify-content-between align-items-center mb-2">
        <h5 class="card-title mb-0">{{ pet.name }}</h5>
        <span class="badge bg-secondary">{{ pet.age }} {{ pet.age === 1 ? 'yr' : 'yrs' }}</span>
      </div>

      <p class="card-text text-muted mb-2">{{ pet.breed }} • {{ pet.gender }}</p>
      <p class="card-text small mb-3">{{ pet.size }} {{ pet.type }}</p>

      <div class="mb-3">
        <span
          v-for="trait in pet.goodWith.slice(0, 2)"
          :key="trait"
          class="badge bg-light text-dark me-1 mb-1"
        >
          Good with {{ trait }}
        </span>
      </div>

      <div class="mt-auto">
        <div class="d-flex align-items-center text-muted small mb-2">
          <span>📍</span>
          <span class="ms-1">{{ pet.location }}</span>
        </div>

        <button
          class="btn btn-primary w-100"
          :class="{ 'btn-secondary': pet.adopted }"
          :disabled="pet.adopted"
        >
          {{ pet.adopted ? 'Already Adopted' : 'Learn More' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  pet: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
/* Bootstrap handles most styling, minimal custom CSS needed */
.pet-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.pet-card:hover {
  transform: translateY(-2px);
}

.pet-card.adopted {
  opacity: 0.7;
}

.pet-image {
  height: 200px;
  object-fit: cover;
}

.adopted-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}

.energy-badge {
  font-size: 0.75rem;
}
</style>
