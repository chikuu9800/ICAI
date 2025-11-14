// Mock Data for ICAI Mobile App
export const committees = {
  DTC: {
    id: 'dtc',
    name: 'Direct Taxes Committee',
    abbreviation: 'DTC',
    chairmanName: 'CA. Rajesh Kumar',
    chairmanImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DTCChairman',
    description: 'Leading direct taxation guidance and policy recommendations'
  },
  CITAX: {
    id: 'citax',
    name: 'Committee on International Taxation',
    abbreviation: 'CITAX',
    chairmanName: 'CA. Priya Sharma',
    chairmanImage: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CITAXChairman',
    description: 'Advancing international taxation standards and practices'
  }
};


export const currentUser = {
  name: "CA Rajesh Kumar",
  membershipNo: "FCA-123456",
  email: "rajesh.kumar@icai.org",
  mobile: "+91 98765 43210",
  memberSince: "April 2015",
  preferredCommittee: "DTC",
  cpeHours: 32,
};

export const dtcDirectory = {
  chairman: {
    name: "CA Sanjay Agarwal",
    position: "Chairman, Direct Taxes Committee",
    email: "chairman.dtc@icai.org",
    phone: "+91 11 3989 3989",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=SA&backgroundColor=1e3a8a",
  },
  viceChairman: {
    name: "CA Priya Sharma",
    position: "Vice-Chairman",
    email: "vc.dtc@icai.org",
    phone: "+91 11 3989 3990",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=1e3a8a",
  },
  members: [
    {
      name: "CA Amit Verma",
      position: "Member, Delhi",
      email: "amit.verma@icai.org",
      phone: "+91 98765 11111",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=AV&backgroundColor=1e3a8a",
    },
    {
      name: "CA Neha Gupta",
      position: "Member, Mumbai",
      email: "neha.gupta@icai.org",
      phone: "+91 98765 22222",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=NG&backgroundColor=1e3a8a",
    },
    {
      name: "CA Rohit Singh",
      position: "Co-opted Member, Bangalore",
      email: "rohit.singh@icai.org",
      phone: "+91 98765 33333",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=RS&backgroundColor=1e3a8a",
    },
  ],
};

export const citaxDirectory = {
  chairman: {
    name: "CA Dheeraj Sharma",
    position: "Chairman, CITAX",
    email: "chairman.citax@icai.org",
    phone: "+91 11 3989 4000",
    image: "https://api.dicebear.com/7.x/initials/svg?seed=DS&backgroundColor=1e3a8a",
  },
  members: [
    {
      name: "CA Pradeep Kapoor",
      position: "Member",
      email: "pradeep.kapoor@icai.org",
      phone: "+91 98765 44444",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=PK&backgroundColor=1e3a8a",
    },
    {
      name: "CA Seema Jain",
      position: "Co-opted Member",
      email: "seema.jain@icai.org",
      phone: "+91 98765 55555",
      image: "https://api.dicebear.com/7.x/initials/svg?seed=SJ&backgroundColor=1e3a8a",
    },
  ],
};

