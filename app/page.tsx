"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { rankResumes } from "../services/api";

type Result = {
  filename: string;
  final_score: number;
  skill_score: number;
  experience_score: number;
  cosine_score: number;
};

function ScoreBar({ label, value }: { label: string; value: number }) {
  const percentage = Math.round(value * 100);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-blue-500 h-3 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export default function Home() {
  const [jobDescription, setJobDescription] = useState<string>("");
  const [files, setFiles] = useState<File[]>([]);
  const [results, setResults] = useState<Result[]>([]);
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async () => {
    if (!jobDescription || files.length === 0) {
      alert("Please provide job description and upload resumes.");
      return;
    }
  
    try {
      setLoading(true);
      setResults([]);
      setSelectedResult(null);
    
      const result = await rankResumes(files, jobDescription);
      setResults(result);
    
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white p-8">
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="absolute top-6 right-10 text-gray-400 text-sm tracking-wide"
      >
        Developed by{" "}
        <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent font-semibold">
          Udit U Gunagi
        </span>
      </motion.div>

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-6 text-center tracking-wide bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent"
        >
          Welcome to AI Resume Screening
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-center text-gray-400 mb-10"
        >
          Data-Driven Talent Screening with Explainable AI Scoring
        </motion.p>

        {/* Upload Section */}
        <div className="bg-gray-800 p-6 rounded-2xl shadow-xl mb-10">
          <textarea
            className="w-full p-4 rounded-xl bg-gray-900 border border-gray-700 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows={4}
            placeholder="Paste Job Description..."
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          />

          {/* Custom File Upload */}
          <div className="flex items-center justify-between bg-gray-900 p-4 rounded-xl border border-gray-700">
            <label className="cursor-pointer bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition shadow-md">
              Select Resumes
              <input
                type="file"
                multiple
                className="hidden"
                onChange={(e) =>
                  setFiles(e.target.files ? Array.from(e.target.files) : [])
                }
              />
            </label>

            <span className="text-gray-400 text-sm ml-4">
              {files.length > 0
                ? `${files.length} file(s) selected`
                : "No files selected"}
            </span>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end mt-6">
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3 rounded-xl font-semibold text-white shadow-lg hover:scale-105 transition transform"
            >
              {loading ? "Analyzing..." : "Analyze Resumes"}
            </button>
          </div>
        </div>

        {/* Results Section */}
        {results.length > 0 && (
          <div className="grid grid-cols-3 gap-6">
            {/* Left Panel - Candidates */}
            <div className="col-span-1 bg-gray-800 rounded-xl p-4">
              <h2 className="text-xl font-semibold mb-4">Candidates</h2>

              {results.map((result, index) => (
                <div
                  key={index}
                  className={`p-3 rounded-lg mb-3 cursor-pointer transition ${
                    selectedResult?.filename === result.filename
                      ? "bg-blue-600"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  onClick={() => setSelectedResult(result)}
                >
                  <p className="font-semibold">{result.filename}</p>
                  <p className="text-sm text-gray-300">
                    Score: {Math.round(result.final_score * 100)}%
                  </p>
                </div>
              ))}
            </div>

            {/* Right Panel - Analytics */}
            <div className="col-span-2 bg-gray-800 rounded-xl p-6">
              {selectedResult ? (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">
                      {selectedResult.filename}
                    </h2>

                    <span
                      className={`px-4 py-2 rounded-full text-sm font-semibold ${
                        selectedResult.final_score >= 0.75
                          ? "bg-green-600"
                          : selectedResult.final_score >= 0.5
                            ? "bg-yellow-500"
                            : "bg-red-600"
                      }`}
                    >
                      {selectedResult.final_score >= 0.75
                        ? "Strong Match"
                        : selectedResult.final_score >= 0.5
                          ? "Moderate Match"
                          : "Weak Match"}
                    </span>
                  </div>

                  <div className="space-y-5 text-lg">
                    <ScoreBar
                      label="Final Score"
                      value={selectedResult.final_score}
                    />
                    <ScoreBar
                      label="Skill Match"
                      value={selectedResult.skill_score}
                    />
                    <ScoreBar
                      label="Experience Match"
                      value={selectedResult.experience_score}
                    />
                    <ScoreBar
                      label="Similarity Score"
                      value={selectedResult.cosine_score}
                    />
                  </div>
                </div>
              ) : (
                <p className="text-gray-400">
                  Select a candidate to view analytics
                </p>
              )}
            </div>
          </div>
        )}
      </div>
      <footer className="mt-20 text-center text-gray-500 text-sm border-t border-gray-800 pt-6">
        © 2026 Udit U Gunagi · AI Resume Screening System
      </footer>
    </main>
  );
}
