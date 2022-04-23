import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../Components/Utilities/Loading";
import RegisterForm from "../Components/Auth/RegisterForm";

const ActivitiesForm = lazy(() =>
  import("../Components/Activities/ActivitiesForm")
);
const CategoriesForm = lazy(() =>
  import("../Components/Categories/CategoriesForm")
);
const TestimonialForm = lazy(() =>
  import("../Components/Testimonials/TestimonialsForm")
);
const UserForm = lazy(() => import("../Components/Users/UsersForm"));
const ProjectsForm = lazy(() => import("../Components/Projects/ProjectsForm"));
const SchoolCampaign = lazy(() => import("../Campaigns/School/SchoolCampaign"));
const ToysCampaign = lazy(() => import("../Campaigns/Toys/ToysCampaign"));
const ActivityDetail = lazy(() =>
  import("../Components/Activities/Detail/ActivityDetail")
);
const Donation = lazy(() => import("../Donations/Donation"));
const Thanks = lazy(() => import("../Donations/Thanks"));
const ActivitiesList = lazy(() =>
  import("../Components/Activities/ActivitiesList")
);
const NewsDetail = lazy(() => import("../Components/News/Detail/NewsDetail"));
const NewsSection = lazy(() => import("../Components/News/NewsSection"));
const MembersList = lazy(() => import("../Components/Members/MembersList"));
const Contact = lazy(() => import("../Components/Contact/Contact"));
const Login = lazy(() => import("../Components/Auth/Login/Login"));
const Home = lazy(() => import("../Components/Home"));

const PublicRoute = () => {
  return (
    <Suspense fallback={<Loading open={true} />}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" exact element={<RegisterForm />} />
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
    </Suspense>
  );
};

export default PublicRoute;
