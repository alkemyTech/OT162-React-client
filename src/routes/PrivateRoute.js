import { Routes, Route } from "react-router-dom";

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
  return (
    <Routes>
      <Route path="/backoffice" element={<Backoffice />} />
      <Route path="/backoffice/news/create" element={<NewsForm />} />
      <Route path="/backoffice/news/edit/:id" element={<NewsForm />} />
      <Route path="/backoffice/create-slide" element={<SlidesForm />} />
      <Route path="/backoffice/edit-slide/:id" element={<SlidesForm />} />
      <Route path="/backoffice/slides" element={<SlidesList />} />
      <Route path="/backoffice/categories" element={<CategoriesTable />} />
      <Route path="/backoffice/members/edit/:id" element={<MembersForm />} />
      <Route
        path="/backoffice/categories/edit/:id"
        element={<CategoriesForm />}
      />
      <Route
        path="/backoffice/activities"
        element={<ActivitiesListBackoffice />}
      />
      <Route path="/backoffice/members" element={<BackofficeMembersList />} />
      <Route path="/backoffice/news" element={<News />} />
      <Route path="/backoffice/users" element={<UserList />} />
      <Route path="/backoffice/edit-user/:id" element={<UserForm/>}/>
      <Route path="/backoffice/Organization" element={<HomeForm />} />
      <Route path="/backoffice/contact/create" element={<ContactForm />} />
      <Route path="/backoffice/members/create" element={<MembersForm />} />
    </Routes>
  );
};

export default PrivateRoute;
