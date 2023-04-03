import React from 'react'

export default function Results({movies}:{movies:any}) {
    return (
        <div className="">
          {movies.results.map((movie:any) => (
            <div key={movie.id}>{movie.title} - {movie.id}</div>
          ))}
        </div>
      )
}
