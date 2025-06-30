<template>
  <section id="who-we-are" class="bg-[#09172d] text-white py-16 px-6">
    <div class="max-w-4xl mx-auto text-center space-y-12">
      <div>
        <h2 class="text-3xl font-thin mb-4">Who We Are</h2>
        <p class="text-lg leading-relaxed">
          Welcome to <span class="font-semibold text-[#ff7361]">Grinders Paradise</span> – the ultimate
          Minecraft hub where creativity meets competition. Dive into our Discord for exclusive giveaways,
          epic events and channels tailored to every passion. From jaw-dropping builds to chill meme lounges,
          our community is all about grinding together, sharing laughs and leveling up side by side.
        </p>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div
          v-for="perk in perks"
          :key="perk.title"
          class="relative group rounded-2xl border border-gray-700 bg-[#102139] shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:scale-105 focus:shadow-xl focus:ring-2 focus:ring-[#ff7361]"
          tabindex="0"
        >
          <div class="absolute inset-0 bg-[#ff7361]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="relative p-6 flex flex-col items-start h-full">
            <div class="p-3 rounded-full bg-[#102139] transition-colors group-hover:bg-[#ff7361] mb-4">
              <font-awesome-icon :icon="perk.icon" class="text-white text-xl transform transition-transform group-hover:rotate-12"/>
            </div>
            <h4 class="text-xl font-semibold mb-2 group-hover:text-[#ff7361] transition-colors">
              {{ perk.title }}
            </h4>
            <p class="text-sm text-[#c0c0c0]">{{ perk.description }}</p>
            <span class="absolute bottom-0 left-0 w-0 h-1 bg-[#ff7361] group-hover:w-full transition-all"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faTag,
  faGift,
  faCalendarAlt,
  faComments
} from '@fortawesome/free-solid-svg-icons'

library.add(faTag, faGift, faCalendarAlt, faComments)

const perks = [
  {
    icon: faTag,
    title: 'Guild Tag',
    description: 'Rock the “GRIND” tag on every server for instant rep.'
  },
  {
    icon: faGift,
    title: 'Hive Giveaways',
    description: 'Score epic loot in our regular Hive-themed raffles.'
  },
  {
    icon: faCalendarAlt,
    title: 'Events & Tournaments',
    description: 'Join weekly build-offs, PvP cups & community meetups.'
  },
  {
    icon: faComments,
    title: 'Fun Channels',
    description: 'From memes to music – find your vibe and chill here.'
  }
]
</script>

<script>
export default {
  components: {
    FontAwesomeIcon
  }
}
</script>

<style scoped>
</style>
