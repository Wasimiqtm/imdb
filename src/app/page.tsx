import Results from "./components/Results";

// async function getMovies(params:any) {
//   const genre = params.genre || "fetchTrending";
//   console.log(genre);
//   const res = await fetch(`https://api.themoviedb.org/3/${
//     genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
//   }?api_key=${process.env.API_KEY}&language=en-US&page=1`,
//   { next: { revalidate: 10000 } });
//   if(!res.ok) {
//     throw new Error('Something went wrong');
//   }
//   return res.json();
// }


// export default async function Home(params:any) {
//   const movies = await getMovies(params);
  
//   return (
//     <div className=" max-w-6xl mx-auto space-y-4">
//       <h1 className=' text-2xl font-medium text-amber-600'>Home</h1>
//       <Results movies={movies}></Results>
//     </div>
//   );
// }
const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }:{searchParams:any}) {
  const genre = searchParams.genre;
  console.log(genre);

  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
    }?api_key=${API_KEY}&language=en-US&page=1`,
    { next: { revalidate: 10000 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data"); // this will be caught by the error page and passed to the page as props
  }

  const movies = await res.json();

  return (
    <div>
      <Results movies={movies} />
    </div>
  );
}
