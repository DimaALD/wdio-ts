export const HeaderComponent = {
  selector: "#header_container",
  children: {
    "Burger Button": { selector: "#react-burger-menu-btn" },
    "Burger Options": {
      selector: ".bm-item-list",
      children: {
        Option: { selector: ".bm-item.menu-item", isCollection: true },
      },
    },
  },
};
