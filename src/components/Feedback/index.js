export const Feedback = () => (

  <div className="container my-5">

    <section className="text-center dark-grey-text mb-5">


      <div className="card">
        <div className="card-body rounded-top border-top p-5">

          <h3 className="font-weight-bold my-4">Contact Me</h3>

          <div className="info-list">
            <ul className="info-list-ul">
              <li className="info-list-li"> <strong> <span> E-mail: </span> </strong> <span> nsk.roman@gmail.com </span></li>
              <li className="info-list-li"> <strong> <span> phone: </span> </strong> <span> +7-923-157-70-52 </span></li>
              <li className="info-list-li"> <strong> <span> Address: </span> </strong> <span> Novosibirsk, RU </span></li>
              <li className="info-list-li"> <strong> <span> Freelance: </span> </strong> <span> Available </span></li>
            </ul>
          </div>

          <form className="mb-4 mx-md-5" action="">

            <div className="row">
              <div className="col-md-6 mb-4">


                <input type="text" id="name" className="form-control" placeholder="Name" />

              </div>
              <div className="col-md-6 mb-4">


                <input type="email" id="email" className="form-control" placeholder="Email" />

              </div>
            </div>

            <div className="row">
              <div className="col-md-12 mb-4">


                <input type="text" id="subject" className="form-control" placeholder="Subject" />

              </div>
            </div>

            <div className="row">
              <div className="col-md-12">

                <div className="form-group mb-4">
                  <textarea className="form-control rounded" id="message" rows="3" placeholder="How can we help?"></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn btn-info btn-md">Submit</button>
                </div>

              </div>
            </div>

          </form>

        </div>
      </div>

    </section>

  </div>
)