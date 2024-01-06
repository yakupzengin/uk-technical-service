  import React from "react";
  import PageContainer from "./container/PageContainer";
  import "./App.css"
  import WhatsAppIcon from "./components/WhatsAppIcon/WhatsAppIcon"; 
  import SupportIcon from "./components/SupportIcon/SupportIcon";
  import Routers from "./router/Routers";
  function App() {
    return (
      <>  
        <WhatsAppIcon/> 
        <SupportIcon/>
        <PageContainer>
            <Routers/>
        </PageContainer>
      </>
    );
  }

  export default App;
