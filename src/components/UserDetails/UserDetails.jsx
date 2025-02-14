import React, { useState } from 'react'
import { useUserStore } from '../../store/cartStore'

const UserDetails = () => {

    const user = useUserStore(state => state.user)
    const updateUserStreetAddress = useUserStore(state => state.updateUserStreetAddress)


    const [data, setData] = useState({
        street: ""
    })

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log('checking and testing ****** ', data)
        updateUserStreetAddress(data.street)

    }

    console.log("useruseruseruser **** ", user)
    console.log("datadatadatadata **** ", data)
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type='text' placeholder='enter street address' id='streetAddress' value={data.street} onChange={(e) => setData({ ...data, street: e.target.value })} />
                <input type='submit' value={'enter'} />
            </form>
        </div>
    )
}

export default UserDetails