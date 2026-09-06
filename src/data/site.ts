export const nav = [
  { label: "Home", href: "/" },
  { label: "EverCompass", href: "/evercompass" },
  { label: "Process", href: "/process" },
  { label: "Results", href: "/results" },
];

export const company = {
  name: "EverJourneys LLC",
  copyrightYear: 2026,
  address: "Fine Arts Building, DTLA, 811 W 7th St. Suite 9, Los Angeles, CA 90017",
  email: "explore@everjourneys.com",
  hours: "Mon–Fri 9:00AM – 4:00PM PST",
};

// Every "Start with a conversation" / "not sure where to start" CTA across the
// site points here. /start is a thin link-out page that holds the real
// scheduling URL (hubspotMeetingUrl below), so these buttons never need to
// change if the scheduling destination does.
export const primaryCtaHref = "/start";

// TODO: replace with your real HubSpot meeting link before launch.
// This is the one piece of content this entire site build is blocked on.
export const hubspotMeetingUrl = "https://meetings.hubspot.com/REPLACE-ME";
