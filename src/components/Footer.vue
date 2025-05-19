<script setup lang="ts">

</script>

<template>
    <footer class="footer">
        <div class="footer-column">
            <h3 class="footer-title border-b">À propos</h3>
            <ul class="footer-links">
                <li><a href="#">Notre histoire</a></li>
                <li><a href="#">Équipe</a></li>
                <li><a href="#">Carrières</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3 class="footer-title border-b">Services</h3>
            <ul class="footer-links">
                <li><a href="#">Nos produits</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Tarifs</a></li>
            </ul>
        </div>

        <div class="footer-column">
            <h3 class="footer-title border-b">Contact</h3>
            <ul class="footer-links">
                <li><a href="#">Email</a></li>
                <li><a href="#">Téléphone</a></li>
                <li><a href="#">Adresse</a></li>
            </ul>
        </div>

        <div class="footer-bottom">
            <div class="social-icons">
                <a href="#" class="social-icon">Facebook</a>
                <a href="#" class="social-icon">Twitter</a>
                <a href="#" class="social-icon">LinkedIn</a>
            </div>
            <p>&copy; 2025 KeazoNBOOKS . Tous droits réservés.</p>
        </div>
    </footer>
</template>

<style scoped>
    /* Footer */
    .footer {
        background-color: #292828;
        color: white;
        padding: 2rem 1rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: flex-start;
        gap: 1rem;
        box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
    }

    .footer-column {
        flex: 1;
        min-width: 200px;
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .footer-title {
        color: #4285f4;
        font-size: 1.2rem;
        margin-bottom: 1rem;
        font-weight: bold;
        letter-spacing: 0.5px;
    }

    .footer-links {
        list-style: none;
        padding: 0;
    }

    .footer-links li {
        margin-bottom: 0.5rem;
    }

    .footer-links a {
        color: #cccccc;
        text-decoration: none;
        transition: color 0.3s ease;
    }

    .footer-links a:hover {
        color: white;
    }

    .footer-bottom {
        width: 100%;
        text-align: center;
        padding-top: 1rem;
        border-top: 1px solid #333;
        margin-top: 1rem;
        font-size: 0.9rem;
    }

    .social-icons {
        display: flex;
        justify-content: center;
        gap: 1rem;
        margin-top: 1rem;
    }

    .social-icon {
        color: #cccccc;
        font-size: 1.5rem;
        transition: color 0.3s ease;
    }

    .social-icon:hover {
        color: white;
    }

    /* Responsive */
    @media screen and (max-width: 768px) {
        .footer {
            flex-direction: column;
        }

        .footer-column {
            width: 100%;
        }
    }
</style>