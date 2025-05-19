<script setup lang="ts">
import { ref } from "vue";
import { EnvelopeIcon, MapPinIcon, UsersIcon, ArrowLeftIcon } from "@heroicons/vue/24/outline";
import { showPopup } from "@/utils/modal.ts";

interface User {
  name: string;
  last_name: string;
  avatar: string;
  package: string;
  username: string;
  bio: string;
  location: string;
  email: string;
  website: string;
  followers: number;
  following: number;
  interests: string[];
  facts: string[];
  repositories: Repository[];
  contributions: Contribution[];
}

interface Repository {
  name: string;
  description: string;
  isPublic: boolean;
  language?: string;
  languageColor?: string;
}

interface Contribution {
  date: string;
  count: number;
}

// Import de l'image de profil par défaut
import default_user_profile from "../assets/images/default_user_profile.jpg";
import { goBack } from "@/utils/helper";

// Données utilisateur mockées pour correspondre au style GitHub
const user_data = ref<User>({
  name: "Elmehdi Bouhlal",
  last_name: "",
  avatar: default_user_profile,
  package: "premium",
  username: "elmehdi-bouhlal",
  bio: "hello this is elmehdi bouhlal a full stack dev",
  location: "casablanca",
  email: "bouhlalmehdi5@gmail.com",
  website: "#",
  followers: 0,
  following: 1,
  interests: [
    "I'm interested in web development, especially in Full Stack technologies like Laravel and React.",
    "I'm currently learning advanced concepts in Laravel, JavaScript frameworks, and C programming.",
    "I'm looking to collaborate on open-source projects or any exciting web development projects.",
    "How to reach me: LinkedIn or via email at bouhlalmehdi5@gmail.com.",
    "Fun fact: I love exploring new programming languages and am passionate about digital transformation projects!"
  ],
  facts: [],
  repositories: [
    {
      name: "test",
      description: "",
      isPublic: true,
      language: "HTML",
      languageColor: "bg-orange-500"
    },
    {
      name: "myproject",
      description: "this is test repo",
      isPublic: true
    },
    {
      name: "project2",
      description: "this is test repo",
      isPublic: true
    },
    {
      name: "hmed",
      description: "",
      isPublic: true
    },
    {
      name: "Oven",
      description: "le projet oven",
      isPublic: true,
      language: "PHP",
      languageColor: "bg-blue-500"
    }
  ],
  contributions: Array.from({ length: 50 }, () => ({
    date: new Date().toISOString(),
    count: Math.floor(Math.random() * 4) // 0-3 contributions
  }))
});

const years = [2025, 2024, 2023];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const weekdays = ["Mon", "Wed", "Fri"];

const getContributionColor = (count: number) => {
  if (count === 0) return "bg-gray-800";
  if (count === 1) return "bg-green-900";
  if (count === 2) return "bg-green-700";
  return "bg-green-500";
};
</script>

