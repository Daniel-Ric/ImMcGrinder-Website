<template>
  <header id="home" class="relative w-full h-screen">
    <img :src="mainImage" alt="Hauptbild" class="object-cover w-full h-full" />
    <div class="absolute inset-0 bg-gradient-to-b from-transparent to-[#09172d]"></div>
    <div class="absolute inset-0 flex justify-center items-center p-4">
      <div class="flex flex-col md:flex-row items-center md:items-start w-full max-w-4xl md:space-x-8 space-y-6 md:space-y-0">
        <img
          v-if="smallImage"
          :src="smallImage"
          alt="Logo"
          class="hidden md:block w-56 h-56 lg:w-64 lg:h-64 object-contain"
        />
        <div class="w-full flex flex-col space-y-4 text-center md:text-left">
          <h1 class="text-white font-thin text-4xl sm:text-5xl md:text-6xl">
            ImMcGrinder - Paradise
          </h1>
          <h2 class="text-white text-xl sm:text-2xl md:text-3xl">
            Welcome to Grinders Paradise
          </h2>
          <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full sm:w-auto justify-center md:justify-start">
            <a href="#who-we-are" class="w-full sm:w-auto">
              <button class="w-full sm:w-auto px-4 py-2 bg-[#ff7361] text-white rounded-lg text-base cursor-pointer">
                Get Started
              </button>
            </a>
            <a
              href="https://discord.gg/ImMcGrinder"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto"
            >
              <button class="w-full sm:w-auto px-4 py-2 bg-[#09172d] text-white rounded-lg text-base cursor-pointer">
                Join Us – Discord
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import mainImage from '@/assets/images/header.webp'
import smallImage from '@/assets/images/grinder.png'
</script>
