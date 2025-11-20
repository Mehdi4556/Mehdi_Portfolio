import React from 'react'
import { Link } from '@radix-ui/themes'
import Image from 'next/image'

const Avatar = () => {
  return (
    <Link href='https://x.com/intent/follow?screen_name=fardeentwt' target='_blank' className="block">
      <div className="relative w-40 h-40 rounded-full overflow-hidden">
        <Image
          src='/hero.jpg'
          alt="Avatar"
          width={320}
          height={320}
          quality={100}
          className="rounded-full object-cover w-full h-full"
          priority
          sizes="160px"
        />
      </div>
    </Link>
  )
}

export default Avatar