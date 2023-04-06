import React from 'react'
import Card from './Card'

export default function Results({movies}:{movies:any}) {
    console.log(movies, 'here'); 
    return (
        <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
          {movies.results.map((movie:any) => (
            <Card key={movie.id} movie={movie}></Card>
          ))}
        </div>
      )
}
