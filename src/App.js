import React from "react";
import "./App.css";
import ActivitiesForm from "./Components/Activities/ActivitiesForm";
import CategoriesForm from "./Components/Categories/CategoriesForm";
import NewsForm from "./Components/News/NewsForm";
import NewsDetail from "./Components/News/Detail/NewsDetail";
import SlidesForm from "./Components/Slides/SlidesForm";
import TestimonialForm from "./Components/Testimonials/TestimonialsForm";
import UserForm from "./Components/Users/UsersForm";
import SchoolCampaign from "./Campaigns/School/SchoolCampaign";
import ToysCampaign from "./Campaigns/Toys/ToysCampaign";
import MembersForm from "./Components/Members/MembersForm";
import ProjectsForm from "./Components/Projects/ProjectsForm";
import ActivityDetail from "./Components/Activities/Detail/ActivityDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import CategoriesTable from "./Components/Categories/CategoriesTable";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" element={<ActivitiesForm />} />
          <Route path="/create-category" element={<CategoriesForm />} />
          <Route path="/backoffice/news/create" element={<NewsForm />} />
          <Route path="/backoffice/create-slide" element={<SlidesForm />} />
          <Route path="/backoffice/categories" element={<CategoriesTable />} />
          <Route path="/create-testimonials" element={<TestimonialForm />} />
          <Route path="/create-user" element={<UserForm />} />
          <Route
            path="/backoffice/members/edit/:id"
            element={<MembersForm />}
          />
          <Route path="/create-project" element={<ProjectsForm />} />
          <Route path="/school-campaign" element={<SchoolCampaign />} />
          <Route path="/toys-campaign" element={<ToysCampaign />} />
          <Route path="/actividades/:id" element={<ActivityDetail />} />
          <Route path="/actividades" component={<ActivitiesList />} />
          <Route path="/Novedades/:id" element={<NewsDetail />} />
        </Routes>
      </BrowserRouter>
      <div className="App">
      </div>
    </>
  );
}

export default App;
