<script setup lang="ts">
const route = useRoute();
const exerciseFilterByName = ref('');

const { data: exercises } = await useFetch('/api/exercises', {
  query: {
    explore: route.params?.type
  }
});

const title = computed(
    () => `Exercises for ${capitalizeFirst(route.params?.type as string)} (${filteredWorkoutExercises.value?.length})`);

const filteredWorkoutExercises = computed(() => exerciseFilterByName.value ?
    exercises.value?.filter((ex) =>
        (ex as Exercise).name.toLowerCase().includes(exerciseFilterByName.value.toLowerCase())) :
    exercises.value);
</script>

<template>
  <Headline title="Explore Exercises"></Headline>

  <div class="mb-4">
    <div class="w-full p-4">
      <h2 class="mb-4 text-2xl font-bold">Search Exercise by Name</h2>
      <input v-model="exerciseFilterByName" class="w-full h-12 text-black font-bold" type="text"
             placeholder="Exercise by name" maxlength="75">
    </div>
  </div>

  <Headline :title="title" icon="guidance:weightlifting"></Headline>

  <div v-if="filteredWorkoutExercises?.length" class="grid grid-cols-1 lg:grid-cols-2 gap-4">
    <ExerciseItem v-for="(exercise, index) of filteredWorkoutExercises"
                  :exercise="exercise"
                  :key="index">
    </ExerciseItem>
  </div>
  <div v-else class="grid grid-cols-1 gap-4">
    <h3 class="w-full my-6 font-bold italic text-center">No Exercises found</h3>
  </div>
</template>

<style scoped>

</style>