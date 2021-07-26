<template>
  <div class="grid grid-row-3  gap-4">
    <div style="margin-top:1rem" class="">
      <label for="name">รายละเอียด :</label>
      <input class="addForm" type="text" v-model="form.detail" />
    </div>

    <div class="">
      <label for="name">จำนวน :</label>
      <input class="addForm" type="number" v-model="form.amount" />
    </div>

    <div>
      <label for="type">วันที่ :</label>
      <input class="addForm" type="date" v-model="form.day" />
    </div>
    <div>
      
    </div>

    <div style="margin-bottom:2rem">
      <button type="button" class="bg-green-500 text-white px-6 py-2 rounded font-medium mx-3 hover:bg-green-600 transition duration-200 each-in-out" @click="addPayment">Add</button>
    </div>
  </div>
</template>

<script>
import PaymentStore from "@/store/Payment";
export default {
    props:{
        FormMethod: String
    },
  data() {
    return {
      form: {
        detail: "",
        amount: "",
        day: "",
      },
    };
  },
  methods: {
    clearForm() {
      this.form = {
        detail: "",
        amount: "",
        day: "",
      };
    },
    addPayment() {
      // let payload = this.form
      let payload = {
        detail: this.form.detail,
        amount: this.form.amount,
        day: this.form.day,
      };
      // เรียก action ใน pkemon store เพื่อเพิ่มข้อมูล
      PaymentStore.dispatch(this.FormMethod, payload);
      console.log(payload);
      this.clearForm();
    },
  },
};
</script>

<style>
.addForm{
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>
