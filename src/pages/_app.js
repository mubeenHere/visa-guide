import Header from "@/components/Header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ margin: "50px" }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
