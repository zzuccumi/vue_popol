<template>
  <header>
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
};
</script>

<style lang="scss" scoped>
header {
  padding: 20px 83px;
  background: #fff;
  display: block;
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
