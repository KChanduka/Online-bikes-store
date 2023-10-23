import React from "react";
import Navbar from "../components/Navbar";
import Aboutus from "../assets/Aboutus.jpeg";

function NavAboutus() {
  const containerStyle = {
    backgroundImage: `url(${Aboutus})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
  };

  return (
    <div>
      <Navbar/>
        <h1 className="text-zinc-400 text-4xl font-semibold mt-16 mb-9 ">
         ABOUT US
        </h1>
      <div style={containerStyle} className="relative">
        <h2 className="text-lg font-semibold text-zinc-200 mt-4 py-8">
        Lorem ipsum dolor sit amet consectetur. Praesent a egestas felis quisque. Amet sapien adipiscing turpis phasellus eu. Lorem curabitur potenti scelerisque justo lacus. Suspendisse dui placerat risus facilisis arcu malesuada mattis. Dolor aenean dignissim nullam enim molestie eget. Dignissim in tincidunt nibh pretium curabitur nibh viverra. Tellus nisi rhoncus nulla mi enim vestibulum neque ac tincidunt. Tellus amet sit ante lacus viverra sed. Ultrices tortor sit purus magna id. Cursus tempus at vestibulum a eget volutpat. Id nulla amet nisl tristique odio ut interdum.
        Lorem ipsum dolor sit amet consectetur. Praesent a egestas felis quisque. Amet sapien adipiscing turpis phasellus eu. Lorem curabitur potenti scelerisque justo lacus. Suspendisse dui placerat risus facilisis arcu malesuada mattis. Dolor aenean dignissim nullam enim molestie eget. Dignissim in tincidunt nibh pretium curabitur nibh viverra. Tellus nisi rhoncus nulla mi enim vestibulum neque ac tincidunt. Tellus amet sit ante lacus viverra sed. Ultrices tortor sit purus magna id. Cursus tempus at vestibulum a eget volutpat. Id nulla amet nisl tristique odio ut interdum.
        Lorem ipsum dolor sit amet consectetur. Praesent a egestas felis quisque. Amet sapien adipiscing turpis phasellus eu. Lorem curabitur potenti scelerisque justo lacus. Suspendisse dui placerat risus facilisis arcu malesuada mattis. Dolor aenean dignissim nullam enim molestie eget. Dignissim in tincidunt nibh pretium curabitur nibh viverra. Tellus nisi rhoncus nulla mi enim vestibulum neque ac tincidunt. Tellus amet sit ante lacus viverra sed. Ultrices tortor sit purus magna id. Cursus tempus at vestibulum a eget volutpat. Id nulla amet nisl tristique odio ut interdum.
        Lorem ipsum dolor sit amet consectetur. Praesent a egestas felis quisque. Amet sapien adipiscing turpis phasellus eu. Lorem curabitur potenti scelerisque justo lacus. Suspendisse dui placerat risus facilisis arcu malesuada mattis. Dolor aenean dignissim nullam enim molestie eget. Dignissim in tincidunt nibh pretium curabitur nibh viverra. Tellus nisi rhoncus nulla mi enim vestibulum neque ac tincidunt. Tellus amet sit ante lacus viverra sed. Ultrices tortor sit purus magna id. Cursus tempus at vestibulum a eget volutpat. Id nulla amet nisl tristique odio ut interdum.
        </h2>
      </div>
    </div>
  );
}

export default NavAboutus;
