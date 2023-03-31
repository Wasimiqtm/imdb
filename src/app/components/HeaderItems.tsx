import Link from 'next/link'
import React from 'react'

export default function HeaderItems({title, address, Icon}:{title:string, address:string, Icon:React.FC}) {
  return (
    <div>
      <Link href={address} className=''>
        <Icon className=' sm:hidden'></Icon>
        <p className='hidden sm:block'>{title}</p>
      </Link>
    </div>
  )
}
