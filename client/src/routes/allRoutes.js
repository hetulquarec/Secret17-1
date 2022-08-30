import React from "react";
import { Redirect } from "react-router-dom";

import Home from "../pages/Home/home";
import Blogs from "../pages/Blogs";
import BlogDetail from "../pages/Portfolio/detail";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Portfolio from "../pages/Portfolio";
import Service from "../pages/Service";
import Hairs from "../pages/Service/hair";
import AppointmentData from "../pages/Admin/Appointment";
import Nails from "../pages/Service/nail";

//Admin Routes
import Login from "../pages/Admin/Login/login";
import CreateBlog from "../pages/Admin/Login/CreateBlog";

const userRoutes = [
  { path: "/", component: Home },
  { path: "/blogs", exact: true, component: Blogs },
  { path: "/blogs-detail", exact: true, component: BlogDetail },

  { path: "/contact", exact: true, component: ContactUs },
  { path: "/services", exact: true, component: Service },
  { path: "/about", exact: true, component: AboutUs },
  { path: "/portfolio", exact: true, component: Portfolio },
  { path: "/hairs", exact: true, component: Hairs },
  { path: "/nails", exact: true, component: Nails },
  { path: "/admin", exact: true, component: Login },
  { path: "/", exact: true, component: () => <Redirect to="/" /> },
];

const authRoutes = [
  { path: "/add-blog", exact: true, component: CreateBlog },
  { path: "/appointment", exact: true, component: AppointmentData },
];
export { userRoutes, authRoutes };
