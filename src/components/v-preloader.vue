<template>
  <div class="preload">
    <img class="airplane" src="../assets/images/airplane.png" alt="Airplane">
    <h3>Landing on the website</h3>
    <img class="cloud1" src="../assets/images/cloud.png" alt="cloud1">
    <img class="cloud2" src="../assets/images/cloud.png" alt="cloud2">
    <img class="cloud3" src="../assets/images/cloud.png" alt="cloud3">
    <img class="cloud4" src="../assets/images/cloud.png" alt="cloud4">
    <img class="cloud5" src="../assets/images/cloud.png" alt="cloud5">
    <img class="cloud6" src="../assets/images/cloud.png" alt="cloud6">
  </div>
</template>

<script>
export default {
  name: "v-preloader"
}
//Need to make a func that gets rid of the param

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
});
</script>

<style>
.preload {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100vh;
  background: #77b3d4;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.5s ease;
}

.cloud1, .cloud2, .cloud3, .cloud4, .cloud5, .cloud6 {
  height: 100px;
  position: absolute;
  right: 0;
  z-index: -1;
  will-change: transform;
}

.cloud1 {
  top: 25%;
  transform: translate(100%, -25%);
  animation: clouds 3s ease infinite;
}

.cloud2 {
  top: 50%;
  transform: translate(100%, -50%);
  animation: clouds 3s ease infinite 2s;
}
.cloud3 {
  top: 75%;
  transform: translate(100%, -75%);
  animation: clouds 3s ease infinite 1.5s;
}

.cloud4 {
  top: 85%;
  transform: translate(100%, -75%);
  animation: clouds 3s ease infinite 2.5s;
}
.cloud5 {
  top: 65%;
  transform: translate(100%, -75%);
  animation: clouds 3s ease infinite 1s;
}
.cloud6 {
  top: 45%;
  transform: translate(100%, -75%);
  animation: clouds 3s ease infinite 0.5s;
}

.airplane {
  height: 200px;
  animation: airplane 1s ease infinite alternate;
}

.preload h3 {
  position: absolute;
  top: 75%;
  transform: translateY(-75%);
  color: white;
  font-size: 30px;
  font-family: sans-serif;
}

.preload-finish {
  opacity: 0;
  pointer-events: none;
}

.preload h3:after {
  content: '.';
  animation: loading 1.5s infinite alternate;
}
@keyframes  airplane {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(50px);
  }
}
@keyframes  clouds {
  from {
    right: 0;
  }
  to {
    right: 130%;
  }
}
@keyframes loading {
  60%  { text-shadow: 0.35em 0 0 currentColor; }
  100% { text-shadow: 0.35em 0 0 currentColor, 0.75em 0 0 currentColor; }
}
</style>