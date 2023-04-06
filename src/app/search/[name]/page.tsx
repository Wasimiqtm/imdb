import Results from "@/app/components/Results";
import Loading from "@/loading";

async function SearchMovie(searchName:any) {

  const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchName.params.name}&language=en-US&include_adult=false`,
  { next: { revalidate: 10000 } });
  if(!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json(); 
}


export default async function Home(searchName:any) {
  const movies = await SearchMovie(searchName);
  return (
    <div className=" max-w-6xl mx-auto space-y-4 py-4">
      <h1 className=' text-2xl font-medium text-amber-600'>Home</h1>
      <Results movies={movies}></Results>
      
    </div>
  );
}
