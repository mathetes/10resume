const Projects = () => (
    <>
        <div className="container my-5">


            <section className="dark-grey-text">

                <h3 className="text-center font-weight-bold mb-4 pb-2">Our best projects</h3>
                <p className="text-center text-muted w-responsive mx-auto mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis totam voluptas nostrum quisquam eum porro a pariatur veniam.</p>

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="card">
                            <div className="view overlay">
                                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(147).jpg" alt="Card image cap" />
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <a className="btn-floating btn-action ml-auto mr-4 mdb-color"><i className="fas fa-chevron-right pl-1"></i></a>

                            <div className="card-body">

                                <h4 className="card-title">Read more about my project</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="card">
                            <div className="view overlay">
                                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg" alt="Card image cap" />
                                <a>
                                    <div className="mask rgba-white-slight"></div>
                                </a>
                            </div>

                            <a className="btn-floating btn-action ml-auto mr-4 mdb-color"><i className="fas fa-chevron-right pl-1"></i></a>

                            <div className="card-body">

                                <h4 className="card-title">Read more about my project</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                            </div>
                        </div>

                    </div>

                </div>

            </section>


        </div>
    </>
)

export default Projects;