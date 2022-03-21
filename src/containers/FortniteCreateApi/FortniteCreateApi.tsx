import React, { useState } from 'react'
import { useAppSelector } from '../../app/hooks'
import { getData } from '../../features/fortniteShop/selectors'
import { useFetchFortnitePlaylistQuery, useFetchPlaylistQuery } from '../../features/fortniteShop/forniteShopApi'
import { useNavigate } from 'react-router-dom'

const FortniteCreateApi = () => {
    useFetchFortnitePlaylistQuery();

    const [playlistId, setPlaylistId] = useState('')
    useFetchPlaylistQuery(playlistId);
    const fortniteData = useAppSelector(getData);

    return (
        <>
            <h3>Fortnite call from createApi</h3>
            {
                fortniteData && fortniteData.map((item) => (
                    <h4 key={item.id}>
                        <a key={item.id} onClick={(e) => setPlaylistId(item.id)}> {item.name} </a>
                    </h4>
                ))
            }
        </>
    );
}

export default FortniteCreateApi;