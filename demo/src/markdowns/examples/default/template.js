module.exports = `html
<template>
  <div>
    <v-breakpoint>
      <div slot-scope="api">
        <span v-if="api.isSmall"  style="font-size: 2rem">  😸  </span>
        <span v-if="api.isMedium" style="font-size: 4rem">  😸  </span>
        <span v-if="api.isLarge"  style="font-size: 6rem">  😸  </span>
        <span v-if="api.noMatch"  style="font-size: 8rem">  😸  </span>
      </div>
    </v-breakpoint>
  </div>
</template>
`
// `
// <template>
//   <div>
//     <v-breakpoint>
//       <div slot-scope="api">
//         <div v-if="api.isSmall">
//           <!-- Show this content at Small breakpoint only -->
//           <span style="font-size: 2rem">😸</span>
//         </div>
//         <div v-else-if="api.isMedium">
//           <!-- Show this content at Small breakpoint only -->
//           <span style="font-size: 4rem">😸</span>
//         </div>
//         <div v-else-if="api.isLarge">
//           <!-- Show this content at Large breakpoint only -->
//           <span style="font-size: 6rem">😸</span>
//         </div>
//         <div v-else="api.noMatch">
//           <!-- Show this content when no breakpoint is matched -->
//           <span style="font-size: 8rem">😸</span>
//         </div>
//       </div>
//     </v-breakpoint>
//   </div>
// </template>
// `
