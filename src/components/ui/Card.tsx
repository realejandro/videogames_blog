'use client';
import { reverseDateStrings } from '@/utils/formatDates';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



type cardProperties = {
    title ?: string;
    content ?: string;
    imgUrl ?: string | undefined;
    date : string;
    slug: string
}

export const Card = ( { title, content, date, imgUrl, slug} : cardProperties ) => {

  const router = useRouter();
  
  const blogNavigation = (slug:string) => {
    router.push(`/posts/${slug}`)
  }

  return (
    <div onClick={ () => blogNavigation(slug) } className="card bg-base-100 w-full shadow-sm  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
         <figure className="relative w-full h-80">
            <Image
              src={imgUrl}
              fill
              alt="Shoes"
              objectFit='cover'
              unoptimized
            />
        </figure>
        <div className="card-body"> 
            <h2 className="card-title">{ title }</h2>
            <small>{ reverseDateStrings( date ) }</small>
            <div dangerouslySetInnerHTML={{ __html: content ?? "", }} />
        </div>
    </div>
  )
}
