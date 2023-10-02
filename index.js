import React from "react";
import { ReactDOM } from "react";

import Cat from "./animals/src/pages/cat.js"
import { NamedExport } from "./animals/src/pages/dog.js"

ReactDom.render(
   <div>
    <Cat></Cat>
    <NamedExport></NamedExport>
    </div>
);