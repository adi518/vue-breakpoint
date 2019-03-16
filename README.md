## Install
```bash
$ npm install --save vue-breakpoint-component
```

## Usage
To use the component in your templates, simply import and register with your component:

### Script
```js
import { VBreakpoint } from 'vue-breakpoint-component'

export default {
  components: {
    VBreakpoint
  }
}
```

### Template
```html
<v-breakpoint>
  <div slot-scope="scope">
    <span v-if="scope.isSmall"  style="font-size: 2rem">   😸  </span>
    <span v-if="scope.isMedium" style="font-size: 4rem">   😸  </span>
    <span v-if="scope.isLarge"  style="font-size: 6rem">   😸  </span>
    <span v-if="scope.isXlarge" style="font-size: 8rem">   😸  </span>
    <span v-if="scope.noMatch"  style="font-size: 10rem">  😸  </span>
  </div>
</v-breakpoint>
```

## Global Install
You can also choose to install the component globally. This will install three components `v-breakpoint`, `v-show-at`, `v-hide-at`.

```js
import Vue from 'vue'

import { Plugin as VBreakpoint } from 'vue-breakpoint-component'

Vue.use(VBreakpoint)
```

## Show-At/Hide-At Usage
To use the component in your templates, simply cherry-import and register with your component.

### Script
```js
import { VShowAt } from 'vue-breakpoint-component'

export default {
  components: { VShowAt }
}
```

### Template
```html
<v-show-at small>     😸  </v-show-at>
<v-show-at medium>    😺  </v-show-at>
<v-show-at large>     😽  </v-show-at>
<v-show-at xlarge>    🐱  </v-show-at>
<v-show-at no-match>  😿  </v-show-at> <!-- Aka Bootstrap 4 "xs" -->
```

