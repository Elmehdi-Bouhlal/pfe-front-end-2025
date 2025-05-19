<script setup lang="ts">
    import { ref } from 'vue';
    import { bookList } from '@/types';

    const LastBooks = ref<bookList[]>([
        {
            name : "أربعون 40",
            img : "https://m.media-amazon.com/images/I/61O0KC9TonL._SY425_.jpg",
            language : "arabic",
            dimension : "13.6 * ",
            author : "أحمد الشقيري",
            description:"In this book, I summarize my journey through 40 years in this world. A journey of conflict and an attempt at continuous advancement in search of inner peace. I don't claim to have arrived. The road is still long. But it is a human experience that you may see yourself in and benefit from.",
            numberPage: 267
        },
        {
            name : "1984",
            img : "https://m.media-amazon.com/images/I/71rpa1-kyvL._SY522_.jpg",
            language : "english",
            dimension : "13.4 * 2.1 * 20.3 cm",
            author : "George Orwell",
            description: "1984 is a dystopian social science fiction novel and cautionary tale, written by the English writer George Orwell. It presents a totalitarian society controlled by Big Brother, where truth and privacy are manipulated.",
            numberPage: 328
        },
        {
            name : "Moby Dick",
            img : "https://m.media-amazon.com/images/I/61RlZQM+gwL._SY342_.jpg",
            language : "english",
            dimension : "14.0 * 2.0 * 21.0 cm",
            author : "Herman Melville",
            description: "Moby-Dick is a novel by Herman Melville, published in 1851. It tells the story of Captain Ahab's obsessive quest to kill the white whale Moby Dick, symbolizing the dangerous pursuit of an all-consuming goal.",
            numberPage: 635
        }
    ])

</script>

<template>
    <h1 class="mb-4 my-2 text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Our Popular Books</h1>
    <div class="flex flex-wrap justify-center gap-4 my-2">
        <a 
            href="#" 
            v-for="(book, index) in LastBooks" 
            :key="index" 
            class="flex items-center w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-800"
        >
            <div class="w-48 h-48 flex-shrink-0">
                <img 
                    class="w-full h-full object-cover" 
                    :src="book.img" 
                    :alt="book.name"
                >
            </div>
            <div class="flex flex-col p-4 flex-grow">
                <h5 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                    {{book.name}}
                </h5>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
                    {{book.description}}
                </p>
                <div class="flex justify-between items-center mt-2">
                    <span class="text-sm text-gray-500 dark:text-gray-400">
                        Détails du livre
                    </span>
                    <button class="px-3 py-1 bg-blue-500 text-white rounded-md text-sm hover:bg-blue-600 transition-colors">
                        Voir plus
                    </button>
                </div>
            </div>
        </a>
    </div>
</template>

<style scoped>

</style>