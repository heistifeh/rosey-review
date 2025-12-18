export type Review = {
  id: string;
  title: string;
  body: string;
  name: string;
  meta: string;
  rating: number;
  verified: boolean;
  createdAt: string;
  helpfulCount: number;
  tags: string[];
  response?: {
    author: string;
    createdAt: string;
    body: string;
  };
};

export const REVIEWS: Review[] = [
  {
    id: "rosey-001",
    title: "Fast, clean, and trustworthy",
    body:
      "Everything felt straightforward. Pages loaded quickly and the experience was calm. " +
      "It did not feel like the site was trying to trick me into anything.\n\n" +
      "I especially liked how readable the layout is. The flow felt consistent and predictable. " +
      "If you are trying to assess credibility quickly, it does the job.",
    name: "Amina",
    meta: "Verified user",
    rating: 5,
    verified: true,
    createdAt: "2025-12-15",
    helpfulCount: 42,
    tags: ["Speed", "Trust"],
    response: {
      author: "Rosey team",
      createdAt: "2025-12-16",
      body:
        "Thanks for the detailed feedback. We are keeping the experience calm on purpose. " +
        "If you ever run into confusing steps, please message support with a screenshot and we will fix it fast.",
    },
  },
  {
    id: "rosey-002",
    title: "Good overall, one thing to improve",
    body:
      "Really solid experience. I would love slightly clearer guidance on one step, " +
      "but it is already better than most sites.\n\n" +
      "The main win is that it does not feel noisy. It feels like the site respects my attention.",
    name: "David",
    meta: "Verified user",
    rating: 4,
    verified: true,
    createdAt: "2025-12-12",
    helpfulCount: 18,
    tags: ["UX", "Clarity"],
  },
  {
    id: "rosey-003",
    title: "Feels credible",
    body:
      "The way information is presented feels transparent. I like that reviews do not feel edited " +
      "and the page is easy to scan.",
    name: "Chioma",
    meta: "User",
    rating: 5,
    verified: false,
    createdAt: "2025-12-09",
    helpfulCount: 9,
    tags: ["Transparency"],
  },
  {
    id: "rosey-004",
    title: "Decent experience",
    body:
      "No major issues. I think the overall flow is good. Would be nice to see more guidance on what is verified and what is not.",
    name: "Michael",
    meta: "User",
    rating: 3,
    verified: false,
    createdAt: "2025-12-05",
    helpfulCount: 3,
    tags: ["Verification"],
  },
];

export function getReviewById(id: string) {
  return REVIEWS.find((r) => r.id === id) ?? null;
}
