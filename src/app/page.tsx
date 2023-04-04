import Loading from "@/loading";
import Results from "./components/Results";

async function getMovies(searchParams:any) {

  const genre = searchParams.searchParams.genre || "fetchTrending";
  const res = await fetch(`https://api.themoviedb.org/3/${
    genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
  { next: { revalidate: 10000 } });
  if(!res.ok) {
    throw new Error('Something went wrong');
  }
  return res.json();
}


export default async function Home(searchParams:any) {
  const movies = await getMovies(searchParams);
  // console.log(movies); 
  return (
    <div className=" max-w-6xl mx-auto space-y-4 py-4">
      <h1 className=' text-2xl font-medium text-amber-600'>Home</h1>
      <Results movies={movies}></Results>
    </div>
  );
}
