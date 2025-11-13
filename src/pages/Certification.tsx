import { ArrowLeft, Calendar, BookOpen, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const courses = [
  {
    title: "PQ Diploma in International Taxation",
    details: "A comprehensive diploma focusing on international tax policies, treaties, BEPS, and global tax frameworks.",
    registration: "https://icai.org/pq-diploma-registration",
    exams: ["March 2025", "July 2025", "November 2025"],
    resources: [
      "Background Material",
      "Mock Tests",
      "Revision Classes",
      "Past Papers"
    ],
  },
  {
    title: "Certificate Course on UAE Corporate Tax",
    details: "Covers UAE Corporate Tax regulations, compliance, filing requirements, transfer pricing, and practical case studies.",
    registration: "https://icai.org/uae-tax-registration",
    exams: ["April 2025", "August 2025"],
    resources: [
      "Background Material",
      "Mock Tests",
      "Revision Classes",
      "Case Studies"
    ],
  },
];

const CertificatesCourses = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F4F7FB] font-[Poppins]">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-[#0E4C92] to-[#1C6DD0] px-4 py-4 text-white sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/20"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-6 w-6" />
          </Button>

          <div className="flex-1">
            <h1 className="text-xl font-semibold">Certificates & Courses</h1>
            <p className="text-xs text-white/80">Professional Courses by ICAI</p>
          </div>
        </div>
      </header>

      {/* BODY */}
      <main className="p-4 space-y-6">

        {courses.map((course, index) => (
          <Card key={index} className="p-5 rounded-2xl shadow-sm bg-white border border-gray-100">

            {/* Course Title */}
            <h2 className="text-lg font-semibold text-[#0E4C92] mb-2">
              {course.title}
            </h2>

            {/* Details */}
            <p className="text-sm text-gray-600 mb-4">
              {course.details}
            </p>

            {/* Registration */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#0E4C92] mb-1">
                Registration
              </h3>
              <Button
                className="rounded-xl bg-[#1C6DD0] text-white"
                onClick={() => window.open(course.registration, "_blank")}
              >
                Register Now <ExternalLink className="h-4 w-4 ml-1" />
              </Button>
            </div>

            {/* Exam Dates */}
            <div className="mb-4">
              <h3 className="text-sm font-semibold text-[#0E4C92] mb-1">
                Exam Dates
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {course.exams.map((exam, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-[#0E4C92]" />
                    {exam}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-[#0E4C92] mb-1">
                Resources
              </h3>
              <ul className="text-sm text-gray-700 space-y-1">
                {course.resources.map((res, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-[#0E4C92]" />
                    {res}
                  </li>
                ))}
              </ul>
            </div>

          </Card>
        ))}

      </main>

    </div>
  );
};

export default CertificatesCourses;
