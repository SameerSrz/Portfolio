import GitHubCalendar from "react-github-calendar";
import './stars.scss';

const GitHubContributions = () => {
  return (
    <section id="github" className="py-16 intro route bg-image background">
      {/* Animated Stars */}
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />

      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">GitHub Contributions</h2>

        <div className="mt-8 flex justify-center">
          <GitHubCalendar username="SameerSrz" fullYear={true} />
        </div>
      </div>
    </section>
  );
};

export default GitHubContributions;