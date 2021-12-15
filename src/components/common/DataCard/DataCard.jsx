import React from 'react'

// styles
import './styles/styles_dataCard.scss'

export default function DataCard(props) {
    // props
    const { data } = props

    return (
        <div className="card-item">
            <div className="ci-inner">
                <p className="name app-fw-600">{data.name}</p>
                <p className="craft">{data.craft}</p>
            </div>
        </div>
    )
}
