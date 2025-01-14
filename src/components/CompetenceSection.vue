<template>
    <section class="text-white mt-20" id="competences">
        <div class="px-4 xl:pl-16">
            <h2 class="text-4xl font-bold text-white mb-4">Compétences</h2>
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

                    <p class="text-grey pt-4 text-sm group-hover:text-white md:text-base">
                        {{ service.description1 }}
                        <br>
                        {{ service.description2 }}
                        <br>
                        {{ service.description3 }}
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
        name: 'Programmation',
        description1: 'Langage : HTML / CSS / PHP / JavaScript / Java / Smarty / Flutter ',
        description2: 'Framework : Bootstrap / TailwindCSS / Laravel / Symfony',
        description3: '',
    },
    {
        id: 2,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Logiciels',
        description1: 'CMS : Wordpress / Prestashop',
        description2: 'Outils: Git, Github, Github Actions, API REST',
        description3: '',
    },
    {
        id: 3,
        icon: 'https://img.icons8.com/ios-filled/100/ffffff/google-code.png',
        name: 'Base de données et modélisations',
        description1: 'MySQL/MariaDB ; Language SQL ; XML',
        description2: 'Schéma relationnel : Dictionnaire de données, Schéma entité-association (MCD), Schéma relationnel (MLD)',
        description3: '',
    },

])
</script>