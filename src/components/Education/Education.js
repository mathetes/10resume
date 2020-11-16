import Link from 'next/link';

const Education = () => (
    <>
        <div className="container z-depth-1 my-5 py-5">

            <section>

                <h3 className="font-weight-bold text-center dark-grey-text pb-2">Education</h3>
                <hr className="w-header my-4" />
                    <p className="lead text-center text-muted pt-2 mb-5">I seek out new knowledge and actively develop new skills.</p>

                    <div className="row d-flex justify-content-center">

                        <div className="col-md-6 col-lg-5 col-xl-4">
                            <h5 className="font-weight-normal border-top border-light pt-4 mb-4"><a className="dark-grey-text" href="#">Karaganda Higher Polytechnic College</a></h5>
                            <p className="text-muted mb-5 pb-md-3">1992-1996 - Maintenance and repair of mining electromechanical equipment. <br /><Link href="https://kvptk.kz/ru">www.kvptk.kz</Link></p>
                            
                        </div>

                        <div className="col-md-6 col-lg-5 col-xl-4">
                            <h5 className="font-weight-normal border-top border-secondary pt-4 mb-4"><a className="dark-grey-text"
                                href="#">Novosibirsk Biblical Seminary</a></h5>
                            <p className="text-muted mb-5 pb-md-3">2000-2004 - It is the only higher theological institution in the Asiatic part of Russia. <Link href="https://nbbs.ru">www.nbbs.ru</Link></p>
                            
                        </div>

                        <div className="w-100"></div>

                    </div>
</section>

</div>


    </>
        )
        
        export default Education
