<template>
  <div>
    <button>
      <slot v-on="$listners" />
    </button>
  </div>
</template>
