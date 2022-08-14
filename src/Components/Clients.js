import React, { useState, useEffect } from "react";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import firestore
import { fs } from "../firebase/config";

//import styles
import {
  ClientsHeadline,
  ClientsWrapper,
  SingleClient,
  ClientContainer,
  MarqueeContent,
} from "./Styles/clientsStyles";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    let mounted = true;

    fs.collection("Clients")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempTitle = [];
        snapshot.forEach((doc) => {
          tempTitle.push({ ...doc.data(), id: doc.id });
        });
        if (mounted) {
          setClients(tempTitle);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ClientsWrapper>
      <ClientsHeadline>Nos Clients.</ClientsHeadline>

      <ClientContainer>
        <MarqueeContent className="marquee__content">
          {clients.map((client) => (
            <SingleClient>
              <div className="image-container">
                <img src={client.image} alt={client.name} />
              </div>
              <span>{client.name}</span>
            </SingleClient>
          ))}
        </MarqueeContent>

        <MarqueeContent className="marquee__content" aria-hidden="true">
          {clients.map((client) => (
            <SingleClient>
              <div className="image-container">
                <img src={client.image} alt={client.name} />
              </div>
              <span>{client.name}</span>
            </SingleClient>
          ))}
        </MarqueeContent>
      </ClientContainer>
    </ClientsWrapper>
  );
};

export default Clients;
