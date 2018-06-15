module.exports = `html
<template>
  <v-breakpoint @small="onSmall"></v-breakpoint>
  <v-breakpoint @medium="onMedium"></v-breakpoint>
  <v-breakpoint @large="onLarge"></v-breakpoint>
  <v-breakpoint @no-match="onNoMatch"></v-breakpoint>
  ...
</template>
`
