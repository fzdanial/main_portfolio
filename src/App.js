import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import About from "./scenes/about";
import Projects from "./scenes/project";
// import Invoices from "./scenes/invoices";
import Skills from "./scenes/skill";
//import Bar from "./scenes/bar";
import Form from "./scenes/form";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Geography from "./scenes/geography";
//import Calendar from "./scenes/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
  <ColorModeContext.Provider value={colorMode}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="app">
        <Sidebar /> 
        <main className="content">
          <Topbar />
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/project" element={<Projects />} />
            {/* <Route path="/invoices" element={<Invoices />} /> */}
            <Route path="/skill" element={<Skills />} />
            {/* <Route path="/bar" element={<Bar />} /> */}
            {/* <Route path="/form" element={<Form />} /> */}
            {/* <Route path="/line" element={<Line />} /> */}
            {/* <Route path="/pie" element={<Pie />} /> */}
            {/* <Route path="/faq" element={<FAQ />} /> */}
            {/* <Route path="/geography" element={<Geography />} /> */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
          </Routes>
        </main>
        </div>
    </ThemeProvider>
  </ColorModeContext.Provider>
  );
}

export default App;
