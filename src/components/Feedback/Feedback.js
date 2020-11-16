const Feedback = () => (

<div class="container my-5">

<section class="text-center dark-grey-text mb-5">


<div class="card">
  <div class="card-body rounded-top border-top p-5">
    
    <h3 class="font-weight-bold my-4">Contact Me</h3>
    
    <div className="info-list">
            <ul className="info-list-ul">
            <li className="info-list-li"> <strong> <span> E-mail: </span> </strong> <span> nsk.roman@gmail.com </span></li>
            <li className="info-list-li"> <strong> <span> phone: </span> </strong> <span> +7-923-157-70-52 </span></li>
            <li className="info-list-li"> <strong> <span> Address: </span> </strong> <span> Novosibirsk, RU </span></li>
            <li className="info-list-li"> <strong> <span> Freelance: </span> </strong> <span> Available </span></li>
            </ul>
        </div>

    <form class="mb-4 mx-md-5" action="">

      <div class="row">
        <div class="col-md-6 mb-4">

          
          <input type="text" id="name" class="form-control" placeholder="Name" />

        </div>
        <div class="col-md-6 mb-4">

          
          <input type="email" id="email" class="form-control" placeholder="Email" />

        </div>
      </div>

      <div class="row">
        <div class="col-md-12 mb-4">

        
          <input type="text" id="subject" class="form-control" placeholder="Subject" />

        </div>
      </div>

      <div class="row">
        <div class="col-md-12">

          <div class="form-group mb-4">
            <textarea class="form-control rounded" id="message" rows="3" placeholder="How can we help?"></textarea>
          </div>

          <div class="text-center">
            <button type="submit" class="btn btn-info btn-md">Submit</button>
          </div>

        </div>
      </div>

    </form>
    
  </div>
</div>

</section>

</div>
)

export default Feedback;