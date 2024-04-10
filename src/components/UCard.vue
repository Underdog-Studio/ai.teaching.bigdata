<template>
    <div>
        <div class="flex-(~ items-center) mb-12">
            <img class="w-20 mr-7" src="@/assets/images/i_item.svg" />
            <span class="text-(16 #fff) font-600">{{ props.title }}</span>
            <div class="flex-(~ items-end gap-x-15) ml-auto cursor-pointer">
                <span v-for="tab of props.tabs" :key="tab.key"
                    :class="tab.key === props.tab ? 'text-(20 #17FCFE)' : 'text-(16 #fff)'"
                    @click="() => emit('update:tab', tab.key)">{{ tab.value }}</span>
            </div>
        </div>
        <div class="flex h-3">
            <div class="w-34 h-full bg-#fff"></div>
            <div class="flex-1 self-end h-1 bg-#818693"></div>
            <div class="w-12 h-full bg-#18FEFE"></div>
        </div>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
export interface Tab {
    key: string;
    value: string;
}

interface Props {
    title: string;
    tab?: string;
    tabs?: Tab[];
}

interface Emits {
    (e: 'update:tab', value: string): void;
}

const props = withDefaults(defineProps<Props>(), {
    tabs: () => []
});
const emit = defineEmits<Emits>();


</script>

<style scoped></style>