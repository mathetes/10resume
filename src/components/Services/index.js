export const Services = () => (
    <div className="container z-depth-1 my-5 py-5">

        <section>
            <h3 className="font-weight-bold text-center dark-grey-text pb-2">My Services</h3>
            <hr className="w-header my-4" />
            <p className="lead text-center text-muted pt-2 mb-5">Modern & technological approach for solving current tasks.</p>

            <div className="row d-flex justify-content-center">

                <div className="col-md-6 col-lg-5 col-xl-4">
                    <h5 className="font-weight-normal border-top border-light pt-4 mb-4"><a className="dark-grey-text" href="#">Front-end</a></h5>
                    <p className="text-muted mb-5 pb-md-3">Modern and mobile-ready website that will help you reach all of your marketing.</p>
                </div>

                <div className="col-md-6 col-lg-5 col-xl-4">
                    <h5 className="font-weight-normal border-top border-secondary pt-4 mb-4"><a className="dark-grey-text"
                        href="#">Back-end</a></h5>
                    <p className="text-muted mb-5 pb-md-3">UI/UX focus on the user, frontend focus on the settings of the user, and backend focus on the data.</p>
                </div>

                <div className="w-100"></div>
            </div>
        </section>
    </div>
)
