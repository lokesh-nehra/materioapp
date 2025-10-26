'use client';
import { Provider } from "react-redux";
import store  from "@/app/components/kanban/redux/store.js";

export function Providers({children}){
    return(
        <Provider store={store}>{children}</Provider>
    );
}