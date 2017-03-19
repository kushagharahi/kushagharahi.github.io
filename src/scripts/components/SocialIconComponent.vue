<template>
<a href="{{Link}}" target="_blank" rel="noopener"><img :src="ImgLink" v-on:mouseover="SetHover(true)" v-on:mouseleave="SetHover(false)" class="socialIcon"/></a>
</template>

<script>
var ImgLinkPrefix = "./res/img/social/" + attrs.socialIconName;
                 var ImgLink = ImgLinkPrefix + ".png";
    SetHover = function (Hover) {
                    if (Hover === true){
                        ImgLink = ImgLinkPrefix + "-hover" + ".png";
                    } else {
                        ImgLink = ImgLinkPrefix + ".png";
                    }
                };
</script>

<style lang="sass">

</style>