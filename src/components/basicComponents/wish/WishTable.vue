<template>
  <section>
    <BaseBox variant="secondary">
      <table class="table-fixed w-full border-collapse text-left p-2">
        <BaseHeading tag="caption" title="Lista Produktów" class="sm:pb-3" />
        <!-- <colgroup span="5"></colgroup> -->
        <thead class="uppercase text-[11px] font-normal">
          <!-- <th v-for="keyName in keys" :key="keyName" scope="col">{{ keyName }}</th> -->
          <th scope="col" class="w-2/25 pl-2.5 pb-1.5">{{ keys[0] }}</th>
          <th scope="col" class="w-11/25 pt-1">{{ keys[1] }}</th>
          <th scope="col" class="w-5/25 sm:hidden pt-1">%</th>
          <th scope="col" class="hidden sm:table-cell w-5/25 pt-1">{{ keys[2] }}</th>
          <th scope="col" class="w-4/25 pt-1">{{ keys[3] }}</th>
          <th scope="col" class="w-3/25 pt-1 sm:hidden">wal.</th>
          <th scope="col" class="w-3/25 pt-1 hidden sm:table-cell">{{ keys[4] }}</th>
        </thead>
        <tbody class="divide-y-2 border-y-2">
          <tr
            v-for="{ id, name, sale, price, currency } in tableElements"
            :key="id"
            class="text-xxs font-medium"
          >
            <td class="w-2/25 pb-1 pt-[3px] pl-2.5">{{ id }}</td>
            <th class="w-11/25 font-medium">{{ name }}</th>
            <td class="w-5/25">{{ sale }}</td>
            <td class="w-4/25">{{ price }}</td>
            <td class="w-3/25">{{ currency }}</td>
          </tr>
        </tbody>
      </table>
    </BaseBox>
  </section>
</template>

<script setup>
import BaseBox from '../UI/BaseBox.vue'
import BaseHeading from '../UI/BaseHeading.vue'

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
