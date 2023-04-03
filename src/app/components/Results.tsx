import React from 'react'

export default function Results({movies}:{movies:any}) {
  console.log('done');

    return (
        <div className="">
          {movies.results.map((movie:any) => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      )
}
