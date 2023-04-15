import React from "react";
import { useState, useEffect } from "react";
import { Container } from "./timezone.styles";

const SETTINGS = {
  local: "en-US",
  date: {
    day: "numeric",
    month: "short",
    weekday: "long",
    year: "numeric",
  },
  time: {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  },
};

export default function TimeZone() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); //ms

    return () => clearInterval(interval);
  }, []);

  const dateSettings = time.toLocaleDateString(SETTINGS.local, SETTINGS.date);

  const timeSettings = time.toLocaleTimeString(SETTINGS.local, SETTINGS.time);

  return (
    <Container>
      <h1>{dateSettings}</h1>
      <h3>{timeSettings}</h3>
    </Container>
  );
}
