<template>
  <div>
    <div>
      <payment-header></payment-header>
    </div>

    <div class="grid grid-cols-2  divide-x divide-green-500 ">
      <div class="place-items-center">
        <div class="addButton  text-2xl ">
          <p>รายรับ</p>
          <!-- <payment-header2 msg="Raai Rub" theme=""></payment-header2> -->
          <div class="flex w-auto h-auto float-right"
                @click="openRaiRubForm">
            <div class="flex-1 h-full">
              <div
                class="flex items-center justify-center flex-1 h-full p-2 bg-green-500 text-white shadow rounded-full"
              >
                <div class="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="display:none" id="rairubForm">
          <add-payment-form FormMethod="addRRPayment"></add-payment-form>
        </div>
        <payment-table
          v-if="RRstatus"
          msg="รายรับรวม :"
          :paymentMethod="RRMethod"
        ></payment-table>
      </div>
      <div>
        <div class="addButton text-2xl">
          <p>รายจ่าย</p>
          <!-- <payment-header2 msg="Raai Rub" theme=""></payment-header2> -->
          <div class="flex w-auto h-auto float-right"
                @click="openRaiJaiForm">
            <div class="flex-1 h-full">
              <div
                class="flex items-center justify-center flex-1 h-full p-2 bg-green-500 text-white shadow rounded-full"
              >
                <div class="relative">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display:none" id="raijaiForm">
          <add-payment-form FormMethod="addRJPayment"></add-payment-form>
        </div>
        <payment-table
          v-if="RJstatus"
          msg="รายจ่ายรวม :"
          :paymentMethod="RJMethod"
        ></payment-table>
      </div>
    </div>
    <div>ยอดคงเหลือ : {{ totalAmount }}</div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import PaymentHeader from "@/components/PaymentHeader";
import PaymentHeader2 from "@/components/Header2";
import PaymentTable from "@/components/PaymentTable";
import PaymentButton from "@/components/PaymentButton";
import AddPaymentForm from "@/components/AddPaymentForm";
import PaymentStore from "@/store/Payment";

export default {
  components: {
    PaymentTable,
    PaymentHeader,
    PaymentHeader2,
    PaymentButton,
    AddPaymentForm,
  },
  data() {
    return {
      RRMethod: [],
      RJMethod: [],
      RRstatus: false,
      RJstatus: false,
      totalAmount: 0,
    };
  },
  created() {
    this.fetchRRPayment();
    this.fetchRJPayment();
  },
  beforeUpdate() {
    let RR = 0;
    let RJ = 0;
    this.RRMethod.forEach((element) => {
      RR += parseInt(element.amount);
    });
    this.RJMethod.forEach((element) => {
      RJ += parseInt(element.amount);
    });
    console.log(RR, "  ", RJ);
    this.totalAmount = RR - RJ;
  },
  methods: {
    openRaiRubForm() {
      var x = document.getElementById("rairubForm");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    openRaiJaiForm() {
      var x = document.getElementById("raijaiForm");
      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    async fetchRRPayment() {
      await PaymentStore.dispatch("fetchRRPayment");

      this.RRMethod = PaymentStore.getters.RRpayments;
      console.log(this.RRMethod);
      this.RRstatus = true;
    },
    async fetchRJPayment() {
      await PaymentStore.dispatch("fetchRJPayment");

      this.RJMethod = PaymentStore.getters.RJpayments;
      console.log(this.RJMethod);
      this.RJstatus = true;
    },
  },
};
</script>

<style>
.addButton {
  background-color: #ceb972;
  color: white;
}
</style>
