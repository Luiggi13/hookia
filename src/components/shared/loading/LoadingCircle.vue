<template>
  <div class="flex flex-col h-screen justify-center self-center">
    <div class="flex my-5 justify-center self-center">
      <div class="flex wrapper justify-center justify-items-center">
        <div class="rings">
          <div class="ring ring1">
            <div class="ring ring2">
              <div class="ring ring3">
                <div class="ring ring4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
:root {
  --golden-glow: #efb774;
}

.wrapper {
  width: 20rem;
  height: 20rem;
}

.rings {
  position: relative;
}

.ring {
  box-shadow:
    -10px -10px 15px rgba(255, 255, 255, 0.3),
    10px 10px 15px rgba(70, 70, 70, 0.15),
    inset -10px -10px 15px rgba(255, 255, 255, 0.3),
    inset 10px 10px 15px rgba(70, 70, 70, 0.15);
  border: 10px solid #ddd6ff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ring1 {
  height: 14rem;
  width: 14rem;
  animation: glow1 2.5s infinite;
}

.ring2 {
  height: 10rem;
  width: 10rem;
  animation: glow2 2.5s infinite;
}

.ring3 {
  height: 6rem;
  width: 6rem;
  animation: glow3 2.5s infinite;
}

.ring4 {
  height: 2.5rem;
  width: 2.5rem;
  animation: glow4 2.5s infinite;
}

@keyframes glow1 {
  60% {
    background-color: #ddd6ff;
  }

  80% {
    background-color: var(--golden-glow);
  }

  100% {
    background-color: var(--golden-glow);
  }
}

@keyframes glow2 {
  40% {
    background-color: #ddd6ff;
  }

  60% {
    background-color: var(--golden-glow);
  }

  100% {
    background-color: var(--golden-glow);
  }
}

@keyframes glow3 {
  20% {
    background-color: #ddd6ff;
  }

  40% {
    background-color: var(--golden-glow);
  }

  100% {
    background-color: var(--golden-glow);
  }
}

@keyframes glow4 {
  0% {
    background-color: #ddd6ff;
  }

  20% {
    background-color: var(--golden-glow);
  }

  100% {
    background-color: var(--golden-glow);
  }
}
</style>
