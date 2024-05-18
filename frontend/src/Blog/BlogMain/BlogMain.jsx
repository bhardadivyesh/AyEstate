import NavigationBar from "../../CommanComponent/NavigationBar/NavigationBar ";
import FrameComponent3 from "../FrameComponent3/FrameComponent3";
import FrameComponent2 from "../FrameComponent2/FrameComponent2";
import FrameComponent1 from "../FrameComponent1/FrameComponent1";
import FrameComponent from "../FrameComponent/FrameComponent";
import Navigation1 from "../../CommanComponent/Navigation1/Navigation1";
import "./BlogMain.css";

const Blog = () => {
  return (
    <div className="blog-blogMain">
      <NavigationBar />
      <main className="card-list-wrapper-blogMain">
        <div className="card-list-blogMain">
          <FrameComponent3 />
          <FrameComponent2 />
          <FrameComponent1 />
          <FrameComponent />
        </div>
      </main>
      <Navigation1 />
    </div>
  );
};

export default Blog;
