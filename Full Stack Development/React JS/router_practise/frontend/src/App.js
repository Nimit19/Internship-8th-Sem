import { RouterProvider, createBrowserRouter } from "react-router-dom";

import EditEventPage from "./Pages/EditEventPage";
import EventsPage, { loader as eventsLoader } from "./Pages/EventsPage";
import EventDetailsPage, {
  loader as eventDetailsLoader,
  action as deleteEventAction,
} from "./Pages/EventDetailsPage";
import HomePage from "./Pages/HomePage";
import NewEventPage from "./Pages/NewEventPage";
import RootLayout from "./Pages/RootLayout";
import EventLayout from "./Pages/EventLayout";
import ErrorPage from "./Pages/ErrorPage";
import { action as manipulateEventFormAction } from "./components/EventForm";
import NewsletterPage, { action as newsletterAction } from "./Pages/NewsLetter";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: "events",
          element: <EventLayout />,
          children: [
            {
              index: true,
              element: <EventsPage />,
              loader: eventsLoader,
            },

            {
              path: ":eventId",
              id: "event-details",
              loader: eventDetailsLoader,
              children: [
                {
                  index: true,
                  path: "",
                  element: <EventDetailsPage />,
                  action: deleteEventAction,
                },

                {
                  path: "edit",
                  element: <EditEventPage />,
                  action: manipulateEventFormAction,
                },
              ],
            },
            {
              path: "new",
              element: <NewEventPage />,
              action: manipulateEventFormAction,
            },
          ],
        },
        {
          path: "newsletter",
          element: <NewsletterPage />,
          action: newsletterAction,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
