import React from 'react'

const FlexboxInfo = () => (
    <>
        <div
            className="d-flex align-items-stretch bd-highlight example-parent"
            style={{ height: '300px' }}
        >
            <div className="p-2 bd-highlight col-example">
                <div className="icon">
                    {' '}
                    <span className="fa fa-html5"></span>
                </div>
                <div className="name">
                    {' '}
                    <h2> Front-end </h2>
                </div>
                <div className="desc">
                    <p>
                        Modern and mobile-ready website that will help you reach
                        all of your marketing.
                    </p>
                </div>
            </div>
        </div>
        <div
            className="d-flex align-items-stretch bd-highlight example-parent"
            style={{ height: '150px' }}
        ></div>
    </>
)

export default FlexboxInfo
