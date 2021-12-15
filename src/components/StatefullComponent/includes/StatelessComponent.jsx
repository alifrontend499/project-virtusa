import React from 'react'

// card component
import DataCard from 'components/common/DataCard'

export default function StatelessComponent(props) {
    // props
    const { loading, data } = props

    return (
        <div className="card-container d-flex flex-wrap justify-content-center">
            {
                loading ? (
                    <p className="loading text-center">Loading...</p>
                ) : (
                    <React.Fragment>
                        {
                            data?.length ? data.map((item, index) => (
                                <DataCard
                                    key={item.name + "_" + index}
                                    data={item}
                                />
                            )) : (
                                <p className="no-data text-center">No data found.</p>
                            )
                        }
                    </React.Fragment>
                )
            }
        </div>
    )
}
