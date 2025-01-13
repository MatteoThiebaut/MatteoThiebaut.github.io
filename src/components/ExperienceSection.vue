<template>
    <section class="text-white mt-20" id="Experiences">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">Expériences</h2>
        </div>
        <div
            class="py-8 xl:px-16 px-4 sm:py-16 grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2 md:gap-10 md:pt-12 lg:grid-cols-3">
            <div v-for="service in services" :key="service.id" data-aos="fade-up"
                class="px-8 py-12 rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641]">
                <div class="mx-auto h-24 w-24 text-center xl:h-28 xl:w-28">
                    <div>
                        <img :src="service.icon" alt="service icon">
                    </div>
                </div>
                <div class="text-center">
                    <h3
                        class="pt-8 text-lg font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500 lg:text-xl">
                        {{ service.name }}
                    </h3>
                    <p class="text-gray-400 text-sm group-hover:text-white md:text-base">
                        {{ service.date }}
                    </p>
                    <p class="text-gray-400  text-sm group-hover:text-white md:text-base">
                        {{ service.type }}
                    </p>
                    <p class="text-gray-400  text-sm group-hover:text-white md:text-base">
                        {{ service.entreprise }}
                    </p>
                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import { ref } from 'vue';
const services = ref([
    {
        id: 1,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Développeur Full Stack',
        entreprise: 'New Walkings',
        type: 'Alternance',
        date: '2022-2024 (2 ans)',
        description: 'Réalisation de plusieurs sites e-commerce avec Prestashop et Wordpress. Automatisation et gestion des stocks avec Symfony et SQL. Animation et Design des sites avec Javascript, Bootstrap, Smarty et CSS.',
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Développeur Web',
        entreprise: 'Ré’veil',
        type: 'Projet Personnel (1 mois)',
        date: '2023',
        description: 'Réalisation d’un site Wordpress pour présenter une entreprise proposant des services d’éveil musical pour les enfants',
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Développeur Web',
        entreprise: 'Esperance 08',
        type: 'Stage (3 mois)',
        date: '2022',
        description: 'Réalisation d’un site Wordpress au sein des locaux pour présenter une association d’accompagnement et d’insertion sociale.',
    },

])
</script>