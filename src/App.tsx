import { Route, Routes } from "react-router-dom";
import "./styles/destyle.css";
import Top from "./pages/top";
import NoteList from "./pages/noteList";
import Login from "./pages/login";
import NoteCreate from "./pages/noteCreate";
import NoteEdit from "./pages/noteEdit";
import MyPage from "./pages/myPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Top />} />
        <Route path="/login" element={<Login />} />
        <Route path="/note-list" element={<NoteList />} />
        <Route path="/note-create" element={<NoteCreate />} />
        <Route path="/note-edit" element={<NoteEdit />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </>
  );
}

export default App;
