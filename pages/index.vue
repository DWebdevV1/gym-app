<script setup lang="ts">

</script>

<template>
  <div>
    <header class="mb-24 lg:mb-32 h-96">
      <img class="h-full w-full object-cover" src="https://placehold.co/2000x1280" alt="image" loading="lazy" />
    </header>

    <section v-for="(val, index) of 5" class="mb-14 lg:mb-32">
      <div class="flex flex-col-reverse gap-4 xl:gap-24 lg:items-center" :class="index % 2 === 0 ? 'xl:flex-row-reverse' : 'xl:flex-row'">
        <div>
          <h1 class="text-4xl mb-4 tracking-wide text-center xl:text-left"></h1>
          <Headline title="HEADLINE HERE"></Headline>
          <p class="text-center xl:text-left leading-relaxed tracking-wide font-light mb-2 lg:mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          <p class="text-center xl:text-left leading-relaxed tracking-wide font-light mb-2 lg:mb-6">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
        <img class="h-full w-full xl:w-1/2 object-cover" src="https://placehold.co/2000x1280" alt="image" loading="lazy" />
      </div>
    </section>

  </div>
</template>

<style scoped>

</style>