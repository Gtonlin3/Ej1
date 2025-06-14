import { info } from 'console'
import { title } from 'process'
import React from 'react'
import GimCard from './components/GimCard';

const profileData = [
  {
    image: './1.svg',
    title: 'Puxada frontal',
    info: '3 series x 12 repeticiones',
  },
  // {
  //   image: './2.svg',
  //   title: 'Remada curvada',
  //   info: '3 series x 12 repeticiones',
  // },
  // {
  //   image: './3.svg',
  //   title: 'Remada Unilateral',
  //   info: '3 series x 12 repeticiones',
  // },
  // {
  //   image: './4.svg',
  //   title: 'Levantamento terra',
  //   info: '3 series x 12 repeticiones',
  // },
]

export default function Home() {
  return (
    <>
    <div>

      <h3><h3>Exercícios</h3></h3>
        <div>
          {profileData.map(( p, index) => (
            <GimCard 
              key={index} 
              photo={p.image} 
              title={p.title} 
              info={p.info} 
            />
          ))}
        </div>

    </div>
    
    </>  
  );
}
