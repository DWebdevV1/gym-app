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
      <input v-model="exerciseFilterByName" class="w-full h-12 xl:w-1/2" type="text"
             placeholder="Exercise by name" maxlength="75">
    </div>
  </div>
  <div>
    <h1 class="bg-slate-700 p-4 mb-4 flex justify-between text-2xl font-bold text-white">
      <span>Exercises for {{ capitalizeFirst(route.params?.workout as string) }}</span>
      <span><Icon name="guidance:weightlifting"></Icon></span>
    </h1>

    <div v-if="filteredWorkoutExercises?.length" class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <ExerciseItem v-for="(exercise, index) of filteredWorkoutExercises" :exercise="exercise" :key="index"></ExerciseItem>
    </div>
    <div v-else class="grid grid-cols-1 gap-4">
      <h3 class="w-full my-6 font-bold italic text-center">No Exercises found</h3>
    </div>
  </div>
</template>

<style scoped>

</style>