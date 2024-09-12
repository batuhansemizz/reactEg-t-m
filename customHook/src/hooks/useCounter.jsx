import React from 'react'
//* custom hook oluşturmak için use ile başlamak gerekiyor
//* use kelimesi standartlaşmış bir kelime olduğu için react bunu bir hook olarak algılıyor
import { useState } from 'react'
function useCounter() {

    const [count , setcount] = useState(1);

    const arttır = () =>{
         setcount(count + 1)
    }
  
    const azalt = () =>{
      setcount(count - 1)
      if(count == 0){
        setcount(0)
          
      }
  }

  return {
    count , azalt , arttır
  }
}

export default useCounter