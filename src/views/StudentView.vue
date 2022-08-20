<template>
  <div id="student_info" class="msg-info">
  
    <h3 v-if="class_number != -1 && state_code==200" >查询结果</h3>
    <br>
    <b-table-simple v-if="class_number != -1 && state_code==200">
      
      <b-tbody>

        <b-tr>
          <b-td ><h5>姓名</h5></b-td>
          <b-td ><h5>{{ $store.state.name }}</h5></b-td>
        </b-tr>
        <b-tr>
          <b-td ><h5>班级</h5></b-td>
          <b-td ><h5>一年级{{ class_number }}班</h5></b-td>
        </b-tr>
        <b-tr>
          <b-td ><h5> 班级群</h5> </b-td>
          <b-td >
            <img :src="qr_link" alt="班级群二维码" width="150" />
            <br />
            <span>群号：{{ qq_number }}</span>
            <b-link href="#" @click.prevent="copy_qq_number" class="cpy"
              >复制</b-link
            >
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
    <b-toast id="copy-result" no-close-button auto-hide-delay="1000"
      >复制成功</b-toast
    >
    <h3 v-if="class_number == -1 || state_code==404">{{error_massage}}</h3>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      qq_number: "",
      class_number: "",
      state_code: 403,
    };
  },
  computed: {
    qr_link() {
      if (this.qq_number!=='')
      return `http://47.94.97.157/qrcode/${this.qq_number}.png`;
      else 
          return ""
    },
    error_massage(){
      return this.state_code == 404 ? "服务器连接失败": "没有查询到相关结果"
    }
  },
  methods: {
    copy_qq_number() {
      this.$copyText(this.qq_number.toString()).then(
        (e) => {
          this.$bvToast.show("copy-result"), e;
        },
        (e) => {
          alert("复制失败",e.text);
        }
      );
    },
  },
  mounted() {
    axios
      .post("http://47.94.97.157/query_class", {
        name: this.$store.state.name,
        number: this.$store.state.id,
      })
      .then((res) => {
        this.qq_number = res.data["qq_number"];
        this.class_number = res.data["class_number"];
        this.state_code = res.status
      })
      .catch((err) => {
        console.log(err);
        this.state_code=404
      });
  }
};
</script>

<style>
h3 {
  text-align: center;
}
.cpy {
  margin: 20px;
}
.msg-info{
  padding: 30px 30px;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color:white ;
}
</style>