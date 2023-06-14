<template>
  <v-dialog class="my-modal" v-if="visible" @click.self="handleWrapperClick">
    <v-card>
      <div class="pop_header">
        <h4>사업부 검색</h4>
        <button @click="$emit('update:visible', !visible)">
          <img src="@/assets/images/icon_close02.svg" alt="닫기" />
        </button>
      </div>

      <div class="pop_container">
        <div class="search_box">
          <div class="input_frame">
            <form autocomplete="off">
              <v-col class="d-flex">
                <h5>사업부 명</h5>

                <v-text-field placeholder="RCS 사업부" clearable></v-text-field>

                <button
                  type="button"
                  class="btn_search fill07 btn_fit btn_active"
                  @click.stop="partSearchModal = true"
                >
                  <span>검색</span>
                </button>
              </v-col>
            </form>
          </div>
        </div>

        <div class="table row row02">
          <v-data-table
            height="400"
            v-model="selected"
            :headers="headers"
            fixed-header
            hide-default-footer
            :items="tables"
            item-key="name"
          >
            <template v-slot:item.change="{ item }">
              <v-text small class="center btn_change active" v-model="item.change"> 변경 </v-text>
            </template>

            <template v-slot:no-data class="center">
              <p>조회정보가 없습니다.</p>
            </template>
          </v-data-table>
        </div>
      </div>

      <div class="pop_footer center">
        <button class="fill06" @click="$emit('update:visible', !visible)">
          <span>취소</span>
        </button>

        <button class="fill07" @click="$emit('update:visible', !visible)">
          <span>등록</span>
        </button>
      </div>
    </v-card>

    <div class="my-modal__dialog">
      <header class="my-modal__header">
        <span>{{ title }}</span>
        <button @click="$emit('update:visible', !visible)">Close</button>
      </header>
      <div class="my-modal__body">
        <slot></slot>
      </div>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name: 'my-modal',
  props: {
    visible: {
      type: Boolean,
      require: true,
      default: false,
    },
    title: {
      type: String,
      require: false,
    },
  },
  methods: {
    handleWrapperClick() {
      this.$emit('update:visible', false);
    },
  },
};
</script>

<style lang="scss">
$module: 'my-modal';
.#{$module} {
  // This is modal bg
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  overflow: auto;
  margin: 0;
  //This is modal layer
  &__dialog {
    left: 50%;
    top: 75px;
    width: 600px;
    position: absolute;
    background: #fff;
    margin-bottom: 50px;
  }

  &__header {
    font-size: 28px;
    font-weight: bold;
    line-height: 1.29;
    padding: 16px 16px 0 25px;
    position: relative;
  }
  &__body {
    padding: 25px;
    min-height: 150px;
    max-height: 412px;
    overflow-y: scroll;
  }
}
</style>