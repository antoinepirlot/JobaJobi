import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterPages', () => {
    let counterPages;
    if(!sessionStorage.getItem("counterPages")){
        counterPages = ref(0);
    }
    else{
        counterPages = ref(sessionStorage.getItem("counterPages"));
    }
  function increment() {
    counterPages.value++
    sessionStorage.setItem("counterPages", parseInt(counterPages.value));
  }
  return { counterPages, increment }
})
