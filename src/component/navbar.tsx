import Image from "next/image";
import Link from "next/link";
import '../css/navbar.css'
import Search from "./search";
import NavigationMenuDemo from "./Categorynavigation";

export default async function Navbar() {

    const response = await fetch('https://api.jikan.moe/v4/genres/anime')

    const datas: { mal_id: number, name: string }[] = (await response.json()).data
    


    return (
        <nav className="flex md:flex-row flex-col justify-between px-7 md:fixed top-0 left-0 bg-gray-700 text-white items-start md:items-center py-1 h-[58px] hover:h-[200px] transition-all md:hover:h-[58px] w-[100%] relative">
            <div className="flex items-center gap-2">
                <Link href='/'>
                    <Image className="rounded-full" src="/source/favicon.ico" alt="logo" width={50} height={50} />
                </Link>
                <Link className=" font-semibold text-xl" href='/'>OtakuEmapire</Link>
            </div>

            <ul className="flex md:gap-3 md:items-center flex-row mt-4 md:mt-0 items-center">
                <li>
                    <Link className="hover:bg-gray-600 rounded-lg px-2 py-1" href="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:bg-gray-600 rounded-lg px-2 py-1" href="/about">About</Link>
                </li>

                <NavigationMenuDemo datas={datas} />
            </ul>

            <Search />
        </nav>
    )
}
