import { StyleSheet } from "aphrodite/no-important";

export const styles = StyleSheet.create({
  dropDown: {
    display: "none",
    position: "absolute",
    zIndex: 1020,
    boxSizing: "border-box",
    minWidth: "200px",
    padding: "25px",
    background: "#fff",
    color: "#666",
    boxShadow: "0 5px 12px rgba(0, 0, 0, 0.15)",
    listStyle: "none",
    maxWidth: "100%",
    verticalAlign: "middle"
  },
  dropDownNav: {
    margin: 0,
    padding: 0,
    listStyle: "none",
    whiteSpace: "nowrap",
    fontSize: "0.875rem"
  },
  dropDownOpen: {
    display: "inline-block"
  },
  dropdownList: {
    /* Hover + Focus + Active */
    padding: "5px 0",
    display: "block",
    textDecoration: "none",
    cursor: "pointer",
    color: "#999",
    ":hover": {
      color: "#666",
      textDecoration: "none",
      backgroundColor: "lightgray",
      fontWeight: "bold"
    },
    ":focus": {
      color: "#666",
      outline: "none",
      textDecoration: "none",
      backgroundColor: "lightgray",
      fontWeight: "bold"
    }
  },
  disabledItem: {
    cursor: "default",
    opacity: "0.6"
  }
});
