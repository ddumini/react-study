import './App.css';

function AppJSX() {
  const name = '수민';
  const list = ['우유', '딸기', '바나나', '요거트'];
  return (
    <>
      <h1 className='orange'>{`Hello! ${name}`}</h1>
      <h2>Hello!</h2>
      <p>{name}</p>
      <ul>
        {list.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
      <img style={{width: '200px', height: '200px'}} src='https://images.unsplash.com/photo-1682687221213-56e250b36fdd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='nature'></img>
    </>
  )
}

export default AppJSX;
