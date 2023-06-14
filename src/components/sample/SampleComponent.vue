<template>
  <div class="info">
    <div>
    <label for="no">no : </label>
    <input type="text" v-focus v-model="no" name="" value="" id="no">
    </div>
    <div>
    <label for="title">title : </label>
    <input type="text" v-model="title" name="" value="" id="title">
    </div>
    <div>
    <label for="contents">contents : </label>
    <input type="text" v-model="contents" name="" value="" id="contents">
    </div>
    <div>
    <label for="createId">createId : </label>
    <input type="text" v-model="createId" name="" value="" id="createId">
    </div>
    <div>
    <label for="createDt">createDt : </label>
    <input type="text" v-model="createDt" name="" value="" id="createDt">
    </div>
    <div>
    <label for="updateId">updateId : </label>
    <input type="text" v-model="updateId" name="" value="" id="updateId">
    </div>
    <div>
    <label for="updateDt">updateDt : </label>
    <input type="text" v-model="updateDt" name="" value="" id="updateDt">
    </div>
  </div>
</template>

<script>
import {
  getSampleApi,
  getTestSampleApi,
} from '@/services/api';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'SampleComponent',
  data() {
    return {
      no : '',
      title : '',
      contents : '',
      createId : '',
      createDt : '',
      updateId : '',
      updateDt : ''
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let data = {};
      if (this.$store.state.storedSample.no) {
        data = this.$store.state.storedSample;
        this.setSampleData(data);
      }
      else {
        data = getTestSampleApi(1).resultData;
        this.setSampleData(data);
        let _this = this;
        getSampleApi(1)
          .then((response) => {
            data = response.data.resultData;
            _this.setSampleData(data);
          })
          .catch((error) => {
            console.log(error);
          });
        this.setStoredSampleData(data);
      }
    },
    setSampleData(data) {
      this.no = data.no;
      this.title = data.title;
      this.contents = data.contents;
      this.createId = data.createId;
      this.createDt = data.createDt;
      this.updateId = data.updateId;
      this.updateDt = data.updateDt;
    },
    ...mapMutations({
      setStoredSampleData: 'setStoredSampleData',
    }),
  },
  computed: {
    ...mapState([
      'storedSample'
    ])
  }
};
</script>

<style scoped>
div.info {
  display: block;
}
</style>
