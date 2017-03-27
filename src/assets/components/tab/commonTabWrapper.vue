<template>
    <div id="commonTabSelect">
        <ul class="clearfix filter-items">
            <slot></slot>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props: ["value"]
    }
</script>

<style lang="scss" scoped>
    .filter-items{
        width:100%;
        height:40px;
        line-height:40px;
    }
</style>