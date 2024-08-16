<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink
      icon-btn
      to="/"
      title="Home"
    >
      <div i-carbon-voice-activate />
    </RouterLink>

    <RouterLink
      icon-btn
      to="/myrKiSs/SETS"
      title="Sets"
    >
      <div i-carbon-notebook />
    </RouterLink>

    <button
      icon-btn
      title="Toggle"
      @click="toggleDark()"
    >
      <div i="carbon-sun dark:carbon-moon" />
    </button>

    <RouterLink
      icon-btn
      to="/myrKiSs/MDINDEXDISPLAY"
      title="MDinDexDisplay"
    >
      <div i-carbon-language />
    </RouterLink>

    <RouterLink
      icon-btn
      to="/zhones"
      title="Zhones"
    >
      🜾
    </RouterLink>
  </nav>
</template>
