<template>
  <div class="flex justify-center">
    <div>
      <table class="table-fixed tableStyle">
        <thead>
          <tr>
            <th class="w-1/2 ...">รายละเอียด</th>
            <th class="w-1/4 ...">จำนวน</th>
            <th class="w-1/4 ...">วันที่</th>
          </tr>
        </thead>
        <tbody class="tableStyle">
            <tr v-for="(payment, index) in paymentMethod" :key="index">
              <td>
                {{payment.detail}}
              </td>
              <td>
                 {{payment.amount}}
              </td>
              <td>
                 {{payment.day}}
              </td>
            </tr>
        </tbody>
      </table>
      <p>{{msg}} {{totalAmount}}</p>
    </div>
  </div>
</template>

<script>
import PaymentStore from "@/store/Payment";
import PaymentButton from "@/components/PaymentButton";

export default {
  props:{
    paymentMethod: Array,
    // rairubPayments: Array,
    // raijaiPayments: Array,
    msg: String
  },
  data() {
    return {
      // rairubPayments: this.rairubPayments,
      // raijaiPayments: this.raijaiPayments,
      pMethod: this.paymentMethod,
      form: {
        detail: "",
        amount: "",
        day: "",
      },
      totalAmount: 0,
    };
  },
  created(){
    this.getTotalAmount()
  },
  beforeUpdate(){
    this.getTotalAmount()
  },
  components: {
    PaymentButton,
  },
  methods: {
    
    getAddIndex() {
      this.addIndex = PaymentStore.getters.addIndex;
    },
    
    getTotalAmount(){
      this.totalAmount = 0
      this.pMethod.forEach(element => {
        // console.log(element.amount);
        this.totalAmount += parseInt(element.amount)
        console.log(this.totalAmount);
      });
    }
  },
  
};
</script>

<style>
.tableStyle{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
.tableStyle th {
  padding-top: 12px;
  padding-bottom: 12px;
  background-color: #04AA6D;
  color: white;
}
.tableStyle > tr:nth-child(even){background-color: #f2f2f2;}
.tableStyle > tr:hover{
  background-color: #ddd;
}
</style>
