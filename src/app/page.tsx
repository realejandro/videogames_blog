import { getAllPostsWP } from "@/api/wpAPI";
import { Card } from "@/components/ui/Card";
import { Footer } from "@/components/ui/Footer";
import { NavBar } from "@/components/ui/NavBar";


export default async function Home() {

  const posts = await getAllPostsWP(); //return array of posts

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <NavBar/>
        <div className="flex flex-col">
          <div className="flex flex-col justify-center">
            <h2 className="text-center">Lastest posts</h2>
            <p  className="text-center">The last videogames that I have been playing lately</p>
          </div>
          <div className="grid
            grid-cols-1 
            lg:grid-cols-3 gap-8 m-10">
              { posts.map( ( post:any ) => {
                  return (
                    <Card 
                    key={ post?.title }
                    { ...post }/>
                  )
              }) }
            </div> 
        </div>
     </main>
     <Footer/>
    </div>
  );
}
