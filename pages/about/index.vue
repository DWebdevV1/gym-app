<script setup lang="ts">

</script>

<template>
  <div>
    <Headline title="About Page - FAQ"
              icon="streamline:interface-help-question-circle-circle-faq-frame-help-info-mark-more-query-question"
              root-classes="mb-6">
    </Headline>

    <Accordion v-for="(index) of 10" :title="index + ' - FAQ QUESTION TEXT HERE'" :is-open="index === 1" root-classes="mb-6">
      <p class="text-center xl:text-left leading-relaxed tracking-wide font-light mb-2 lg:mb-6">Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      <p class="text-center xl:text-left leading-relaxed tracking-wide font-light">Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
        labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
        consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
        no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    </Accordion>
  </div>
</template>

<style scoped>

</style>