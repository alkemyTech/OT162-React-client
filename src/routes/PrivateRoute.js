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

const PrivateRoute = () => {

  const auth = "Administrador"
  
  return (
    <Routes>
      <Route path="/backoffice" element={auth !== "Administrador" ?   <Navigate to="/" /> : <Backoffice />} />
      <Route path="/backoffice/news/create" element={auth !== "Administrador" ?   <Navigate to="/" /> : <NewsForm />} />
      <Route path="/backoffice/news/edit/:id" element={auth !== "Administrador" ?   <Navigate to="/" /> : <NewsForm />} />
      <Route path="/backoffice/create-slide" element={auth !== "Administrador" ?   <Navigate to="/" /> : <SlidesForm />} />
      <Route path="/backoffice/edit-slide/:id" element={auth !== "Administrador" ?   <Navigate to="/" /> : <SlidesForm />} />
      <Route path="/backoffice/slides" element={auth !== "Administrador" ?   <Navigate to="/" /> : <SlidesList />} />
      <Route path="/backoffice/categories" element={auth !== "Administrador" ?   <Navigate to="/" /> : <CategoriesTable />} />
      <Route path="/backoffice/members/edit/:id" element={auth !== "Administrador" ?   <Navigate to="/" /> : <MembersForm />} />
      <Route path="/backoffice/categories/create" element={auth !== "Administrador" ?   <Navigate to="/" /> : <CategoriesForm />} />
      <Route path="/backoffice/categories/edit/:id" element={auth !== "Administrador" ?   <Navigate to="/" /> : <CategoriesForm />} />
      <Route path="/backoffice/activities" element={auth !== "Administrador" ?   <Navigate to="/" /> : <ActivitiesListBackoffice />} />
      <Route path="/backoffice/members" element={auth !== "Administrador" ?   <Navigate to="/" /> : <BackofficeMembersList />} />
      <Route path="/backoffice/news" element={auth !== "Administrador" ?   <Navigate to="/" /> : <News />} />
      <Route path="/backoffice/users" element={auth !== "Administrador" ?   <Navigate to="/" /> : <UserList />} />
      <Route path="/backoffice/edit-user/:id" element={auth !== "Administrador" ?   <Navigate to="/" /> : <UserForm/>}/>
      <Route path="/backoffice/users/create" element={auth !== "Administrador" ?   <Navigate to="/" /> : <UserForm />} />
      <Route path="/backoffice/Organization" element={auth !== "Administrador" ?   <Navigate to="/" /> : <HomeForm />} />
      <Route path="/backoffice/contact/create" element={auth !== "Administrador" ?   <Navigate to="/" /> : <ContactForm />} />
      <Route path="/backoffice/members/create" element={auth !== "Administrador" ?   <Navigate to="/" /> : <MembersForm />} />
    </Routes>
  );
};

export default PrivateRoute;
