<template>
  <div class="col-md-6 col-lg-4">
    <div
      class="card h-100"
      @click="handleCardClick"
    >
        <img
          :src="pet.image"
          :alt="pet.name"
          class="card-img-top"
          style="height: 200px; object-fit: cover"
        />
        <div v-if="pet.adopted" class="adoption-overlay">
          <div class="adoption-message">
            <h6 class="fw-bold mb-1">ADOPTED!</h6>
            <small>Found their forever home</small>
          </div>
        </div>
        <span
          class="badge position-absolute top-0 end-0 m-2"
          :class="getEnergyBadgeClass(pet.energy)"
        >
          {{ pet.energy }}
        </span>
        <div class="card-body">
          <h5 class="card-title">{{ pet.name }}</h5>
          <p class="card-text">{{ pet.breed }} • {{ pet.gender }}</p>
          <p class="card-text">{{ pet.size }} {{ pet.type }}</p>
          <div v-if="showHealthStatus(pet)" class="mb-2">
            <small class="text-muted d-block mb-1">Health Status:</small>
            <div class="d-flex gap-1 flex-wrap">
              <span
                v-if="pet.vaccinated"
                class="badge bg-success"
                title="Vaccinated"
              >
                Vaccinated
              </span>
              <span
                v-if="pet.spayed || pet.neutered"
                class="badge bg-info"
                :title="pet.spayed ? 'Spayed' : 'Neutered'"
              >
                {{ pet.spayed ? 'Spayed' : 'Neutered' }}
              </span>
            </div>
          </div>
      </div>
      </div>
      </div>
</template>

<script setup>
const emit = defineEmits(['pet-clicked']);
const handleCardClick = () => {
  emit('pet-clicked', props.pet);
};
const props = defineProps({
  pet: {
    type: Object,
    required: true,
  },
});
// Energy badge method
const getEnergyBadgeClass = (energy) => {
  const classes = {
    'High': 'bg-danger',
    'Medium': 'bg-warning text-dark',
    'Low': 'bg-success'
  };
  return classes[energy] || 'bg-secondary';
};

// Health status method
const showHealthStatus = (pet) => {
  return pet.vaccinated || pet.spayed || pet.neutered;
};

</script>
<style scoped>
/* Adoption Overlay */
.adoption-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(40, 167, 69, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  border-radius: 0.375rem 0.375rem 0 0;
}
</style scoped>
