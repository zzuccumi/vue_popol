<template>
  <div class="home">
    <AboutMe></AboutMe>
    <Section01></Section01>
  </div>
</template>

<script>
import Section01 from '@/components/main/Section01';
import AboutMe from '@/components/main/AboutMe';
export default {
  name: 'AppLayoutHome',
  components: { Section01, AboutMe }
};
</script>