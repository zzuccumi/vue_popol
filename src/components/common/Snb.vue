<template>
  <nav class="snb ma-12 pa-12">
    <!-- <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon> -->
    <v-card>
      <!-- <v-navigation-drawer permanent expand-on-hover> -->
      <v-navigation-drawer>
        <div class="snb_header">
          <h2>Data Driven Ops Potal</h2>
        </div>

        <v-list>
          <v-list-group v-for="item in items" :key="item.title" v-model="item.active" :prepend-icon="item.action"
            no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <img :src="item.iconUrl" class="nav_menu_icon" />
                <img :src="item.iconOnUrl" class="nav_menu_iconon" />
                <img :src="item.iconMiniUrl" class="nav_menu_iconmini" />
                <h3 v-text="item.group"></h3>
                <v-list-item-title v-text="item.title"></v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item v-for="child in item.items" :to="child.route" :key="child.title">
              <v-list-item-content>
                <v-list-item-title v-text="child.title"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-navigation-drawer>
    </v-card>
  </nav>
</template>

<script>
export default {
  name: 'Snb',
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
        // action: "mdi-view-dashboard",
        items: [{ title: 'List Item' }],
        title: '대시보드',
        iconUrl: require('@/assets/images/snb_menu01.svg'),
        iconOnUrl: require('@/assets/images/snb_menu01_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu01_mini.svg'),
      },
      {
        items: [{ title: '내 신청목록' }, { title: '내 승인목록' }, { title: '알림 메시지' }],
        title: '신청승인',
        iconUrl: require('@/assets/images/snb_menu02.svg'),
        iconOnUrl: require('@/assets/images/snb_menu02_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu02_mini.svg'),
      },
      {
        items: [{ title: 'CMDB 현황' }],
        title: 'CMDB',
        iconUrl: require('@/assets/images/snb_menu03.svg'),
        iconOnUrl: require('@/assets/images/snb_menu03_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu03_mini.svg'),
      },
      {
        items: [{ title: 'List Item' }],
        title: '토폴로지',
        iconUrl: require('@/assets/images/snb_menu04.svg'),
        iconOnUrl: require('@/assets/images/snb_menu04_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu04_mini.svg'),
      },
      {
        items: [{ title: '플러그인 사용등록' }, { title: '내 플러그인' }],
        title: '플러그인',
        iconUrl: require('@/assets/images/snb_menu05.svg'),
        iconOnUrl: require('@/assets/images/snb_menu05_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu05_mini.svg'),
      },
      {
        active: true,
        items: [
          { title: '프로젝트 등록', route: '/ProjectRegister' },
          { title: '내 프로젝트', route: '/MyProject' },
        ],
        title: '프로젝트',
        iconUrl: require('@/assets/images/snb_menu06.svg'),
        iconOnUrl: require('@/assets/images/snb_menu06_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu06_mini.svg'),
      },
      {
        items: [{ title: '서비스 등록' }, { title: '내 서비스' }],
        title: '서비스',
        iconUrl: require('@/assets/images/snb_menu08.svg'),
        iconOnUrl: require('@/assets/images/snb_menu08_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu08_mini.svg'),
      },
      {
        items: [{ title: '내 신청목록' }, { title: '내 승인목록' }, { title: '알림 메시지' }],
        title: '신청승인',
        group: 'Admin',
        iconUrl: require('@/assets/images/snb_menu02.svg'),
        iconOnUrl: require('@/assets/images/snb_menu02_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu02_mini.svg'),
      },
      {
        items: [{ title: '플러그인 사용등록' }, { title: '내 플러그인' }],
        title: '플러그인',
        iconUrl: require('@/assets/images/snb_menu05.svg'),
        iconOnUrl: require('@/assets/images/snb_menu05_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu05_mini.svg'),
      },
      {
        items: [{ title: '플러그인 사용등록' }, { title: '내 플러그인' }],
        title: '권한관리',
        iconUrl: require('@/assets/images/snb_menu07.svg'),
        iconOnUrl: require('@/assets/images/snb_menu07_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu07_mini.svg'),
      },
      {
        items: [{ title: '플러그인 사용등록' }, { title: '내 플러그인' }],
        title: '로그관린',
        iconUrl: require('@/assets/images/snb_menu02.svg'),
        iconOnUrl: require('@/assets/images/snb_menu02_on.svg'),
        iconMiniUrl: require('@/assets/images/snb_menu02_mini.svg'),
      },
      // {
      //   items: [
      //     { title: "신청 승인" },
      //     { title: "플러그인 관리" },
      //     { title: "권한관리" },
      //     { title: "로그관리" },
      //   ],
      //   title: "ADMIN",
      //   iconUrl: require('@/assets/images/snb_menu07.svg'),
      //   iconOnUrl: require('@/assets/images/snb_menu07_on.svg'),
      //   iconMiniUrl: require('@/assets/images/snb_menu07_mini.svg')
      // },
    ],
  }),
  watch: {},
};
</script>

