import "./App.css";
import HomePage from "./home-page/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./ui-components/header/Header";
import Footer from "./ui-components/footer/Footer";
import Campus from "./pages/Campus";
import Laboratories from "./pages/Laboratories";
import Library from "./pages/Library";
import Sports from "./pages/Sports";
import Management from "./pages/Management";
import Academic from "./pages/Academic";
import Achievers from "./pages/Achievers";
import Guidelines from "./pages/Guidelines";
import Faculty from "./pages/Faculty";
import ClassWiseStudents from "./pages/ClassWiseStudents";
import ClassWiseBookList from "./pages/ClassWiseBookList";
import TTDetail from "./pages/TTDetail";
import Carriculum from "./pages/Carriculum";
import MediaCoverage from "./pages/MediaCoverage";
import GalleryAlbum from "./pages/GalleryAlbum";
import Contact from "./pages/Contact";
import Disclouser from "./pages/Disclouser";
import Founder from "./pages/Founder";
import Principal from "./pages/Principal";
import Director from "./home-page/Director";
import Manager from "./pages/Manager";
import Chairman from "./pages/Chairman";
import ContactUs from "./home-page/ContactUs";
import Downloads from "./pages/Downloads";
import Gallery from "./pages/Gallery";
import Images from "./pages/Images";
import AdmissionForm from "./pages/AdmissionForm";

function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
            <Route path="campus" element={<Campus />}/>
            <Route path="laboratories" element={<Laboratories />} />
            <Route path="library" element={<Library />} />
            <Route path="sports" element={<Sports />} />
            <Route path="management" element={<Management />} />
            <Route path="academic" element={<Academic />} />
            <Route path="achievers" element={<Achievers />} />
            <Route path="guidelines" element={<Guidelines />} />
            <Route path="faculty" element={<Faculty />} />
            <Route path="carriculum" element={<Carriculum />} />
            <Route path="cws" element={<ClassWiseStudents />} />
            <Route path="cwbl" element={<ClassWiseBookList />} />
            <Route path="teachers-training-detail" element={<TTDetail />} />
            <Route path="media-coverage" element={<MediaCoverage />} />
            <Route path="gallery-album" element={<GalleryAlbum />} />
            <Route path="contact" element={<Contact />} />
            <Route path="disclouser" element={<Disclouser />} />
            <Route path="founder" element={<Founder />} />
            <Route path="principal" element={<Principal />} />
            <Route path="director" element={<Director />} />
            <Route path="manager" element={<Manager />} />
            <Route path="chairman" element={<Chairman />} />
            <Route path="download_documents" element={<Downloads />} />
            <Route path="gallery_album/gallery/:albumId" element={<Gallery />} />
            <Route path="gallery_album/gallery/images/:galleryId" element={<Images />} />
            <Route path="admission_form" element={<AdmissionForm />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
