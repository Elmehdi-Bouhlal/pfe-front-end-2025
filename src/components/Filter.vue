<script setup lang="ts">
    import { ref } from 'vue'
    import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/vue/24/solid"

    const showAllPopulareCategories = ref(false)
    const showLastCategories = ref(false)
    const popularCategories = [
    "Memory books", "Novels", "Story books", "Travel books", 
    "Poetry books", "Biography books", "Religious books", 
    "Knowledge books", "Children's books"
    ]

    const newBookCategories = [
    "Memory books", "Novels", "Story books", 
    "Travel books", "Poetry books"
    ]
</script>

<template>
  <div class="max-w-md mx-auto p-4">
    <!-- Barre de recherche -->
    <form class="mb-4">   
      <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div>
        <input 
          type="search" 
          class="block w-full p-4 pl-10 text-sm rounded-lg border" 
          placeholder="Search..." 
          required 
        />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
    </form>

    <!-- Catégories populaires -->
    <div>
      <h4 class="border-b mb-2 pb-1 font-semibold">Popular Categories</h4>
      <transition-group name="fade" tag="div">
        <div 
          v-for="(category, index) in popularCategories.slice(0, showAllPopulareCategories ? popularCategories.length : 4)" 
          :key="index" 
          class="flex items-center mb-2 transition-all duration-300"
        >
          <input 
            :id="`popular-${index}`"
            type="checkbox" 
            class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label 
            :for="`popular-${index}`" 
            class="ml-2 text-sm"
          >
            {{ category }}
          </label>
        </div>
      </transition-group>

      <div 
        v-if="popularCategories.length > 4" 
        class="flex justify-center items-center mt-2"
      >
        <ChevronDownIcon 
          v-if="!showAllPopulareCategories" 
          @click="showAllPopulareCategories = true" 
          class="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition"
        />
        <ChevronUpIcon 
          v-if="showAllPopulareCategories" 
          @click="showAllPopulareCategories = false" 
          class="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition"
        />
      </div>
    </div>

    <!-- Nouvelles catégories de livres -->
    <div class="mt-6">
      <h4 class="border-b mb-2 pb-1 font-semibold">New Books Categories</h4>
      <transition-group name="fade" tag="div">
        <div 
          v-for="(category, index) in newBookCategories.slice(0, showLastCategories ? newBookCategories.length : 4)" 
          :key="index" 
          class="flex items-center mb-2 transition-all duration-300"
        >
          <input 
            :id="`new-${index}`"
            type="checkbox" 
            class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
          />
          <label 
            :for="`new-${index}`" 
            class="ml-2 text-sm "
          >
            {{ category }}
          </label>
        </div>
      </transition-group>

      <div 
        v-if="newBookCategories.length > 4" 
        class="flex justify-center items-center mt-2"
      >
        <ChevronDownIcon 
          v-if="!showLastCategories" 
          @click="showLastCategories = true" 
          class="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition"
        />
        <ChevronUpIcon 
          v-if="showLastCategories" 
          @click="showLastCategories = false" 
          class="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700 transition"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s ease;
    }

    .fade-enter-from,
    .fade-leave-to {
        opacity: 0;
    }
</style>
