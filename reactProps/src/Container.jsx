import React from 'react'
//* children kullanmamızın nedeni container parent product child olduğu için
function Container({children}) {
  return (
    <div>Container {children}</div>
  )
}

export default Container