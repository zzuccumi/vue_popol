<template>
  <!-- <v-dialog v-model="partSearchModal" class="modal_wrap">
    <v-card>
      <div class="pop_header">
        <h4>사업부 검색</h4>
        <button @click="partSearchModal = false">
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
        <button class="fill06" @click="partSearchModal = false">
          <span>취소</span>
        </button>

        <button class="fill07" @click="partSearchModal = false">
          <span>등록</span>
        </button>
      </div>
    </v-card>
  </v-dialog> -->

  <div v-if="visible" :title="title" class="popups">
    <template>
      <div class="popup_wrapper">
        <div class="pop_header">
          <h4>{{ title }}</h4>
          <button @click="closePopup">
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
  name: 'PartSearchModal',
  data() {
    return {
      headers: [
        { text: 'NO', value: 'number', align: 'center', sortable: false },
        { text: '사업부', value: 'business', align: 'start', sortable: false },
      ],
      tables: [
        {
          number: 10,
          business: 'RCS 사업부',
        },
        {
          number: 9,
          business: 'RCS 사업부',
        },
        {
          number: 8,
          business: 'RCS 사업부',
        },
        {
          number: 7,
          business: 'RCS 사업부',
        },
        {
          number: 6,
          business: 'RCS 사업부',
        },
        {
          number: 5,
          business: 'RCS 사업부',
        },
        {
          number: 4,
          business: 'RCS 사업부',
        },
        {
          number: 3,
          business: 'RCS 사업부',
        },
        {
          number: 2,
          business: 'RCS 사업부',
        },
        {
          number: 1,
          business: 'RCS 사업부',
        },
      ],
    };
  },

  methods: {
    closePopup() {
      this.$emit('update:visible', false);
    },
  },
};
</script>
