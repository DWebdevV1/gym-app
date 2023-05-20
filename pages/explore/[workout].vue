<script setup lang="ts">
const route = useRoute();
const exerciseFilterByName = ref('');

const { data: workouts, error } = await useFetch('/api/exercises', {
  query: {
    explore: route.params?.workout
  }
});

const filteredWorkoutExercises = computed(() => exerciseFilterByName.value ?
    (workouts.value as Workout).exercises.filter((ex) =>
        (ex as Exercise).name.toLowerCase().includes(exerciseFilterByName.value.toLowerCase()))
    : (workouts.value as Workout).exercises);
</script>

<template>
  <div class="my-6">
    <div class="w-full">
      <h1 class="text-2xl font-bold mb-3">Search Exercise by Name</h1>
      <input v-model="exerciseFilterByName" class="w-full h-12 shadow-sm focus:outline-none" type="text" placeholder="Exercise by name">
    </div>
  </div>
  <div>
    <h1 class="mb-6 text-3xl font-bold">Exercises for {{ capitalizeFirst(route.params?.workout as string) }}</h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <template v-if="filteredWorkoutExercises.length">
        <ExerciseItem v-for="(exercise, index) of filteredWorkoutExercises" :exercise="exercise" :key="index"></ExerciseItem>
      </template>
      <template v-else>
        <h3 class="font-bold italic text-center my-6">No Exercises found</h3>
      </template>
    </div>
  </div>

</template>

<style scoped>

</style>