import logo from "./logo.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import "./App.css";
import AbonamentPage from "./components/AbonamentPage";
import ChoosePaymentPage from "./components/ChoosePaymentPage";
import BlikPayment from "./components/BlikPayment";
import CardPayment from "./components/CardPayment";
import WaitForAccept from "./components/WaitForAccept";
import SuccessPay from "./components/SuccessPay";
import ErrorPay from "./components/ErrorPay";
import AppointmentScheduler from "./components/AppointmentScheduler";
import ApprovedVisit from "./components/ApprovedVisit";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/abonament-page" element={<AbonamentPage />} />
        <Route path="/choose-payment" element={<ChoosePaymentPage />} />
        <Route path="/blik-payment" element={<BlikPayment />} />
        <Route path="/card-payment" element={<CardPayment />} />
        <Route path="/wait-for-accept-payment" element={<WaitForAccept />} />
        <Route path="/success-pay" element={<SuccessPay />} />
        <Route path="/error-pay" element={<ErrorPay />} />
        <Route
          path="/appointment-scheduler"
          element={<AppointmentScheduler />}
        />
        <Route path="/approved-visit" element={<ApprovedVisit />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/my-profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
