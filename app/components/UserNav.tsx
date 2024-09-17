import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuIcon, HamburgerMenuIcon } from '@radix-ui/react-icons';
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import Link from 'next/link';
import { CreateAirbnbHome } from '../actions';




const UserNav = async() => {

  const {getUser} = getKindeServerSession()
  const user = await getUser()

  const createHomewithId= CreateAirbnbHome.bind(null,{
    userId: user?.id as string
  })
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="rounded-full border px-2 lg:px-4 lg:py-2 flex items-center gap-x-3">
          <HamburgerMenuIcon className="w-6 h-6 lg:w-5 lg:h-5" />

          <img
            src={
              user?.picture ??
              "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADQQAAICAQIEAggEBwEAAAAAAAABAgMEBREGITFBE1ESFCJhcYGx0TJCkeEjYnKhosHCUv/EABYBAQEBAAAAAAAAAAAAAAAAAAABAv/EABYRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8A6kADTIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvmZuNg1+Jl3Qqj29Lq/gu5o8Qa1DSaEopTyLF/Dg3yS82UDKyrsu53ZNjssfWTKLjkcZYUJONOPkWrz5RT/XmMfjLCnJRux8ipefKSX6cykAGuqYebjZ1fiYl0LY9/R6r4rsZzlWLlX4dyuxbHXYukkX/h/WoatQ1NKGRBfxK0+TXmiCWAAAAAAAAAAAAAAAAAAAx5F0Memd1r2hCLk/kZCB4zyJU6N4cXt41ig/h1f0ApWoZdmfmW5Nz9qx77eS7JfI1wCxAAFA2dPzLMDMqyqX7Vb32813T+RrAiur490MimF1T3hOKkvmZCB4MyHdo3hye7pscF8OqJ4gAAAAAAAAAAAAAAAAFZ47T9QxX28X/ksxBcZ0O3RnNLfwpxn/AKf1CqCACxkABQABFXXgRP1HKfbxdv8AFFmILgyh1aMpvl4s5S/0voTpAAAAAAAAAAAAAAAAAMWXRDKxbcezf0bYuL926MoA5Tl49mJlW410WrKpNS5GI6FxBocNVirK2q8qC2jN9JLyZRs3CysGx15dE65LzXJ/B9yjWAA0wM2Hj25eVVj0rey2Xox9x7wsHJzrFXiUzsk/Jcl8WXnh/QoaVF2WNWZU1tKa6RXkgJTEohi4tWPX+GqKivfsjKAQAAAAAAAAAAAAAAAAAButwB5nGM4uM4qUX2kt0R2fr2nYLcbb1Oxfkr9pkHk8aScmsXCW3aVtm/8AZfcCfs0XTLebwafftHYV6JplfNYVPzjuVOfF2qS6erx9yq/cQ4u1SPVY8vc6v3Bq9xhGEVGuKjFdFFbI+lQxuNJJpZWEtu8qrNv7P7k5ga9p2c1Gq9Qsf5LPZYEmBugAAAAAAAAAAAAAAADS1bUqdLxHfdzb5Qh3mwPWo6hj6dju7Jmor8se8n5JFH1fiLM1CThXJ0Y+/wCCD5y/qZoahm36hkyvyZ+lJ8ku0V5I1gUABYgACgOnQACY0jiLM0+ShZJ34+/4JvnH+ll507Px9Rx/GxrPSX5o94vyaOXGzp+dfp+TG/Gn6Mlya7SXkzKupA0tJ1KnVMRX08muU4d4M3QAAAAAAAAAAA82TjXCVk3tGK3bfZI5trepz1TOla2/Cjuqo79I/cs3G2e6MKGHXL27+c0v/C+7+hSQCABYUABUAAAAAAPoABIaJqc9Lzo3Jt0y2VsU+sfudJrnGyEbINSjJbprumcmLvwTnu/Cnh2S9ujnD3xf2f1MqsgAAAAAAAAB8b9FOXkmBzrijJ9Z1q97+zW1XH5EUe77HbfZY+s5uT+bPBYAAKgAAAAAAAAAABK8MZPqutUNvaNm9cvmRR7osdV9di6wmpfoyK6wD5F+kk/NI+kAAAAAAMeQ9sex/wAr+jAA5PHoj6AWIAAoAAAAAAAAAAAfJdGAB1jH549b/lX0RkAMqAAD/9k="
            }
            alt="Image of the user"
            className="rounded-full h-8 w-8 hidden lg:block"
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        {user ? (
          <>
            <DropdownMenuItem>
             <form action={createHomewithId} className='w-full'>
              <button type='submit' className='w-full text-start'>
                Airbnb Your Home
              </button>
             </form>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/my-homes" className="w-full">
                My Listings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/favorites" className="w-full">
                My Favorites
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href="/reservations" className="w-full">
                My Reservations
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogoutLink className="w-full">Log out</LogoutLink>
            </DropdownMenuItem>
          </>
        ) : (
          <>
            <DropdownMenuItem>
              <RegisterLink className="w-full">Register</RegisterLink>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <LoginLink className="w-full">Log in</LoginLink>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserNav