export interface ProductoInterface {
  id: number,
  title: string,
  price: number,
  description: string,
  category: CategoryInterface,
  images: string[]
}

interface CategoryInterface{
  id: number,
  name: string,
  image: string
}
