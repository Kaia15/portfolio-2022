import './App.css';
import {storage} from './fire/firebase'
import { ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { Routes, Route } from 'react-router-dom';
import {React, useEffect, useState } from 'react';
import Banner from './components/banner/banner';
import NavigationBar from './components/navigation/navigation';
import Section1 from './components/education/section1';
import Section2 from './components/projects/section2';

function App() {
  // console.log(getStorage)
  
  // console.log(imagesSrc)
  const [file, setFile] = useState(null);
  const [urls, setUrls] = useState([]);
  console.log(file)
  console.log(urls)
  const uploadFiles = (folder, file) => {
    if (file == null) return;
    const storageRef = ref(storage, `${folder}/${file.name}`);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log('Uploaded a blob or file!');
    })
  };

  useEffect(() => {
    listAll(ref(storage,"/education/")).then(res => res.items.map(item => {
      getDownloadURL(ref(storage,item.fullPath)).then((url) => {
        setUrls(prev => [...prev,url])
      })
    }))
  }, [])
  
  return (
    <div className="App">
      <NavigationBar />
      <Routes>
        <Route exact path = '/' element = {<Banner />}/>
        <Route exact path = '/home' element = {<Banner />}/>
        <Route exact path = '/education' element = {<Section1 />} />
        <Route exact path = '/projects' element = {<Section2 />} />
        <Route exact path = '/experiences' element = {<Section2 />} />
        <Route exact path = '/contact' element = {<Section2 />} />
      </Routes>
      <input type = "file" 
      onChange = {e => setFile(e.target.files[0])}
      />
      <button onClick = {() => uploadFiles('projects',file)} disabled = {!file}>
        Upload files
      </button>
    </div>
  );
}

export default App;
