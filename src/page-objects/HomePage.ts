import { HeaderComponent } from "./components/header.component";

export const HomePage = {
  url: "https://www.saucedemo.com/inventory.html",
  selector: "#page_wrapper",
  children: {
    Header: HeaderComponent,
  },
};
