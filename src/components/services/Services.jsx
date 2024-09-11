import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on creating innovative, high-performance web solutions to help
          <br />
          your brand thrive in the digital space. By leveraging my skills in the
          <br />
          MERN stack, I delivercustom-built applications that meet modern
          demands.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Innovative</motion.b>{" "}
            Solutions
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b> Web
            Applications.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Development</h2>
          <p>
            I build modern, responsive web applications using the MERN stack,
            ensuring seamless user experiences across devices. From frontend to
            backend, I focus on creating fast and scalable solutions tailored to
            your business needs.
          </p>
          <button>Explore Projects</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>API Development</h2>
          <p>
            I specialize in building efficient and secure RESTful APIs that
            ensure smooth communication between the frontend and backend. My
            focus is on delivering well-structured, scalable APIs that power
            dynamic web applications.
          </p>
          <button>Explore</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Performance Optimization</h2>
          <p>
            I ensure that your applications run smoothly by optimizing both
            frontend and backend performance. From code efficiency to database
            queries, I fine-tune your app to deliver the best user experience.
          </p>
          <button>Learn More</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Full Stack Development</h2>
          <p>
            Combining frontend, backend, and database management, I deliver
            comprehensive full stack solutions. From concept to deployment, I
            take care of every layer of your web application's architecture.
          </p>
          <button>View Full Stack Services</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
