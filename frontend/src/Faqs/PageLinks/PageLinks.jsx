import "./PageLinks.css";
import minus from "../../assets/faqs/icons/minus.png";
import plus from "../../assets/faqs/icons/add.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const PageLinks = () => {
  const [question, setQuestion] = useState([]);
  const [openIndices, setOpenIndices] = useState([]);
  const [readMoreIndices, setReadMoreIndices] = useState([]);

  const navigate = useNavigate();

  const handleGiveAquotebtnClick = () => {
    navigate("/contact");
  };

  useEffect(() => {
    axios.get("http://localhost:3000/get-faqs").then((res) => {
      setQuestion(res.data);
    });
  }, []);
  const toggleDescription = (index) => {
    setOpenIndices((prevOpenIndices) => {
      if (prevOpenIndices.includes(index)) {
        return prevOpenIndices.filter((i) => i !== index);
      } else {
        return [...prevOpenIndices, index];
      }
    });
  };

  const toggleReadMore = (index) => {
    setReadMoreIndices((prevReadMoreIndices) => {
      if (prevReadMoreIndices.includes(index)) {
        return prevReadMoreIndices.filter((i) => i !== index);
      } else {
        return [...prevReadMoreIndices, index];
      }
    });
  };

  return (
    <div className="page-links-faqs-PageLinks">
      <div className="logo-and-menu-faqs-PageLinks">
        <div className="figma-project-settings-faqs-PageLinks">
          <div className="save-version-faqs-PageLinks">
            <div className="export-as-image-faqs-PageLinks">
              <h1 className="our-website-faqs-PageLinks">Our Website</h1>
            </div>
            <div className="frequently-asked-question1-faqs-PageLinks">
              Frequently asked question about our website
            </div>
          </div>
        </div>
        {question.map((item, index) => (
          <div className="delete-project-faqs-PageLinks" key={index}>
            <div className="new-project-from-template-faqs-PageLinks">
              <div className="duplicate-project-faqs-PageLinks">
                <b className="what-types-of-faqs-PageLinks">{item?.question}</b>
                <img
                  className="minus-icon1-faqs-PageLinks"
                  loading="lazy"
                  alt=""
                  src={openIndices.includes(index) ? minus : plus}
                  onClick={() => toggleDescription(index)}
                />
              </div>
              {openIndices.includes(index) && (
                <>
                  <div className="our-website-lists-faqs-PageLinks">{item?.description}</div>
                  {item?.moreDescription && readMoreIndices.includes(index) && (
                    <div className="our-website-lists-faqs-PageLinks">{item?.moreDescription}</div>
                  )}
                  {item?.moreDescription && (
                    <b className="read-more1-faqs-PageLinks" onClick={() => toggleReadMore(index)}>
                      {readMoreIndices.includes(index) ? "Read Less" : "Read More"}
                    </b>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="button-wrapper3-faqs-PageLinks">
        <button className="button33-faqs-PageLinks" onClick={handleGiveAquotebtnClick}>
          <div className="detail-information12-faqs-PageLinks">Give a Quote</div>
        </button>
      </div>
    </div>
  );
};

export default PageLinks;
