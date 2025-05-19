<script setup lang="ts">
import { ref } from 'vue';
import { bookList } from '@/types';
import { BookOpenIcon } from '@heroicons/vue/24/solid'; // Assurez-vous d'importer l'icône

const booksList = ref<bookList[]>([
    {
        name: "1984",
        img: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SY522_.jpg",
        language: "english",
        dimension: "13.4 * 2.1 * 20.3 cm",
        author: "George Orwell",
        description: "1984 is a dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.",
        numberPage: 328
    },
    {
        name: "1984",
        img: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SY522_.jpg",
        language: "english",
        dimension: "13.4 * 2.1 * 20.3 cm",
        author: "George Orwell",
        description: "1984 is a dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.",
        numberPage: 328
    },
    {
        name : "Moby Dick",
        img : "https://m.media-amazon.com/images/I/61RlZQM+gwL._SY342_.jpg",
        language : "english",
        dimension : "14.0 * 2.0 * 21.0 cm",
        author : "Herman Melville",
        description: "Moby-Dick is a novel by Herman Melville, published in 1851. It tells the story of Captain Ahab's obsessive quest to kill the white whale Moby Dick",
        numberPage: 635
    },
    {
        name: "1984",
        img: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SY522_.jpg",
        language: "english",
        dimension: "13.4 * 2.1 * 20.3 cm",
        author: "George Orwell",
        description: "1984 is a dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.",
        numberPage: 328
    },
    {
        name: "1984",
        img: "https://m.media-amazon.com/images/I/71rpa1-kyvL._SY522_.jpg",
        language: "english",
        dimension: "13.4 * 2.1 * 20.3 cm",
        author: "George Orwell",
        description: "1984 is a dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell.",
        numberPage: 328
    },
]);
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 p-4 gap-4">
        <div 
            v-for="book in booksList" 
            :key="book.name" 
            class="book-card-container max-w-xs mx-auto"
        >
            <div class="relative overflow-hidden rounded-lg shadow-lg group h-80 w-56 transition-all duration-300 ease-in-out cursor-pointer">
                <!-- Image de couverture du livre -->
                <img 
                    :src="book.img" 
                    :alt="`Couverture du livre ${book.name}`" 
                    class="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:opacity-20"
                />
                
                <!-- Overlay d'information - invisible par défaut, visible au hover -->
                <div class="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center p-6 text-white">
                    <h3 class="text-2xl font-bold mb-2">{{ book.name }}</h3>
                    <h4 class="text-lg font-semibold mb-4">{{ book.author }}</h4>
                    <p class="text-sm mb-4">{{ book.description }}</p>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-xs bg-red-600 px-2 py-1 rounded">Fiction</span>
                        <button class="bg-white text-black text-xs font-bold px-3 py-1 rounded hover:bg-gray-200">
                            <span class="flex items-center gap-1">
                                <BookOpenIcon class="h-4 w-4" />
                                Lire plus
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Vous pouvez ajouter des styles spécifiques si nécessaire */
</style>
