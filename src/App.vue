<template>
  <div class="bg-[#111827] min-h-screen">
    <NavBar />
    <HeroSection />
    <FormationSection />
    <ExperiencesSection />
    <CompetenceSection />
    <LastestProjSection />
    <ContactSection />
    <Footer />  
  </div>
</template>
<script setup>
import { defineAsyncComponent } from 'vue';
//Import Components Asynchronously
<<<<<<< HEAD
const NavBar = defineAsyncComponent(() => import('@/components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection.vue'));
const FormationSection = defineAsyncComponent(() => import('@/components/FormationSection.vue'));
const ExperiencesSection = defineAsyncComponent(() => import('@/components/ExperienceSection.vue'));
const CompetenceSection = defineAsyncComponent(() => import('@/components/CompetenceSection.vue'));
const LastestProjSection = defineAsyncComponent(() => import('@/components/LatestProjSection.vue'));
const ContactSection = defineAsyncComponent(() => import('@/components/ContactSection.vue'));
const Footer = defineAsyncComponent(() => import('@/components/Footer.vue'));
=======
const NavBar = defineAsyncComponent(() => import('./components/NavBar.vue'));
const HeroSection = defineAsyncComponent(() => import('./components/HeroSection.vue'));
const FormationSection = defineAsyncComponent(() => import('./components/FormationSection.vue'));
const ExperiencesSection = defineAsyncComponent(() => import('./components/ExperienceSection.vue'));
const CompetenceSection = defineAsyncComponent(() => import('./components/CompetenceSection.vue'));
const LastestProjSection = defineAsyncComponent(() => import('./components/LatestProjSection.vue'));
const ContactSection = defineAsyncComponent(() => import('./components/ContactSection.vue'));
const Footer = defineAsyncComponent(() => import('./components/Footer.vue'));
>>>>>>> d9e5c2efe69ac03603a149ac1fed7b6b397af7ae

</script>