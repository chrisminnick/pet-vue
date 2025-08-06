<template>
  <div
    class="pet-card"
    @click="$router.push({ name: 'PetDetail', params: { id: pet.id } })"
    :class="{ adopted: pet.adopted }"
  >
    <div class="card-image">
      <img :src="pet.image" :alt="pet.name" />
      <div v-if="pet.adopted" class="adopted-overlay">
        <span class="adopted-badge">✓ ADOPTED</span>
      </div>
      <div class="energy-badge" :class="`energy-${pet.energy.toLowerCase()}`">
        {{ pet.energy }} Energy
      </div>
    </div>

    <div class="card-content">
      <div class="pet-header">
        <h3 class="pet-name">{{ pet.name }}</h3>
        <span class="pet-age">{{ pet.age }} {{ pet.age === 1 ? 'yr' : 'yrs' }}</span>
      </div>

      <div class="pet-info">
        <p class="pet-breed">{{ pet.breed }} • {{ pet.gender }}</p>
        <p class="pet-size">{{ pet.size }} {{ pet.type }}</p>
      </div>

      <div class="pet-tags">
        <span class="tag" v-for="trait in pet.goodWith.slice(0, 2)" :key="trait">
          Good with {{ trait }}
        </span>
      </div>

      <div class="pet-location">
        <span class="location-icon">📍</span>
        {{ pet.location }}
      </div>
    </div>

    <div class="card-footer">
      <button class="btn btn-primary" :disabled="pet.adopted">
        {{ pet.adopted ? 'Already Adopted' : 'Learn More' }}
      </button>
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
.pet-card {
  background: var(--background-white);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  flex-direction: column;
  height: 100%;
}

.pet-card:hover:not(.adopted) {
  box-shadow: var(--shadow-hover);
  transform: translateY(-4px);
}

.pet-card.adopted {
  opacity: 0.7;
  cursor: default;
}

.card-image {
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition);
}

.pet-card:hover:not(.adopted) .card-image img {
  transform: scale(1.05);
}

.adopted-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
}

.adopted-badge {
  background: var(--success-color);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius);
  font-weight: 700;
  font-size: 0.9rem;
}

.energy-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
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

.card-content {
  padding: 1.25rem;
  flex-grow: 1;
}

.pet-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}

.pet-name {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-dark);
  margin: 0;
}

.pet-age {
  background: var(--secondary-color);
  color: white;
  padding: 0.25rem 0.5rem;
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
}

.pet-info {
  margin-bottom: 1rem;
}

.pet-breed,
.pet-size {
  margin: 0 0 0.25rem 0;
  font-size: 0.9rem;
  color: var(--text-medium);
}

.pet-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tag {
  background: var(--background-light);
  color: var(--text-medium);
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.7rem;
  font-weight: 500;
}

.pet-location {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.8rem;
  color: var(--text-light);
}

.location-icon {
  font-size: 0.7rem;
}

.card-footer {
  padding: 0 1.25rem 1.25rem;
}

.btn {
  width: 100%;
  border: none;
  cursor: pointer;
}

.btn:disabled {
  background-color: var(--text-light);
  cursor: not-allowed;
  transform: none;
}

.btn:disabled:hover {
  transform: none;
  box-shadow: var(--shadow-light);
}
</style>
