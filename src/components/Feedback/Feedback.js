const Feedback = () => (

    <div className="container my-5 py-5 z-depth-1">

        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">

            <div className="row">

                <div className="col-lg-5 col-md-12 mb-0 mb-md-0">

                    <h3 className="font-weight-bold">Contact Us</h3>

                    <p className="text-muted">Lorem ipsum dolor</p>

                    <p><span className="font-weight-bold mr-2">Email:</span><a href="">nsk.roman@gmail.com</a></p>
                    <p><span className="font-weight-bold mr-2">Phone:</span><a href="">+7-923-157-70-52</a></p>

                </div>

                <div className="col-lg-7 col-md-12 mb-4 mb-md-0">

                    <div className="row">

                        <div className="col-md-6">

                            <div className="md-form md-outline mb-0">
                                <input type="text" id="form-first-name" className="form-control" />
                                <label htmlFor="form-first-name">First name</label>
                            </div>

                        </div>
                        <div className="col-md-6">

                            <div className="md-form md-outline mb-0">
                                <input type="text" id="form-last-name" className="form-control" />
                                <label htmlFor="form-last-name">Last name</label>
                            </div>

                        </div>

                    </div>

                    <div className="md-form md-outline mt-3">
                        <input type="email" id="form-email" className="form-control" />
                        <label htmlFor="form-email">E-mail</label>
                    </div>

                    <div className="md-form md-outline">
                        <input type="text" id="form-subject" className="form-control" />
                        <label htmlFor="form-subject">Subject</label>
                    </div>
                    <div className="md-form md-outline mb-3">
                        <textarea id="form-message" className="md-textarea form-control" rows="3"></textarea>
                        <label htmlFor="form-message">How we can help?</label>
                    </div>

                    <button type="submit" className="btn btn-info btn-sm ml-0">Submit<i className="far fa-paper-plane ml-2"></i></button>

                </div>
            </div>
        </section>

    </div>
)

export default Feedback;