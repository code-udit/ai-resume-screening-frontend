const BASE_URL = process.env.BACKEND_URL;

export const rankResumes = async (files, jobDescription) => {
  const formData = new FormData();

  formData.append("job_description", jobDescription);

  files.forEach((file) => {
    formData.append("resumes", file);
  });

  const response = await fetch(`${BASE_URL}/rank-files`, {
      method: "POST",
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error("API failed");
    }
    
    return response.json();
};