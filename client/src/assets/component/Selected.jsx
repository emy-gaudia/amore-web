import Select from "react-select";
import React from "react";

const Selected = ({
  options,
  styles,
  search,
  label,
  width,
  menu,
  option,
  id,
  name,
  onChange,
}) => {
  const selectStyles = {
    control: (provided, state) => ({
      ...provided,
      border: "none",
      borderRadius: "0.5rem",
      borderBottom: state.isFocused
        ? "3px solid #df1463"
        : "1.5px solid #df1463",
      marginBottom: state.isFocused ? "-4.5px" : "-1.5px",
      padding: "8px 0",
      width: width || "20rem",
      background: "rgba(255, 122, 141, 0.05)",
      fontSize: "1.1rem",
      lineHeight: "150%",
      textIndent: "1.5rem",
      fontFamily: "Poppins",
      "&:hover": {
        borderBottom: state.isFocused
          ? "3px solid #df1463"
          : "1.5px solid #df1463",
      },
      "&::webkit-scrollbar": {
        width: "2px",
      },
    }),
    option: (provided) => ({
      ...provided,
      width: option || "20rem",
    }),
    menu: (provided) => ({
      ...provided,
      width: menu || "20rem",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "#df1463",
      opacity: ".45",
    }),
  };
  return (
    <label>
      <Select
        id={id}
        name={name}
        options={options}
        styles={styles || selectStyles}
        isSearchable={search}
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "hotpink",
            primary: "hotpink",
          },
        })}
        placeholder={label}
        onChange={onChange}
      />
    </label>
  );
};

export default Selected;
