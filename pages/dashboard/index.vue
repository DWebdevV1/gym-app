<script setup lang="ts">
const { data: workoutsAmount } = await useFetch('/api/workout/workouts-amount');
const { data: exercisesAmount } = await useFetch('/api/exercise/exercises-amount');

const onCardClick = () => {
  navigateTo('/explore');
}
</script>

<template>
  <Headline title="Dashboard" icon="material-symbols:dashboard"></Headline>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <div class="bg-zinc-700 text-white flex justify-center items-center p-6 h-96 shadow-sm hover:cursor-pointer hover:opacity-70 hover:border-l-2 hover:border-slate-700"
           @click="onCardClick">
        <h2 class="text-4xl font-bold text-center">{{ workoutsAmount }} Workouts</h2>
      </div>
      <div class="bg-zinc-700 text-white flex justify-center items-center p-6 h-96 shadow-sm hover:cursor-pointer hover:opacity-70 hover:border-l-2 hover:border-slate-700"
           @click="onCardClick">
        <h2 class="text-4xl font-bold text-center">{{ exercisesAmount }} Exercises</h2>
      </div>
    </div>
</template>

<style scoped>

</style>