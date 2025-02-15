import { categorydata } from "@/utils/categoryapi";
import Categorysection from "./categorysection";

type CategoryProps = {
  id: string;
}

type category={
  mal_id:string,
  title:string,
  type:string,
  status:string,
  episodes:number
  images:{
    webp:{
      large_image_url:string
    }
  }
}

export default async function Category_fetching({ id }: CategoryProps) {

  const data = await categorydata(id);
  

  return (
    <section className="flex flex-wrap gap-3 justify-center">
        {data.map((category:category) => (
          <Categorysection key={category.mal_id} category={category} />
        ))}
    </section>
  )
}
