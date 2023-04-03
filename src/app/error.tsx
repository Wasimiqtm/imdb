'use client'
import React from 'react'
import { useEffect } from 'react'

export default function Error({error, reset}:{error:any, reset:any}) {
    useEffect(() => {
        console.log(error);
    }, [error])
    return (
        <div>
            <h1>Something went wrong</h1>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    )
  return (
    <div>Error</div>
  )
}
