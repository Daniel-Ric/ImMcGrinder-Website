<template>
  <footer class="bg-[#09172d] text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
        <div class="lg:w-1/3">
          <div class="flex items-center space-x-3 mb-4">
            <img class="h-12 w-auto" src="@/assets/images/icon.png" alt="ImMcGrinder Logo" />
            <span class="text-2xl font-bold">ImMcGrinder</span>
          </div>
          <p class="text-gray-400 leading-relaxed">
            Join ImMcGrinder’s elite Hive Bedrock Discord community for exclusive events, giveaways,
            and collaborations with top-tier gamers and developers.
          </p>
        </div>

        <div class="lg:w-1/3 flex flex-col sm:flex-row justify-between gap-8">
          <div>
            <h3 class="text-lg font-semibold mb-3 text-[#ff7361]">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/home" class="hover:text-[#ff7361] transition">Home</router-link>
              </li>
              <li>
                <router-link to="/who-we-are" class="hover:text-[#ff7361] transition">Who We Are</router-link>
              </li>
              <li>
                <a href="https://discord.gg/ImMcGrinder" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff7361] transition">Discord</a>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-lg font-semibold mb-3 text-[#ff7361]">Community</h3>
            <ul class="space-y-2">
              <li>
                <a href="https://discord.com/channels/1170347889768267806/1170450885713866963" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff7361] transition">Giveaways</a>
              </li>
              <li>
                <a href="https://discord.com/channels/1170347889768267806/1170732257040945276" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff7361] transition">Events</a>
              </li>
              <li>
                <a href="https://discord.com/channels/1170347889768267806/1189322862004293712" target="_blank" rel="noopener noreferrer" class="hover:text-[#ff7361] transition">Support</a>
              </li>
            </ul>
          </div>
        </div>

        <div class="lg:w-1/3">
          <h3 class="text-lg font-semibold mb-3 text-[#ff7361]">Connect</h3>
          <div class="flex space-x-4">
            <a href="https://discord.gg/ImMcGrinder" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon :icon="faDiscord" class="text-2xl hover:text-[#ff7361] transition" />
            </a>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        <p>&copy; 2025 ImMcGrinder. All rights reserved.</p>
        <p class="mt-2">Developed with ❤️ by SpindexGFX</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'

library.add(faDiscord)
</script>

<style scoped>
@media (min-width: 1024px) {
  footer div.flex > div {
    flex: 1;
  }
}
</style>
