<script setup lang="ts">
    import {ref} from 'vue';

    // static data
    const CategoriesData = ref<String[]>([
        "Detective" ,
        "love" ,
        "Novel" ,
        "History" ,
        "Since fiction" ,
        "Fintastic" ,
        "More"
    ])
</script>

<template>
    <div class="w-full flex justify-center gap-1 p-1 mx-auto bg-gray-100 dark:bg-gray-600" role="group">
        <button v-for="(value,index) in CategoriesData" :key="index" type="button" class="px-5 py-1.5 text-xs font-medium text-gray-900 hover:bg-gray-200 dark:text-white dark:hover:bg-gray-700 rounded-lg">
            {{ value }}
        </button>
    </div>
</template>

<style scoped>
    button{
        cursor: pointer;
    }
</style>