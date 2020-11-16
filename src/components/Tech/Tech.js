const Tech = () => (
    <>
<div className="container my-5 pt-5 pb-3 px-4 z-depth-1">

<section>

  <div className="row">

    <div className="col-md-6 mb-4">

      <h5 className="text-center font-weight-bold mb-4">Skills</h5>

      <div className="d-flex justify-content-between">
        <small className="text-muted">HTML 5</small>
        <small><span><strong>160</strong></span>/<span></span>200</small>
      </div>
      <div className="progress md-progress">
        <div className="progress-bar bg-success" role="progressbar" style={{width: "25%"}} aria-valuenow="25"
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div className="d-flex justify-content-between">
        <small className="text-muted">CSS3</small>
        <small><span><strong>310</strong></span>/<span></span>400</small>
      </div>
      <div className="progress md-progress">
        <div className="progress-bar bg-info" role="progressbar" style={{width: "50%"}} aria-valuenow="50" aria-valuemin="0"
          aria-valuemax="100"></div>
      </div>

      <div className="d-flex justify-content-between">
        <small className="text-muted">Javascript ES5 / ES6</small>
        <small><span><strong>480</strong></span>/<span></span>800</small>
      </div>
      <div className="progress md-progress">
        <div className="progress-bar bg-warning" role="progressbar" style={{width: "75%"}} aria-valuenow="75"
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>

      <div className="d-flex justify-content-between">
        <small className="text-muted">Send Inquiries</small>
        <small><span><strong>250</strong></span>/<span></span>500</small>
      </div>
      <div className="progress md-progress">
        <div className="progress-bar bg-danger" role="progressbar" style={{width: "100%"}} aria-valuenow="100"
          aria-valuemin="0" aria-valuemax="100"></div>
      </div>

    </div>

  </div>

</section>

</div>

</>
)

export default Tech;