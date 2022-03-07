import React from "react";
import { useState, useCallback } from "react";
import styles from "./searchBar.module.css";
import { useNavigate } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [search, setSearch] = useState([]);
  const [valInput, setValInput] = useState("");
  const navigate = useNavigate();

  const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 300);
    };
  };

  const handleChange = (event) => {
    const q = event.target.value;
    setValInput(q);
    fetch(`https://chirp-database.herokuapp.com/users?q=${q}`)
      .then((res) => res.json())
      .then((json) => {
        setSearch(json);
      })
      .catch((e) => console.error(e));
  };

  const debounceVerion = useCallback(debounce(handleChange));

  const handleClick = (el) => {
    navigate(`/profile/${el.userName}`);
  };

  return (
    <div className={styles.search_bar_container}>
      <div>
        <BsSearch className={styles.iccon} />
        <input
          type="text"
          name={"search"}
          placeholder="Search Twitter"
          className={styles.search_bar_inputs}
          onChange={debounceVerion}
        />
      </div>
      {valInput && search?.length > 0 && (
        <div className={styles.suggestion_container}>
          {search?.slice(0,4).map((el, i) => {
            let name = el.name;
            return name.toLowerCase().includes(valInput.toLowerCase()) ? (
              <div
                key={el.id}
                className={styles.suggestion_item}
                value={el.name}
                onClick={() => handleClick(el)}
              >
                <div style={{ display: "flex", margin: " 5px 0 5px 10px" }}>
                  <img
                    src={el.avatar}
                    alt=""
                    style={{
                      width: "45px",
                      marginRight: "30px",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ color: "inherit" }}>{el.name}</div>
                    <div style={{ color: "grey" }}>{el.userName}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div key={el.id}></div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
