<template>
  <div class="cont_box">
    <h2>프로젝트 등록</h2>
    <img height="100%" src="@/assets/images/architecture.png" />

    <div>
      <date-picker v-model="time1" valueType="format"></date-picker>
      <date-picker v-model="time2" type="datetime"></date-picker>
      <date-picker v-model="time3" range></date-picker>

      <div>
        <b-form-datepicker
          v-model="value"
          :date-disabled-fn="dateDisabled"
          locale="en"
        ></b-form-datepicker>
      </div>
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
