# AI Resume Screening Frontend

A modern AI-powered resume screening application built with Next.js, TypeScript, Tailwind CSS, and Framer Motion that helps recruiters automatically rank resumes against job descriptions using machine learning and NLP-based scoring.

---

## 🚀 Overview

AI Resume Screening Frontend provides an intuitive dashboard for evaluating candidate resumes against job requirements.

Users can:

* Upload multiple resumes
* Paste job descriptions
* Rank candidates automatically
* View explainable AI scoring
* Compare candidate matches
* Analyze skills and experience alignment
* Identify top candidates quickly

This frontend communicates with the FastAPI backend that performs resume parsing, NLP processing, and candidate scoring.

---

## 🔗 Links

### 🌐 Live Demo

https://ai-resume-screening-frontend-flame.vercel.app/

### 💻 Frontend Repository

https://github.com/code-udit/ai-resume-screening-frontend.git

### ⚙️ Backend Repository

https://github.com/code-udit/ai-resume-screening-backend.git

---

## 🛠 Tech Stack

* Next.js 15
* TypeScript
* Tailwind CSS
* Framer Motion
* React Hooks
* Axios / Fetch API
* Responsive UI

---

## 📁 Project Structure

```bash
ai-resume-screening-frontend/
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── services/
│   └── api.js
│
├── public/
├── package.json
├── next.config.ts
└── tsconfig.json
```

---

## ✨ Features

### 📄 Resume Upload

* Upload Multiple Resume Files
* Drag-and-Select Experience
* Batch Resume Processing
* PDF Resume Support

### 📝 Job Description Analysis

* Paste Custom Job Descriptions
* Skill Requirement Extraction
* Candidate Matching Analysis

### 🤖 AI Candidate Ranking

* Automated Resume Scoring
* Candidate Ranking System
* Similarity Matching
* Explainable AI Results

### 📊 Analytics Dashboard

* Final Candidate Score
* Skill Match Score
* Experience Match Score
* Similarity Score
* Candidate Comparison Panel

### 🎨 UI Features

* Modern Dashboard Design
* Responsive Layout
* Animated Components
* Loading States
* Real-Time Progress Feedback
* Mobile Friendly Interface

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory.

```env
NEXT_PUBLIC_API_URL=http://localhost:8000
```

---

## 📦 Installation

### 1. Clone Repository

```bash
git clone https://github.com/code-udit/ai-resume-screening-frontend.git
cd ai-resume-screening-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Application runs on:

```bash
http://localhost:3000
```

---

## 🔌 Backend Connection

Ensure the backend server is running before starting the frontend.

Backend API:

```bash
http://localhost:8000
```

---

## 📸 Dashboard Modules

### Resume Screening

Users can:

* Upload multiple resumes
* Submit a job description
* Start AI-powered evaluation

### Candidate Ranking

Displays:

* Ranked candidate list
* Match percentage
* Candidate prioritization

### Candidate Analytics

Shows:

* Final Score
* Skill Match Score
* Experience Match Score
* Similarity Score
* Match Classification

---

## 🔄 Screening Workflow

1. Recruiter uploads resumes
2. Job description is provided
3. Frontend sends files to backend
4. AI engine processes resumes
5. Candidates are scored and ranked
6. Results are displayed visually
7. Recruiter reviews top matches

---

## 📈 Future Improvements

* Resume Parsing Preview
* Advanced Candidate Filters
* Search and Pagination
* Interview Recommendation Engine
* Recruiter Authentication
* Team Collaboration
* Export Reports
* Dark Mode Support

---

## 👨‍💻 Author

Developed by **Udit U Gunagi**
