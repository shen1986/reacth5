interface ISellerType {
    avatar: string
    name: string
    description: string
    deliveryTime: string
    supports: any
    bulletin: string
    score: number
    deliverPrice: number
    minPrice: number
    deliveryPrice: number
    ratingCount: number
    sellCount: number
    pics: string[]
    infos: string[]
}

interface IGoodsType {
    name: string
    type: number
    foods: IFoodType[]
}

interface IFoodType {
    icon?: string
    name?: string
    count?: number
    description?: string
    sellCount?: number
    rating?: number
    price?: number
    oldPrice?: number
    
}