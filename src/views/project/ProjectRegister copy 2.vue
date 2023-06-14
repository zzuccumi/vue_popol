<template>
  <div class="cont_box">
    <h2>프로젝트 등록</h2>

    <div>
      <b-form-datepicker
        v-model="value"
        :date-disabled-fn="dateDisabled"
        locale="en"
      ></b-form-datepicker>
    </div>

    <div class="table">
      <v-simple-table fixed-header height="300px">
        <template v-slot:default>
          <!-- <thead>
            <tr>
              <th class="text-left">NO</th>
              <th class="text-left">Calories</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in table" :key="item.name">
              <td>{{ item.number }}</td>
              <td>{{ item.business }}</td>
              <td>{{ item.calories }}</td>
            </tr>
          </tbody> -->

          <!-- <v-data-table
            :headers="headers"
            :items="desserts"
            :sort-by="['calories', 'fat']"
            :sort-desc="[false, true]"
            multi-sort
            class="elevation-1"
          >
            <tr v-for="item in table" :key="item.name">
              <td>{{ item.number }}</td>
              <td>{{ item.business }}</td>
              <td>{{ item.name }}</td>
            </tr>
          </v-data-table> -->

          <v-data-table
            :headers="headers"
            :items="tables"
            :sort-by="['projectName', 'startDate', 'update']"
            :sort-desc="[false, false, false]"
            multi-sort
            class="elevation-1"
          ></v-data-table>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script>
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  name: 'ProjectRegister',
  components: { DatePicker },
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
      yourValue: null,
      headers: [
        { text: 'NO', value: 'number', align: 'start', sortable: false },
        { text: '사업부', value: 'business', align: 'start', sortable: false },
        { text: '프로젝트명', value: 'projectName', align: 'start', sortable: true },
        { text: '홍길동 (SD12365)', value: 'pm', align: 'start', sortable: false },
        { text: '변경/삭제', value: 'change', align: 'start', sortable: false },
        { text: '활성', value: 'projectStatus', align: 'start', sortable: false },
        { text: '최초 등록일', value: 'startDate', align: 'start', sortable: true },
        { text: '최신 업데이트', value: 'update', align: 'start', sortable: true },
      ],
      tables: [
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
          projectStatus: '활성',
          startDate: '2022.06.15',
          update: '2022.06.15',
        },
        {
          number: 1,
          business: 'RCS 사업부',
          projectName: 'DDO Portal Project A',
          pm: '홍길동 (SD12365)',
          change: (
            <button type="button" class="active">
              변경
            </button>
          ),
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
.custom-picker {
  border-radius: 10px !important;

  .v-btn--active.green {
    background-color: #edffff !important;

    .v-btn__content {
      color: #00b1bb !important;
      font-weight: bold !important;
    }
  }

  .v-picker__title {
    display: none !important;
  }

  .v-date-picker-header {
    padding-top: 10px !important;
  }
}

.v-date-picker-table thead tr th {
  color: #1c1c1c !important;
  font-weight: 400 !important;

  &:nth-child(1) {
    color: #ff7451 !important;
  }

  &:nth-child(7) {
    color: #ff7451 !important;
  }
}

.v-date-picker-table tbody tr td {
  &:nth-child(1) {
    .v-btn--disabled {
      .v-btn__content {
        color: #ffcbbe;
      }
    }

    .v-btn__content {
      color: #ff7451;
    }
  }

  &:nth-child(7) {
    .v-btn--disabled {
      .v-btn__content {
        color: #ffcbbe;
      }
    }

    .v-btn__content {
      color: #ff7451;
    }
  }
}
</style>
