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
```

### Document Element Attributes
```js
build(
  [] // code,
  {
    lang: "en"
  } // attributes
)
```

### Final Example
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
  ], // code
  {
    lang: "en"
  } // attributes
)
```

## Note
If you don't need any attributes you still have to enter an empty object. When you don't need any attributes for the document element you also have to specify an empty object as second parameter.

## About

### Developer
The main developer of this project is Dinoscape. I saw some "programmers", which can't really code a website. I was thinking about a solution and here it is. You can use it with no credits in any kind, but I would be happy, when you do.
