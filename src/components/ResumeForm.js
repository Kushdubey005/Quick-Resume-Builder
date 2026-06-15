function ResumeForm({ resumeData, setResumeData }) {

  const handleChange = (e) => {

    setResumeData({
      ...resumeData,
      [e.target.name]: e.target.value
    });

  };
  const handleImage = (e) => {

  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onloadend = () => {

    setResumeData({
      ...resumeData,
      photo: reader.result,
    });

  };

  reader.readAsDataURL(file);
};

  return (

    <div className="card p-4">

      <h3>Resume Form</h3>

      <input
  type="text"
  className="form-control mt-3"
  placeholder="Enter Name"
  name="name"
  value={resumeData.name}
  onChange={handleChange}
/>
      <input
  type="email"
  className="form-control mt-3"
  placeholder="Enter Email"
  name="email"
  value={resumeData.email}
  onChange={handleChange}
/>

<input
  type="text"
  className="form-control mt-3"
  placeholder="Enter Phone Number"
  name="phone"
  value={resumeData.phone}
  onChange={handleChange}
/>
<textarea
  className="form-control mt-3"
  placeholder="Education"
  name="education"
  rows="4"
  value={resumeData.education}
  onChange={handleChange}
/>
<textarea
  className="form-control mt-3"
  placeholder="Skills"
  name="skills"
  rows="4"
  value={resumeData.skills}
  onChange={handleChange}
/>
<textarea
  className="form-control mt-3"
  placeholder="Projects"
  name="projects"
  rows="5"
  value={resumeData.projects}
  onChange={handleChange}
/>
<textarea
  className="form-control mt-3"
  placeholder="Career Objective"
  name="objective"
  rows="4"
  value={resumeData.objective}
  onChange={handleChange}
/>
<select
  className="form-select mt-3"
  name="template"
  value={resumeData.template}
  onChange={handleChange}
>
  <option value="modern">Modern</option>
  <option value="classic">Classic</option>
</select>
<input
  type="file"
  className="form-control mt-3"
  accept="image/*"
  onChange={handleImage}
/>
<button
  className="btn btn-danger mt-3"
  onClick={() => {
    localStorage.removeItem("resumeData");

    setResumeData({
      name: "",
      email: "",
      phone: "",
      education: "",
      skills: "",
      projects: "",
      objective: "",
      photo: ""
    });
  }}
>
  Clear Resume
</button>

    </div>

  );
}

export default ResumeForm;