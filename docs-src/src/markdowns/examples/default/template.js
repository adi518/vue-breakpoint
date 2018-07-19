module.exports = `html
<v-breakpoint>
  <div slot-scope="api">
    <span v-if="api.isSmall"  style="font-size: 2rem">   😸  </span>
    <span v-if="api.isMedium" style="font-size: 4rem">   😸  </span>
    <span v-if="api.isLarge"  style="font-size: 6rem">   😸  </span>
    <span v-if="api.isXlarge" style="font-size: 8rem">   😸  </span>
    <span v-if="api.noMatch"  style="font-size: 10rem">  😸  </span>
  </div>
</v-breakpoint>
`
