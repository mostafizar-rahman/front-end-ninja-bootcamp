const root = ReactDOM.createRoot(document.getElementById("root"))


const wapper = React.createElement("div", { className: "wapper" },
    [
        React.createElement("div", { className: "parent" },
            [
                React.createElement("h1", { className: "parent-title" }, "I am parent"),
                React.createElement("p", {}, "Barir Korta")
            ]
        ),
        React.createElement("div", { className: "parent-two" },
            [
                React.createElement("h1", { className: "parent-title" }, "I am parent two"),
                React.createElement("p", {}, "Barir second Korta")
            ]
        )
    ]
)

root.render( wapper)
