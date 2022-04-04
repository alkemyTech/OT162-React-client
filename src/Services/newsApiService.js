import { Get } from "./privateApiService";

const newsRoute = `${process.env.REACT_APP_URL_BASE}+${process.env.REACT_APP_NEWS}`;

const GetNews = (id) => Get(newsRoute, id);

export { GetNews };
