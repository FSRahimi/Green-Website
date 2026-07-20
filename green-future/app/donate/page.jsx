import DonatePage from "../components/Donate/DonatePage";

export const metadata = {
  title: "Donate | Nature Afghanistan",
  description:
    "Support Nature Afghanistan's work protecting forests, wildlife, rivers, and communities.",
};

export default function DonateRoute() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-slate-950">
      <DonatePage />
    </main>
  );
}
