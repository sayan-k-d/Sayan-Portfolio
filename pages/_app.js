// import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import "@/styles/dashboard.scss";
import "@/styles/projectdetails.scss";
import { ProjectProvider } from "@/context/ProjectContext";
export default function App({ Component, pageProps }) {
  return (
    <ProjectProvider>
      <Component {...pageProps} />
    </ProjectProvider>
  );
}
