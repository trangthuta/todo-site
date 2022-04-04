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
              <form @submit.prevent="login()">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Your email"
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
              </form>
              <p class="register-link" @click="changeForm('register')">
                Create new account
              </p>
            </div>

            <div class="form-login" v-if="formShow === 'register'">
              <h2 class="form-title">Sign up</h2>
              <form @submit.prevent="registerForm()">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Your name"
                    id="your-name-register"
                    v-model="register.user"
                    @blur="checkFormRegister()"
                    v-bind:class="{ err: msgError.userRegister }"
                  />
                  <div class="feedback-invalid" v-if="msgError.userRegister">
                    {{ msgError.userRegister }}
                  </div>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Password"
                    id="your-pw-register"
                    v-model="register.password"
                    @blur="checkFormRegister()"
                    v-bind:class="{ err: msgError.passwordRegister }"
                  />
                  <div class="feedback-invalid" v-if="msgError.passwordRegister">
                    {{ msgError.passwordRegister }}
                  </div>
                </div>
                <button id="button-register">Sign up</button>
                <div>
                  {{msgError.register}}
                </div>
              </form>
              <p class="register-link" @click="changeForm('login')">
                Login with existing account
              </p>
            </div>

            <!-- <div class="form-login" v-else-if="formShow === 'register'">
              <h2 class="form-title">Sign up</h2>
              <form @submit="registerForm()">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Your name"
                    id="your-name-register"
                    v-model="register.user"
                  />
                  
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    placeholder=" Password"
                    id="your-pw-register"
                    v-model="register.password"
                  />
                </div>
                <button id="button-register">Sign up</button>
              </form>
              <p class="register-link" @click="changeForm('login')">
                Login with existing account
              </p>
            </div> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios"
// import API from "../api/api_base"

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
        userRegister : "",
        passwordRegister : "",
        register : ""
      },
      register : {
        user : "",
        password : ""
      },
      base_url : 'https://mvn-task-manager.work/'
    };
 
  },
  methods: {
    changeForm(string) {
      this.formShow = string;
       this.user= {
        userName: "",
        passWord: "",
      },
       this.register = {
        user : "",
        password : ""
      }

    },
    // validEmail: function (email) {
    //   const re =
    //     /^(([^<>()[\]\\.,:\s@"]+(\.[^<>()[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   return re.test(email);
    // },
    validPassword: function (pass) {
      const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
      return re.test(pass);
    },
    checkForm() {
      let isValid = true;
      this.msgError = {
        user: "",
        pass: "",
        userRegister : "",
        passwordRegister : ""
      };

      if (!this.user.userName) {
        this.msgError.user = "Không được để trống !!";
        isValid = false;
      } 
      // else if (!this.validEmail(this.user.userName)) {
      //   this.msgError.user = "Sai định dạng Email !!";
      //   isValid = false;
      // }
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
     checkFormRegister() {
      let isValid = true;
      this.msgError = {
        user: "",
        pass: "",
        userRegister : "",
        passwordRegister : ""
      };

      if (!this.register.user) {
        this.msgError.userRegister = "Không được để trống !!";
        isValid = false;
      } 
      // else if (!this.validEmail(this.user.userName)) {
      //   this.msgError.user = "Sai định dạng Email !!";
      //   isValid = false;
      // }
      if (!this.register.password) {
        this.msgError.passwordRegister = "Không được để trống !!";
        isValid = false;
      } else if (!this.validPassword(this.register.password)) {
        this.msgError.passwordRegister =
          " Password từ 8 kí tự bao gồm chữ hoa, chữ thường và số!";
        isValid = false;
      }
      return isValid;
    },
    async registerForm() {
      if(this.checkFormRegister()){
       const responsive =await axios.post(this.base_url+'auth/register' , {
            username:  this.register.user ,
            password : this.register.password
        })
        console.log(responsive.request.statusText)
        this.formShow ='login'
        alert("Đăng ký thành công !")
        
      }
    }
    ,
     async login() {
      if (this.checkForm()) {
        const responsive =await axios.post(this.base_url+'auth/login' , {
            username:  this.user.userName ,
            password : this.user.passWord

        })

        // console.log(responsive.data.token )
        // this.$router.push('/homepage')
        localStorage.setItem('token' ,responsive.data.token)
        localStorage.setItem('id' ,responsive.data.id)
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
  color : #6dabe4;
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
