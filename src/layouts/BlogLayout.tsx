import { Footer } from '@/components/ui/Footer';
import { NavBar } from '@/components/ui/NavBar';
import { ReactNode } from 'react'

type BlogLayoutProps = {
  children: ReactNode;
};

const BlogLayout = ( { children } : BlogLayoutProps ) => {
  return (
    <div className='grid min-h-screen grid-cols-1'>
      <NavBar/>
        <div className='grid grid-cols-1 m-auto
        w-[90%] 
        lg:w-[50%] '>
          <div className='flex-grow m-auto'>
            { children }
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default BlogLayout