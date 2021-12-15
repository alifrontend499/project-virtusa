import { render } from "@testing-library/react";

import App from "./App";

// components
import StatefullComponent from "components/StatefullComponent";

test("renders learn react link", () => {
    render(<App />);
    render(<StatefullComponent />);
});
