<template>
  <header :class="{ 'show_header': showHeader }">
    <div class="topMenu">
      <h1><a href="index.html"><img src="@/assets/images/Asset 1.svg" alt="규빈 포트폴리오"></a></h1>
      <ul>
        <li onclick="location.href='index.html'">home</li>
        <li onclick="location.href='index.html#web'">Web</li>
        <li onclick="location.href='index.html#logos'">Logos</li>
        <li onclick="location.href='index.html#popup'">Popup</li>
        <li>About Me</li>
      </ul>
    </div>

    <!-- <router-link to="/home">Home</router-link> |
    <router-link to="/sample">sample</router-link> |
    <router-link to="/404">404 Error Page</router-link> -->
  </header>
</template>

<script>
export default {
  name: 'AppLayoutLinks',
  data: () => ({
    // snb_open: false,
    showHeader: false,
  }),
  mounted() {
    // Add an event listener to the window scroll event
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    // Clean up the event listener when the component is destroyed
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      // Check the scroll position of the window
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

      // Determine whether to show or hide the header based on the scroll position
      this.showHeader = scrollPosition > 300;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  padding: 14px 83px;
  display: block;
  position: fixed;
  top: 4px;
  left: 0;
  width: 100%;
  z-index: 100;

  .topMenu {
    display: grid;
    grid-template-columns: 160px auto;
    align-items: center;

    h1 {
      margin-bottom: 0;

      img {
        width: auto;
        height: 50px;
      }
    }

    ul {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0;

      li {
        float: left;
        color: #635baf;
        padding: 0 20px;
        cursor: pointer;
        font-size: 18px;
        font-weight: 500;
      }
    }
  }
}
</style>
