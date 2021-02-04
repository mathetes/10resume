import Link from "next/link";

const data = [
  {
    id: 1,
    school: "Karaganda Higher Polytechnic College",
    period: "1992-1996",
    link: "https://kvptk.kz/ru",
    course: "Maintenance and repair of mining electromechanical equipment.",
  },
  {
    id: 2,
    school: "Novosibirsk Biblical Seminary",
    period: "2000-2004",
    link: "https://nbbs.ru",
    course:
      "It is the only higher theological institution in the Asiatic part of Russia.",
  },
];

const listItems = data.map((item) => (
  <div className="col-md-6 col-lg-5 col-xl-4" key={item.id}>
    <h5 className="font-weight-normal border-top border-light pt-4 mb-4">
      <a className="dark-grey-text" href="{item.link}">
        {item.school}
      </a>
    </h5>
    <p className="text-muted mb-5 pb-md-3">
      {item.period} - {item.course} <br />
      <Link href={item.link}>{item.link}</Link>
    </p>
  </div>
));

export const Education = (data) => (
  <>
    <div className="container z-depth-1 py-5">
      <section>
        <h3 className="font-weight-bold text-center dark-grey-text pb-2">
          Education
        </h3>
        <hr className="w-header my-4" />
        <p className="lead text-center text-muted pt-2 mb-5">
          I seek out new knowledge and actively develop new skills.
        </p>

        <div className="row d-flex justify-content-center">
          {listItems}
          <div className="w-100"></div>
        </div>
      </section>
    </div>
  </>
);
