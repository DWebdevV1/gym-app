<script setup lang="ts">
    const { data: workouts, error, refresh } = await useFetch('/api/workout');
</script>

<template>
   <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
       <ExploreCard v-for="workout of workouts" :key="workout.id" :exercise="workout"></ExploreCard>
   </div>
</template>

<style scoped>

</style>