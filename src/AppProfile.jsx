import './App.css';
import Profile from './components/Profile';
import Avartar from './components/Avartar';

function AppProfile() {
  const hadleClick = (event) => {
    console.log(event);
    alert('버튼이 클릭됨!');
  };
  return (
    <>
    <button onClick={hadleClick}>버튼</button>
    <Avartar image='https://images.unsplash.com/photo-1705835254007-628c4d924e23?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' isNew={true}/>
      <Profile image='https://images.unsplash.com/photo-1705835254007-628c4d924e23?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='James Kim' title='프론트엔드 개발자' isNew={true}/>
      <Profile image='https://images.unsplash.com/photo-1705642126091-f6a72397a183?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='Woody Yan' title='백엔드 개발자'/>
      <Profile image='https://images.unsplash.com/photo-1705773335937-17e1ff6fac10?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' name='Mos Design' title='프론트엔드 개발자'/>
    </>
  )
}

export default AppProfile;
