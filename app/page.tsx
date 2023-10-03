import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className="main">
      <div className="title">
        <h1>Welcome to Cool Notes!</h1>
      </div>
      <div className="main-container">
        <div className="img">
          <img src="./test.jpg" alt="" className='main-img' />
        </div>
        <div className="txt">
          <p>Hello World!</p>
        </div>
      </div>
    </div>
    </>
  );
}
