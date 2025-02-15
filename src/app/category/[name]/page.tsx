import Category_fetching from "@/component/category-fetching";
import { Suspense } from "react";
import Loading from "./loading";

type CategoryProps = {
    params: {
        name: string;
    },
    searchParams: {
        id: string;
    }
}

export default async function Page({ params, searchParams }: CategoryProps) {
    const name = params.name;
    const id = searchParams.id

    const heading = name.charAt(0).toUpperCase() + name.slice(1);



    return (
        <main className="p-3 bg-gray-600 min-h-[100vh] w-full relative">

            <div className="mb-8 pb-2 border-b border-white/65">
                <h1 className="text-4xl font-bold text-white">
                    {heading}
                </h1>
            </div>
                <Suspense fallback={<Loading />}>
                    <Category_fetching id={id} />
                </Suspense>
        </main>
    )
}