<template>
  <div class="text-gray-300 min-h-screen">

    <!-- Container principal -->
    <div class="container mx-auto px-4 py-8">
      <h1 class="p-5 cursor-pointer w-full flex gap-2 items-center container" v-on:click="goBack"><ArrowLeftIcon style="width: 20px;"/> return</h1>

      <!-- Layout grid pour organiser le profil GitHub -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <!-- Colonne de gauche - Informations principales de l'utilisateur -->
        <div class="md:col-span-1">
          <!-- Photo de profil -->
          <div class="mb-4 container-avatar-image">
            <img :src="user_data.avatar" :alt="user_data.name">
          </div>

          <!-- Nom et bio -->
          <div class="mb-6">
            <h1 class="text-2xl font-bold text-white">{{ user_data.name }}</h1>
            <h2 class="text-xl font-medium text-gray-400">{{ user_data.username }}</h2>
            <p class="mt-3 text-gray-300">{{ user_data.bio }}</p>
          </div>

          <!-- Bouton Edit profile -->
          <button @click="showPopup({message:'test pop up'})" class="w-full px-3 py-1 mb-4 text-sm font-medium rounded-md border border-gray-600 bg-gray-900 hover:bg-gray-800 transition">
            Edit profile
          </button>

          <!-- Followers / Following -->
          <div class="flex items-center mb-4 text-sm gap-4">
            <UsersIcon class="icon-profile"/>
            <span><strong>{{ user_data.followers }}</strong> followers</span>
            <span class="mx-1">·</span>
            <span><strong>{{ user_data.following }}</strong> following</span>
          </div>

          <!-- Localisation, email, et site web -->
          <div class="space-y-2 mb-6">
            <div v-if="user_data.location" class="flex items-center text-sm gap-4">
                <MapPinIcon class="icon-profile"/>
              <span>{{ user_data.location }}</span>
            </div>
            <div v-if="user_data.email" class="flex items-center text-sm gap-4">
                <EnvelopeIcon class="icon-profile"/>
              <span>{{ user_data.email }}</span>
            </div>
          </div>

          <!-- Section organisations -->
          <div class="mb-6">
            <h2 class="text-base font-medium mb-2 text-white">Organizations</h2>
            <div class="flex">
              <a href="#" class="mr-2">
                <img src="https://via.placeholder.com/32" alt="Organization" class="w-8 h-8 rounded">
              </a>
            </div>
          </div>
        </div>

        <!-- Colonne de droite - Contenu principal -->
        <div class="md:col-span-3">
          <!-- Section README -->
          <div class="bg-gray-900 border border-gray-700 rounded-md mb-6">
            <div class="flex justify-between items-center p-3 border-b border-gray-700">
              <span class="text-sm font-medium">README.md</span>
              <button class="text-gray-400 hover:text-gray-300">
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"/>
                </svg>
              </button>
            </div>
            <div class="p-4">
              <!-- Contenu du README -->
              <h2 class="text-2xl mb-3 text-yellow-400">👋 Hi, I'm @{{ user_data.username }}</h2>

              <ul class="space-y-2 mb-4">
                <li v-for="(interest, index) in user_data.interests" :key="index" class="flex items-start">
                  <span class="mr-2 text-yellow-400" v-if="index === 0">👀</span>
                  <span class="mr-2 text-pink-500" v-else-if="index === 1">💞️</span>
                  <span class="mr-2 text-pink-500" v-else-if="index === 2">💞️</span>
                  <span class="mr-2 text-blue-400" v-else-if="index === 3">📫</span>
                  <span class="mr-2 text-amber-500" v-else-if="index === 4">⚡</span>
                  <span v-html="interest"></span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Section populaire repositories -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-base font-medium text-white">Popular books</h2>
              <a href="#" class="text-sm text-blue-400 hover:underline">Customize your pins</a>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div v-for="repo in user_data.repositories" :key="repo.name" class="bg-gray-900 border border-gray-700 rounded-md p-4">
                <div class="flex justify-between items-start mb-2">
                  <a href="#" class="text-blue-400 font-medium hover:underline">{{ repo.name }}</a>
                  <span class="text-xs px-2 py-0.5 rounded-full border border-gray-700">Public</span>
                </div>
                <p v-if="repo.description" class="text-sm text-gray-400 mb-4">{{ repo.description }}</p>
                <div v-if="repo.language" class="flex items-center text-xs">
                  <span :class="[repo.languageColor || 'bg-gray-500', 'w-3 h-3 rounded-full mr-1']"></span>
                  <span>{{ repo.language }}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Section contributions -->
          <div class="mb-6">
            <div class="flex justify-between items-center mb-4">
              <h2 class="text-base font-medium text-white">16 contributions in the last year</h2>
              <div class="flex items-center">
                <span class="text-sm mr-2">Contribution settings</span>
                <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Z"/>
                </svg>
              </div>
            </div>

            <div class="border border-gray-700 rounded-md bg-gray-900 p-4">
              <!-- Années -->
              <div class="flex justify-end mb-2 space-x-2">
                <button v-for="year in years" :key="year" class="text-sm px-3 py-1 rounded-md" :class="year === 2025 ? 'bg-blue-600 text-white' : 'hover:bg-gray-800'">
                  {{ year }}
                </button>
              </div>

              <!-- Graphique contributions -->
              <div class="flex mb-2">
                <div class="w-[40px] text-right pr-2">
                  <div v-for="day in weekdays" :key="day" class="h-[11px] my-[2px] text-xs text-gray-500">
                    {{ day }}
                  </div>
                </div>
                <div class="flex-grow grid grid-cols-12 gap-[3px]">
                  <div v-for="month in months" :key="month" class="flex flex-col">
                    <div class="h-6 text-xs text-gray-500 text-center">{{ month }}</div>
                    <div class="grid grid-rows-7 gap-[2px]">
                      <div v-for="i in 7" :key="i" class="w-[10px] h-[10px] rounded-sm" :class="getContributionColor(Math.floor(Math.random() * 4))"></div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Légende -->
              <div class="flex justify-between items-center text-xs text-gray-500">
                <a href="#" class="hover:text-blue-400">Learn how we count contributions</a>
                <div class="flex items-center">
                  <span class="mr-1">Less</span>
                  <div class="flex space-x-1">
                    <div class="w-[10px] h-[10px] rounded-sm bg-gray-800"></div>
                    <div class="w-[10px] h-[10px] rounded-sm bg-green-900"></div>
                    <div class="w-[10px] h-[10px] rounded-sm bg-green-700"></div>
                    <div class="w-[10px] h-[10px] rounded-sm bg-green-500"></div>
                  </div>
                  <span class="ml-1">More</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Section activité de contribution -->
          <div>
            <h2 class="text-base font-medium text-white mb-4">Contribution activity</h2>
            <div class="border-b border-gray-700 pb-3 mb-3">
              <h3 class="text-sm font-medium mb-3">March 2025</h3>
              <p class="text-sm text-gray-400">Elmehdi-Bouhlal has no activity yet for this period.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    .container-avatar-image{
        width: 296px;
        height: 296px;
    }
    .container-avatar-image img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 50%;
    }
    .icon-profile{
        width: 20px;
        height: 20px;
    }
</style>