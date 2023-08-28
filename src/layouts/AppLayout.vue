<template>
  <!--  <AppHeader></AppHeader>-->
  <main>
    <div class="wrapper snb_open">
      <Header></Header>
      <div class="container">
        <component :is="layout">
          <slot />
        </component>
      </div>
      <footer>
        <div>
          <p>Copyright ⓒ Kyubin Kim, All rights reserved.</p>
        </div>
      </footer>
    </div>
  </main>
</template>

<script>
const defaultLayout = 'AppLayoutDefault';

export default {
  name: 'AppLayout',
  components: {
    // AppHeader,
    // AppLayoutLinks,
  },
  data: () => ({
    // snb_open: false,
  }),
  computed: {
    layout() {
      const layout = this.$route.meta.layout || 'AppLayoutDefault';
      return () => import(`@/layouts/${layout}.vue`);
    },
    dashboardContentClass() {
      if (this.$route.name === 'AppLayoutDefault') {
        return 'content_dashboard';
      }
      return null;
    },
  },
};
</script>

<style lang="scss" scoped>
footer {
  height: 78px;
  display: flex;
  position: absolute;
  border: 0;
  background: #fff;
  bottom: 0;
  align-items: center;
  justify-content: flex-end;

  div {
    width: calc(100% - 265px);
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
  }

  p {
    margin-bottom: 0;
  }
}

.wrapper.snb_open {
  footer {
    div {
      width: 100%;
      transition-duration: 0.2s;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-property: transform, visibility, width;
    }
  }
}

.snb_wrapper {
  position: relative;
}

.snb_btn {
  position: absolute;
  top: 36px;
  right: -13px;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: $blue01;
  outline: 7px solid #f5f5f9;
  box-shadow: 0 1px 9px 5px rgba(0, 0, 0, 0.16);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus:not(:focus-visible) {
    outline: 7px solid #f5f5f9 !important;
  }
}
</style>
