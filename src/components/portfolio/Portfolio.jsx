import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "FarmHub",
    img: "https://media.istockphoto.com/id/1029301814/photo/farmer-ploughing-field.jpg?s=612x612&w=0&k=20&c=DUfDbLJ_gpkdPJZu3Nu3_Y_wdB64MP1lAoNtus1ewXQ=",
    desc: "FarmHub is a platform that empowers farmers by allowing them to sell their crops directly to the market, eliminating the need for intermediaries. The goal is to promote agriculture by ensuring farmers get fair prices for their produce.",
    redirect: "#",
  },
  {
    id: 2,
    title: "ParkEase",
    img: "https://png.pngtree.com/background/20230516/original/pngtree-large-parking-lot-with-many-cars-parked-picture-image_2601294.jpg",
    desc: "ParkEase is a platform that connects households with available parking spaces to users looking for parking spots in specific locations. This innovative solution helps solve parking issues while utilizing underused private parking areas.",
    redirect: "#",
  },
  {
    id: 3,
    title: "Connectify",
    img: "https://png.pngtree.com/thumb_back/fh260/background/20230716/pngtree-portfolio-displays-and-mobile-apps-with-3d-shapes-chat-messages-and-image_3879137.jpg",
    desc: "Connectify is a real-time chat application built using the MERN stack and Socket.IO. It allows users to communicate instantly with each other, providing a smooth and seamless messaging experience across various devices.",
    redirect: "https://github.com/Garvit-Jhalani/Connectify-MERN-Chat-App-",
  },
  {
    id: 4,
    title: "SwiftCart",
    img: "https://cdn.pixabay.com/photo/2021/11/22/20/20/online-6817350_640.jpg",
    desc: "SwiftCart is a full-fledged e-commerce platform built using the MERN stack. It provides users with a streamlined shopping experience, showcasing a range of products with secure authentication and order processing using Auth0.",
    redirect: "https://github.com/Garvit-Jhalani/SwiftCart",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.redirect}>
              <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
