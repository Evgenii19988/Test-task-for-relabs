<template>
  <div class="login" v-loading="loading" element-loading-text="Авторизация...">
    <el-card>
      <h2>Авторизация</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.prevent="login"
      >
        <el-form-item prop="email">
          <h3>Электронная почта</h3>
          <el-input v-model="model.email" placeholder="Email" type="email">
            <template #prepend>
              <el-icon>
                <User />
              </el-icon> </template
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <h3>Пароль</h3>
          <el-input
            v-model="model.password"
            placeholder="Пароль"
            type="password"
          >
            <template #prepend>
              <el-icon>
                <Lock />
              </el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :disabled="!this.model.email || !this.model.password"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Авторизация</el-button
          >
        </el-form-item>
        <div class="forgot-password">
          <a href="#">Забыли пароль?</a>
        </div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import router from "@/router";
import { Lock, User } from "@element-plus/icons-vue";
export default {
  name: "LogIn",
  components: {
    User,
    Lock,
  },
  data() {
    return {
      model: {
        email: "",
        password: "",
      },
      loading: false,
      rules: {
        email: [
          {
            type: "email",
            message: "Пожалуйста, введите правильный email",
            trigger: ["blur", "change"],
          },
        ],
        password: [
          {
            min: 8,
            message: "Длина пароля должна быть не менее 8 символов",
            trigger: "blur",
          },
          {
            validator: this.validatePassword,
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    validatePassword(rule, value, callback) {
      if (!this.model.password) return;
      if (value === value.toLowerCase()) {
        return callback(new Error("Пароль должен содержать заглавную букву"));
      } else {
        callback();
      }
    },
    simulateLogin() {
      return new Promise((resolve) => {
        setTimeout(resolve, 3000);
      });
    },
    async login() {
      let valid = await this.$refs.form.validate();
      if (!valid) {
        return;
      }
      this.loading = true;
      await this.simulateLogin();
      this.loading = false;
      router.push("/main");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #102a43;
}

.login-button {
  width: 100%;
  margin-top: 40px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
  display: flex;
  justify-content: center;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;

  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
div.el-input-group__prepend {
  padding: 10px;
  background-color: #fff;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 20px;
}
h2 {
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
  text-align: center;
  font-size: 24px;
  font-weight: 600;
}
h3 {
  font-family: Roboto, sans-serif;
  font-weight: 300;
}
a {
  color: $teal;
  text-decoration: none;
  &:hover,
  &:active,
  &:focus {
    color: lighten($teal, 7);
  }
}
.login .el-card {
  width: 340px;
  display: flex;
  justify-content: center;
}
</style>
