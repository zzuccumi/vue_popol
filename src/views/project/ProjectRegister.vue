<template>
  <v-app class="cont_box">
    <h2 class="start">프로젝트 등록</h2>
    <div class="content_wrap">
      <div class="row row01">
        <div class="step_box between">
          <div class="steps center column on" :class="{ active: none }">
            <p class="active center">PROJECT 등록<span></span></p>
            <h3 class="fill02 color01">{{ ProjectName }} 신규 등록</h3>
            <h3 class="fill02 color01" :class="{ active: none }">{{ ProjectName }} 신청 중</h3>
          </div>

          <div class="line" :class="{ active: none }"></div>

          <div class="steps center column">
            <p class="center">Service<span></span></p>
            <h3 class="fill02 color01">Service 신규 등록</h3>
            <h3 class="fill02 color01">Service 신청 중</h3>
          </div>

          <div class="line"></div>

          <div class="steps center column">
            <p class="center">plug-in<span></span></p>
            <h3 class="fill02 color01">plug-in 신규 등록</h3>
            <h3 class="fill02 color01">plug-in</h3>
          </div>
        </div>
      </div>

      <div class="row row03 row_step" :class="{ none: none }">
        <div class="progress" v-if="step01 == true">
          <ul class="between">
            <li class="check start" :class="{ check_on: check }">
              <span class="on step_icon"></span>
              <p class="center">프로젝트 등록</p>
            </li>
            <li class="check center" :class="{ check_on: check }">
              <span class="off step_icon"></span>
              <p class="center">프로젝트 PM 등록</p>
            </li>
            <li class="check end" :class="{ check_on: check }">
              <span class="off step_icon"></span>
              <p class="center">결재 신청</p>
            </li>
          </ul>
          <v-progress-linear
            background-color="#72787f"
            color="#2189ff"
            value="0"
          ></v-progress-linear>
        </div>

        <div class="progress" v-if="step02 == true">
          <ul class="between">
            <li class="check start" :class="{ check_on: check }">
              <span class="done step_icon"></span>
              <p class="center">프로젝트 등록</p>
            </li>
            <li class="check center" :class="{ check_on: check }">
              <span class="on step_icon"></span>
              <p class="center">프로젝트 PM 등록</p>
            </li>
            <li class="check end" :class="{ check_on: check }">
              <span class="off step_icon"></span>
              <p class="center">결재 신청</p>
            </li>
          </ul>

          <v-progress-linear
            background-color="#72787f"
            color="#2189ff"
            value="50"
          ></v-progress-linear>
        </div>

        <div class="progress" v-if="step03 == true">
          <ul class="between">
            <li class="check start" :class="{ check_on: check }">
              <span class="done step_icon"></span>
              <p class="center">프로젝트 등록</p>
            </li>
            <li class="check center" :class="{ check_on: check }">
              <span class="done step_icon"></span>
              <p class="center">프로젝트 PM 등록</p>
            </li>
            <li class="check end" :class="{ check_on: check }">
              <span class="on step_icon"></span>
              <p class="center">결재 신청</p>
            </li>
          </ul>
          <v-progress-linear
            background-color="#72787f"
            color="#2189ff"
            value="100"
          ></v-progress-linear>
        </div>
      </div>

      <div class="row row01 field" :class="{ none: none }">
        <h4 class="start">프로젝트 등록</h4>

        <div v-if="step01 == true" class="step_box">
          <div class="step_row">
            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="center asta">사업부</p>
                </div>
                <div class="input_frame">
                  <form autocomplete="off">
                    <v-col class="d-flex">
                      <v-text-field placeholder="RCS 사업부" clearable disabled></v-text-field>

                      <button
                        type="button"
                        class="btn_search outline03 btn_fit btn_active"
                        @click="handleClickButton"
                      >
                        <span>사업부 검색</span>
                      </button>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start center">
                  <p class="center asta">프로젝트</p>
                </div>
                <div class="input_frame">
                  <form autocomplete="off">
                    <v-col class="d-flex start mr_b20">
                      <v-checkbox
                        v-model="selected"
                        label="직접 입력"
                        value="직접 입력"
                        class="round check"
                      ></v-checkbox>

                      <button
                        type="button"
                        class="btn_search outline04 btn_fit btn_active"
                        @click.stop="ecoSearchModal = true"
                      >
                        <img src="@/assets/images/icon_search.svg" alt="에코 프로젝트 검색" /><span
                          >에코 프로젝트 검색</span
                        >
                      </button>
                    </v-col>
                  </form>

                  <form action="" autocomplete="off">
                    <v-col class="d-flex">
                      <v-text-field
                        placeholder="DDO Portal Project A"
                        clearable
                        :readonly="readonly"
                      ></v-text-field>

                      <button type="button" class="btn_search outline03 btn_fit btn_active">
                        <span>중복체크</span>
                      </button>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="start asta">신청내용</p>
                </div>
                <div class="input_frame">
                  <form autocomplete="off">
                    <v-col class="d-flex textarea">
                      <v-textarea
                        label="Text"
                        :rules="txtRules"
                        :value="value"
                        :maxlength="200"
                        :counter="200"
                      >
                      </v-textarea>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="step02 == true" class="step_box">
          <div class="step_row">
            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="center">사업부</p>
                </div>
                <div class="input_frame">
                  <v-col class="d-flex start">
                    <p>RCS 사업부</p>
                  </v-col>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start center">
                  <p class="center">프로젝트</p>
                </div>
                <div class="input_frame">
                  <form action="" autocomplete="off">
                    <v-col class="d-flex start">
                      <p>DDO Portal Project A</p>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="start asta">프로젝트 PM</p>
                </div>
                <div class="input_frame input_frame02">
                  <form autocomplete="off" class="start" v-for="(input, k) in inputs" :key="k">
                    <div class="form_group between">
                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.name"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.id"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.part"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.company"
                        ></v-text-field>
                      </v-col>

                      <v-col sm="4">
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.email"
                        ></v-text-field>
                      </v-col>
                    </div>
                    <span>
                      <img
                        @click="remove(k)"
                        v-show="k || (!k && inputs.length > 1)"
                        src="@/assets/images/icon_btnRemove.svg"
                        alt="제거"
                      />
                    </span>
                    <div
                      class="btn_search outline03 btn_active"
                      @click="add(k)"
                      v-show="k == inputs.length - 1"
                    >
                      <span>pm추가</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="step03 == true" class="step_box">
          <div class="step_row">
            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="center">사업부</p>
                </div>
                <div class="input_frame">
                  <v-col class="d-flex start">
                    <p>RCS 사업부</p>
                  </v-col>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start center">
                  <p class="center">프로젝트</p>
                </div>
                <div class="input_frame">
                  <form action="" autocomplete="off">
                    <v-col class="d-flex start">
                      <p>DDO Portal Project A</p>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="start">프로젝트 PM</p>
                </div>
                <div class="input_frame input_frame02">
                  <form autocomplete="off" class="start">
                    <div class="form_group between">
                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="홍길동"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="SD12365"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="RCS 사업부"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="삼성전자"
                        ></v-text-field>
                      </v-col>

                      <v-col sm="4">
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="gildong.hong@samsung.com"
                        ></v-text-field>
                      </v-col>
                    </div>
                  </form>

                  <form autocomplete="off" class="start">
                    <div class="form_group between">
                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="홍길동"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="SD12365"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="RCS 사업부"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="삼성전자"
                        ></v-text-field>
                      </v-col>

                      <v-col sm="4">
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="gildong.hong@samsung.com"
                        ></v-text-field>
                      </v-col>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="start">신청내용</p>
                </div>
                <div class="input_frame">
                  <form autocomplete="off">
                    <v-col class="d-flex textarea fix">
                      <p>
                        DDO Portal 신규 구축 프로젝트 입니다.<br />주요업무 : 토폴로지 , CMDB ,
                        plug-in 등록 설정 등………
                      </p>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="row row01 field"
        :class="{ none: none }"
        v-if="step01 == false && step02 == false && step03 == true"
      >
        <h4 class="start">결재자 정보</h4>
        <div class="step_box">
          <div class="step_row">
            <div class="col flex_col">
              <div class="field_set start">
                <div class="input_title start">
                  <p class="center">사업부</p>
                </div>
                <div class="input_frame input_frame02">
                  <form autocomplete="off" class="start">
                    <div class="form_group between form_group02">
                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="홍길동"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="SD12365"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          class="pd_left20"
                          placeholder=""
                          value="RCS 사업부"
                        ></v-text-field>
                      </v-col>
                    </div>
                  </form>
                </div>
              </div>

              <div class="field_set start">
                <div class="input_title start">
                  <p class="center">결재 신청일</p>
                </div>
                <div class="input_frame input_frame02">
                  <form autocomplete="off" class="start">
                    <v-col class="d-flex start">
                      <p>2022.06.15</p>
                    </v-col>
                  </form>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="field_set start">
                <div class="input_title column">
                  <p class="start asta">결재 승인자</p>
                  <p class="subtext">* 결재자 1명 지정</p>
                </div>
                <div class="input_frame input_frame02">
                  <form autocomplete="off" class="start" v-for="(input, k) in inputs" :key="k">
                    <v-radio-group v-model="ex7" column>
                      <v-radio label="" color="red" value=""></v-radio
                    ></v-radio-group>
                    <div class="form_group between">
                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.name"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.id"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.part"
                        ></v-text-field>
                      </v-col>

                      <v-col>
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.company"
                        ></v-text-field>
                      </v-col>

                      <v-col sm="4">
                        <v-text-field
                          placeholder=""
                          clearable
                          disabled
                          v-model="input.email"
                        ></v-text-field>
                      </v-col>
                    </div>

                    <span>
                      <img
                        @click="remove(k)"
                        v-show="k || (!k && inputs.length > 1)"
                        src="@/assets/images/icon_btnRemove.svg"
                        alt="제거"
                      />
                    </span>
                    <div
                      class="btn_search outline03 btn_active"
                      @click="add(k)"
                      v-show="k == inputs.length - 1"
                    >
                      <span>pm추가</span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row03 center btn_box02" :class="{ none: none }" v-if="step01 == true">
        <button
          type="button"
          class="fill04 color01"
          @click="(step01 = false), (step02 = true), (step03 = false), editInput"
        >
          <span>다음</span>
        </button>
      </div>

      <div class="row row03 center btn_box02" :class="{ none: none }" v-else-if="step02 == true">
        <button
          type="button"
          class="fill05 color01"
          @click="(step01 = true), (step02 = false), (step03 = false)"
        >
          <span>이전</span>
        </button>
        <button
          type="button"
          class="fill04 color01"
          @click="(step01 = false), (step02 = false), (step03 = true)"
        >
          <span>다음</span>
        </button>
      </div>

      <div class="row row03 center btn_box02" :class="{ none: none }" v-else-if="step03 == true">
        <button
          type="button"
          class="fill05 color01"
          @click="(step01 = true), (step02 = false), (step03 = false)"
        >
          <span>취소</span>
        </button>
        <button type="button" class="fill04 color01" @click="none = !none">
          <span>결재 신청</span>
        </button>
      </div>

      <div class="row row03 center finish" :class="{ none: !none }">
        <img src="@/assets/images/icon_finish.svg" alt="결재완료" />
        <p>
          프로젝트 등록 결재 신청이 완료 되었습니다.<br />
          승인 완료 후 서비스 정보를 등록 하세요.
        </p>
        <button
          type="button"
          class="fill04 color01"
          @click="(step01 = true), (step02 = false), (step03 = false), (none = !none)"
        >
          <span>확인</span>
        </button>
      </div>
    </div>

    <!-- modals -->
    <myModal title="This is modal" :visible.sync="visible">
      <div>This is modal body</div>
    </myModal>

    <template>
      <v-row justify="center">
        <v-dialog v-model="partSearchModal" class="modal_wrap">
          <!-- <PartSearchModal></PartSearchModal> -->
        </v-dialog>

        <v-dialog v-model="ecoSearchModal" class="modal_wrap">
          <EcoSearchModal></EcoSearchModal>
        </v-dialog>
      </v-row>
    </template>
  </v-app>
