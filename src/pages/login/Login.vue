<template>
  <div class="login-page">
    <q-card outlined class="login-wrapper">
      <div class="login-container">
        <div class="login-title-wrapper">
          <div class="login-main-title">Turaco</div>
          <div class="login-sub-title">Login</div>
        </div>
        <q-form class="app-g-form">
          <q-input
              class="q-mb-md"
              required
              outlined
              ref="emailEl"
              v-model="inputAccountId"
              :error-messages="errorStatus.errorMessage"
              persistent-hint
              :dense="true"
              label="로그인 아이디" stack-label>
          </q-input>
          <q-input
              required
              outlined
              ref="passwordEl"
              type="password"
              v-model="inputPassword"
              :error-messages="errorStatus.errorMessage"
              persistent-hint
              :dense="true"
              label="패스워드" stack-label>
          </q-input>
        </q-form>
        <q-btn
            class="app-g-btn btn-large"
            color="primary"
            :disabled="!isValidInput"
            @click="onClickLogin">
          로그인
        </q-btn>
        
        
      </div>
    </q-card>
    <BaseFooter/>
  </div>
</template>

<script>
import AuthService from '../../service/auth';
import router from "../../router/index";


export default {
  name: "Login",
  data: () => ({
    state: Math.random().toString(36).substring(7),
    providerSuccess: undefined,
    intervalChkPopup: undefined,
    popup: undefined,
    naverLogin: undefined,
    btnNaverLogin: undefined,
    inputAccountId: '',
    inputPassword: '',
    errorStatus: {
      email: false,
      password: false,
      errorMessage: ''
    },
    dialogVisible: false,
    isValidInput: true
  }),
  methods: {
    onClickLogin() {
      const param = {
        id: this.inputAccountId,
        password: this.inputPassword
      }
      AuthService.login(param).then((res) => {
        if (res.data.success){
          // login success
        } else{
          // login fail
        }
      });
      this.onAfterLogin();
    },
    onKeyPressed(e, type) {
      if (e.keyCode === 13) {
        if (type === 'accountId') {
          this.$refs.passwordEl.focus();
        } else if (type === 'password') {
          this.onClickLogin();
        }
      }
    },


    // oauth 로그인 후 callback 처리
    initLoginCallback() {
      window.signal = (signal) => {
        if (signal) {
          const {provider, data} = signal;
          switch (provider) {
            case 'kakao':
              
              break;
            case 'naver':
              
              break;
          }
        }
      }
    },
    chkPopupClosed() {
      this.intervalChkPopup = setInterval(() => {
        if (this.popup.closed) {
          if (this.intervalChkPopup) {
            clearInterval(this.intervalChkPopup);
            if (!this.providerSuccess) {
              alert('oauth 인증이 실패하였습니다.');
            }
          }
          //CommonUIControl.HideUIProgress();
          this.intervalChkPopup = undefined;
        }
      }, 100);
    },
    onProviderSuccess() {
      this.providerSuccess = true;
      setTimeout(() => {
        //CommonUIControl.ShowUIProgress();
      }, 0);
    },
    onAfterLogin() {
      console.log('onAfterLogin');
      router.push('/board');
    }
  },
  async mounted() {
    this.$refs.emailEl.focus();
    this.initLoginCallback();
  }
}
</script>

<style>
.v-input__slot {
  min-height: 0px !important;
}

.v-text-field .v-label {
  font-weight: normal;
  color: var(--gray2);
}
</style>
<style scoped lang="scss">
.login-page {
  background-color: var(--gray10);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .login-wrapper {
    width: 410px;
    border: 1px solid var(--gray8);
  }

  .login-container {
    width: 100%;
    height: 100%;
    display: flex;
    padding: 30px;
    flex-direction: column;

    .login-title-wrapper {
      width: 100%;
      text-align: center;
      padding: 30px 0;

      .login-main-title {
        color: var(--primary);
        font-size: 30px;
        line-height: 33px;
        font-family: 'Comfortaa' !important;
        font-weight: bold;
      }

      .login-sub-title {
        margin-top: 10px;
        color: var(--accent);
        font-size: 16px;
        line-height: 20px;
        font-weight: 500;
      }
    }
  }

  .app-g-btn {
    margin: 10px 0;
  }

  .login-info-wrapper {
    padding: 10px 10px 0;
    color: var(--gray4);

    > div {
      padding: 3px 0;
      font-size: 14px;

      a {
        padding-left: 10px;
        font-weight: 500;
      }
    }
  }

  .info-forgot {
    text-decoration: underline;
    display: inline-block;

    &:hover {
      color: var(--primary);
      cursor: pointer;
    }
  }
}
</style>
