"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link"

export default function NavigationMenuDemo({ datas }:{datas:{mal_id:number,name:string}[]}) {    

    return (
        <NavigationMenu>
            <NavigationMenuList>
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>Category</NavigationMenuTrigger>
                        <NavigationMenuContent className="z-50">
                            <ul className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4 p-6 h-[70vh] overflow-y-auto w-[70vw] bg-gray-600 text-white z-40 relative" >
                                { datas.map((data) => (
                                    <div key={data.mal_id}>
                                    <ListItem
                                        className="py-1 hover:bg-transparent font-extrabold uppercase"
                                        href={`/category/${encodeURIComponent(data.name || 'unknown')}?id=${data.mal_id}`}
                                        title={data.name || 'Unknown Category'}
                                    />
                                </div>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <Link href=""
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
