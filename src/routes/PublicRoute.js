import { BrowserRouter, Routes, Route } from "react-router-dom";

import ActivitiesForm from "../Components/Activities/ActivitiesForm";
import CategoriesForm from "../Components/Categories/CategoriesForm";
import TestimonialForm from "../Components/Testimonials/TestimonialsForm";
import UserForm from "../Components/Users/UsersForm";
import ProjectsForm from "../Components/Projects/ProjectsForm";
import SchoolCampaign from "../Campaigns/School/SchoolCampaign";
import ToysCampaign from "../Campaigns/Toys/ToysCampaign";
import ActivityDetail from "../Components/Activities/Detail/ActivityDetail";
import Donation from "../Donations/Donation";
import Thanks from "../Donations/Thanks";
import ActivitiesList from "../Components/Activities/ActivitiesList";
import NewsDetail from "../Components/News/Detail/NewsDetail";
import NewsSection from "../Components/News/NewsSection";
import MembersList from "../Components/Members/MembersList";
import Contact from "../Components/Contact/Contact";
import Login from "../Components/Auth/Login/Login";
import Home from "../Components/Home";

const PublicRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-activity" element={<ActivitiesForm />} />
        <Route path="/create-category" element={<CategoriesForm />} />
        <Route path="/create-testimonials" element={<TestimonialForm />} />
        <Route path="/create-user" element={<UserForm />} />
        <Route path="/create-project" element={<ProjectsForm />} />
        <Route path="/school-campaign" element={<SchoolCampaign />} />
        <Route path="/toys-campaign" element={<ToysCampaign />} />
        <Route path="/actividades/:id" element={<ActivityDetail />} />
        <Route path="/donar" element={<Donation text="¡Contribuye!" />} />
        <Route path="/gracias" element={<Thanks />} />
        <Route path="/actividades" element={<ActivitiesList />} />
        <Route path="/Novedades/:id" element={<NewsDetail />} />
        <Route path="/Novedades" element={<NewsSection />} />
        <Route path="/miembros" element={<MembersList />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoute;
