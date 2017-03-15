<template>
    <nav class="app-header">
        <span class="app-logo-text">Illustrator</span>
        <a class="iconfont header-btn-search">&#xe608;</a>
    </nav>
</template>
<script>

</script>
<style lang="scss" scoped>
    @import "../sass/var.scss";
    .app-header{
        position:fixed;
        left:0;
        top:0;
        z-index:99;
        width:100%;
        height:$headerBarHeight;
        line-height:$headerBarHeight;
        background:$headerBarBg;
        text-align:center;
        .app-logo-text{
            color:#2b2b2b
        }
        .header-btn-search{
            position:absolute;
            right:20px;
            top:50%;
            -webkit-transform:translateY(-50%);
            transform:translateY(-50%);
            font-size:20px;
            color:#2b2b2b;

        }

    }
</style>