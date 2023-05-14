<template>
  <section>
    <BaseBox>
      <table>
        <caption>
          Lista Produktów
        </caption>
        <colgroup span="5"></colgroup>
        <tr>
          <th v-for="keyName in keys" :key="keyName" scope="col">{{ keyName }}</th>
        </tr>
        <tr v-for="{id, name, sale, price, currency} in tableElements" :key="id">
          <td>{{ id }}</td>
          <td>{{ name }}</td>
          <td>{{ sale }}</td>
          <td>{{ price }}</td>
          <td>{{ currency }}</td>
        </tr>
      </table>
    </BaseBox>
  </section>
</template>

<script setup>
import BaseBox from '../UI/BaseBox.vue'

defineProps({
  keys: {
    type: String,
    required: true
  },

  tableElements: {
    type: Array,
    required: true
  }
})
</script>
