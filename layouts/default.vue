<template>
  <div>
    <TheHeader 
      @sidenavToggle="toggleSidenav"
    />
    <TheSidenav 
      :show="displaySidenav"
      @close="closeSidenav"
    />
    <Nuxt />
  </div>
</template>
<script>
import TheHeader from "@/components/Navigation/TheHeader"
import TheSidenav from "@/components/Navigation/TheSidenav"
export default {
  components:{
    TheHeader,
    TheSidenav
  },
  data(){
    return {
      displaySidenav:false
    }
  },
  methods:{
    toggleSidenav(){
      this.displaySidenav = !this.displaySidenav
      console.log(this.displaySidenav)

    },
    closeSidenav(){
      this.displaySidenav = false
    }
  }
}
</script>

<style>
html {
  font-family: 'Open Sans', snas-serif;
}

body {
  margin: 0;
}
</style>
