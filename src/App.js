import * as React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from "./components/LoginForm";

//import YoutubeForm from "./components/YoutubeForm";
// import YoutubeFormTwo from "./components/YoutubeFormTwo";
// import YoutubeFormThree from "./components/YoutubeFormThree";
//import YoutubeFormFour from "./components/YoutubeFormFour";
//import YoutubeFormFive from "./components/YoutubeFormFive";
//import YoutubeFormSix from "./components/YoutubeFormSix";
//import YoutubeFormSeven from "./components/YoutubeFormSeven";
//import YoutubeFormEight from "./components/YoutubeFormEight";
//import YoutubeFormNine from "./components/YoutubeFormNine";
//import YoutubeFormNine from "./components/YoutubeFormNine";
//import FormikContainer from "./components/FormikContainer";
//import LoginForm from "./components/LoginForm";
//import EnrollmentForm from "./components/EnrollmentForm";

function App({ LoginFrom }) {
  return (
    <ChakraProvider>
      <div className='App'>
        {/* <YoutubeForm /> */}
        {/* <YoutubeFormTwo /> */}
        {/* <YoutubeFormThree /> */}
        {/* <YoutubeFormFour/> */}
        {/* <YoutubeFormFive /> */}
        {/* <YoutubeFormSix /> */}
        {/* <YoutubeFormSeven /> */}
        {/* <YoutubeFormEight /> */}
        {/* <YoutubeFormNine /> */}
        {/* <FormikContainer />
      <LoginForm /> */}
        {/* <RegistrationForm /> */}
        {/* <EnrollmentForm /> */}
        <LoginForm />
      </div>
    </ChakraProvider>
  );
}

export default App;
