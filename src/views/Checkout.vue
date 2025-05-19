<script setup>
  import { 
    CreditCardIcon, 
    LockClosedIcon, 
    PlusIcon, 
    ChevronDownIcon,
    CurrencyDollarIcon,
    ShieldCheckIcon,
    ArrowLeftIcon
  } from '@heroicons/vue/24/outline';
  import { goBack } from '@/utils/helper';
</script>

<template>
    <div class="min-h-screen bg-[#242121] text-white py-8">        
      <div class="max-w-6xl mx-auto px-4">
        <h1 class="py-[31px] px-0 cursor-pointer w-full flex gap-2 items-center container" v-on:click="goBack"><ArrowLeftIcon style="width: 20px;"/> Check and subscribe</h1>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <!-- Formulaire de paiement (occupe 2/3 de l'espace sur desktop) -->
          <div class="lg:col-span-2">
            <div class="bg-gray-800 rounded-xl shadow-xl overflow-hidden">
              <div class="p-6 border-b border-gray-700">
                <h2 class="text-2xl font-bold mb-1">Vérifier et s'abonner</h2>
                <p class="text-gray-400">Économisez avec la facturation annuelle - 96 $ de réduction (24 $/mois)</p>
              </div>
              
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-4">Moyen de paiement</h3>
                <p class="text-gray-400 mb-4">Choisissez comment vous souhaitez payer pour votre abonnement</p>
                
                <!-- Méthodes de paiement avec icônes -->
                <div class="flex space-x-4 mb-6">
                  <div class="h-10 w-14 bg-white rounded flex items-center justify-center">
                    <span class="text-black text-xs font-bold">VISA</span>
                  </div>
                  <div class="h-10 w-14 bg-white rounded flex items-center justify-center">
                    <span class="text-black text-xs font-bold">MASTER</span>
                  </div>
                  <div class="h-10 w-14 bg-white rounded flex items-center justify-center">
                    <span class="text-black text-xs font-bold">AMEX</span>
                  </div>
                </div>
  
                <!-- Option carte de crédit -->
                <div class="mb-6">
                  <label class="flex items-center space-x-3 mb-4 cursor-pointer">
                    <input type="radio" name="paymentMethod" checked class="form-radio h-5 w-5 text-[#155dfc] focus:ring-[#155dfc]">
                    <span class="text-white">Carte de crédit ou de débit</span>
                  </label>
                  
                  <div class="space-y-4">
                    <!-- Nom et prénom -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1">Prénom</label>
                        <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1">Nom</label>
                        <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                      </div>
                    </div>
                    
                    <!-- Numéro de carte -->
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-1">Numéro de carte</label>
                      <div class="relative">
                        <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                          <CreditCardIcon class="h-5 w-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                    
                    <!-- Date d'expiration et CVV -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1">MM / AA</label>
                        <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1">CVV</label>
                        <div class="relative">
                          <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                          <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                            <LockClosedIcon class="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <!-- Adresse -->
                    <div>
                      <label class="block text-sm font-medium text-gray-300 mb-1">Adresse</label>
                      <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                      <button class="text-[#155dfc] text-sm mt-1 flex items-center">
                        <PlusIcon class="h-4 w-4 mr-1" />
                        Ajouter une ligne
                      </button>
                    </div>
                    
                    <!-- Pays et code postal -->
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1">Pays/région</label>
                        <div class="relative">
                          <select class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white appearance-none focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                            <option>Maroc</option>
                            <option>France</option>
                            <option>Canada</option>
                          </select>
                          <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <ChevronDownIcon class="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </div>
                      <div>
                        <label class="block text-sm font-medium text-gray-300 mb-1">Code postal</label>
                        <input type="text" class="w-full bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-[#155dfc] focus:border-[#155dfc]">
                      </div>
                    </div>
                  </div>
                </div>
                
                <!-- Option PayPal -->
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input type="radio" name="paymentMethod" class="form-radio h-5 w-5 text-[#155dfc] focus:ring-[#155dfc]">
                  <span class="text-white flex items-center">
                    <span class="mr-2">PayPal</span>
                    <CurrencyDollarIcon class="h-5 w-5 text-gray-400" />
                  </span>
                </label>
              </div>
            </div>
          </div>
          
          <!-- Résumé de la commande (occupe 1/3 de l'espace sur desktop) -->
          <div>
            <div class="bg-gray-800 rounded-xl shadow-xl">
              <div class="p-6">
                <h3 class="text-xl font-semibold mb-6">Forfait Basic</h3>
                
                <div class="space-y-4 mb-6">
                  <div class="flex justify-between">
                    <span class="text-gray-400">Aujourd'hui</span>
                    <span>Essai gratuit</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-400">28 mars 2025</span>
                    <span>1,00 $/mois</span>
                  </div>
                  <div class="flex justify-between">
                    <span class="text-gray-400">26 juin 2025</span>
                    <span>32,00 $/mois</span>
                  </div>
                  
                  <div class="border-t border-gray-700 pt-4">
                    <div class="flex justify-between font-semibold">
                      <span>Montant dû</span>
                      <span>28 mars 2025</span>
                    </div>
                  </div>
                  <div class="flex justify-between text-gray-300">
                    <span>1,00 $ USD</span>
                    <span class="text-gray-400 text-sm">plus taxes applicables</span>
                  </div>
                </div>
                
                <button class="w-full bg-[#155dfc] text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors">
                  S'abonner
                </button>
                
                <p class="text-center mt-4 text-sm text-gray-400 flex items-center justify-center">
                  <ShieldCheckIcon class="h-4 w-4 mr-1" />
                  Modifiez ou annulez votre forfait à tout moment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>
  