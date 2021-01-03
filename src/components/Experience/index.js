import Link from "next/link";

const data = [
  {
    id: 1,
    company: "JSC«NPAF»",
    period: "11.2016 - Present",
    position: "Senior System(s) Administrator.",
    link: "https://nziv.ru",
  },
  {
    id: 2,
    company: "Trade54 ltd.",
    period: "03.2015-03.2016",
    position: "System(s) Administrator.",
    link: "#",
  },
  {
    id: 3,
    company: "Private Entrepreneur",
    period: "2008-2014",
    position: "Computer repair technician",
    link: "www.helplinsk.ru",
  },
];

const listItems = data.map((item) => (
  <>
    <div className="col-md-6 col-xl-4">
      <h5 className="font-weight-normal">
        <a className="dark-grey-text" href={item.link}>
          {item.company}
        </a>
      </h5>
      <p className="small grey-text">{item.period}</p>
    </div>

    <div className="col-md-6">
      <p className="text-muted mb-5 pb-2">
        {item.position}
        <Link href={item.link}>{item.link}</Link>
      </p>
    </div>
  </>
));

export const Experience = () => (
  <>
    <div className="container z-depth-1 my-5 p-5">
      <section>
        <h3 className="font-weight-bold text-center dark-grey-text pb-2">
          Experience
        </h3>
        <hr className="w-header my-4" />
        <p className="lead text-center text-muted pt-2 mb-5">
          I'm specialist working in IT sphere.
        </p>

        <div className="row d-flex justify-content-center">{listItems}</div>
      </section>
    </div>
  </>
);