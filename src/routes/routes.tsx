
import TrendsPage from "pages/Trends";
import { lazy } from "react";
const AboutPage = lazy(() => import("pages/About"));
const ArticlesPage = lazy(() => import("pages/Reports"));
const CaseStudiesPage = lazy(() => import("pages/CaseStudies"));
const ContactPage = lazy(() => import("pages/Contact"));
const HistoryPage = lazy(() => import("pages/History"));
const HomePage = lazy(() => import("pages/Home"));
const MarketsPage = lazy(() => import("pages/Markets"));
const ReportsPage = lazy(() => import("pages/Reports"));
const WhatWeDoPage = lazy(() => import("pages/WhatWeDo"));
const VisionPage = lazy(() => import("pages/Vision"));

export const dataRoutes = [
  {
    id: "About",
    path: "about",
    section: "About",
    element: <AboutPage />,
  },
  {
    id: "Articles",
    path: "articles",
    section: "Articles",
    element: <ArticlesPage />,
  },
  {
    id: "CaseStudies",
    path: "casestudies",
    section: "Case Studies",
    element: <CaseStudiesPage />,
  },
  {
    id: "Contact",
    path: "contact",
    section: "Contact",
    element: <ContactPage />,
  },
  {
    id: "History",
    path: "history",
    section: "History",
    element: <HistoryPage />,
  },
  {
    id: "Home",
    path: "/",
    section: "Home",
    element: <HomePage />,
  },
  {
    id: "Home2",
    path: "home",
    section: "Home",
    element: <HomePage />,
  },
  {
    id: "Markets",
    path: "markets",
    section: "Markets",
    element: <MarketsPage />,
  },
  {
    id: "Reports",
    path: "reports",
    section: "Reports",
    element: <ReportsPage />,
  },
  {
    id: "Trends",
    path: "trends",
    section: "trends",
    element: <TrendsPage />,
  },
  {
    id: "WhatWeDo",
    path: "whatwedo",
    section: "WhatWeDo",
    element: <WhatWeDoPage />,
  },
  {
    id: "Vision",
    path: "vision",
    section: "Vision",
    element: <VisionPage />,
  },
];