<style lang="scss" scope>
// scss 시작
.wrapper {
  .snb {
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
    display: block;
    height: 100vh;
    width: 260px !important;
    z-index: 10;
    position: relative;

    >button {
      position: absolute;
      top: 36px;
      right: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50%;
      background: $blue01;
      outline: 7px solid #f5f5f9;
      box-shadow: 0 1px 9px 5px rgba(0, 0, 0, 0.16);
      z-index: 10;
    }
  }

  .snb_header {
    visibility: visible;
    // transition-duration: .2s;
    height: 24px;
    margin-bottom: 40px;

    h2 {
      font-family: "SCDream";
      font-size: $ft20;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.6;
      letter-spacing: -0.2px;
      color: $black01;
    }
  }

  .container {
    width: calc(100% - 265px);
    max-width: none;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
  }

  .v-sheet.v-card {
    height: 100%;
    background-color: transparent !important;
  }

  .v-navigation-drawer {
    border-radius: 0 16px 16px 0 !important;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
    overflow: hidden;
    width: 260px !important;
  }

  .v-navigation-drawer__content {
    // position: relative;
    padding: 34px 17px;
  }

  .v-list-group__header {
    padding: 8px 12px;
    border-radius: 6px;
    max-height: 40px;
    transition: 0.2s;

    &:hover {
      background: $blue03 !important;
      transition: 0.2s;
    }
  }

  .v-list-item__icon {
    margin: 0 !important;
    height: 100%;
    align-self: center;
  }

  .v-list-item .v-list-item__content {
    padding: 0;

    >.v-list-item__title {
      font-family: "SCDream";
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.5;
      letter-spacing: -0.16px;
      text-align: left;
      margin-left: 10px;
    }
  }

  .v-list-item .v-list-item__content img {
    width: 24px;
    height: 24px;
  }

  .v-list-item__content>* {
    flex: none;
  }

  .v-list {
    .v-list-group {
      &:nth-child(8) {
        margin-top: 120px;
        position: relative;

        .v-list-item__content {
          h3 {
            position: absolute;
            top: -82px;
            left: 0;
            font-family: "SCDream";
            line-height: 1.5;
            letter-spacing: -0.16px;
            color: $gray02;
            width: 100%;
            text-align: left;
            padding: 22px 11px 13px 11px;
            border-top: 1px solid $gray02;

            &::after {
              display: none;
            }
          }
        }
      }

      .v-list-item {
        min-height: 40px !important;

        .v-list-item__content {
          padding: 0;

          >.v-list-item__title {
            font-family: "SCDream";
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: 1.5;
            letter-spacing: -0.16px;
            text-align: left;
            margin-left: 10px;
          }
        }

        .nav_menu_icon {
          display: inline-block;
        }

        .nav_menu_iconon {
          display: none;
        }
      }

      >.v-list-item {
        margin-bottom: 5px !important;
      }

      .v-list-item--active {
        background: $blue03;
        position: relative;
        color: $blue01;

        ::after {
          position: absolute;
          content: '';
          width: 21px;
          height: 40px;
          min-height: 40px;
          background: $blue01 0 0 no-repeat;
          top: 0;
          right: -33px;
          border-radius: 4px;
          z-index: -10;
        }

        .nav_menu_icon {
          display: none;
        }

        .nav_menu_iconon {
          display: inline-block;
        }

        .v-list-item__content {
          .v-list-item__title {
            color: $blue01;
          }
        }
      }

      .v-list-group__items {
        display: block;
        padding: 17px 23px 23px 23px;

        .v-list-item {
          position: relative;
          padding: 0 0px 0 40px;

          &::before {
            position: absolute;
            content: '';
            top: 15px;
            left: 25px;
            width: 6px;
            height: 6px;
            border-radius: 50%;
            background: $gray01;
            outline: 3px solid $gray03;
            opacity: 1 !important;
          }
        }

        .v-list-item--active {
          background: transparent;

          &::before {
            background: $blue01;
            outline: 3px solid $blue05;
            opacity: 1 !important;
          }
        }
      }
    }
  }

  .nav_menu_iconmini {
    display: none;
  }
}

.wrapper.snb_open {
  .snb {
    width: 114px !important;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
  }

  .snb_header {
    visibility: hidden;
    // transition-duration: .2s;
  }

  .container {
    width: 100%;
    max-width: none;
    transition-duration: 0.2s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-property: transform, visibility, width;
    padding: 0;
  }

  .v-list-item__title {
    display: none;
  }

  .v-list-group .v-list-group__header .v-list-item__icon.v-list-group__header__append-icon {
    display: none;
  }

  .v-list {
    .v-list-group {
      &:nth-child(8) {
        margin-top: 0px;
        position: relative;

        .v-list-item__content {
          h3 {
            display: none;

            &::after {
              display: none;
            }
          }
        }
      }

      .v-list-group__header {
        &:hover {
          background: transparent !important;
        }
      }

      .v-list-item {
        min-height: 40px !important;

        .v-list-item__content {
          padding: 0;
          flex: none;
        }

        .nav_menu_icon {
          display: none;
          width: 40px;
          height: 40px;
        }

        .nav_menu_iconon {
          display: block;
          width: 40px;
          height: 40px;
          z-index: 100;
        }

        .nav_menu_iconmini {
          display: none;
          width: 40px;
          height: 40px;
          z-index: 100;
        }
      }

      >.v-list-item {
        margin-bottom: 40px !important;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .v-list-group__items {
        display: none;
      }

      .v-list-item {
        .nav_menu_icon {
          display: none;
        }

        .nav_menu_iconon {
          display: none;
        }

        .nav_menu_iconmini {
          display: block;
          width: 40px;
          height: 40px;
          z-index: 100;
        }
      }

      .v-list-item--active {
        background: transparent;
        position: relative;
        color: $blue01;

        ::after {
          position: absolute;
          content: '';
          width: 40px;
          height: 40px;
          min-height: 40px;
          background: $blue03 0 0 no-repeat;
          top: -10px;
          right: 7px;
          border-radius: 50%;
          z-index: -10;
          transition: 0.2s;
        }

        .nav_menu_icon {
          display: none;
        }

        .nav_menu_iconon {
          display: block;
        }

        .nav_menu_iconmini {
          display: none;
          width: 40px;
          height: 40px;
          z-index: 100;
        }
      }
    }
  }
}
</style>
