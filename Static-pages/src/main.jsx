// import {createRoot} from "react-dom/client"
// import {Fragment} from "react"
// import {Header} from "./components/Header"
// import MainContent from "./components/MainContent"
// import {Footer} from "./components/Footer"

// /**
//  * Challenge: move the Header , MainContent and Footer components to their own separate files.
// */

// const root=createRoot(document.getElementById("root"));
// root.render(
//     <Page></Page>
// )

// function Page(){
//     return (
//         <Fragment>
//             <Header />
//             <MainContent />
//             <Footer />
//         </Fragment>
//     )
// }



import App from "./Projects/Static-Pages/App"
import {createRoot} from "react-dom/client"

const root=createRoot(document.getElementById("root"));
root.render(<App />)