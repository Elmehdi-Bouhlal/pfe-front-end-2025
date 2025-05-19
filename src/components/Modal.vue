<script lang="ts">
  export default {
    props: {
      data: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        userPhoto: '',
        user: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          notifications: true
        }
      }
    },
    mounted() {
      if (this.data && this.data.user) {
        this.user = { ...this.data.user };
        this.userPhoto = this.data.user.photo || '';
      }
    },
    methods: {
      closePopup() {
        this.$emit("close");
      },
      saveProfile() {
        this.$emit("save", this.user);
        this.closePopup();
      }
    }
  };
</script>

<template>
    <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300">
      <div class="bg-white dark:bg-gray-800 w-full max-w-2xl rounded-xl shadow-xl transform transition-all duration-300 ease-in-out">
        <div class="p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Éditer le profil</h2>
            <button @click="closePopup" class="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div class="space-y-6">
            <!-- Photo de profil -->
            <div class="flex flex-col sm:flex-row items-center gap-4">
              <div class="relative">
                <img 
                  :src="userPhoto || 'https://via.placeholder.com/100'" 
                  alt="Photo de profil" 
                  class="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />
                <button class="absolute bottom-0 right-0 bg-blue-600 text-white p-1 rounded-full hover:bg-blue-700">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
              </div>
              <div>
                <h3 class="text-lg font-medium text-gray-900 dark:text-white">Photo de profil</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400">JPG, GIF ou PNG. 1MB max.</p>
                <button class="mt-2 text-sm text-blue-600 dark:text-blue-400 font-medium">Changer la photo</button>
              </div>
            </div>
            
            <!-- Informations personnelles -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label for="firstName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Prénom</label>
                <input 
                  type="text" 
                  id="firstName" 
                  v-model="user.firstName" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label for="lastName" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom</label>
                <input 
                  type="text" 
                  id="lastName" 
                  v-model="user.lastName" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="user.email" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
              <div>
                <label for="phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  v-model="user.phone" 
                  class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              </div>
            </div>
            
            <!-- Adresse -->
            <div>
              <label for="address" class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Adresse</label>
              <textarea 
                id="address" 
                v-model="user.address" 
                rows="2" 
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              ></textarea>
            </div>
  
            <!-- Paramètres du compte -->
            <div>
              <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-3">Paramètres du compte</h3>
              <div class="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <div>
                  <p class="font-medium text-gray-800 dark:text-gray-200">Notifications</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">Recevoir des notifications par email</p>
                </div>
                <label class="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" v-model="user.notifications" class="sr-only peer">
                  <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>
            </div>
          </div>
          
          <div class="mt-8 flex justify-end space-x-4">
            <button 
              @click="closePopup" 
              class="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              Annuler
            </button>
            <button 
              @click="saveProfile" 
              class="px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white font-medium rounded-lg transition-colors duration-200 focus:outline-none"
            >
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
</template>
  