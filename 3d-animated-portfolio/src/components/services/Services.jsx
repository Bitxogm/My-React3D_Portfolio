import ComputerModelContainer from "./3d-objects-containers/LaptopContainer";
import GamingPcContainer from "./3d-objects-containers/GamingPcContainer";
import "./services.css";
import KeyboardContainer from "./3d-objects-containers/KeyboardContainer";

const services =[
  {
    id:1,
    img: "/service1.png",
    title: "Web Development",
    counter: 35,
  },

  {
    id:2,
    img: "/service2.png",
    title: "Product Design",
    counter: 13,
  },

  {
    id:3,
    img: "/service3.png",
    title: "Branding",
    counter: 15,
  },
];


const Services = () => {
  return (
    <div className='services'>
      <div className="sSection left">
        <h1 className="sTitle">Que puedo hacer por ti?</h1>
        <div className="serviceList"></div>
       {services.map((service ) => (
         <div className="service" key={service.id}>
          <div className="serviceIcon">
            <img src={service.img} alt="" ></img>
          </div>
          <div className="serviceInfo">
            <h2>{service.title}</h2>
            <h3>{service.counter} Projects</h3>
          </div>

         </div>

       ))}
      </div>

      <div className="sSection right">
        {/* <KeyboardContainer /> */}
        {/* <ComputerModelContainer/> */}
        {/* <GamingPcContainer /> */}

      </div>
    </div>
  )
}
export default Services;