</template>

<script>
// import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import '@/components/modals/myModal';
import '@/components/modals/PartSearchModal';

export default {
  name: 'ProjectRegister',
  components: {
    PartSearchModal: () => import('@/components/modals/PartSearchModal'),
    EcoSearchModal: () => import('@/components/modals/EcoSearchModal'),
    myModal: () => import('@/components/modals/myModal'),
  },
  data() {
    return {
      txtRules: [(v) => v.length <= 200 || 'Max 200 characters'],
      valid: true,
      yourValue: null,
      ProjectName: '프로젝트',
      step01: true,
      step02: false,
      step03: false,
      check: true,
      selected: true,
      none: false,
      partSearchModal: false,
      ecoSearchModal: false,
      dialog: false,
      visible: false,
      inputs: [
        {
          name: '',
          id: '',
          part: '',
          company: '',
          email: '',
        },
      ],
    };
  },
  methods: {
    add() {
      this.inputs.push({
        name: '',
        id: '',
        part: '',
        company: '',
        email: '',
      });
      // console.log(this.inputs);
    },

    remove(index) {
      this.inputs.splice(index, 1);
    },
    initData() {
      this.showDetail = false;
      this.projectList = [];
      this.pid = null;
    },
    closePopup() {
      this.$emit('update:visible', false);
    },
    handleClickButton() {
      this.visible = !this.visible;
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
