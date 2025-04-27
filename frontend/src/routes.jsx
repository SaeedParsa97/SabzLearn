import CourseInfo from "../Pages/CourseInfo/CourseInfo";
import Index from "../Pages/Index/Index";
import Category from "../Pages/Categories/Category";
import ArticleInfo from "../Pages/ArticleInfo/ArticleInfo";
import Courses from "../Pages/Courses/Courses";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Regiter/Register";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/course-info/:courseName", element: <CourseInfo /> },
  { path: "/category-info/:categoryName", element: <Category /> },
  { path: "/article-info/:artileName", element: <ArticleInfo /> },
  { path: "/courses", element: <Courses /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];

export default routes;
