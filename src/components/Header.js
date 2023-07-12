import React from 'react'

function Header({title, subTitle}) {
  return (
    <h1 className="title">{title}
    <span>{subTitle}</span>
    </h1>
  )
}

export default Header

 //rfce - React function component, the function Header is getting the title Header from the file itself
 //This Header component is basically render the title
 //Next we have to import it from App.js n
 // title and subTitle needs to be put in object, they are props of Component Function Header, truyen prop cho Header

