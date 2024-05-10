import { categorydata } from "@/utils/categoryapi";
import Categorysection from "./categorysection";
import { Category } from "@/utils/type_and_jsons";

type CategoryProps = {
        name: string;
}

export default async function Category_fetching({name}: CategoryProps) {

    const data = await categorydata(name);

  return (
    <section className="flex flex-wrap gap-5 justify-center">
                {data.map((category:Category) => (
                    <Categorysection key={category.data_id} category={category} />
                ))}
            </section>
  )
}
