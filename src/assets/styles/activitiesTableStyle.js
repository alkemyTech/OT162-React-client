const activitiesTableStyle = {
  root: {
    flexGrow: 1,
  },
  header: {
    backgroundColor: "#9d5a5e !important",
    color: "#ffffff !important",
  },
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
    padding: "2rem",
    backgroundColor: "#e7b9bd",
    maxWidth: "50%",
    maxHeight: "50%",
  },
  container: {
    minHeight: "50vh",
    maxHeight: "70vh",
  },
  backdrop: {
    zIndex: "10",
    color: "#fff",
  },
  button: {
    borderRadius: "50px !important",
  },
  buttonAdd: {
    marginTop: "10px !important",
    float: "right !important",
    borderRadius: "50px !important",
  },
};

export default activitiesTableStyle;
