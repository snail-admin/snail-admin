<template>
    <div class="login">login1-{{ title }}</div>
</template>

<script lang="ts" name="Login1" setup>
 defineOptions({
    name: 'Login1'
  })

defineProps({
    title: {
        type: String,
        default: ''
    }
})

</script>

<style lang="scss" scoped>
    .login {
        color: #f45;
    }
</style>
