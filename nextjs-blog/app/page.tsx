import getPostMetadata from '@/components/getPostMetdata';
import PostPreview from '@/components/PostPreview';

const HomePage=()=>{
  const postMetadata = getPostMetadata();
  const postPreview = postMetadata.map((post: any) =>(
 <PostPreview key={post.slug} {...post}/>
  ));

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      {postPreview}

    </div>
  )
}

export default HomePage;