import Link from 'next/link'
import React from 'react'

export default function HeaderItems({title, address, Icon}:{title:string, address:string, Icon:React.FC}) {
  return (
    <div>
      <Link href={address}>
        <Icon></Icon>
        <p>{title}</p>
      </Link>
    </div>
  )
}
