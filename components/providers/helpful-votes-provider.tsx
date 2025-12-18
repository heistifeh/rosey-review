"use client";

import * as React from "react";

type HelpfulVote = "up" | "down";
type HelpfulVotesState = Record<string, HelpfulVote | null | undefined>;

type HelpfulVotesContextValue = {
  getVote: (id: string) => HelpfulVote | null;
  toggleVote: (id: string, direction: HelpfulVote) => void;
};

const HelpfulVotesContext = React.createContext<HelpfulVotesContextValue | null>(null);

function readStoredVotes(): HelpfulVotesState {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem("helpfulVotes");
    if (!raw) return {};
    return JSON.parse(raw) as HelpfulVotesState;
  } catch {
    return {};
  }
}

export function HelpfulVotesProvider({ children }: { children: React.ReactNode }) {
  const [votes, setVotes] = React.useState<HelpfulVotesState>({});
  const [hydrated, setHydrated] = React.useState(false);

  React.useEffect(() => {
    const stored = readStoredVotes();
    setVotes(stored);
    setHydrated(true);
  }, []);

  React.useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem("helpfulVotes", JSON.stringify(votes));
    } catch {
      // Ignore write failures (e.g., private mode)
    }
  }, [votes, hydrated]);

  const getVote = React.useCallback(
    (id: string) => {
      const vote = votes[id];
      return vote ?? null;
    },
    [votes],
  );

  const toggleVote = React.useCallback((id: string, direction: HelpfulVote) => {
    setVotes((prev) => {
      const current = prev[id] ?? null;
      const nextVote = current === direction ? null : direction;
      return {
        ...prev,
        [id]: nextVote,
      };
    });
  }, []);

  const value = React.useMemo(
    () => ({
      getVote,
      toggleVote,
    }),
    [getVote, toggleVote],
  );

  return <HelpfulVotesContext.Provider value={value}>{children}</HelpfulVotesContext.Provider>;
}

export function useHelpfulVotes() {
  const ctx = React.useContext(HelpfulVotesContext);
  if (!ctx) {
    throw new Error("useHelpfulVotes must be used within HelpfulVotesProvider");
  }
  return ctx;
}

export function helpfulAdjustment(vote: HelpfulVote | null) {
  if (vote === "up") return 1;
  if (vote === "down") return -1;
  return 0;
}
