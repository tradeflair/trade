import React, { useEffect, useState } from "react";
import { BASE } from "../../App";
import axios from "axios";
import "./blogs.scss";
import Loading from "../../components/loading/Loading";
const Blogs = () => {
  const url = BASE;
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url + "/blogs/");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="a_blogs_container">
      <h2>BLOGS</h2>
      {loading ? (
        <Loading title={"Loading"} />
      ) : (
        <div className="a_blogs_content">
          {data.map((blog, index) => {
            return (
              <div className="a_blogs_item">
                <img src={blog.image} alt="" />
                <h3>{blog.title}</h3>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blogs;
