<script setup lang="ts">
const { data: activeWorkout } = await useFetch('/api/workout/active-workout');
const { data: activeWorkouts } = await useFetch('/api/workout/active-workouts');
const { data: lastVisitedExercises } = await useFetch('/api/exercise/last-visited-exercises');

const navigateToWorkout = (workout: ActiveWorkout) => {
  if (workout.id) {
    navigateTo(`/workouts/${workout.id}`);
  }
}

const navigateToExercise = (ex: LastVisitedExercise) => {
  const path = (`/explore/${ex.type}/${ex.id}`).toLowerCase();
  navigateTo(path);
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
    <div>
      <Headline title="My active Workout" icon="material-symbols:notifications-active"></Headline>
      <div class="bg-zinc-700 mb-6 p-6 flex justify-between font-bold hover:cursor-pointer hover:opacity-50"
           @click="navigateToWorkout(activeWorkout as ActiveWorkout)">
        <span>{{ activeWorkout?.name }}</span>
        <Icon name="material-symbols:arrow-circle-right"></Icon>
      </div>
    </div>
    <div>
      <Headline title="My Workout List" icon="material-symbols:format-list-bulleted"></Headline>
      <div v-for="workout of activeWorkouts" class="bg-zinc-700 mb-6 p-6 flex justify-between font-bold hover:cursor-pointer hover:opacity-50"
           @click="navigateToWorkout(workout as ActiveWorkout)">
        <span>{{ workout?.name }}</span>
        <Icon name="material-symbols:arrow-circle-right"></Icon>
      </div>
    </div>
  </div>

  <div>
    <Headline title="Last visited Exercises" icon="ic:baseline-remove-red-eye"></Headline>
    <div v-for="ex of (lastVisitedExercises as LastVisitedExercise[])"
         @click="navigateToExercise(ex)"
         class="bg-zinc-700 mb-6 hover:cursor-pointer hover:opacity-50">
      <div class="flex items-center">
        <img class="h-32" :src="ex?.image" alt="exercise" />
        <div class="p-6 flex flex-col gap-1 sm:gap-0 sm:flex-row items-end sm:justify-between w-full">
          <p>
            <span class="text-yellow-500 italic">{{ ex?.type }}</span>
            <br />
            <span class="font-bold">{{ ex?.name }}</span>
          </p>
          <span>{{ ex?.visitedOn }}</span>
          <Icon name="material-symbols:arrow-circle-right"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>