<script setup lang="ts">
const route = useRoute();
const { data: activeWorkout } = await useFetch<ActiveWorkout>('/api/workout/active-workout',
    { query: { workoutId: route.params['workout'] }});
</script>

<template>
  <h1 class="text-xl font-bold mb-6">{{ activeWorkout?.name }}</h1>

  <div class="grid grid-cols-1 gap-6">
    <Accordion v-for="(session, index) of activeWorkout?.sessions" :key="index" :title="session?.name" :is-open="!!session?.exercises?.length">
      <div v-if="session?.exercises?.length">{{ session?.exercises }}</div>
    </Accordion>
  </div>
</template>

<style scoped>

</style>