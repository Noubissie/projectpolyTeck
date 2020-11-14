import React from 'react'
import {HomePage} from "pages"
import {Layout} from "components/common"
import {SmsLayout} from "components/common/Layout/SmsLayout"
import ThemeProvider from "providers/ThemeProvider"
import "dotenv"
import {GoogleMap, withScriptjs,withGoogleMap} from "react-google-maps"
import {Wrapper} from "./styles"
const Map = ()=>{
  return (
    <GoogleMap 
      defaultZoom={10} 
      defaultCenter={{lat:45.12,lng:-75.69}} />
  )
}
const WrappMap =withScriptjs(withGoogleMap(Map))

function App() {
  return (
    <div className="App">
      <ThemeProvider>
        <Layout>
          <HomePage />

        <Wrapper >
          <WrappMap  
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </Wrapper>

        </Layout>
        {/* <SmsLayout>
            
        </SmsLayout> */}
        
      </ThemeProvider>
      
    </div>
  );
}


export default App;