## Multiple Root Elements (Experimental)
Notice you can also show/hide multiple elements using an experimental Fragment-like component hack, described [here](#experimental-features).

### 🚧 Note
To unlock this feature, you will have to [configure](#configuration) the component with the `experimental` flag.

### Template
```html
<v-show-at small>
  <span>😸</span>
</v-show-at>
```

## V-Model
You can also leverage the breakpoint state without composing inside it, using a `v-model`.

### Template
```html
<v-breakpoint v-model="model"></v-breakpoint>
<div :style="style"></div>
```

### Script
```js
import { VBreakpoint, Model } from 'vue-breakpoint-component'

export default {
  components: {
    VBreakpoint
  },
  data: () => ({
    model: new Model()
  }),
  computed: {
    style() {
      if (this.model.isSmall) {
        return {
          width: '1rem',
          height: '1rem'
        }
      }
      else if (this.model.isMedium) {
        return {
          width: '2rem',
          height: '2rem'
        }
      }
      else if (this.model.isLarge) {
        return {
          width: '3rem',
          height: '3rem'
        }
      }
      else if (this.model.isXlarge) {
        return {
          width: '4rem',
          height: '4rem'
        }
      }
    }
  }
}
```

<!-- ## Provide/Inject
You can also leverage the breakpoint state using the provide/inject pattern, using the <a href="https://vuejs.org/v2/guide/render-function.html#Functional-Components">functional</a> component `<v-with-breakpoint>`. This component does not accept any props, it only exposes a scoped-slot, simliar to the `<v-breakpoint>` component. However, being functional it is more performant than the standard component and therefore, it's encouraged to use `<v-breakpoint>` only where `v-model` is a must.

### Script
```js
// main.js
import Vue from 'vue'
import App from './App.vue'
import { VBreakpoint as BreakpointProvider } from 'vue-breakpoint-component'

new Vue({
  render: h => h(BreakpointProvider, [App])
}).$mount('#app')
```
Then, anywhere in your app, use the injector component:
### Template
```html
<template>
  <v-with-breakpoint>
    <span slot-scope="scope" v-if="scope.isSmall">  😸  </span>
  </v-with-breakpoint>
</template>
```

## Global Mixin -->

## Props
```js
debounceTime: {
  type: Number,
  description: 'Time to wait before invoking resize handler.'
}
```

## Events
The component emits two core events, `input` and `change`. The `input` event is required for `v-model` usage, but other than that, it's fairly similar to `change` event. Each of these events benefit different composition styles.

### Payloads
#### Input and Change Events `[Object]`
Each of these events has the same payload. Besides breakpoint state, they also supply some auxiliary state, like **viewport** and current **inner window dimensions** (which are also aliased for convenience). Example:

```js
{
  breakpoint: 'small',
  isSmall: true,
  isMedium: false,
  isLarge: false,
  noMatch: false,
  iw: 623,
  ih: 1077,
  innerWidth: 623,
  innerHeight: 1077,
  innerWidthPx: '623px',
  innerHeightPx: '1077px',
  vw: 1920,
  vh: 1200,
  viewportWidth: 1920,
  viewportHeight: 1200,
  viewportWidthPx: '1920px',
  viewportHeightPx: '1200px'
}
```

#### Breakpoint Event `[String]`
```js
'small' | 'medium' | 'large' | 'xlarge' // Etc'
```

#### Breakpoint-Namespace Event
Besides those events, the component also emits a breakpoint-namespace event per breakpoint defined. Thus, you can do something like:

```html
<v-breakpoint @small="handleSmall"></v-breakpoint>
<v-breakpoint @medium="handleMedium"></v-breakpoint>
<v-breakpoint @large="handleLarge"></v-breakpoint>
<v-breakpoint @xlarge="handleXlarge"></v-breakpoint>
<v-breakpoint @no-match="handleNoMatch"></v-breakpoint> <!-- Aka Bootstrap 4 "xs" -->
```

## Configuration
The default breakpoints are based on [Bootstrap 4 (Stable)](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints). To customize the component you will have to use the extend helper. Start off by creating a new component asset, e.g.: `VBreakpoint.js`. Then, use the following snippet and adjust configuration to your needs.

```js
// <project-root>/src/components/VBreakpoint.js

import { extend } from 'vue-breakpoint-component'

// Default configuration:
const config = {  
  breakpoints: {
    small: '(min-width: 576px)',
    medium: '(min-width: 768px)',
    large: '(min-width: 992px)',
    xlarge: '(min-width: 1200px)'
  },
  debounceTime: 100,
  experimental: false
}

const { VShowAt, VHideAt, VBreakpoint } = extend(config)

export default VBreakpoint

export { VShowAt, VHideAt, VBreakpoint }
```

### Usage
Import **locally** and use as you would normally.

```js
// Local imports

import { Model } from 'vue-breakpoint-component'
import { VShowAt, VHideAt, VBreakpoint } from './VBreakpoint'

export default {
  components: {
    VShowAt,
    VHideAt,
    VBreakpoint
  },
  data: () => ({
    model: new Model()
  })
}
```

### Default Breakpoints (Bootstrap 4)
```css
/**
* Extra small devices (portrait phones, less than 576px)
* No media query for "xs" since this is the default in Bootstrap.
*/

/* Small devices (landscape phones, 576px and up) */
@media (min-width: 576px) { /* ... */ }

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) { /* ... */ }

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) { /* ... */ }

/* Extra large devices (large desktops, 1200px and up) */
@media (min-width: 1200px) { /* ... */ }
```

### Custom Breakpoints
You can define an **infinite** amount of breakpoints. For media-query syntax see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries).

## Experimental Features
#### Wrapping Multiple Root Elements (Fragment Hack)
As you may know, Vue does not support a stateful `Fragment` component, which allows you to render a component with multiple root elements, overruling the "single root element" principle dictated at the outset of component-based architecture. It was introduced to React during a full re-write. You can learn about it from [React docs](https://reactjs.org/docs/fragments.html). Vue is likely to follow suit in a similar manner (probably with Vue 3). This feature request is currently discussed [here](https://github.com/vuejs/vue/issues/7088). Meanwhile, I decided to hack a Fragment component, which is also incorporated into this component, thanks to Github user [y-nk](https://github.com/y-nk). I elaborated his [solution](https://github.com/y-nk/vue-fragments) so it can also show/hide content (using directives like `v-show` or `v-if` won't work here).

#### 🚧 Note
Since this is a hack, it is likely not to be extended into a fully supported feature. Feel free to contribute back though.

## Browser Support
This component relies on [matchMedia](https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia) API (IE 10+). For older browsers and IE, you will need a polyfill. There's [@paulirish](https://github.com/paulirish/matchMedia.js/) and [@weblinc](https://github.com/weblinc/media-match). The latter seems more maintained.

## Related Links
* [dpi.lv](http://dpi.lv/)
* [Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
* [Bootstrap 4 responsive breakpoints](https://getbootstrap.com/docs/4.1/layout/overview/#responsive-breakpoints)
* [How to build a responsive grid system](https://zellwk.com/blog/responsive-grid-system/)

## Support
Please open an [issue](https://github.com/adi518/vue-breakpoint-component/issues) for support.

## License
Copyright (c) 2018 [Adi Sahar](https://github.com/adi518) by [MIT](https://opensource.org/licenses/MIT)