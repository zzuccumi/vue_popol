<template>
  <div>
    <!-- 로그인 실패 -->
    <div class="modeal_cont">
      <b-button id="show-btn" @click="showModal">Open Modal</b-button>
      <!-- <b-button id="toggle-btn" @click="toggleModal">Toggle Modal</b-button> -->

      <b-modal ref="my-modal" hide-footer title="Using Component Methods">
        <div class="d-block text-center">
          <h3>Hello From My Modal!</h3>
        </div>
        <b-button class="mt-3" variant="outline-danger" block @click="hideModal"
          >Close Me</b-button
        >
        <b-button
          class="mt-2"
          variant="outline-warning"
          block
          @click="toggleModal"
          >Toggle Me</b-button
        >
      </b-modal>
    </div>

    <!-- pagination -->
  </div>
</template>

<script>
export default {
  name: "Popups",
  methods: {
    showModal() {
      this.$refs["my-modal"].show();
    },
    hideModal() {
      this.$refs["my-modal"].hide();
    },
  },
  components: {
    SimpleAlertModal: () => import("@/components/common/SimpleAlertModal"),
  },
};
</script>
<style lang="scss" scoped>
</style>
