<template>
  <div>
    <Navbar />
    <div class="w-100 flex justify-center p-16">
      <div class="border-gray-700 px-32 justify-center flex text-center border-4 rounded-lg py-6">
        <div>
          <div class="mb-7">
            <label for="email" class="block text-sm font-medium leading-6 text-gray-700 my-4"
              >Total Amount Due</label
            >
            <div class="flex items-center border border-gray-300 p-1 rounded-md h-14">
              <input
                type="number"
                class="w-full px-2 py-1 outline-none"
                placeholder="Enter amount due"
                v-model="amountDue"
              />
            </div>
            <!-- <InputError v-if="hasErrorEmail">
            <p v-if="!validEmail && !emptyField">Invalid Email</p>
            <p v-if="emptyField">Email required</p>
          </InputError> -->
          </div>

          <div class="container mx-auto p-4">
            <button
              @click="addInput"
              class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add Customer
            </button>
            <div class="flex flex-wrap">
              <div v-for="(input, index) in customers" :key="index" class="w-full sm:w-1/3 p-2">
                <label for="" class="block text-sm font-medium leading-6 text-gray-700 my-4"
                  >Customer {{ index + 1 }}</label
                >
                <input
                  type="number"
                  v-model="input.weight"
                  class="w-full p-2 border border-gray-300 rounded"
                  :placeholder="'Input ' + (index + 1)"
                />
              </div>
            </div>
          </div>

          <div class="flex justify-center w-100">
            <button
              @click="calcSingleFee"
              class="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 mr-4"
            >
              Submit
            </button>

            <button
              @click="clearFields"
              class="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            >
              Reset
            </button>
          </div>

          <div v-if="feesCalculated" class="mt-4 text-center">
            <div class="bg-gray-700 text-white p-4">
              <h1>Customer Fees</h1>
            </div>

            <div class="flex flex-wrap">
              <div v-for="(input, index) in customers" :key="index" class="w-full sm:w-1/3 p-2">
                <label for="" class="block text-sm font-medium leading-6 text-gray-700 my-4"
                  >Customer {{ index + 1 }}</label
                >
                <input
                  type="number"
                  v-model="input.fee"
                  class="w-full p-2 border border-gray-300 rounded"
                  :placeholder="'Input ' + (index + 1)"
                  disabled
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import Navbar from '@/components/navbar.vue'

const feesCalculated = ref<boolean>(false)
const allCustomerWeight = computed<number>(() => {
  return customers.value.reduce((sum, item) => sum + item.weight, 0)
})
const amountDue = ref<number>(0)
const customers = ref<Array>([
  { weight: 0, fee: 0 },
  { weight: 0, fee: 0 },
  { weight: 0, fee: 0 }
])

const addInput = () => {
  customers.value.push({ value: 0, fee: 0 })
}

const calcSingleFee = () => {
  if (allCustomerWeight.value > 0) {
    customers.value.forEach((customer) => {
      customer.fee = ((customer.weight / allCustomerWeight.value) * amountDue.value).toFixed(2)
      console.log('Fee: ' + customer.fee)
    })
    feesCalculated.value = true
  }
}

const clearFields = () => {
  feesCalculated.value = false
  customers.value = [
    { weight: 0, fee: 0 },
    { weight: 0, fee: 0 },
    { weight: 0, fee: 0 }
  ]
  amountDue.value = 0
}
</script>

<style>
/* Global styles if needed */
</style>
