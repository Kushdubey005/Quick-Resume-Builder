import html2pdf from "html2pdf.js";

function ResumePreview({ resumeData }) {
    const downloadPDF = () => {
  const element = document.getElementById("resume");

  const options = {
    margin: 0.5,
    filename: "resume.pdf",
    image: { type: "jpeg", quality: 1 },
    html2canvas: { scale: 2 },
    jsPDF: {
      unit: "in",
      format: "a4",
      orientation: "portrait",
    },
  };

  html2pdf().set(options).from(element).save();
};
  return (
    <>
    <div
  id="resume"
  className={`card shadow p-4 ${resumeData.template}`}
>
    <div className="card shadow p-4">
       

     <div className="resume-header">

  {resumeData.photo && (
    <img
      src={resumeData.photo}
      alt="profile"
      className="profile-img"
    />
  )}

  <h1>{resumeData.name}</h1>

  <p>{resumeData.email}</p>

  <p>{resumeData.phone}</p>

</div>
      

      <hr />
     <div className="section">
  <h3>Objective</h3>
  <p>{resumeData.objective}</p>
</div>

      
      <h3>Skills</h3>

<div>
{
  resumeData.skills
    .split(",")
    .map((skill,index)=>(

      <span
        key={index}
        className="skill-badge"
      >
        {skill}
      </span>

    ))
}
</div>

      <div className="section">
  <h3>Education</h3>
  <p>{resumeData.education}</p>
</div>

<div className="section">
    <h3>Projects</h3>
  <ul>
  {resumeData.projects
    .split(",")
    .map((project, index) => (
      <li key={index}>{project}</li>
    ))}
</ul>
</div>
</div>

 

    </div>
    <button
  className="btn btn-success mt-3 w-100"
  onClick={downloadPDF}
>
  Download Resume PDF
</button>
</>
  );
}

export default ResumePreview;