/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Card.scss";

const Card = ({ item }) => {
  return (
    <Link className="link" to={`/product/${item.id}`}>
      <div className="card">
        <div className="image">
            {item?.attributes.isNew && <span>New Season</span>}
          <img src={`${import.meta.env.VITE_APP_UPLOAD_URL}`+ item.attributes?.img?.data?.attributes?.url} alt="" className="mainImg" />
          <img src={`${import.meta.env.VITE_APP_UPLOAD_URL}`+item.attributes?.img2?.data?.attributes?.url} alt="" className="secondImg" />
          
        </div>
        <h2 className="title">{item?.attributes.title}</h2>
        <div className="prices">
          <h3>${item.attributes.oldPrice || item?.attributes.price + 20}</h3>
          <h3>${item?.attributes.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
