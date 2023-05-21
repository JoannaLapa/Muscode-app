<template>
  <section class="lg:col-start-2 lg:col-end-4 w-fit">
    <BaseBox variant="secondary">
      <table class="table-fixed w-full border-collapse text-left p-2">
        <BaseHeading tag="caption" title="Lista Produktów" class="sm:pb-2" />
        <!-- <colgroup span="5"></colgroup> -->
        <thead class="uppercase text-xs">
          <th scope="col" class="w-2/25 pl-2.5 pt-1.5 pb-0.5 font-medium">{{ keys[0] }}</th>
          <th scope="col" class="w-11/25 pt-1.5 font-medium pb-0.5">{{ keys[1] }}</th>
          <th scope="col" class="w-5/25 lg:hidden pt-1.5 font-medium pb-0.5">%</th>
          <th scope="col" class="hidden lg:table-cell w-5/25 pt-1.5 font-medium text-xxs pb-0.5">{{ keys[2] }}</th>
          <th scope="col" class="w-4/25 pt-1.5 font-medium pb-0.5">{{ keys[3] }}</th>
          <th scope="col" class="w-3/25 pt-1.5 lg:hidden font-medium pb-0.5">wal.</th>
          <th scope="col" class="w-3/25 pt-1.5 hidden lg:table-cell font-medium pb-0.5">{{ keys[4] }}</th>
        </thead>
        <tbody class="divide-y-1.5 border-y-1.5 border-neutral-200 divide-neutral-200">
          <tr
            v-for="{ id, name, sale, price, currency } in tableElements"
            :key="id"
            class="text-xs font-normal hover:bg-neutral-100 transition duration-300"
          >
            <td class="w-2/25 pb-1 pt-0.7 pl-2.5">{{ id }}</td>
            <th class="w-11/25 font-normal pb-1 pt-0.7">{{ name }}</th>
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
