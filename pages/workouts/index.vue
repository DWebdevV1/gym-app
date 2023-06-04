<script setup lang="ts">
//TODO call last visited exercises endpoint
//TODO call active workout endpoint
//TODO call workout list endpoint

const navigateToWorkout = () => {
  //TODO navigate to workout
  navigateTo('/dashboard');
}

const navigateToExercise = () => {
  //TODO navigate to exercise
  navigateTo('/explore');
}
</script>

<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-4">
    <div>
      <Headline title="My active Workout" icon="material-symbols:notifications-active"></Headline>
      <div class="bg-slate-50 mb-6 p-6 flex justify-between font-bold hover:cursor-pointer hover:opacity-50"
           @click="navigateToWorkout">
        <span>My active Workout Name</span>
        <Icon name="material-symbols:arrow-circle-right"></Icon>
      </div>
    </div>
    <div>
      <Headline title="My Workout List" icon="material-symbols:format-list-bulleted"></Headline>
      <div v-for="() of 5" class="bg-slate-50 mb-6 p-6 flex justify-between font-bold hover:cursor-pointer hover:opacity-50"
           @click="navigateToWorkout">
        <span>My Workout Name</span>
        <Icon name="material-symbols:arrow-circle-right"></Icon>
      </div>
    </div>
  </div>

  <div>
    <Headline title="Last visited Exercises" icon="ic:baseline-remove-red-eye"></Headline>
    <div v-for="() of 5" class="bg-slate-50 mb-6 font-bold hover:cursor-pointer hover:opacity-50"
         @click="navigateToExercise">
      <div class="flex items-center">
        <img class="h-32" src="https://placehold.co/400x400" alt="exercise" />
        <div class="p-6 flex flex-col sm:flex-row items-end sm:justify-between w-full">
          <span>My Workout Name</span>
          <span>04/06/2023</span>
          <Icon name="material-symbols:arrow-circle-right"></Icon>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>