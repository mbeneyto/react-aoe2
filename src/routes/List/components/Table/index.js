import React from "react";
import { Link } from "react-router-dom";
import { Loader } from "../../../../components";
import { schemas } from "../../../../utils";
import "./styles.css";

const Table = ({
  data,
  resource,
  loading,
  orderKey,
  onChangeOrder,
  onSelectItem
}) => {
  const schemaProperties = schemas[resource];

  const handleOnChangeOrder = prop => () => {
    onChangeOrder(prop);
  };

  const handleOnSelectItem = item => () => {
    onSelectItem(item);
  };

  return (
    <table className="table">
      <thead className="table__head">
        <tr>
          {schemaProperties.map((prop, i) => (
            <th key={i} onClick={handleOnChangeOrder(prop)}>
              <div className="table__filter">
                {prop}
                {orderKey.includes(`${prop}:asc`) && (
                  <span className="table__caret">&#9650;</span>
                )}
                {orderKey.includes(`${prop}:desc`) && (
                  <span className="table__caret">&#9660;</span>
                )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="table__body">
        {loading ? (
          <tr>
            <td colSpan="3">
              <Loader />
            </td>
          </tr>
        ) : (
          data.map(item => (
            <tr key={item.id}>
              {schemaProperties.map((prop, i) => (
                <td key={`${item[prop]}${i}`}>
                  <Link
                    to={`/detail/${item.id}`}
                    onClick={handleOnSelectItem(item)}
                  >
                    {item[prop]}
                  </Link>
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
};

export default Table;
