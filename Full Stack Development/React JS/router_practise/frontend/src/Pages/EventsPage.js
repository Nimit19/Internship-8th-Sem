import { useLoaderData, json } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  // // 1]
  // const events = useLoaderData();

  // // 2]
  const data = useLoaderData();
  const events = data.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loader = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    // 1]
    // return {isError:true ,message: "Couldn't load events"}

    // //2]
    // throw Error({ message: "Couldn't load events" });

    // // 3]
    // throw new Response(JSON.stringify({ message: " An Error Ocurred" }), {
    //   status: 500,
    // });

    // 4]
    throw json(
      { message: " An Error Ocurred" },
      {
        status: 500,
      }
    );
  } else {
    // // 1]
    // const resData = await response.json();
    // return resData.events;

    // 2]
    return response;
  }
};
