"use strict";
exports.__esModule = true;
//@ts-ignore
var LinkedIn_1 = require("@mui/icons-material/LinkedIn");
require("../styles/card.scss");
require("reactjs-popup/dist/index.css");
var react_router_dom_1 = require("react-router-dom");
var ReqUserCardAnswer = function (props) {
    var ansUsers = props.ansUsers;
    var navigate = react_router_dom_1.useNavigate();
    // async function handleAnsReq(requestUsersId: any) { 
    //   await axios.post("/api/users/requested-answered", { requestUsersId }) 
    // }
    return (React.createElement(React.Fragment, null, ansUsers.map(function (selectedUser, i) {
        return React.createElement("div", { className: "card", key: i },
            React.createElement("div", { className: "card__photo" },
                React.createElement("img", { src: selectedUser.image ? "" + selectedUser.image : 'https://www.pngitem.com/pimgs/m/504-5040528_empty-profile-picture-png-transparent-png.png' })),
            React.createElement("div", { className: "card__center" },
                React.createElement("p", null,
                    selectedUser['name']['first'],
                    " ",
                    selectedUser['name']['last']),
                React.createElement("div", { className: "card__flex" },
                    React.createElement("img", { src: selectedUser.country ? "" + selectedUser.country : 'https://flagsweb.com/Flag_Colouring_Page/WEBP/Germany_Flag_Colouring_Page.webp' }),
                    React.createElement("a", { href: selectedUser.linkedInProfile ? "" + selectedUser.linkedInProfile : 'https://www.linkedin.com/' },
                        React.createElement(LinkedIn_1["default"], { className: "card__flex__linkdIn", style: { fontSize: "30px" } }))),
                React.createElement("p", { className: "card__center__company" }, selectedUser.fieldsOfKnowledge),
                React.createElement("p", { className: "card__center__profession" }, selectedUser.sector)));
    })));
};
exports["default"] = ReqUserCardAnswer;
