<template>
  <div class="signView">
    <!-- <h1>SignIn Page</h1>
    <form @submit.prevent="signIn">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username"><br>

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="SignIn">
    </form> -->

    <!-- 로그인 -->
      <div class="login-wrap">
    <div class="login-html">
      <input id="tab-1" type="radio" name="tab" class="sign-in" checked><label for="tab-1" class="tab">Sign In</label>
      <input id="tab-2" type="radio" name="tab" class="sign-up"><label for="tab-2" class="tab">Sign Up</label>
      <div class="login-form">
        <div class="sign-in-htm">
          <div class="group">
            <label for="username" class="label">Username</label>
            <input id="username" type="text" class="input" v-model="username">
          </div>
          <div class="group">
            <label for="password" class="label">Password</label>
            <input id="password" type="password" class="input" data-type="password" v-model="password">
          </div>
          <div class="group">
            <input id="check" type="checkbox" class="check" checked>
            <label for="check"><span class="icon"></span> Keep me Signed in</label>
          </div>
          <div class="group">
            <input type="submit" class="button test" value="Sign In" @click="signIn">
          </div>
          <div class="hr"></div>
          <div class="foot-lnk">
            <a href="#forgot">Forgot Password?</a>
          </div>
        </div>


        <!-- 회원가입 -->
        <div class="sign-up-htm">
          <div class="group">
            <label for="username1" class="label">Username</label>
            <input id="username1" type="text" class="input" v-model="username1">
          </div>
          <div class="group">
            <label for="password1" class="label">Password</label>
            <input id="password1" type="password" class="input" data-type="password" v-model="password1">
          </div>
          <div class="group">
            <label for="password2" class="label">Repeat Password</label>
            <input id="password2" type="password" class="input" data-type="password" v-model="password2">
          </div>
          <div class="group">
            <input type="submit" class="button test" value="Sign Up" @click="signUp">
          </div>
          <div class="hr"></div>
          <div class="foot-lnk">
            <label for="tab-1">Already Member?</label>
          </div>
        </div>
      </div>
    </div>
  </div>


  </div>
</template>

<script>
export default {
  name: 'SignInView',
  data() {
    return {
      // signIn
      username: null,
      password: null,

      // signUp
      username1: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signIn() {
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }

      this.$store.dispatch('signIn', payload)

    },

    signUp() {
      // console.log('signup')
      const username1 = this.username1
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        username1, password1, password2
      }

      this.$store.dispatch('signUp', payload)
    }

  }
}
</script>

<style scoped>
.signView {
  /* margin-top: 80px; */
  margin: 80px;
  opacity: 0.9;
  box-shadow: 0 20px 50px rgba(255, 127, 0, 0.3);
}

*,:after,:before{box-sizing:border-box}
.clearfix:after,.clearfix:before{content:'';display:table}
.clearfix:after{clear:both;display:block}
a{color:inherit;text-decoration:none}

.login-wrap{
  width:100%;
  margin:auto;
  max-width:525px;
  min-height:670px;
  position:relative;
  background:url("~@/assets/bg.png") no-repeat center;
  box-shadow:0 12px 15px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19);
}
.login-html{
  width:100%;
  height:100%;
  position:absolute;
  padding:90px 70px 50px 70px;
  /* background:rgba(186, 197, 226, 0.9); */
  /* opacity: 1; */
}
.login-html .sign-in-htm,
.login-html .sign-up-htm{
  top:0;
  left:0;
  right:0;
  bottom:0;
  position:absolute;
  transform:rotateY(180deg);
  backface-visibility:hidden;
  transition:all .4s linear;
}
.login-html .sign-in,
.login-html .sign-up,
.login-form .group .check{
  display:none;
}
.login-html .tab,
.login-form .group .label,
.login-form .group .button{
  text-transform:uppercase;
}
.login-html .tab{
  font-size:22px;
  margin-right:15px;
  padding-bottom:5px;
  margin:0 15px 10px 0;
  display:inline-block;
  border-bottom:2px solid transparent;
}
.login-html .sign-in:checked + .tab,
.login-html .sign-up:checked + .tab{
  color:#fff;
  border-color:purple;;
}
.login-form{
  min-height:345px;
  position:relative;
  perspective:1000px;
  transform-style:preserve-3d;
}
.login-form .group{
  margin-bottom:15px;
}
.login-form .group .label,
.login-form .group .input,
.login-form .group .button{
  width:100%;
  color:#fff;
  display:block;
}
.login-form .group .input,
.login-form .group .button{
  border:none;
  padding:15px 20px;
  border-radius:25px;
  background:rgba(255,255,255,.1);
}
.login-form .group input[data-type="password"]{
  text-security:circle;
  -webkit-text-security:circle;
}
.login-form .group .label{
  color:#aaa;
  font-size:12px;
}
.login-form .group .button{
  /* background:#1161ee; */
  background:purple;
}
.login-form .group label .icon{
  width:15px;
  height:15px;
  border-radius:2px;
  position:relative;
  display:inline-block;
  background:rgba(255,255,255,.1);
}
.login-form .group label .icon:before,
.login-form .group label .icon:after{
  content:'';
  width:10px;
  height:2px;
  background:#fff;
  position:absolute;
  transition:all .2s ease-in-out 0s;
}
.login-form .group label .icon:before{
  left:3px;
  width:5px;
  bottom:6px;
  transform:scale(0) rotate(0);
}
.login-form .group label .icon:after{
  top:6px;
  right:0;
  transform:scale(0) rotate(0);
}
.login-form .group .check:checked + label{
  color:#fff;
}
.login-form .group .check:checked + label .icon{
  background:purple;;
}
.login-form .group .check:checked + label .icon:before{
  transform:scale(1) rotate(45deg);
}
.login-form .group .check:checked + label .icon:after{
  transform:scale(1) rotate(-45deg);
}
.login-html .sign-in:checked + .tab + .sign-up + .tab + .login-form .sign-in-htm{
  transform:rotate(0);
}
.login-html .sign-up:checked + .tab + .login-form .sign-up-htm{
  transform:rotate(0);
}

.hr{
  height:2px;
  margin:60px 0 50px 0;
  background:rgba(255,255,255,.2);
}
</style>
