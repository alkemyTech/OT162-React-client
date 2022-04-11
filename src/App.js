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
import Login from "./Components/Auth/Login/Login";
import SlidesList from "./Components/Slides/SlidesList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import CategoriesTable from "./Components/Categories/CategoriesTable";
import Home from "./Components/Home/index";
import ActivitiesListBackoffice from "./Components/Activities/ActivitiesListBackoffice";
import HomeForm from "./Components/Backoffice/Organization/HomeForm";
import Backoffice from "./Backoffice/Backoffice";
// import Nosotros from './Components/About/Nosotros/Nosotros';
import Donation from "./Donations/Donation";
import Thanks from "./Donations/Thanks";
import Contact from "./Components/Contact/Contact";
import MembersList from "./Components/Members/MembersList";
import UserList from "./Components/Users/UserList/UserList";
import NewsSection from "./Components/News/NewsSection";
import BackofficeMembersList from './Components/Members/BackofficeMembersList';
import News from './Components/News/News';
import SiteDataForm from "./Components/SiteDataForm/SiteDataForm";
import ContactForm from "./Components/Contact/ContactForm";

import {
  GetNews,
  GetSingleNews,
  PostNews,
  PutNews,
  DeleteNews,
} from "./Services/newsApiService";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/create-activity" element={<ActivitiesForm />} />
          <Route path="/create-category" element={<CategoriesForm />} />
          <Route path="/backoffice/news/create" element={<NewsForm />} />
          <Route path="/backoffice/create-slide" element={<SlidesForm />} />
          <Route path="/backoffice/slides" element={<SlidesList />} />
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
          <Route
            path="/backoffice/activities"
            element={<ActivitiesListBackoffice />}
          />
          <Route path="/donar" element={<Donation text="¡Contribuye!" />} />
          <Route path="/gracias" element={<Thanks />} />
          <Route path="/actividades" element={<ActivitiesList />} />
          <Route
            path="/backoffice/members"
            element={<BackofficeMembersList />}
          />
          <Route path="/Novedades/:id" element={<NewsDetail />} />
          <Route path="/backoffice/news" element={<News />} />
          <Route path="/Novedades" element={<NewsSection />} />
          <Route path="/backoffice/users" element={<UserList />} />
          <Route path="/miembros" element={<MembersList />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/backoffice/Organization" element={<HomeForm />} />
          <Route path="/backoffice/contact/create" element={<ContactForm />} />
          <Route path="/backoffice" element={<Backoffice />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <div className="App">
        <UserForm />
        <button
          onClick={() =>
            PutNews(1, {
              id: 0,
              name: "angelasldlad",
              slug: "string",
              content: "string",
              user_id: 0,
              category_id: 0,
              created_at: "2022-04-04T18:46:43.451Z",
              updated_at: "2022-04-04T18:46:43.451Z",
              deleted_at: "2022-04-04T18:46:43.451Z",
            })
          }
        >
          asdasd
        </button>
      </div>
    </>
  );
}

export default App;
