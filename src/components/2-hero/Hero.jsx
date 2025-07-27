import Lottie from "lottie-react";
import "./hero.css";
import devAnimation from "../../animation/dev.json";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const lottieRef = useRef();

  return (
    <section className="hero flex">
      <div className="left-section  ">
        <div className="parent-avatar flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 6, type: "spring", stiffness: 100 }}
            src="./Picsart_25-07-02_04-23-26-215-modified.png"
            className="avatar"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="title"
        >
          
        Frontend Developer | Creating Modern, Responsive Interfaces with a Focus on User Experience







        </motion.h1>

        <p className="sub-title">
          I'm Mahmoud Elbana, a Frontend Developer dedicated to building clean, responsive, and user-centered websites.

I specialize in modern web technologies including HTML, CSS, JavaScript, React, and Tailwind CSS. I have experience working with RESTful APIs, enabling dynamic and seamless data integration across web interfaces.

I’m passionate about writing clean code, delivering smooth user experiences, and building accessible, performant interfaces across all devices. I stay up-to-date with the latest tools and best practices in frontend development to continuously improve the quality of my work. 
<br />
🎓<br />
 Education
Bachelor’s in Management Information Systems <br />
Higher Institute of Computer Science and Business Administration, El-Zarka, Damietta — 2024
<br />Grade: Very Good


        </p>

        <div className="all-icons flex">
          <a
            href="https://x.com/Mahmoud36468898?t=B-uGJ25Qs1kkbSdup8LOOg&s=09"
            className="icon icon-twitter"
          ></a>
          <a
            href="https://www.instagram.com/mahmoud_elbana47?igsh=dDMyaGoxZWRtYWkz"
            className="icon icon-instagram"
          ></a>
          <a
            href="https://github.com/mahmoud652000"
            className="icon icon-github"
          ></a>
          <a
            href="https://www.linkedin.com/in/mahmoud-elbana-25473b150?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app
"
            className="icon icon-linkedin"
          ></a>
        </div>
      </div>

      <div className="right-section animation ">
        <Lottie
          lottieRef={lottieRef}
          className=""
          onLoadedImages={() => {
            // @ts-ignore
            // https://lottiereact.com/
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={devAnimation}
        />
      </div>
    </section>
  );
};

export default Hero;
