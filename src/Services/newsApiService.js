import { Get, Post, Put, Delete } from "./privateApiService";

const newsRoute = `${process.env.REACT_APP_URL_BASE}${process.env.REACT_APP_NEWS}`;

const GetNews = () => Get(newsRoute);

const SearchNews = (searchParam) => Get(`${newsRoute}?search=${searchParam}`);

const PostNews = (body) => {
  return Post(newsRoute, body);
};

const GetSingleNews = (id) => Get(newsRoute, id);

const PutNews = (id, body) => Put(newsRoute, id, body);

const DeleteNews = (id) => Delete(newsRoute, id);

export { GetNews, PostNews, GetSingleNews, PutNews, DeleteNews, SearchNews };
