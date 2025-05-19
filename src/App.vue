<script setup lang="ts">
import { HeartIcon , BellIcon , UserCircleIcon , CurrencyDollarIcon } from "@heroicons/vue/24/solid";
import Footer from "./components/Footer.vue";
</script>

<template>
    <nav class="navbar">
        <!-- Logo et marque -->    
        <router-link to="/" class="navbar-brand">
            <svg class="logo-fish" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M16.7,15.3l-3,3 C13.5,18.1,13.3,18,13,18s-0.5,0.1-0.7,0.3l-3,3C9.1,21.5,8.9,21.6,8.6,21.6c-0.2,0-0.5-0.1-0.7-0.3l-3-3C4.6,18,4.5,17.8,4.5,17.5 s0.1-0.5,0.3-0.7l3-3C8,13.6,8.2,13.5,8.5,13.5s0.5,0.1,0.7,0.3l3,3c0.2,0.2,0.3,0.4,0.3,0.7s0.1,0.5,0.3,0.7l3,3 c0.2,0.2,0.4,0.3,0.7,0.3s0.5-0.1,0.7-0.3l3-3c0.4-0.4,0.4-1,0-1.4L16.7,15.3z M12,12c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2 S13.1,12,12,12z"/>
            </svg>
            <div class="brand-text">
                <span class="brand-name">KeazoN</span>
                <span class="brand-books">BOOKS</span>
            </div>
        </router-link>
        
        <!-- Barre de recherche -->
        <div class="search-container">
            <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="#999" d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
            <input type="text" class="search-input" placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot...">
        </div>
        
        <!-- Icônes de navigation -->
        <div class="navbar-icons">
            <button class="nav-icon">
                <HeartIcon />
            </button>
            <button class="nav-icon">
                <BellIcon />                
            </button>
            <router-link to="/packages" class="navbar-brand">
                <button class="nav-icon">
                    <CurrencyDollarIcon />
                </button>  
            </router-link>
            <router-link to="/profile">   
                <button class="nav-icon">
                    <UserCircleIcon />
                </button>  
            </router-link>
        </div>
    </nav>
    <div class="content">
        <router-view />
    </div>    
    
    <!-- footer -->
    <Footer></Footer>
</template>

<style scoped>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    .content{
        background: #242121;
        color: white;
        height: auto;
    }   
    /* Barre de navigation principale */
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: #292828;
        padding: 0.8rem 1rem;
        min-height: 60px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        flex-wrap: nowrap;
    }
        
    /* Logo et texte */
    .navbar-brand {
        display: flex;
        align-items: center;
        text-decoration: none;
        flex-shrink: 0;
    }
        
    .logo-fish {
        height: 32px;
        width: auto;
        fill: #4285f4;
        margin-right: 5px;
    }
        
    .brand-text {
        display: flex;
        flex-direction: column;
    }
        
    .brand-name {
        color: white;
        font-size: 1.5rem;
        font-weight: bold;
        letter-spacing: 0.5px;
        white-space: nowrap;
    }
        
    .brand-books {
        color: #cccccc;
        font-size: 0.9rem;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
        
    /* Barre de recherche */
    .search-container {
        flex-grow: 1;
        max-width: 600px;
        margin: 0 2rem;
        position: relative;
        min-width: 100px;
    }
        
    .search-input {
        width: 100%;
        padding: 0.5rem 1rem 0.5rem 2.5rem;
        border-radius: 5px;
        border: none;
        background-color: #333;
        color: #fff;
        font-size: 0.9rem;
    }
        
    .search-input::placeholder {
        color: #999;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
        
    .search-icon {
        position: absolute;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        color: #999;
        width: 16px;
        height: 16px;
    }
        
    /* Icônes de navigation */
    .navbar-icons {
        display: flex;
        align-items: center;
        flex-shrink: 0;
    }
        
    .nav-icon {
        color: #fff;
        margin-left: 1rem;
        font-size: 1.2rem;
        background: none;
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
    }
        
    .nav-icon svg {
        width: 24px;
        height: 24px;
    }
        
    /* Media Queries pour la responsivité */
    @media screen and (max-width: 768px) {
        .navbar {
            padding: 0.6rem;
        }
        
        .search-container {
            margin: 0 1rem;
        }
        
        .nav-icon {
            margin-left: 0.7rem;
        }
        
        .profile-icon {
            margin-left: 0.7rem;
        }
    }
        
    @media screen and (max-width: 576px) {
        .navbar {
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .navbar-brand {
            flex-basis: auto;
        }
        
        .search-container {
            order: 3;
            flex-basis: 100%;
            margin: 0.5rem 0 0 0;
            max-width: none;
        }
        
        .navbar-icons {
            margin-left: auto;
        }
        
        .nav-icon svg {
            width: 20px;
            height: 20px;
        }
    }
        
    /* Pour les très petits écrans */
    @media screen and (max-width: 350px) {
        .brand-books {
            display: none;
        }
        
        .nav-icon:nth-child(2) {
            display: none;
        }
    }
</style>
