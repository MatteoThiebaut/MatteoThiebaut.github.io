<template>
    <section class="text-white mt-[200px]" id="Formation">
        <div class="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 xl:px-16">
            <div data-aos="flip-left">
                <h2 class="text-4xl font-bold text-white text-left mb-8 md:text-center md:mt-0 mt-8">Formation</h2>
                <div class="space-y-8 py-8" data-aos="fade-left">
                    <div v-for="element in Experinces" :key="element.id"
                        class="flex  items-center rounded-xl p-4 bg-[#111a3e] shadow-lg border border-[#1f1641]">
                        <div class="w-1/4">
                            <img src="https://img.icons8.com/ios-glyphs/100/ffffff/graduation-cap--v1.png" alt="lawyer">
                        </div>
                        <div class="w-3/4 pl-4">
                            <h3 class="text-2xl font-semibold uppercase text-white">
                                {{ element.diplome }}
                            </h3>
                            <h3
                                class="text-2xl font-semibold uppercase text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
                                {{ element.libelle }}
                            </h3>
                            <p class="text-white">{{ element.ecole }}</p>
                            <p class="text-white">{{ element.date }}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4 md:mt-0 text-left flex flex-col z-10 h-full" data-aos="flip-right">
                <h2 class="text-4xl font-bold text-white md:text-center text-left mb-4">À propos de <span
                        class="text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">moi</span>
                </h2>

                <p class="text-base lg:text-lg mt-8 py-8"> Tout d'abord, j'ai réalisé en 2 ans un BTS SIO à
                    Valenciennes avec une option développement afin de decouvrir divers langage. Puis
                    j'ai pousuivi mes études avec une Licence Professionnelle en 1 an à Charleville-Mézières. Enfin j'ai
                    terminé mon cursus à l'école EPSI de Lille avec un Master en 2 ans en étant en alternance chez New Walkings.
                </p>
                <div class="grid grid-cols-3 gap-4 max-w-lg pt-8">
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">35584</h3>
                        <p class="text-sm sm:text-base text-gray-300">RNCP </p>
                    </div>
                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl"> 7</h3>
                        <p class="text-sm sm:text-base text-gray-300">Niveau</p>
                    </div>

                    <div class="text-center rounded-xl bg-[#111a3e] shadow-lg border border-[#1f1641] p-3">
                        <h3 class="text-white font-bold text-xl sm:text-2xl lg:text-3xl">+5</h3>
                        <p class="text-sm sm:text-base text-gray-300"> BAC</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
</template>
<script setup>
import { ref } from 'vue';

const Experinces = ref([
    {
        id: 1,
        diplome: 'Master',
        libelle: 'Expert en informatique et système d’information',
        ecole: 'EPSI, Lille',
        date: '2022 - 2024'
    },
    {
        id: 2,
        diplome: 'Licence Professionnelle',
        libelle: 'Métiers du numérique : Conception, Rédaction et Réalisation Web',
        ecole: 'EiSINe, Charleville-Mézières',
        date: '2021 - 2022'
    },
    {
        id: 3,
        diplome: 'BTS SIO',
        libelle: 'Services Informatique aux Organisations en spécialité SLAM (Développement)',
        ecole: 'Lycée Dampierre, Valenciennes',
        date: '2019 - 2021'
    },

])
</script>