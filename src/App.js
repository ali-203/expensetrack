
import React from "react";
import Child from "./Child";
import {TransactionProvider} from "./TransContext";

const App=()=>{
    return(
        <TransactionProvider>
            <Child />
        </TransactionProvider>
    )
}
export default App;