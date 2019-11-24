import marked from 'marked'

function htmlMd(html) {
  return `\`\`\`html${html}\`\`\``
}

export const _static = marked(htmlMd`
<fragment>
  Text node (1).
  Text node (2).
  <div> Element node (1) 😸 </div>
  <div> Element node (2) 😸 </div>
</fragment>
`)

export const dynamic = marked(htmlMd`
<fragment>
  <template v-if="showText">
    Dynamic text node (1).
    Dynamic text node (2).
  </template>  
  <template v-if="showElement">
    <div> Element node (1) 😸 </div>
    <div> Element node (2) 😸 </div>  
  </template>
</fragment>
`)

export const router = marked(htmlMd`
<div>
  <router-view></router-view>
</div>
`)
