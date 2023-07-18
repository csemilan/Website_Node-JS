import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from './components/homepage/Homepage';
import Dashboard from './AdminPanel/dashboard/Dashboard';
import Login from './components/login/Login';
import Student from './AdminPanel/Student/Student';
import Studentdetail from './AdminPanel/Student/Studentdetail';
import AddNotice from './AdminPanel/NoticeBoard/AddNotice';
import AddAlbum from './AdminPanel/Album/AddAlbum';
import AddImages from './AdminPanel/Gallery/AddImages';
import AddFaculty from './AdminPanel/Faculty/AddFaculty';
import AddFeeStructure from './AdminPanel/FeeStructure/AddFeeStructure';
import ImageList from './AdminPanel/Gallery/ImageList';
import AddImage from './AdminPanel/Gallery/AddImage';
import NoticeList from './AdminPanel/NoticeBoard/NoticeList';
import FacultyList from './AdminPanel/Faculty/FacultyList';
import EditFaculty from './AdminPanel/Faculty/EditFaculty';
import EditNotice from './AdminPanel/NoticeBoard/EditNotice';
import AlbumList from './AdminPanel/Album/AlbumList';
import Downloads from './AdminPanel/Downloads/Downloads';
import DownloadsList from './AdminPanel/Downloads/DownloadsList';

function App() {


  return (
    <div className="App">
      {localStorage.getItem('token') ?
        <>
          <BrowserRouter>
            <Routes>
              <Route path="" element={<Homepage />}>
                
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="addnotice" element={<AddNotice />} />
                <Route path="noticelist" element={<NoticeList />} />
                <Route path="noticelist/notice/:NoticeId/edit" element={<EditNotice />} />
                <Route path="addalbum" element={<AddAlbum />} />
                <Route path="albumlist" element={<AlbumList />} />
                <Route path="addimages" element={<AddImages />} />
                <Route path="imageslist" element={<ImageList />} />
                <Route path="addfaculty" element={<AddFaculty />} />
                <Route path="facultylist" element={<FacultyList />} />
                <Route path="facultylist/faculty/:FacultyId/edit" element={<EditFaculty />} />
                <Route path="addfeestr" element={<AddFeeStructure />} />
                <Route path="student" element={<Student />} />
                <Route path="student/detail/:studentId" element={<Studentdetail />} />
                <Route path="imageslist/images/:galleryId/addimages" element={<AddImage />} />
                <Route path="adddownloads" element={<Downloads />} />
                <Route path="downloadslist" element={<DownloadsList />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </>
        :
        <>
          <Login />
        </>
      }

    </div>
  );
}
export default App;
