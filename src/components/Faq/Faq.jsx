import React, { useEffect, useState } from "react";
import "./faq.scss";
import axios from "axios";
import { BASE } from "../../App";
const Faq = () => {
  const arr = [
    {
      category: " Category 1",
      sub: [
        {
          inner: "Sub Category 1",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
        {
          inner: "Sub Category 2",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
      ],
    },
    {
      category: " Category 2",
      sub: [
        {
          inner: "Sub Category 1",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
        {
          inner: "Sub Category 2",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
      ],
    },
    {
      category: " Category 3",
      sub: [
        {
          inner: "Sub Category 1",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
        {
          inner: "Sub Category 2",
          q2: [
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
            {
              quset: "Provident modi",
              ans: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,",
            },
          ],
        },
      ],
    },
  ];

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [catIndex, setCatIndex] = useState(null);
  const [innerCat, setInnerCat] = useState("asdf");
  const [qIndex, setQindex] = useState("asdf");
  const handleCategory = (index) => {
    setCatIndex(index);
    setInnerCat("asdf");
    setQindex("asdf");
  };
  const handleInnerCat = (index) => {
    setInnerCat(index);
    setQindex("asdf");
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(BASE + "/faq");
      const data = res.data;
      const arrF = [];

      for (let i = 0; i < data.length; i++) {
        if (
          !arrF.find(
            (item) => item.category === data[i].sub_category.category.category
          )
        ) {
          arrF.push({
            category: data[i].sub_category.category.category,
            sub: [
              {
                inner: data[i].sub_category.sub_category,
                q2: [{ quset: data[i].question, ans: data[i].answer }],
              },
            ],
          });
        }
      }

      setData(arrF);
      setLoading(false);
    };
    fetchData();
  }, []);

  const cats = data.map((item) => {
    return item.category;
  });
  return (
    <div className="faq_container">
      <div className="faq_text">
        <h2>F.A.Q</h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
          perspiciatis temporibus. Provident modi voluptatibus est placeat enim
          temporibus iusto inventore facilis nesciunt, aut, illo odit impedit,
          dolore accusamus dignissimos maiores?
        </p>
      </div>
      <div className="faq_map">
        <div className="faq_top">
          {cats.map((item, index) => (
            <h2
              className={`faq_top_item ${
                index == catIndex && "faq_top_item_active"
              }`}
              key={index}
              onClick={() => handleCategory(index)}
            >
              {item}
            </h2>
          ))}
        </div>
        <div className="faq_bottom">
          {data.map((item, index) => {
            return (
              <div
                className={`faq_item ${catIndex !== index && "opacity_0"}`}
                key={index}
              >
                <div className="faq_category wraper_1">
                  <h2 className="expand_1 faq_top_inner">{item.category}</h2>
                  <div className="faq_inner">
                    {item.sub.map((sub, i) => {
                      return (
                        <div key={i}>
                          <h3
                            className="sub_category"
                            onClick={() => handleInnerCat(i)}
                          >
                            {sub.inner}
                          </h3>
                          {innerCat == i &&
                            sub.q2.map((q, qIn) => {
                              return (
                                <div className="faq_q_container">
                                  <h4 onClick={() => setQindex(qIn)}>
                                    {q.quset}
                                  </h4>
                                  {qIn == qIndex && <p>{q.ans}</p>}
                                </div>
                              );
                            })}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="faq_mobile">
        {data.map((item, index) => {
          return (
            <div className="faq_item_mobile">
              <h2
                className={`faq_top_item_mobile ${
                  index == catIndex && "faq_top_item_active_mobile"
                }`}
                onClick={() => handleCategory(index)}
              >
                {item.category}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
