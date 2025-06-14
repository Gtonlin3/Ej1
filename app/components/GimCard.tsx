import React from 'react'
import Image from 'next/image'

type Props = {
  photo: string
  title: string
  info: string
  
}

const GimCard = ({photo, title, info}: Props) => {
  return (
    <>
    
    <div>
     
      <div className='contenedor'>
        <div className='foto'>
          <Image src={photo} alt={title} width={200} height={200} />
        </div>

        <div className='dt'>

          <div className='info'>

              <div className='nombre'>
                <p>{title}</p>
              </div>

              <div className='series'>
                <p>{info}</p>
              </div>

          </div>

          <div className='ico'>
          <Image src='./Icons.svg' alt='1' width={24} height={24} />
          </div>

        </div>

      </div>
    
    </div>
    </>
  )
}

export default GimCard
