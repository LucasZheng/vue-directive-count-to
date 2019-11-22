# Vue-Directive-Count-To

Vue-Directive-Count-To is a lightweight directive for VUE, you can use it in any HTML tags.

## Installation

```bash
$ npm install vue-directive-count-to
```

## Usage

Import this library and registe it in your `main.js`

```js
import countTo from 'vue-directive-count-to'

Vue.directive('countTo', countTo)
```

In your VUE component, you can use this directive as follow:

```html
<div v-countTo="countNum"></div>
```

`countNum` is a static number either a variable number requested from backend. The default animation time is 3000 milliseconds.

If you want to change the animation time, you can set this directive like this:

```html
<div v-countTo:time.5000="countNum"></div>
```
