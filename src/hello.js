import React from "react";


function Hello({firstName}) {
    return (
        <div id="hellojs">
        <h4>--------------START hello.js------------</h4>
            <h4>Hello, <strong>{firstName}</strong> from hello.js-file, and hello-funcation based component. </h4>

        <h4>--------------END hello.js------------</h4>
        </div>
    )
}


export default Hello; 