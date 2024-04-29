

const About = () => {
  return (
    <div className="bg-gray-100">
   
      <div className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Our School Management System
            </h1>
            <p className="mb-8 leading-relaxed">
              Our system provides an efficient way to manage school operations,
              including student and teacher management, administration, and more.
              We are dedicated to improving the educational experience for both
              students and educators.
            </p>
            <div className="flex justify-center">
              <a
                href="/contact"
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
