export interface shop {
    name: string
    id: string
}

export interface singleItem {
    name: string
    description: string
    images: {
        showcase: string
    }
}

export interface fortniteShopState {
    data: shop[]
    loading: boolean
    item: Partial<singleItem>
}