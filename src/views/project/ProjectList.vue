<template>
  <v-app class="cont_box">
    <h2 class="start">프로젝트 등록</h2>
    <div class="content_wrap">
      <div class="row row01">
        <div class="filter_row between">
          <div class="col start">
            <div class="input_title start center">
              <p class="center">사업부</p>
            </div>
            <div class="input_frame">
              <form autocomplete="off">
                <v-col class="d-flex">
                  <v-select :items="select01" placeholder="전체" filled></v-select>
                </v-col>
              </form>
            </div>
          </div>

          <div class="col center">
            <div class="input_title start center">
              <p class="center">프로젝트</p>
            </div>
            <div class="input_frame">
              <form autocomplete="off">
                <v-col class="d-flex">
                  <v-select :items="select02" placeholder="전체" filled></v-select>
                </v-col>
              </form>
            </div>
          </div>

          <div class="col end">
            <div class="input_title start center">
              <p class="center">프로젝트 상태</p>
            </div>
            <div class="input_frame">
              <form autocomplete="off">
                <v-col class="d-flex">
                  <v-select :items="select03" filled placeholder="전체"></v-select>
                </v-col>
              </form>
            </div>
          </div>
        </div>

        <div class="filter_row between">
          <div class="col start">
            <div class="input_title start">
              <p class="center">조회 기간</p>
            </div>
            <div class="input_frame">
              <form autocomplete="off" class="start">
                <v-col class="d-flex">
                  <v-select :items="select05" filled placeholder="전체"></v-select>
                </v-col>

                <div class="datepicker_box start">
                  <b-form-datepicker
                    v-model="value"
                    id="start_picker"
                    today-button
                    locale="ko"
                    placeholder=""
                  ></b-form-datepicker>
                  <span>~</span>
                  <b-form-datepicker
                    v-model="value"
                    id="end_picker"
                    today-button
                    locale="ko"
                    placeholder=""
                  ></b-form-datepicker>
                </div>
              </form>
            </div>
          </div>

          <div class="col end">
            <div class="input_title start center">
              <p class="center">검색</p>
            </div>
            <div class="input_frame">
              <v-form ref="form" v-model="valid">
                <v-col class="d-flex">
                  <v-select :items="select04" filled placeholder="전체"></v-select>

                  <v-text-field v-model="searchMessage" clearable></v-text-field>

                  <button type="button" class="btn_search outline03"><span>검색</span></button>
                </v-col>
              </v-form>
            </div>
          </div>
        </div>

        <div class="col">
          <!-- <v-col class="d-flex" cols="12" sm="6">
            <v-select :items="items" label="Outlined style" dense outlined></v-select>
          </v-col> -->
        </div>
      </div>

      <div class="row row03">
        <div class="table_info between">
          <p>총 <span>5</span>건</p>
          <div class="btn_box center">
            <button type="button" class="fill01"><span>프로젝트 신규 등록</span></button>
            <button type="button" class="outline02"><span>엑셀 다운로드</span></button>
          </div>
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
          :sort-by="['projectName', 'startDate', 'update']"
          :sort-desc="[false, false, false]"
          multi-sort
        >
          <template v-slot:item.change="{ item }">
            <v-text small class="center btn_change active" v-model="item.change"> 변경 </v-text>
          </template>

          <template v-slot:no-data class="center">
            <p>조회정보가 없습니다.</p>
          </template>
        </v-data-table>

        <div class="text-center pagination_wrap">
          <v-pagination v-model="page" :length="6"></v-pagination>
        </div>
      </div>
    </div>

    <!-- <div>
      <b-form-datepicker
        v-model="value"
        :date-disabled-fn="dateDisabled"
        locale="en"
      ></b-form-datepicker>
    </div> -->
  </v-app>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'ProjectList',
  components: { DatePicker },
  data() {
    return {
      valid: true,
      searchMessage: '',
      yourValue: null,
      page: 1,
      select01: ['전체', 'RCS 사업부'],
      select02: [
        '전체',
        'DDO Portal Project O',
        'DDO Portal Project A',
        'DDO Portal Project C',
        'DDO Portal Project O',
      ],
      select03: ['전체', '활성', '비활성'],
      select04: ['프로젝트 명', '최종 업데이트​'],
      select05: ['최초 등록일', '프로젝트 PM​'],
      headers: [
        { text: 'NO', value: 'number', align: 'center', sortable: false },
        { text: '사업부', value: 'business', align: 'start', sortable: false },
        { text: '프로젝트명', value: 'projectName', align: 'start active click', sortable: true },
        { text: '홍길동 (SD12365)', value: 'pm', align: 'center', sortable: false },
        { text: '변경/삭제', value: 'change', align: 'center', sortable: false },
        { text: '활성', value: 'projectStatus', align: 'center', sortable: false },
        { text: '최초 등록일', value: 'startDate', align: 'center', sortable: true },
        { text: '최신 업데이트', value: 'update', align: 'center', sortable: true },
      ],
      tables: [
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: true,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 2,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 3,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 4,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 5,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 6,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 7,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 8,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 9,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 10,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: false,
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
      ],
    };
  },
  methods: {
    dateDisabled(ymd, date) {
      // Disable weekends (Sunday = `0`, Saturday = `6`) and
      // disable days that fall on the 13th of the month
      const weekday = date.getDay();
      const day = date.getDate();
      // Return `true` if the date should be disabled
      return weekday === 0 || weekday === 6 || day === 13;
    },
  },
};
</script>

<style lang="scss" scoped>
div {
  text-decoration: none;
}
.v-data-table--fixed-header > .v-data-table__wrapper {
  min-height: 700px;
}
</style>
