import React, { useEffect, useState } from 'react'

// styles
import './styles/styles_components.scss'

// API
import { getDataAPI, cancelGetDataApi } from 'utlis/apis/CommonApi'

// components
import StatelessComponent from './includes/StatelessComponent'

export default function StatefullComponent() {
    // states
    const [allData, setAllData] = useState([])
    const [dataLoading, setDataLoading] = useState(false)

    // getting data
    useEffect(() => {
        // loading
        setDataLoading(true)

        getDataAPI().then(res => {
            // loading
            setDataLoading(false)

            const resData = res?.data

            if (resData) {
                setAllData(resData?.people || []) // setting data to the state
            }

        }).catch(err => {
            console.log("some error found ", err?.message || err);

            // loading
            setDataLoading(false)
        })

        return () => {
            cancelGetDataApi && cancelGetDataApi() // cancelling the getting data API when compnents removes
        }
    }, [])

    return (
        <div className="page-component">
            {/* heading */}
            <div className="heading-container text-center">
                <h1 className="heading st-fw-600">List of Astronauts</h1>
            </div>

            {/* content */}
            <div className="content">
                <StatelessComponent
                    loading={dataLoading}
                    data={allData}
                />
            </div>
        </div>
    )
}
