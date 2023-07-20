<script setup lang="ts">
const route = useRoute();
const { isOpen, openDialog, closeDialog } = useDialog();

const { data: activeWorkout } = await useFetch<ActiveWorkout>('/api/workout/active-workout',
    { query: { workoutId: route.params['workout'] }});
</script>

<template>
  <h1 class="text-xl font-bold mb-6">{{ activeWorkout?.name }}</h1>

  <div class="flex justify-end mb-6">
    <GymButton title="Edit Workout" @click="openDialog"
               icon="material-symbols:edit-note-sharp"
               is-primary>
    </GymButton>

    <GymDialog :is-open="isOpen" close-btn @close-dialog="closeDialog">
      <div class="grid grid-cols-1 gap-6">
        <Accordion v-for="(session, index) of activeWorkout?.sessions" :key="index" :title="session?.name" :is-open="!!session?.exercises?.length">
          <div v-if="session?.exercises?.length">{{ session?.exercises }}</div>
        </Accordion>
      </div>
    </GymDialog>
  </div>

  <pre>
    {{ activeWorkout }}
  </pre>

<!--  <div class="grid grid-cols-1 gap-6">
    <Accordion v-for="(session, index) of activeWorkout?.sessions" :key="index" :title="session?.name" :is-open="!!session?.exercises?.length">
      <div v-if="session?.exercises?.length">{{ session?.exercises }}</div>
    </Accordion>
  </div>-->
</template>

<style scoped>

</style>