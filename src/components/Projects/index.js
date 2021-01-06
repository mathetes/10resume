import Link from "next/link";


const projects = [
  {
    id: 1,
    name: "Hotel 'Cristall'",
    desription: "This project was build with ",
    platform: "CMS Wordress",
    year: 2018,
    link: "http://cristall.online/",
    imgurl: "cristall.jpg",
  },

  {
    id: 2,
    name: "School 'Unity'",
    desription: "Children school for additional education.",
    platform: "Joomla 3",
    year: 2017,
    link: "http://www.school-unity.ru/",
    imgurl: "unity.jpg",
  },

  {
    id: 3,
    name: "Consumer goods",
    desription: "Catalog of consumer goods. Was build in",
    platform: "with help of Bootstrap 4 & Webpack.",
    year: 2020,
    link: "http://tnp.nziv.ru/",
    imgurl: "tnp2.jpg",
  },

  {
    id: 4,
    name: "Weather forecast app",
    desription: "Learning weather forecast application",
    platform: "Create-react-app",
    year: 2020,
    link: "https://codesandbox.io/s/weather-app-o0z4f",
    imgurl: "weather.jpg",
  },

  {
    id: 5,
    name: "Laximo task",
    desription: "Layout table for company 'Laximo'",
    platform: "HTML & CSS layout",
    year: 2016,
    link: "https://codesandbox.io/s/laximo-task-bivpq",
    imgurl: "laximo.jpg",
  },

  {
    id: 6,
    name: "Cinema catalog",
    desription: "Catalog of movies built with React.js.",
    platform: "Create-react-app",
    year: 2016,
    link: "https://codesandbox.io/s/reactwarrior-1u2mr",
    imgurl: "movies.jpg",
  },
];

const listProjects = projects.map((project) => (
  <div className="col-md-6 mb-4">
    <div className="card">
      <div className="view overlay">
      <img 
            className="card-img-top"
            src="https://mdbootstrap.com/img/Photos/Lightbox/Original/img%20(41).jpg" 
            alt="Card image cap" 
        />
        <a>
          <div className="mask rgba-white-slight"></div>
        </a>
      </div>

      <a className="btn-floating btn-action ml-auto mr-4 mdb-color">
        <i className="fas fa-chevron-right pl-1"></i>
      </a>

      <div className="card-body">
        <h4 className="card-title">{project.name}</h4>
        <hr />
        <p className="card-text text-muted font-weight-light">
          {project.desription} {project.year}
          <Link href={project.link}>{project.link}</Link>
        </p>
      </div>
    </div>
  </div>
));

export const Projects = () => (
  <>
    <div className="container my-5">
      <section className="dark-grey-text">
        <h3 className="text-center font-weight-bold mb-4 pb-2">My projects</h3>
        <p className="text-center text-muted w-responsive mx-auto mb-5">
          My training and work projects.
        </p>

        <div className="row">{listProjects}</div>
      </section>
    </div>
  </>
);