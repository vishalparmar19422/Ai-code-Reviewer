import { BrowserRouter, Route, Routes } from "react-router-dom";
import CodereviewPage from "./pages/CodeReviewPage/CodereviewPage";
import HomePage from "./pages/HomePage/HomePage";
import AiReview from "./components/AiReview/AiReview";
import SignIn from "./pages/Signin/Signin";
import SignUp from "./pages/Signup/SignUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/codereview" element={<CodereviewPage />} />
          <Route path="/codereview" element={<AiReview />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
