<script setup>
import { RouterLink, RouterView } from 'vue-router'
import {useCounterStore} from './stores/counterPages.js'
const store = useCounterStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/createJobOffer">Create A Job Offer</RouterLink>
      </nav>
    </div>
  </header>
  
  <Suspense>
   <RouterView />
  </Suspense>
  <footer>
    <p>Nombre de page(s) consultée(s) : {{store.counterPages}}</p>
  </footer>
</template>