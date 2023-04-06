'use client'

import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

export default function SearchBox() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  function handleSubmit(e) {
    e.preventDefault();
    if (!search) return;
    router.push(`/search/${search}`);
  }

  return (
    <div>
        <form className=" flex max-w-6xl mx-auto py-6" onSubmit={handleSubmit}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" name="" id="" placeholder='Search Keyword....' className=' w-full bg-transparent outline-none flex-1' />
            <button className=' text-amber-600 disabled:text-gray-400' disabled={!search}>Search</button>
        </form>
    </div>
  )
}
