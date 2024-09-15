import React from "react";
import classes from "./Footer.module.css";
import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <React.Fragment>
      <div className={classes["footer-container"]}>
        <p className={classes.txt}>Contact us on social media</p>

        <div className={classes.footer}>
          <div className={classes.social}>
            <a target="_blank" href="https://wa.me/qr/EFN7P5TUVJC2D1">
              <AiOutlineWhatsApp />
            </a>
            <p>Whatsapp</p>
          </div>
          <div className={classes.social}>
            <a target="_blank" href="https://www.facebook.com/Computer-Studies-111905368077223">
              <AiFillFacebook />
            </a>
            <p>FaceBook</p>
          </div>
          <div className={classes.social}>
            <a target="_blank" href="https://www.linkedin.com/in/alie-kalokoh-545b93232">
              <AiOutlineInstagram />
            </a>
            <p>LinkedIn</p>
          </div>
          <div className={classes.social}>
            <a target="_blank" href="https://www.youtube.com/channel/UC-FPRYOlYdCk-brLlPwrZcg">
              <AiFillTwitterCircle />
            </a>
            <p>Youtube</p>
          </div>
        </div>
        <p className={classes.copyright}> copyright&copy;Tech1012024</p>
      </div>
    </React.Fragment>
  );
};

export default Footer;
