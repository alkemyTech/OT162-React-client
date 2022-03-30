
import React from 'react';
import './App.css';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import NewsDetail from './Components/News/Detail/NewsDetail';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import ActivityDetail from './Components/Activities/Detail/ActivityDetail';
<<<<<<< HEAD
import Login from './Components/Auth/Login/Login';
=======
import SlidesList from './Components/Slides/SlidesList';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ActivitiesList from "./Components/Activities/ActivitiesList";
import CategoriesTable from "./Components/Categories/CategoriesTable";
import ActivitiesListBackoffice from "./Components/Activities/ActivitiesListBackoffice";
import Home from './Components/Home/index';
import HomeForm from './Components/Backoffice/Organization/HomeForm';
import Backoffice from './Backoffice/Backoffice';
import Nosotros from './Components/About/Nosotros/Nosotros';
import Donation from './Donations/Donation';
import Thanks from './Donations/Thanks';
import Contact from './Components/Contact/Contact';
import MembersList from './Components/Members/MembersList';
import UserList from './Components/Users/UserList/UserList';
>>>>>>> f102a00023101b4f36d0cc765b98e3e8c1f943ed

function App() {
  return (
    <>
      <BrowserRouter>
<<<<<<< HEAD
        <Switch>
          {/* <Route path="/" exact component={} />           Esta ruta debe ser para el Home */}
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/backoffice/news/create" component={NewsForm} />
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/backoffice/members/edit/:id" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} />
          <Route path="/actividades/:id" component={ActivityDetail} />
          <Route path="/login" component={Login} />         
        </Switch>
=======
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
          <Route path="/backoffice/activities" element={<ActivitiesListBackoffice />} />
          <Route path="/donar" element={<Donation text="¡Contribuye!" />} />
          <Route path="/gracias" element={<Thanks />} />
          <Route path="/actividades" component={<ActivitiesList />} />
          <Route path="/Novedades/:id" element={<NewsDetail />} />
          <Route path="/backoffice/users" component={UserList}/>
          <Route path="/miembros" element={<MembersList />} />
          <Route path="/contacto" element={<Contact/>} />
          <Route path="/backoffice/Organization" element={<HomeForm />} />
          <Route path="/backoffice" element={<Backoffice />} />
        </Routes>
>>>>>>> f102a00023101b4f36d0cc765b98e3e8c1f943ed
      </BrowserRouter>
      <div className="App">
        <UserForm />
      </div>
    </>
  );
}

export default App;
