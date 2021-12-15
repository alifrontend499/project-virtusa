import React, { useEffect, useState } from 'react'


// apis
import {
    data1API,
    data2API,
    data3API
} from './helpers/APIs'

export default function ExerciseTwo() {
    // states
    const [userEmailsLoading, setUserEmailsLoading] = useState(false)
    const [userEmails, setUserEmails] = useState([])

    useEffect(() => {
        // loading
        setUserEmailsLoading(true)

        // getting all the data
        Promise.all([
            data1API(),
            data2API(),
            data3API()
        ]).then(res => {
            const data = []
            res.forEach(item => {
                if (item?.data) {
                    data.push(item.data)
                }
            });

            // loading
            setUserEmailsLoading(false)

            setUserEmails(data) // setting user emails
        }).catch(err => {
            // loading
            setUserEmailsLoading(false)

            console.log("err ", err);
        })
    }, [])

    return (
        <div className='exercise-container two'>
            <h1 className='head'>Exercise Two</h1>

            <div className="exercise-two-result">
                {
                    userEmailsLoading ? (
                        <p>Loading...</p>
                    ) : (
                        <React.Fragment>
                            {
                                userEmails?.length ? userEmails.map(item => (
                                    <p key={item.id}>{item.email}</p>
                                )) : (
                                    <p>no data found</p>
                                )
                            }
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    )
}
