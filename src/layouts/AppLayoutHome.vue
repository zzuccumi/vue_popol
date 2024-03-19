<template>
  <div class="home">
    <Section02></Section02>
    <Section01></Section01>
  </div>
</template>

<script>
import Section01 from '@/components/main/Section01';
import Section02 from '@/components/main/Section02';
import AboutMe from '@/components/main/AboutMe';
export default {
  name: 'AppLayoutHome',
  components: { Section01, Section02, AboutMe }
};
</script>