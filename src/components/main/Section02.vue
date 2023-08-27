<template>
  <div class="section02">
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
