import React from 'react'
import { useAppSelector } from '../../app/hooks'
import { getItem } from '../../features/fortniteShop/selectors'

const ItemDetail = () => {
    const item = useAppSelector(getItem)

    const style = {
        width: '40%'
    }

    return (
        <>
            <h2>Playlist Name: {item && item.name}</h2>
            <h2>Playlist Description: {item && item.description}</h2>
            <img src={item.images && item.images.showcase} style={style} />
        </>
    )
}

export default ItemDetail