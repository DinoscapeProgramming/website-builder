# Website Builder
Build a nice website without knowing how HTML works

## Setting up

### Link file with script tag
First copy the file __website-builder.js__ and then add this script tag into your body tag.
```html
<script src="website-builder"></script>
```

## Use the engine

### Function
```js
build()
```

### Head and Body Tags
```js
build(
  [
    [
       "head", // tag name
       {
         childs: [
           [
             "title",
             {
               innerHTML: "Demo"
             }
           ]
         ]
       } // attributes or childs
    ],
    [
      "body", // tag name
      {
        innerHTML: "Hello World!"
      }
    ]
  ]
)

### Document Element Attributes
```js
build(
  [] // code,
  {
    lang: "en"
  } // attributes
)
```
