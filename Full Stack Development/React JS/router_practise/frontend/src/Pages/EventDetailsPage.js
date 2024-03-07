import React from "react";
import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailsPage = () => {
  const data = useRouteLoaderData("event-details");
  return <EventItem event={data.event} />;
};

export default EventDetailsPage;

export const loader = async ({ req, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Couldn't Fetch Details of the event..." },
      {
        status: 500,
      }
    );
  } else {
    return response;
  }
};

export const action = async ({ request, params }) => {
  const id = params.eventId;

  const response = await fetch("http://localhost:8080/events/" + id, {
    method: request.method,
  });

  if (!response.ok) {
    throw json(
      { message: "Couldn't delete data..." },
      {
        status: 500,
      }
    );
  }

  return redirect("/events");
};
