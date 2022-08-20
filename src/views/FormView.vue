<template>
  <div id="input-form">
    <div class="inner">
      <label for="name-input">姓名</label>
      <b-form-input
        placeholder="请输入姓名"
        id="name-input"
        v-model="name"
        name="name"
        v-validate="{ required: true, validname: true }"
        :class="{ red: errors.has('name') }"
      ></b-form-input>
      <span class="error-msg">{{ errors.first("name") }}</span>
      <br />
      <label for="id-input">身份证号</label>
      <b-form-input
        id="id-input"
        v-model="id"
        placeholder="请输入身份证号"
        name="code"
        v-validate="{ required: true, validcode: true }"
      ></b-form-input>
      <span class="error-msg">{{ errors.first("code") }}</span>
      <br />
      <b-button variant="primary" @click="get_info">查询</b-button>
    </div>
  </div>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {};
  },
  computed: {
    name: {
      get() {
        return this.$store.state.name;
      },
      set(vaule) {
        this.$store.commit("update_name", vaule);
      },
    },
    id: {
      get() {
        return this.$store.state.id;
      },
      set(vaule) {
        this.$store.commit("update_id", vaule);
      },
    },
  },

  methods: {
    get_info() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          router.push("/student");
        } else {
          console.log(this.$validator.errors.first("name"));
          console.log(this.$validator.errors.first("code"));
        }
      });
    },
    mounted() {},
  },
};
</script>

<style>
.error-msg {
  color: red;
  font-size: 15px;
}
.red {
  border-color: red;
}
#input-form {
  background-color: white;
   border-radius: 10px;
}
.inner{
  padding: 20px;
}
</style>