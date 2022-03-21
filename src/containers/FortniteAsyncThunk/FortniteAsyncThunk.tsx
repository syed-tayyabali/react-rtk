import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getFortnitePlaylist, getSinglePlaylist } from '../../features/fortniteShop/actions'
import { getData } from '../../features/fortniteShop/selectors'
import { useNavigate } from 'react-router-dom'

const FortniteAsyncThunk = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getFortnitePlaylist())
    }, [])

    const fortniteData = useAppSelector(getData);

    const onClickItems = (id: string) => {
        dispatch(getSinglePlaylist(id))
        navigate(`${window.location.pathname}/${id}`)
    }

    return (
        <>
            <h3>Fortnite call from createAsyncThunk</h3>
            {
                fortniteData && fortniteData.map((item) => (
                    <h4 key={item.id}>
                        <a key={item.id} onClick={() => onClickItems(item.id)}> {item.name} </a>
                    </h4>
                ))
            }
        </>
    );
}

export default FortniteAsyncThunk;