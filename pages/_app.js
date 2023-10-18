import Router from "next/router";
import "@/styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 6,
  color: "#fe595e",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <footer>
        <Footer />
        <p className="text-center text-gray-500 text-sm bg-gray-100 p-10">
          All Rights Reserved. Copyright © 2022 AirbnbClone
        </p>
      </footer>
    </>
  );
}
