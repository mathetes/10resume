import Link from 'next/link';

const Projects = () => (
    <>
        <div className="container my-5">


            <section className="dark-grey-text">

                <h3 className="text-center font-weight-bold mb-4 pb-2">My projects</h3>
                <p className="text-center text-muted w-responsive mx-auto mb-5">My training and work projects.</p>

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

                                <h4 className="card-title">Hotel "Cristall"</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">This project was build with CMS Wordress in 2018.
                                <Link href="http://cristall.online/">cristall.online</Link>
                                </p>

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

                                <h4 className="card-title">School "Unity"</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">.Children school for additional education.
                                <Link href="http://www.school-unity.ru/">www.school-unity.ru</Link>
                                </p>

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

                                <h4 className="card-title">Consumer goods</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">Catalog of consumer goods. Was build in 2020 with help of Bootstrap 4 & Webpack.
                                <Link href="http://tnp.nziv.ru/">tnp.nziv.ru</Link>
                                </p>

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

                                <h4 className="card-title">Weather forecast app</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">Learning weather forecast application
                                <Link href="https://codesandbox.io/s/weather-app-o0z4f">Weather-Forecast</Link>
                                </p>

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

                                <h4 className="card-title">Laximo task</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">Layout table for company "Laximo".
                                <Link href="https://codesandbox.io/s/laximo-task-bivpq">Laximo</Link>
                                </p>

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

                                <h4 className="card-title">Cinema catalog</h4>
                                <hr />
                                <p className="card-text text-muted font-weight-light">Catalog of movies built with React.js. 
                                <Link href="https://codesandbox.io/s/reactwarrior-1u2mr">Cinema</Link>
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </section>


        </div>
    </>
)

export default Projects;