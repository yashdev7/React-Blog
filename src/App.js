import Layout from "./Layout.jsx";
import Home from "./Home";
import NewPost from "./NewPost";
import PostPAge from "./PostPAge.jsx";
import EditPost from "./EditPost.jsx";
import About from "./About";
import Missing from "./Missing";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext.jsx";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />

          <Route path="post">
            <Route index element={<NewPost />} />
            <Route path=":id" element={<PostPAge />} />
          </Route>

          <Route path="edit/:id" index element={<EditPost />} />

          <Route path="about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
