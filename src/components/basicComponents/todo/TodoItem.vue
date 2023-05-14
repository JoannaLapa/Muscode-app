<template>
    <li>
        <input
          type="checkbox"
          id="id"
          value="description"
        />
        <label for="description">{{ description }}</label>
    </li>
</template>

<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
 description: {
    type: String,
    required: true,
  },
});
</script>