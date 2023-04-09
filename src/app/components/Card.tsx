import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FiThumbsUp} from "react-icons/fi";

export default function Card({ movie }: { movie: any }) {
  return (
    <div className="cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`movies/${movie.id}`}>
        <Image unoptimized width={500} height={300} src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`} alt='movie-image' placeholder='blur' blurDataURL='/images/loader.svg'></Image>
          <div className="p-2">
          <p className=" line-clamp-2">{movie.overview}</p>
          <h2 className=" font-bold">
            {movie.title || movie.name}
          </h2>
          <p className=" flex items-center">
            {movie.release_date || movie.first_air_date}
            <FiThumbsUp className='h-5 mr-1 ml-3'></FiThumbsUp>{movie.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
