<template>
    <svg class="icon" :class="`icon-${name}`" v-html="svg" :style="`width: ${size}px;height: ${size}px`"></svg>
</template>
<script>
export default {
name: 'svgIcon',
  props: {
      basePath: {
          type: String,
          default: '/static'
      },
      name: {
          type: String,
          required: true
      },
      size: {
          type: Number,
          default: 12,
      }
  },
  computed: {
      svg() {
          return `<use xlink:href="${this.basePath}/symbol-defs.svg#icon-${this.name}"></use>`
      }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/scss/variables';
    .icon {
        display: inline-block;
        width: 1em;
        height: 1em;
        stroke-width: 0;
        stroke: $dark;
        fill: $dark;
    }
</style>
