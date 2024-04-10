<template>
    <div
        class="h-100 box-border bg-[url(@/assets/images/bg_title-bar.png)] bg-[length:100%_100%] px-24 pt-20 grid grid-cols-[repeat(3,1fr)] justify-items-center">
        <div class="justify-self-start">
            <slot name="left"></slot>
        </div>
        <span class="text-(36 #B1F5FC) font-1000 mx-30">{{ route.meta?.title }}</span>
        <div class="justify-self-end">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const route = useRoute();
</script>

<style scoped></style>