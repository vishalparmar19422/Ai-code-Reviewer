  import { BrowserRouter, Route, Routes } from "react-router-dom";
  import CodereviewPage from "./pages/CodeReviewPage/CodereviewPage";
  import HomePage from "./pages/HomePage/HomePage";
  import AiReview from "./components/AiReview/AiReview";
  import SignUp from "./pages/Signup/SignUp";
  import SignIn from "./pages/Signin/SignIn";

  function App() {
    return (
      <>
        <AiReview />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/codereview" element={<CodereviewPage />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }

  export default App;
