<template>
  <div class="section01">

    <v-carousel class="slide">
      <v-carousel-item v-for="item in items" :key="item.title" v-model="item.active">
        <v-list-item>
          <v-list-item-content class="flex dir_row web">

            <div class="left_box" :class="item.className">
              <h4>{{ item.subtitle }}</h4>
              <h3>{{ item.title }}</h3>
              <h5>{{ item.technical }}</h5>
              <div class="line line100">
                <div></div>
              </div>
              <p><a :href="item.prjUrl" target="_blank">go to Site</a>
              </p>

              <p><a :href="item.prjGit" target="_blank">go to Github</a></p>

            </div>

            <div class="right_box" :class="item.className">
            </div>
          </v-list-item-content>
        </v-list-item>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script>
export default {
  name: 'AppLayoutHome',
  components: {},
  data: () => ({
    group: null,
    groups: [
      {
        title: 'Admin',
      },
    ],
    items: [
      {
        // items: [{ title: 'List Item' }],
        title: '국가계약정보시스템',
        technical: 'publishing 100% / react / typescript / scss / responsive',
        progress: 45,
        subtitle: '2023',
        className: 'prj01',
        prjUrl: 'https://awesomebin.netlify.app/html/sub15.html',
        prjGit: 'https://awesomebin.netlify.app/html/sub15.html'
      },
      {
        // items: [{ title: 'List Item' }],
        title: 'Samsung Data Driven Ops',
        technical: 'publishing 100% / vue / scss / responsive',
        progress: 100,
        subtitle: '2023',
        className: 'prj02',
        prjUrl: 'https://awesomebin.netlify.app/html/sub15.html',
        prjGit: 'https://awesomebin.netlify.app/html/sub15.html'
      },
    ]
  }),
};
</script>

<style scoped>
div.home {}
</style>
