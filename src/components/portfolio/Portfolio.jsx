import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Markify from "../../../public/Markify.webp";

const items = [
  {
    id: 1,
    title: "Markify",
    img: "/Markify.webp",
    desc: "Markify is a user-friendly web application designed to streamline bookmark management by fetching and organizing Chrome bookmarks in a centralized interface. The project was created to address the common issue of cluttered and unorganized bookmarks, providing a solution that prioritizes simplicity, speed, and efficiency. ",
    redirect: "https://github.com/Garvit-Jhalani/Markify",
  },
  {
    id: 2,
    title: "Internshala Automation",
    img: "https://img.freepik.com/premium-photo/industrial-integration-automation-modernization_488220-597.jpg?semt=ais_hybrid",
    desc: "Internshala Automation is a powerful tool designed to automate and streamline the process of applying for internships on the Internshala platform. The project leverages modern web automation techniques to help users save time and effort by automating repetitive tasks, such as filling out application forms and sending personalized messages.",
    redirect: "https://github.com/Garvit-Jhalani/Internshala-Automation",
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
