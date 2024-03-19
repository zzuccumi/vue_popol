<template>
  <div class="section02">
    <div class="left_box">
      <h3>Kyubin</h3>
      <div class="cover">
        <ul>
          <li><a @click="scrollToSection('section1')">Let me introduce my self</a></li>
          <li><a @click="scrollToSection('section2')">I'll tell you my information</a></li>
          <li><a @click="scrollToSection('section3')">the technician</a></li>
          <li><a @click="scrollToSection('section4')">In to the hobbies</a></li>
        </ul>
      </div>
      <div class="album">
        <span></span>
      </div>
    </div>

    <div class="right_box">
      <div id="containerPlay" ref="containerPlay" class="container_play">
        <div id="section1" ref="section1" class="section">Section 1</div>
        <div id="section2" ref="section2" class="section">Section 2</div>
        <div id="section3" ref="section3" class="section">Section 3</div>
        <div id="section4" ref="section4" class="section">Section 4</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'SectionAboutMe',
  components: {},
  methods: {
    scrollToSection(sectionId) {
      const containerPlay = this.$refs.containerPlay;
      const section = this.$refs[sectionId];
      if (containerPlay && section) {
        const sectionTop = section.offsetTop;
        containerPlay.scrollTo({
          top: sectionTop,
          behavior: 'smooth'
        });

        // 선택한 섹션에 맞게 배경 이미지 변경
        if (sectionId === 'section1') {
          containerPlay.style.backgroundImage = "url('image1.jpg')";
        } else if (sectionId === 'section2') {
          containerPlay.style.backgroundImage = "url('image2.jpg')";
        } else if (sectionId === 'section3') {
          containerPlay.style.backgroundImage = "url('image3.jpg')";
        }
      }
    }
  }
};
</script>

<style scoped>
div.home {}
</style>
