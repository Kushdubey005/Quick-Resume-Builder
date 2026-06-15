import { useState, useEffect } from "react";
import ResumeForm from "./components/ResumeForm";
import ResumePreview from "./components/ResumePreview";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem("resumeData");

    return savedData
      ? JSON.parse(savedData)
      : {
          name: "",
          email: "",
          phone: "",
          education: "",
          skills: "",
          projects: "",
          objective: "",
          photo: "",
          template: "modern",
        };
    
  });
  useEffect(() => {
      localStorage.setItem("resumeData", JSON.stringify(resumeData));
    }, [resumeData]);

  return (
    
   <div className={`container mt-5 ${darkMode ? "dark" : ""}`}>
      <button
  className="btn btn-dark mb-3"
  onClick={() => setDarkMode(!darkMode)}
>
  {darkMode ? "Light Mode" : "Dark Mode"}
</button>
      <h1 className="text-center text-white mb-4">
  Quick-Resume Builder
</h1>

      <div className="row">
        <div className="col-md-6">
          <ResumeForm resumeData={resumeData} setResumeData={setResumeData} />
        </div>

        <div className="col-md-6">
          <ResumePreview resumeData={resumeData} />
        </div>
      </div>
    </div>
  );
}

export default App;
