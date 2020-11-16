import Link from 'next/link';

export const Experience = () => (
    <>
        <div className="container z-depth-1 my-5 p-5">

            <section>
                <h3 className="font-weight-bold text-center dark-grey-text pb-2">Experience</h3>
                <hr className="w-header my-4" />
                <p className="lead text-center text-muted pt-2 mb-5">I'm specialist working in IT sphere.</p>

                <div className="row d-flex justify-content-center">

                    <div className="col-md-6 col-xl-4">
                        <h5 className="font-weight-normal"><a className="dark-grey-text" href="#">JSC«NPAF»</a></h5>
                        <p className="small grey-text">11.2016 - Present</p>
                    </div>

                    <div className="col-md-6">
                        <p className="text-muted mb-5 pb-2">Senior System(s) Administrator.<Link href="https://nziv.ru">www.nziv.ru</Link></p>

                    </div>


                    <div className="col-md-6 col-xl-4">
                        <h5 className="font-weight-normal"><a className="dark-grey-text" href="#">Trade54 ltd.</a></h5>
                        <p className="small grey-text">03.2015-03.2016</p>
                    </div>

                    <div className="col-md-6">
                        <p className="text-muted mb-5 pb-2">System(s) Administrator.</p>
                    </div>


                    <div className="col-md-6 col-xl-4">
                        <h5 className="font-weight-normal"><a className="dark-grey-text" href="#">Private Entrepreneur</a></h5>
                        <p className="small grey-text">2008-2014</p>
                    </div>

                    <div className="col-md-6">
                        <p className="text-muted mb-5 pb-2">Computer repair technician</p>
                    </div>

                </div>

            </section>

        </div>

    </>
)