export const publications = [
  {
    id: "1",
    title: "Guidance Note on Tax Audit under Section 44AB",
    category: "Guidance Note",
    date: "15 Jan 2025",
    size: "2.5 MB",
    downloads: 1247,

    pdfUrl: "/pdf/sample-guidance-note.pdf",

    createdBy: "Admin A",
    createdAt: "10 Jan 2025, 11:30 AM",
    editedBy: "Editor 1",
    editedAt: "14 Jan 2025, 4:15 PM",
    approvedBy: "Super Admin",
    publishedAt: "15 Jan 2025, 9:00 AM",
    unpublishedAt: null,

    versions: [
      { version: 1, editedBy: "Admin A", date: "10 Jan 2025" },
      { version: 2, editedBy: "Editor 1", date: "14 Jan 2025" },
    ],
  },

  {
    id: "2",
    title: "Technical Guide on International Taxation",
    category: "Technical Guide",
    date: "10 Jan 2025",
    size: "4.2 MB",
    downloads: 856,

    pdfUrl: "/pdf/sample-guidance-note.pdf",

    createdBy: "Admin B",
    createdAt: "03 Jan 2025, 2:10 PM",
    editedBy: "Editor 2",
    editedAt: "08 Jan 2025, 12:20 PM",
    approvedBy: "Super Admin",
    publishedAt: "10 Jan 2025, 10:00 AM",
    unpublishedAt: null,

    versions: [{ version: 1, editedBy: "Admin B", date: "03 Jan 2025" }],
  },

  {
    id: "3",
    title: "Background Material on Direct Tax Laws",
    category: "Background Material",
    date: "05 Jan 2025",
    size: "8.1 MB",
    downloads: 2341,

    pdfUrl: "/pdf/sample-guidance-note.pdf",

    createdBy: "Admin A",
    createdAt: "28 Dec 2024, 3:45 PM",
    editedBy: null,
    editedAt: null,
    approvedBy: "Super Admin",
    publishedAt: "05 Jan 2025, 10:00 AM",
    unpublishedAt: null,

    versions: [],
  },

  {
    id: "4",
    title: "Income Tax Act, 1961 (Updated)",
    category: "Acts & Rules",
    date: "01 Jan 2025",
    size: "15.3 MB",
    downloads: 5678,

    pdfUrl: "/pdf/sample-guidance-note.pdf",

    createdBy: "Admin C",
    createdAt: "20 Dec 2024, 11:40 AM",
    editedBy: "Editor 3",
    editedAt: "28 Dec 2024, 6:40 PM",
    approvedBy: "Super Admin",
    publishedAt: "01 Jan 2025, 9:00 AM",
    unpublishedAt: null,

    versions: [
      { version: 1, editedBy: "Admin C", date: "20 Dec 2024" },
      { version: 2, editedBy: "Editor 3", date: "28 Dec 2024" },
    ],
  },

  {
    id: "5",
    title: "CBDT Circular No. 1/2025",
    category: "Circular",
    date: "28 Dec 2024",
    size: "856 KB",
    downloads: 3456,

    pdfUrl: "/pdf/sample-guidance-note.pdf",

    createdBy: "Admin D",
    createdAt: "22 Dec 2024, 9:30 AM",
    editedBy: null,
    editedAt: null,
    approvedBy: "Super Admin",
    publishedAt: "28 Dec 2024, 10:00 AM",
    unpublishedAt: null,

    versions: [],
  },

  {
    id: "6",
    title: "Guidance Note on Transfer Pricing",
    category: "Guidance Note",
    date: "20 Dec 2024",
    size: "3.4 MB",
    downloads: 1890,

    pdfUrl: "/pdf/sample-guidance-note.pdf",

    createdBy: "Admin A",
    createdAt: "10 Dec 2024, 4:50 PM",
    editedBy: "Editor 2",
    editedAt: "18 Dec 2024, 5:20 PM",
    approvedBy: "Super Admin",
    publishedAt: "20 Dec 2024, 9:00 AM",
    unpublishedAt: "05 Jan 2025, 3:00 PM",

    versions: [
      { version: 1, editedBy: "Admin A", date: "10 Dec 2024" },
      { version: 2, editedBy: "Editor 2", date: "18 Dec 2024" },
    ],
  },
];


export const announcements = [
  {
    id: "1",
    title: "National Tax Conference 2025",
    category: "Seminar",
    date: "12 Nov 2025",
    description:
      "Registration open for National Tax Conference scheduled on 15-16 February 2025 at India Habitat Centre, New Delhi",
  },
  {
    id: "2",
    title: "New Batch: Certificate Course on GST",
    category: "Course",
    date: "10 Nov 2025",
    description:
      "Registrations open for Certificate Course on GST starting from 1st December 2025. Limited seats available.",
  },
  {
    id: "3",
    title: "CA Final Exam Schedule Released",
    category: "Exam",
    date: "08 Nov 2025",
    description:
      "Examination schedule for CA Final May 2025 announced. Download admit cards from 1st April 2025",
  },
  {
    id: "4",
    title: "Exposure Draft: Guidance Note on Crypto Taxation",
    category: "Draft",
    date: "05 Nov 2025",
    description:
      "Comments invited on exposure draft of guidance note on taxation of cryptocurrency. Last date: 30 Nov 2025",
  },
  {
    id: "5",
    title: "Webinar: Recent Amendments in Income Tax Act",
    category: "Seminar",
    date: "03 Nov 2025",
    description:
      "Live webinar on Finance Act 2024 amendments. Date: 20 Nov 2025, Time: 3:00 PM. Register now.",
  },
];

