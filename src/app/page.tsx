import {api} from '@/api'
import { Product } from '@/types';
import Image from 'next/image';

export default async function Home() {
  const products = await api.products.list();
  
  return (
      <>
          <h1 className='text-5xl font-bold text-center p-5'>101Patitas</h1>
          <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
            {products.map(product => 
            <article key={product.name} className='max-w-2xl border border-white rounded-lg p-5 flex flex-col items-center'>
              <img 
              className='rounded-lg w-40 h-40 object-cover'
              src='https://placehold.it/150x150'
              alt='Pelota de futbol'
              />
              <h3 className='text-2xl font-bold'>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </article>
            )}
          </section>
          
      </>
  )
}
