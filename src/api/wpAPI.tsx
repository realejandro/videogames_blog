//api route to get the pages from wordpress
export const getPagesInfo = async() => {
    const data = await fetch('')
}

export const getAllPostsWP = async() => {
    try {
        const response = await fetch('http://localhost:8882/wp-json/wp/v2/posts?_embed');
        const dataJson = await response.json();
        const dataObj = await dataJson.map( ({ title, date, excerpt, _embedded, slug } : any) => {
          return {
            title: title.rendered,
            date: date,
            content: excerpt.rendered,
            imgUrl: _embedded["wp:featuredmedia"][0].source_url ?? undefined,
            slug           
          }
        })
        return dataObj;
      } catch (error) {
        console.log(error);
      } 
}

export const getPostBySlug = async(slug : string) => {
    
    const post = await fetch(`${process.env.WORDPRESS_API_URL}wp-json/wp/v2/posts?_embed&slug=${slug}`);

    if(!post.ok) throw new Error("Failing fetch")

    const [ data ] = await post.json();

    const { 
      title : { rendered : title },
      content: { rendered: content },
      _embedded: {
        "wp:featuredmedia": [
          { source_url: imgUrl }
        ]
      },
      date
    } = data;
    
    return { title, content, imgUrl, date };

} 