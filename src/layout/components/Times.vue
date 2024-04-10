<template>
    <div class="flex justify-center items-center">
        <img class="w-24 mr-6" src="@/assets/images/i_time.svg" />
        <span class="text-(20 #fff) font-400">{{ time }}</span>
    </div>
</template>

<script setup lang="ts">
import moment from 'moment'

const time = ref();

function getTime() {
    time.value = moment().format('YYYY.MM.DD hh:mm:ss');
    requestAnimationFrame(getTime)
}

onMounted(() => {
    getTime();
})
</script>

<style scoped></style>