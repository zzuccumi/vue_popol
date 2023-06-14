<template>
  <div v-if="visible" :title="title" class="popups">
    <template>
      <div class="popup_wrapper">
        <div class="pop_header">
          <h4>{{ title }}</h4>
          <button type="button" @click="closePopup">
            <span class="material-icons">close</span>
          </button>
        </div>
        <div class="-wrapper-between -py-5 pop_container min">
          <p>{{ contents }}</p>
        </div>
        <div class="pop_footer">
          <g-button variant="primary" class="last" @click="closePopup">
            <span>닫기</span>
          </g-button>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'SimpleAlertModal',
  data() {
    return {};
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
      require: true,
    },
    title: {
      type: String,
      default: '',
      require: true,
    },
    contents: {
      type: String,
      default: '',
      require: true,
    },
  },
  methods: {
    closePopup() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
