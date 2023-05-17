<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="18"
    height="18"
    class="border-[1.6px] p-[1px] border-neutral-200 rounded-full cursor-pointer"
    :class="{'border-success-100': checked === true }"
  >
    <!--! Font Awesome Free 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.-->
    <path
      class="fill-primary-200"
      :class="{ hidden: checked === false}"
      d="M471 105c12 13 12 33 0 46L215 407a32 32 0 0 1-46 0L41 279a32 32 0 0 1 46-46l105 106 233-234c13-12 33-12 46 0z"
    />
  </svg>
</template>

<script setup>
defineProps({
  checked: {
    type: Boolean,
    default: false
  }
})
</script>
