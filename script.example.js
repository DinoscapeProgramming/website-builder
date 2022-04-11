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
