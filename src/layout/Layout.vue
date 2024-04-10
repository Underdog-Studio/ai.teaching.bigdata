<template>
    <div class="relative min-w-screen min-h-screen bg-#040E27">
        <Header>
            <template #left>
                <BackIndex />
            </template>
            <template #right>
                <div class="flex">
                    <Times class="mr-20" />
                    <Weather />
                </div>
            </template>
        </Header>

        <div class="px-24 pt-24 pb-60">
            <RouterView></RouterView>
        </div>

        <img class="w-full absolute bottom-0" src="@/assets/images/bg_bottom-bar.png">
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>