<template>
    <BaseBox>
    <figure>
        <BaseLabel />
        <figcaption>{{ element.name }}</figcaption>
        <picture>
            <source  :srcset="element.photoPngDesktop" media="(min-width: 768px)"/>
            <source :srcset="element.photoWebpDesktop" media="(min-width: 768px)"/>
            <source :srcset="element.photoWebp"/>
            <img :src="element.photoPng" :alt="name" width="" height="" style="aspekt-ratio:"/>
        </picture>
<p v-if="element.sale">{{ element.sale }}</p>
<p>{{ element.price }}</p>
    </figure>
    </BaseBox>
</template>

<script setup>
import BaseLabel from "../UI/BaseLabel.vue"
defineProps({
    element: {
        type: Object,
        required: true,
    }
})
</script>