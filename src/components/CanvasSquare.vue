<template>
<div class="container">
<canvas ref="canvas"  width = "500" height="500">
</canvas>
</div>
</template>

<script>
export default {
    data() {
        return {
           context: null
        }
    },
    mounted () {
        this.context =this.$refs.canvas.getContext('2d')
        this.context.beginPath();
        this.context.fillStyle = "#5A9BD5";
        this.context.fillRect(0,0,500,500);

        this.context.beginPath();

        this.context.fillStyle = "yellow";
        this.context.fillRect(120,120,250,250);

    },
}
</script>

<style lang="scss" scoped>

.md-button.md-primary {
    width: 55px;
    height: 36px;
    color: rgba(255, 255, 255, .87);
    background-color: rgb(49, 177, 49);
    font-size: 10px;
}
</style>