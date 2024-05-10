import Image from "next/image";
import Link from "next/link";
import '../css/navbar.css'
import Search from "./search";
import { categorylist } from "@/utils/type_and_jsons";

export default function Navbar() {

    return (
        <nav className="flex md:flex-row flex-col justify-between px-7 md:fixed top-0 left-0 bg-gray-700 text-white items-start md:items-center py-1 h-[58px] hover:h-[200px] transition-all md:hover:h-[58px] z-40 w-[100%]">
            <div className="flex items-center gap-2">
                <Link href='/'>
                    <Image className="rounded-full" src="/source/favicon.ico" alt="logo" width={50} height={50} />
                </Link>
                <Link className=" font-semibold text-xl" href='/'>OtakuEmapire</Link>
            </div>

            <ul className="flex md:gap-3 items-start md:items-center flex-col md:flex-row mt-4 md:mt-0">
                <li>
                    <Link className="hover:bg-gray-600 rounded-lg px-2 py-1" href="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:bg-gray-600 rounded-lg px-2 py-1" href="/about">About</Link>
                </li>
                <li>
                    <div className="dropdown hover:bg-gray-600 rounded-lg px-2 py-1">
                        <div className="dropbtn">
                            Category <i className="fa fa-caret-down"></i>
                        </div>

                        <div className="dropdown-content flex-col bg-gray-600 rounded-lg px-2 py-1">
                            {categorylist.map((category, index) => (
                                <Link className="hover:bg-gray-700 p-1 rounded-md" key={index} href={category.link}>{category.name}</Link>
                            ))}
                        </div>
                    </div>
                </li>
            </ul>

            <Search />
        </nav>
    )
}
