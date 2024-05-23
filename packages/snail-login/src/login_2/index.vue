<template>
    <div class="login">login2-{{ title }}</div>
</template>

<script lang="ts" name="Login2" setup>
defineProps({
    title: {
        type: String,
        default: ''
    }
})
</script>