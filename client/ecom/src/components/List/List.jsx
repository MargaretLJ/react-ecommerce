/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCat, maxPrice, sort, catid }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catid}${subCat.map(
      (item) => `&[filters][subcategories][id][$eq]=${item}`
    )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  );

  return (
    <div className="list">
      {loading
        ? "loading"
        : data?.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
