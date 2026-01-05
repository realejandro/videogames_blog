'use client';
import Link from 'next/link'


export const NavBar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <Link href={'/'} className='font-bold tracking-tight'>
        <p className="btn btn-ghost text-xl text-yellow-250">Game<span>Hub</span></p>
      </Link>
    </div>
  )
}
