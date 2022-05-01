import { Routes, Route, Navigate } from "react-router-dom";

import Backoffice from "../Backoffice/Backoffice";
import NewsForm from "../Components/News/NewsForm";
import SlidesForm from "../Components/Slides/SlidesForm";
import SlidesList from "../Components/Slides/SlidesList";
import CategoriesTable from "../Components/Categories/CategoriesTable";
import MembersForm from "../Components/Members/MembersForm";
import ActivitiesListBackoffice from "../Components/Activities/ActivitiesListBackoffice";
import BackofficeMembersList from "../Components/Members/BackofficeMembersList";
import News from "../Components/News/News";
import UserList from "../Components/Users/UserList/UserList";
import HomeForm from "../Components/Backoffice/Organization/HomeForm";
import ContactForm from "../Components/Contact/ContactForm";
import CategoriesForm from "../Components/Categories/CategoriesForm";
import UserForm from "../Components/Users/UsersForm";
import { GetAuth } from "../Services/privateApiService";

const PrivateRoute = () => {

  const auth = GetAuth()

  return (
    <Routes>
      <Route path="/backoffice" element={auth ? <Backoffice /> : <Navigate to="/" />} />
      <Route path="/backoffice/news/create" element={auth ? <NewsForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/news/edit/:id" element={auth ? <NewsForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/create-slide" element={auth ? <SlidesForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/edit-slide/:id" element={auth ? <SlidesForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/slides" element={auth ? <SlidesList /> : <Navigate to="/" />} />
      <Route path="/backoffice/categories" element={auth ? <CategoriesTable /> : <Navigate to="/" />} />
      <Route path="/backoffice/members/edit/:id" element={auth ? <MembersForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/categories/create" element={auth ? <CategoriesForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/categories/edit/:id" element={auth ? <CategoriesForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/activities" element={auth ? <ActivitiesListBackoffice /> : <Navigate to="/" />} />
      <Route path="/backoffice/members" element={auth ? <BackofficeMembersList /> : <Navigate to="/" />} />
      <Route path="/backoffice/news" element={auth ? <News /> : <Navigate to="/" />} />
      <Route path="/backoffice/users" element={auth ? <UserList /> : <Navigate to="/" />} />
      <Route path="/backoffice/edit-user/:id" element={auth ? <UserForm/> : <Navigate to="/" />} />
      <Route path="/backoffice/users/create" element={auth ? <UserForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/Organization" element={auth ? <HomeForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/contact/create" element={auth ? <ContactForm /> : <Navigate to="/" />} />
      <Route path="/backoffice/members/create" element={auth ? <MembersForm /> : <Navigate to="/" />} />
    </Routes>
  );
};

export default PrivateRoute;
