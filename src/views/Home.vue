<script setup lang="ts">
import NewBooks from '@/components/NewBooks.vue';
import Categories from '@/components/Categories.vue';
import Filter from '@/components/Filter.vue';
import Books from '@/components/Books.vue';

</script>

<template>   
    <Categories />
    <NewBooks />
    <div class="container-home my-5 p-2">
        <div class="filter-container">
            <Filter />
        </div>
        <div class="books-list">
            <Books />
        </div>
    </div>    
</template>

<style scoped>

    .container-home {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: repeat(5, 1fr);
        gap: 8px;
    }
        
    .filter-container {
        grid-row: span 5 / span 5;
    }

    .books-list {
        grid-column: span 4 / span 4;
        grid-row: span 5 / span 5;
    }
        
</style>
