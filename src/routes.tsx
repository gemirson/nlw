import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ChangePassword from "./pages/ChangePassword";
import CreateNewUser from "./pages/CreateNewUser";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import TeacherList from "./pages/TeacheList";
import TeacherForm from "./pages/TeacherForm";
import ChangePasswordSuccess from "./pages/ChangePasswordSuccess";
import CreateNewUserSuccess from "./pages/CreateNewUserSuccess";

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/menu" exact component={Landing} />
      <Route path="/study" component={TeacherList} />
      <Route path="/give-classes" component={TeacherForm} />
      <Route path="/create-user" component={CreateNewUser} />
      <Route path="/change-password" component={ChangePassword} />
      <Route path="/change-success" component={ChangePasswordSuccess} />
      <Route path="/create-success" component={CreateNewUserSuccess} />
    </BrowserRouter>
  );
}
export default Routes;
