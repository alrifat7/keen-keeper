import { createBrowserRouter } from "react-router";
import RootLayout from "../../Layout/RootLayout";
import AllFriends from "../friends/AllFriends";
import Homepage from "../homepage/Homepage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Stats from "../stats/Stats";
import Timeline from "../timeline/Timeline";
import FriendDetails from "../friendDetails/FriendDetails";
import Footer from "../../components/shared/Footer";

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout />,
      children: [
        {
          // path: '/',
          index: true,
          element: <Homepage />
        },
        {
            path: "/friend/:id",
            element: <FriendDetails />
        },
        {
          path: '/timeline',
          element: <Timeline />
        },
        {
          path: '/stats',
          element: <Stats />
        },
        {
          path: '/friends',
          element: <AllFriends />
        },
      ],
      errorElement: <NotFoundPage />
    },
  ]
)