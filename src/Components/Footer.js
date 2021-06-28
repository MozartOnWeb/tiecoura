import React, { useState } from "react";

// import EmailJS
import emailjs from "emailjs-com";

// Import SVGS
import {
  SiAdobepremiere,
  SiAdobephotoshop,
  SiAdobelightroomclassic,
} from "react-icons/si";

import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";

// Import Styles
import {
  FooterWrapper,
  FooterInfoWrapper,
  FooterInfoContainer,
  FooterInfos,
  FooterHeadline,
  SvgContainer,
  FooterForm,
} from "./Styles/footerStyles";
import { Submit } from "../layout";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");

  const onEmail = (e) => {
    setEmail(e.target.value);
  };
  const onName = (e) => {
    setName(e.target.value);
  };
  const onMessage = (e) => {
    setMessage(e.target.value);
  };

  const tempParams = {
    name: name,
    message: message,
    email: email,
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_vtmcx0w",
        "template_795uobf",
        tempParams,
        "user_IIuS4KGyfguClJ5SOMIMs",
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          console.log("FAILED...", err);
        },
      );
  };

  return (
    <div>
      <FooterWrapper>
        <FooterInfoWrapper>
          <FooterInfoContainer>
            <FooterInfos>
              <FooterHeadline>où me trouver ?</FooterHeadline>
              <p>badalabougou, bamako, mali</p>
              <p>badalabougou, bamako, mali</p>
            </FooterInfos>
            <FooterInfos>
              <FooterHeadline>Logiciels</FooterHeadline>
              <SvgContainer>
                <SiAdobepremiere />
                <SiAdobelightroomclassic />
                <SiAdobephotoshop />
              </SvgContainer>
            </FooterInfos>
            <FooterInfos>
              <span>&#169; 2021, MOZART.JS, tous droits réservés</span>
            </FooterInfos>
          </FooterInfoContainer>

          <FooterInfoContainer>
            <FooterInfos>
              <FooterHeadline>Contacts</FooterHeadline>
              <p>+22378437323</p>
              <p className="lowercase">mandjoudama@gmail.com</p>
            </FooterInfos>
            <FooterInfos>
              <FooterHeadline>Réseaux</FooterHeadline>
              <SvgContainer className="simple">
                <FaFacebookSquare className="red" />
                <FaInstagramSquare className="red" />
              </SvgContainer>
            </FooterInfos>
            <FooterInfos className="dot">
              <span>-</span>
            </FooterInfos>
          </FooterInfoContainer>

          <FooterInfoContainer className="form">
            <FooterInfos>
              <FooterHeadline>Vous avez un projet ?</FooterHeadline>
              <p className="lowercase">Parolons-en !</p>
            </FooterInfos>
            <FooterForm>
              <form>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="votre nom"
                  value={name}
                  onChange={onName}
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="votre e-mail"
                  value={email}
                  onChange={onEmail}
                />
                <textarea
                  name="message"
                  id="message"
                  cols="23"
                  rows="7"
                  placeholder="votre message"
                  value={message}
                  onChange={onMessage}></textarea>
              </form>
              
            </FooterForm>
            <FooterInfos><Submit onClick={sendEmail}>
                Envoyer{" "}
                <svg
                  className="arrow"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35.91"
                  viewBox="0 0 35 35.91">
                  <path
                    id="FontAwsome_arrow-down_"
                    data-name="FontAwsome (arrow-down)"
                    d="M38.306,47.268l1.779,1.779a1.916,1.916,0,0,1,0,2.717L24.512,67.345a1.916,1.916,0,0,1-2.717,0L6.215,51.764a1.916,1.916,0,0,1,0-2.717l1.779-1.779a1.926,1.926,0,0,1,2.749.032l9.2,9.658V33.924A1.919,1.919,0,0,1,21.868,32h2.565a1.919,1.919,0,0,1,1.924,1.924V56.958l9.2-9.658a1.912,1.912,0,0,1,2.749-.032Z"
                    transform="translate(-5.65 -32)"
                    fill="#fffdff"
                  />
                </svg>
              </Submit></FooterInfos>
          </FooterInfoContainer>
        </FooterInfoWrapper>
      </FooterWrapper>
    </div>
  );
};

export default Footer;