export const upcomingEvents = [
  {
    id: "1",
    title: "Budget 2025 Analysis & Impact",
    date: "20 Nov 2025",
    time: "3:00 PM - 5:00 PM",
    speaker: "CA Sanjay Agarwal",
    speakerImage:
      "https://api.dicebear.com/7.x/initials/svg?seed=SA&backgroundColor=1e3a8a",
    mode: "Online Webinar",
    seats: "500/1000",
    status: "open",
    link: "https://example.com/events/budget-2025-analysis",

    // ➤ NEW
    videoUrl: "https://www.youtube.com/embed/ExShUp0KFU4?si=ASiksm7hjNqdeBAY",
    isRegistered: false,
  },

  {
    id: "2",
    title: "Transfer Pricing Workshop",
    date: "25 Nov 2025",
    time: "10:00 AM - 6:00 PM",
    speaker: "CA Priya Sharma",
    speakerImage:
      "https://api.dicebear.com/7.x/initials/svg?seed=PS&backgroundColor=1e3a8a",
    mode: "Physical - Mumbai",
    seats: "50/50",
    status: "closed",
    link: "https://example.com/events/budget-2025-analysis",

    // ➤ CLOSED EVENT → NO REGISTRATION OR WATCH BUTTON
    videoUrl: null,
    isRegistered: false,
  },

  {
    id: "3",
    title: "TDS & TCS Latest Updates",
    date: "28 Nov 2025",
    time: "4:00 PM - 5:30 PM",
    speaker: "CA Neha Gupta",
    speakerImage:
      "https://api.dicebear.com/7.x/initials/svg?seed=NG&backgroundColor=1e3a8a",
    mode: "Online Webinar",
    seats: "Unlimited",
    status: "open",
    link: "https://example.com/events/budget-2025-analysis",

    // ➤ NEW
    videoUrl: "https://www.youtube.com/embed/ExShUp0KFU4?si=ASiksm7hjNqdeBAY",
    isRegistered: false,
  },

  {
    id: "4",
    title: "International Tax Seminar",
    date: "02 Dec 2025",
    time: "9:00 AM - 5:00 PM",
    speaker: "CA Dheeraj Sharma",
    speakerImage:
      "https://api.dicebear.com/7.x/initials/svg?seed=DS&backgroundColor=1e3a8a",
    mode: "Physical - Delhi",
    seats: "80/100",
    status: "early-bird",
    link: "https://example.com/events/budget-2025-analysis",

    // ➤ NEW
    videoUrl: "https://www.youtube.com/embed/ExShUp0KFU4?si=ASiksm7hjNqdeBAY",
    isRegistered: false,
  },
];


export const forumQuestions = [
  {
    id: "1",
    title: "Query on Section 206AB applicability",
    author: "CA Ramesh Iyer",
    authorImage: "https://api.dicebear.com/7.x/initials/svg?seed=RI&backgroundColor=f59e0b",
    category: "TDS/TCS",
    time: "2 hours ago",
    replies: 3,
    views: 45,
    expertAnswered: true,
  },
  {
    id: "2",
    title: "Transfer Pricing Documentation Requirements",
    author: "CA Sunita Mehta",
    authorImage: "https://api.dicebear.com/7.x/initials/svg?seed=SM&backgroundColor=f59e0b",
    category: "International Tax",
    time: "5 hours ago",
    replies: 1,
    views: 28,
    expertAnswered: false,
  },
  {
    id: "3",
    title: "Tax treatment of ESOPs under new regime",
    author: "CA Vikram Malhotra",
    authorImage: "https://api.dicebear.com/7.x/initials/svg?seed=VM&backgroundColor=f59e0b",
    category: "Income Tax",
    time: "1 day ago",
    replies: 7,
    views: 156,
    expertAnswered: true,
  },
  {
    id: "4",
    title: "GST on Reverse Charge Mechanism clarification",
    author: "CA Anjali Desai",
    authorImage: "https://api.dicebear.com/7.x/initials/svg?seed=AD&backgroundColor=f59e0b",
    category: "GST",
    time: "1 day ago",
    replies: 4,
    views: 89,
    expertAnswered: false,
  },
];

export const notifications = [
  {
    id: "1",
    type: "event",
    title: "New webinar: Budget 2025 Analysis",
    time: "2 hours ago",
    unread: true,
    action: "Register Now",
  },
  {
    id: "2",
    type: "forum",
    title: "Your question was answered by an expert",
    time: "5 hours ago",
    unread: true,
    action: "View Answer",
  },
  {
    id: "3",
    type: "announcement",
    title: "New guidance note published",
    time: "1 day ago",
    unread: false,
    action: "Download",
  },
  {
    id: "4",
    type: "event",
    title: "Webinar reminder: Tax Audit session starts in 30 min",
    time: "1 day ago",
    unread: false,
    action: "Join Now",
  },
];


export const mockLoginUsers = [
  {
    name: "CA Rajesh Kumar",
    membershipNo: "FCA-123456",
    email: "rajesh.kumar@icai.org",
    mobile: "9876543210",
    otp: "123456", // for testing
  },
  {
    name: "CA Priya Sharma",
    membershipNo: "MNO-789012",
    email: "priya.sharma@icai.org",
    mobile: "9988776655",
    otp: "654321",
  },
];
