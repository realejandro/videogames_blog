import { getPostBySlug } from '@/api/wpAPI';
import { reverseDateStrings } from '@/utils/formatDates';
import BlogLayout from '@/layouts/BlogLayout'
import Image from 'next/image';


type PostAttributes = {
  title:string;
  date:string;
  slug?:string;
  content:string;
  imgUrl:string
}


const Posts = async ({ params } : { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  const post:PostAttributes = await getPostBySlug(slug);

  const { title, content, imgUrl, date } = post;

  return (
    <BlogLayout>
      <div className="card mt-10">
            <figure className="relative w-full h-90">
              <Image
                src={imgUrl}
                fill
                alt="Shoes"
                style={{objectFit:"cover"}}
                unoptimized
            />
          </figure>
          <div className="card-body">
              <h2 className="card-title text-2xl lg:text-3xl ">{ title }</h2>
              <small>{ reverseDateStrings( date ) }</small>
              <div dangerouslySetInnerHTML={{ __html: content ?? "", }} className='text-base' />
          </div>
      </div>
    </BlogLayout>
  )
}

export default Posts