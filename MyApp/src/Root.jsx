import {BrowserRouter} from "react-router-dom"
import { App } from "./Appp"

export function Root(){
    return (
        <BrowserRouter>
        <App />
        </BrowserRouter>
    )
}