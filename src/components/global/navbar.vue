<template>
  <nav ref="navbar" v-cloak class="fixed top-0 w-full z-50 bg-transparent">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="relative h-16 flex items-center">
        <div class="flex-shrink-0 flex items-center space-x-2">
          <img class="h-10 w-auto" src="@/assets/images/icon.png" alt="Brand" />
          <span class="text-white text-lg font-semibold">ImMcGrinderr</span>
        </div>
        <div class="hidden md:flex space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <a href="#" class="text-white hover:text-gray-300">Home</a>
          <a href="#" class="text-white hover:text-gray-300">Who We Are</a>
          <a href="#" class="text-white hover:text-gray-300">Discord</a>
        </div>
        <div class="ml-auto md:hidden">
          <button @click="toggleMenu" class="text-white focus:outline-none p-2">
            <svg v-if="!open" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div ref="mobileMenu" class="fixed inset-0 z-40 bg-[#09172d]/95 backdrop-blur-sm md:hidden flex flex-col p-6 space-y-4 transform -translate-x-full">
      <button @click="toggleMenu" class="self-end text-white p-2 focus:outline-none">
        <svg class="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <nav class="mt-4 flex flex-col space-y-3">
        <a href="#" class="flex items-center px-4 py-3 rounded-lg text-white text-lg font-medium hover:bg-[#ff7361]/20 transition">
          <span>Home</span>
        </a>
        <a href="#" class="flex items-center px-4 py-3 rounded-lg text-white text-lg font-medium hover:bg-[#ff7361]/20 transition">
          <span>Who We Are</span>
        </a>
        <a href="#" class="flex items-center px-4 py-3 rounded-lg text-white text-lg font-medium hover:bg-[#ff7361]/20 transition">
          <span>Discord</span>
        </a>
      </nav>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)

const navbar = ref(null)
const mobileMenu = ref(null)
const open = ref(false)
let menuTimeline

const toggleMenu = () => open.value = !open.value

onMounted(() => {
  ScrollTrigger.create({ trigger: document.body, start: 'top top',
    onEnter: () => gsap.to(navbar.value, { backgroundImage: 'linear-gradient(to bottom, rgba(9,23,45,1) 0%, rgba(9,23,45,0) 100%)', duration: 0.3 }),
    onLeaveBack: () => gsap.to(navbar.value, { backgroundImage: 'none', backgroundColor: 'transparent', duration: 0.3 })
  })
  menuTimeline = gsap.timeline({ paused: true })
    .to(mobileMenu.value, { x: 0, duration: 0.4, ease: 'power3.out' })
  watch(open, val => val ? menuTimeline.play() : menuTimeline.reverse())
})
</script>

<style scoped>
[v-cloak] { display: none; }
</style>
