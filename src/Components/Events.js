import React, { useState, useEffect } from "react";

// Import React Router Dom
import { Link } from "react-router-dom";

// Import firestore
import { fs } from "../firebase/config";

// Import React Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import Styles
import {
  EventContainer,
  SingleEvent,
  ImageContainer,
  EventInfos,
  EventWrapper,
  EventHeadline,
} from "./Styles/eventsStyles";
import { NextArrow3, PrevArrow3 } from "./CustomArrows";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    let mounted = true;

    fs.collection("Actualities")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        const tempTitle = [];
        snapshot.forEach((doc) => {
          tempTitle.push({ ...doc.data() });
        });
        if (mounted) {
          setEvents(tempTitle);
        }
      });

    return () => {
      mounted = false;
    };
  }, []);

  // Slider Settings
  const setting = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 4,
    slidesToShow: 4,
    autoplay: false,
    fade: false,
    arrows: true,
    nextArrow: <NextArrow3 />,
    prevArrow: <PrevArrow3 />,
  };

  return (
    <EventWrapper>
      <EventHeadline>Events</EventHeadline>
      <EventContainer>
        <Slider {...setting}>
          {events.map(({ title, desc, date, hour, image, location }) => (
            <SingleEvent>
              <ImageContainer>
                <img src={image} alt="event_image" />
              </ImageContainer>
              <EventInfos>
                <h2>{title}.</h2>
                <div>
                  <p>{date}.</p>
                  <p>{hour}.</p>
                </div>
                <p className="location">{location}.</p>
              </EventInfos>
              <div className="link">
                <Link to="">En savoir plus</Link>
              </div>
            </SingleEvent>
          ))}
        </Slider>
      </EventContainer>
    </EventWrapper>
  );
};

export default Events;
