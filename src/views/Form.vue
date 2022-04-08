<template>
  <div class="form">
    <section class="sign-in">
      <div class="container">
        <div class="signin-content">
          <div class="signin-image">
            <figure>
              <img
                src="https://colorlib.com/etc/regform/colorlib-regform-7/images/signin-image.jpg"
                alt="sing up image"
                id="image"
              />
            </figure>
          </div>
          <div class="todo-form">
            <div class="form-login" v-if="formShow === 'login'">
              <h2 class="form-title">Sign in</h2>
              <form @submit.prevent="SubmitFormLogin()">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Your name"
                    id="your-name"
                    v-model="user.userName"
                    @blur="checkForm()"
                    v-bind:class="{ err: msgError.user }"
                  />
                  <div class="feedback-invalid" v-if="msgError.user">
                    {{ msgError.user }}
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Password"
                    id="your-pw"
                    v-model="user.passWord"
                    @blur="checkForm()"
                    v-bind:class="{ err: msgError.pass }"
                  />
                  <div class="feedback-invalid" v-if="msgError.pass">
                    {{ msgError.pass }}
                  </div>
                </div>
                <button id="button-login">Sign in</button>
                <div
                  class="feedback-invalid"
                  v-if="msgError.errorMsg"
                  style="text-align: center; margin-top: 10px"
                >
                  {{ msgError.errorMsg }}
                </div>
              </form>
              <p class="register-link" @click="changeForm('register')">
                Create new account
              </p>
            </div>

            <div class="form-login" v-if="formShow === 'register'">
              <h2 class="form-title">Sign up</h2>
              <form @submit.prevent="SubmitFormRegister()">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Your name"
                    id="your-name-register"
                    v-model="user.userName"
                    @blur="checkForm()"
                    v-bind:class="{ err: msgError.user }"
                  />
                  <div class="feedback-invalid" v-if="msgError.user">
                    {{ msgError.user }}
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Password"
                    id="your-pw-register"
                    v-model="user.passWord"
                    @blur="checkForm()"
                    v-bind:class="{ err: msgError.pass }"
                  />
                  <div class="feedback-invalid" v-if="msgError.pass">
                    {{ msgError.pass }}
                  </div>
                </div>
                <button id="button-login">Sign up</button>
                <div
                  class="feedback-invalid"
                  v-if="msgError.errorMsg"
                  style="text-align: center; margin-top: 10px"
                >
                  {{ msgError.errorMsg }}
                </div>
              </form>
              <p class="register-link" @click="changeForm('login')">
                Login with existing account
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Form",
  data() {
    return {
      formShow: "login",
      user: {
        userName: "",
        passWord: "",
      },
      msgError: {
        user: "",
        pass: "",
        errorMsg: "",
      },
      mode : false
    };
  },
  methods: {
    ...mapActions(["login", "registerForm"]),
    changeForm(string) {
      (this.user = {
        userName: "",
        passWord: "",
      }),
        (this.msgError = {
          user: "",
          pass: "",
          errorMsg: "",
        });
      this.formShow = string;
    },
    validPassword: function (pass) {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return re.test(pass);
    },
    checkForm() {
      let isValid = true;
      this.msgError = {
        user: "",
        pass: "",
        errorMsg: "",
      };

      if (!this.user.userName) {
        this.msgError.user = "Không được để trống !!";
        isValid = false;
      }
      if (!this.user.passWord) {
        this.msgError.pass = "Không được để trống !!";
        isValid = false;
      } else if (!this.validPassword(this.user.passWord)) {
        this.msgError.pass =
          " Password từ 8 kí tự bao gồm chữ hoa, chữ thường và số!";
        isValid = false;
      }
      return isValid;
    },
    async SubmitFormRegister() {
      const userData = {
        username: this.user.userName,
        password: this.user.passWord,
      };
      try {
        if (this.checkForm()) {
          await this.registerForm(userData);
          this.changeForm("login");
          alert("Đăng ký thành công!")
        }
      } catch (error) {
        this.msgError.errorMsg = "Tên đăng nhập đã tồn tại !";
      }
    },

    async SubmitFormLogin() {
      const userData = {
        username: this.user.userName,
        password: this.user.passWord,
      };

      try {
        if (this.checkForm()) {
          await this.login(userData);
          this.$router.replace("/homepage");
          this.mode = true
        }
      } catch (e) {
        this.msgError.errorMsg = "Sai tên đăng nhập hoặc mật khẩu !";
      }
    },
  },
};
</script>

<style scoped>
.container {
  width: 900px;
  background: #fff;
  margin: 0 auto;
  box-shadow: 0 15px 16.83px 10px rgb(0 0 0 / 20%);
}
.signin-content {
  padding-top: 67px;
  padding-bottom: 87px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-form {
  margin-right: 90px;
  margin-left: 80px;
}
.signup-form,
.signup-image,
.todo-form,
.signin-image {
  width: 50%;
  overflow: hidden;
}
.form-title {
  margin-bottom: 33px;
}
h2 {
  line-height: 1.66;
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
  color: #6dabe4;
}

.form-group {
  position: relative;
  margin-bottom: 25px;
  overflow: hidden;
}
.form-group input[type="text"] {
  outline: none;
  border: none;
  border-bottom: solid 1px black;
  width: 100%;
  padding: 10px 7px;
  font-size: 16px;
  margin-bottom: 5px;
}

#button-login,
#button-register {
  background: #6dabe4;
  color: #fff;
  /* width: auto; */
  padding: 15px 39px;
  border-radius: 5px;
  margin-top: 25px;
  cursor: pointer;
  border: none;
  display: block;
  margin: 0 auto;
}
.register-link {
  color: #6dabe4;
  padding-top: 10px;
  letter-spacing: 3px;
  text-align: center;
  cursor: pointer;
}
.signin-image {
  width: 50%;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  /* align-items: end; */
}
.err {
  border-bottom: solid 1px red !important ;
}
.feedback-invalid {
  color: red;
  font-size: 12px;
}
</style>
