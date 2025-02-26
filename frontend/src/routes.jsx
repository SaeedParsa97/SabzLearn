import CourseInfo from "../Pages/CourseInfo/CourseInfo";
import Index from "../Pages/Index/Index";
import Category from "../Pages/Categories/Category";
import ArticleInfo from "../Pages/ArticleInfo/ArticleInfo";

const routes = [
    {path: "/", element: <Index />},
    {path: "/course-info/:courseName", element: <CourseInfo />},
    {path: '/category-info/:categoryName', element: <Category />},
    {path: '/article-info/:artileName', element: <ArticleInfo />}
]

export default routes

