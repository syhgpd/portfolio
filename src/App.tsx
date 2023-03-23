import { Global, ThemeProvider } from "@emotion/react";
import { useRef } from "react";
import { BrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/Layout";
import { AboutMe, Activity, Intro, Project, Skill } from "./pages";
import { global } from "./styles/global";
import { theme } from "./styles/theme";

function App() {
  const scrollRef = useRef<HTMLDivElement[]>([]);
  const pageArr = [
    <Intro />,
    <AboutMe />,
    <Skill />,
    <Activity />,
    <Project />,
  ];

  return (
    <ThemeProvider theme={theme}>
      <Global styles={global} />
      <BrowserRouter>
        <RootLayout scrollRef={scrollRef}>
          {pageArr.map((item, idx) => (
            <div ref={(tabRef) => (scrollRef.current[idx] = tabRef!)} key={idx}>
              {item}
            </div>
          ))}
        </RootLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
