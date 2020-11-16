import Link from 'next/link';

export const Knowledges = () => (
    <>
        <div className="container z-depth-1 my-5 py-5">

            <section>

                <h3 className="font-weight-bold text-center dark-grey-text pb-2">Knowledges</h3>
                <hr className="w-header my-4" />
                <p className="lead text-center text-muted pt-2 mb-5">Things I already know & used</p>

                <div className="row d-flex justify-content-center">

                    <div className="col-md-6 col-lg-5 col-xl-12">
                        <ul className="list-counter-square">
                            <li>HTML, CSS, jQuery</li>
                            <li>Responsive and mobile-ready</li>
                            <li>Javascript ES5 / ES6</li>
                            <li>React.js library with Ecosystem</li>
                            <li>Next.js</li>
                            <li>Gatsby.js</li>
                        </ul>


                    </div>

                    <div className="w-100"></div>

                </div>
            </section>

        </div>


    </>
)

