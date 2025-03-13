const Resume = () => {
    return (
      <section id="resume" className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Resume</h2>
          <a
            href="/your-resume.pdf"
            download
            className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg"
          >
            Download Resume
          </a>
        </div>
      </section>
    );
  };
  
  export default Resume;