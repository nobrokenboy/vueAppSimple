<template>
    <nav class="app-tab-nav app-footer">
        <ul class="clearfix app-tab-nav-ul">
            <slot></slot>
        </ul>
    </nav>
</template>
<script type="text/ecmascript-6">
    export default{
        props:['value']
    }
</script>
<style lang="scss" scoped>
@import "../sass/var.scss";
    .app-tab-nav {
        position: fixed;
        left: 0;
        bottom: 0;
        width: 100%;
        height: $footerBarHeight;
        background: $footerBarBg;
        .app-tab-nav-ul{
            height:100%;
        }
    }
</style>