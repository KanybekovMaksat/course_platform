import {BrowserRouter} from "react-router-dom";

export const WithRouter = (component) => () => {
    return (
        <BrowserRouter>
            {component()}
        </BrowserRouter>
    )
}