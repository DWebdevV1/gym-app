<script setup lang="ts">
const props = defineProps<{ exercise: Workout }>();

const loadExploreExercise = () => {
  const workout = props.exercise?.name?.toLowerCase();
  navigateTo(`/explore/${workout}`);
}

const amountOfExercise = computed(() => props.exercise.exercises?.length || 0);
</script>

<template>
  <div class="bg-zinc-700 p-6 h-56 shadow-sm hover:cursor-pointer hover:opacity-70 hover:border-l-2 hover:border-slate-700" @click="loadExploreExercise">
    <h2 class="text-3xl font-bold">{{ props.exercise?.name }}</h2>
    <p class="mt-1">{{ amountOfExercise }} Exercises</p>
  </div>
</template>

<style scoped>

</style>