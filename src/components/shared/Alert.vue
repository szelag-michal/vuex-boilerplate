<template>
  <div class="alert">
      <span @click.prevent="onClose()">close</span>
      {{text}}
  </div>
</template>
<script>
export default {
  props: ['text'],
  methods: {
      onClose () {
          console.log('test');
          this.$emit('dismissed')
      }
  }
}
</script>

