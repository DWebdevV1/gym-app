<script setup lang="ts">
const currentExercise = ref<Exercise>();

onMounted( async () => {
  const { getOwnState } = useOwnState();
  currentExercise.value = getOwnState();

  if (!currentExercise.value) {
    navigateTo('/explore');
  }

  await $fetch('/api/last-visited-exercises', {
    method: 'post',
    body: {
      id: currentExercise.value?.id,
      name: currentExercise.value?.name,
      visitedOn: new Date().toLocaleString(),
      type: currentExercise.value?.type,
      image: currentExercise.value?.image
    }
  });
})
</script>

<template>
  <div>
    <div class="bg-zinc-700 mb-6 grid grid-cols-1 md:grid-cols-2">
      <div>
        <img class="w-full" :src="currentExercise?.image" :alt="currentExercise?.name" />
      </div>
      <div class="p-6">
        <p class="mb-2 italic text-right text-yellow-500">{{ currentExercise?.type }}</p>
        <h1 class="text-3xl font-bold md:mb-6">{{ currentExercise?.name }}</h1>
        <p>{{ currentExercise?.description }}</p>
      </div>
    </div>

    <Accordion title="Exercise Images" :is-open="true" root-classes="mb-6">
      <div class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4">
        <img v-for="img of currentExercise?.images" :src="img" :alt="currentExercise.name" loading="lazy"
             class="w-full shadow-sm hover:opacity-50 hover:cursor-pointer hover:border-l-2 hover:border-slate-700" />
      </div>
    </Accordion>

    <Accordion title="Exercise Videos" :is-open="false">
      <div class="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-5 gap-4">
        <img v-for="img of currentExercise?.images" :src="img" :alt="currentExercise.name" loading="lazy"
             class="w-full shadow-sm hover:opacity-50 hover:cursor-pointer hover:border-l-2 hover:border-slate-700" />
      </div>
    </Accordion>
  </div>

</template>

<style scoped>

</style>