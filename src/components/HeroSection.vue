<template>
    <section class="relative w-full" data-aos="zoom-in-up">

        <div class="w-full px-5 sm:px-8 md:px-12 lg:px-8 max-w-screen-lg lg:max-w-screen-xl mx-auto relative">
            <div
                class="grid lg:grid-cols-2 gap-10 xl:gap-14 relative pt-24 lg:max-w-none max-w-2xl md:max-w-3xl mx-auto">
                <div class="lg:py-6">
                    <div class="text-center lg:text-left ">
                        <h1 class="pt-4 text-white font-bold text-4xl md:text-5xl lg:text-6xl">
                            Bonjour, Je suis <span
                                class="text-transparent bg-clip-text bg-gradient-to-r  from-cyan-500 to-blue-500">
                                THIEBAUT Mattéo
                            </span>
                        </h1>
                    </div>
                    <p class="text-gray-300 pt-8 text-center lg:text-left mx-auto max-w-xl ">
                        Je m’appelle Mattéo Thiebaut, je suis âgé de 24 ans et je viens d'obtenir mon Diplôme de niveau
                        7 RNCP 35584 en tant qu’Expert en informatique et système d’information. J’ai réalisé 2 ans
                        d’alternance en tant que Développeur Full Stack et souhaite maintenant découvrir divers horizons
                        dans le domaine du web.
                    </p>
                    <div class="flex items-center gap-3 pt-9 flex-col sm:flex-row sm:w-max sm:mx-auto lg:mx-0">
                        <button
                            class="px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center">
                            <span class="absolute inset-0 rounded-3xl group-hover:scale-105 origin-center transition-all ease-in-out bg-primary
                            border-2 border-transparent"></span>
                            <span class="relative flex items-center justify-center text-white"><a href="#contact">Contact</a></span>
                        </button>
                        <button
                            class=" border border-primary px-6 md:px-7 py-3 rounded-full relative group w-full sm:w-max flex justify-center bg-gradient-to-r  from-cyan-500 to-blue-500">
                            <div
                                class="hover:scale-105 transition-all ease-in-out flex justify-center items-center relative">
                                <div class="svg-container">
                                    <svg class="download-icon" width="18" height="22" viewBox="0 0 18 22" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke="white"
                                            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129
                                    20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213
                                    20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke="white" stroke-width="2"
                                            stroke-linecap="round" />
                                    </svg>
                                    <div class="download-loader text-white hidden"></div>
                                </div>
                                <a href="/CV.pdf" download="CV.pdf" class="pl-2 text-white "> Télécharger mon CV</a>
                            </div>
                        </button>
                    </div>
                </div>
                <div class="lg:h-full md:flex">
                    <div
                        class="flex w-full h-96 min-h-[24rem] lg:min-h-[none] lg:w-full lg:h-full items-center relative">
                        <div
                            class="absolute z-0 top-1/2 -translate-y-1/2 w-5/6 right-0 h-[calc(80%+20px)] opacity-25 blur-2xl bg-gradient-to-r  from-cyan-500 to-blue-500">
                        </div>
                        <div
                            class="absolute h-full z-10 p-2 -translate-y-1/2 top-1/2 lg:right-3 md:right-40 sm:right-16 rounded-full">
                            <img src="/src/assets/IMG_2039.jpg" alt="Hero pic" width="350" height="auto" loading="lazy"
                                class="rounded-full object-cover shadow-2xl">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
</script>