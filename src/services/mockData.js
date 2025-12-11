// Simulating a delay to mimic API calls
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const mockOrganizations = [
    {
        id: 1,
        name: "Acme Corp",
        domain: "acme.com",
        industry: "Manufacturing",
        employees: "1000-5000",
        revenue: "$500M - $1B",
        description: "A leading global provider of widget-based solutions for the modern industrial age.",
        location: "Austin, TX",
        logo: "https://ui-avatars.com/api/?name=Acme+Corp&background=random&color=fff",
        strategy: "Focusing on digital transformation and supply chain optimization in Q3 2025.",
        techStack: ["AWS", "Salesforce", "React", "Node.js"],
        signals: [
            { type: "hiring", text: "Hiring for 50+ Engineering roles", date: "2 days ago", sentiment: "positive" },
            { type: "news", text: "Acme Corp announces partnership with CyberDyne", date: "1 week ago", sentiment: "neutral" }
        ]
    },
    {
        id: 2,
        name: "Globex Inc",
        domain: "globex.com",
        industry: "Technology",
        employees: "500-1000",
        revenue: "$100M - $500M",
        description: "Innovating the future of cloud computing and AI-driven analytics.",
        location: "San Francisco, CA",
        logo: "https://ui-avatars.com/api/?name=Globex&background=random&color=fff",
        strategy: "Expanding into the European market and launching new AI product line.",
        techStack: ["Google Cloud", "Kubernetes", "Python", "Angular"],
        signals: [
            { type: "funding", text: "Raised Series C funding of $50M", date: "Yesterday", sentiment: "positive" },
            { type: "event", text: "Hosting Global Tech Summit 2025", date: "3 weeks ago", sentiment: "positive" }
        ]
    }
];

export const mockPeople = {
    1: [ // Acme Corp
        { id: 101, name: "Alice CEO", role: "Chief Executive Officer", email: "alice@acme.com", linkedin: "#", status: "Decision Maker" },
        { id: 102, name: "Bob CTO", role: "Chief Technology Officer", email: "bob@acme.com", linkedin: "#", status: "Influencer" },
        { id: 103, name: "Charlie VP", role: "VP of Sales", email: "charlie@acme.com", linkedin: "#", status: "Champion" }
    ],
    2: [ // Globex
        { id: 201, name: "David Founder", role: "Founder & CEO", email: "david@globex.com", linkedin: "#", status: "Decision Maker" },
        { id: 202, name: "Eve CMO", role: "Chief Marketing Officer", email: "eve@globex.com", linkedin: "#", status: "Influencer" }
    ]
};

export const searchOrganizations = async (query) => {
    await delay(600); // Simulate network latency
    if (!query) return mockOrganizations;
    return mockOrganizations.filter(org =>
        org.name.toLowerCase().includes(query.toLowerCase()) ||
        org.domain.toLowerCase().includes(query.toLowerCase())
    );
};

export const getOrganizationDetails = async (id) => {
    await delay(400);
    const org = mockOrganizations.find(o => o.id === parseInt(id));
    if (!org) throw new Error("Organization not found");
    return {
        ...org,
        people: mockPeople[id] || []
    };
};
