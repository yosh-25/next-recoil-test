
import React from 'react'
import Link from "next/link";
import { useRecoilState} from 'recoil';
import { countState, userState} from '../../components/atoms';

const Home = () => {
  const [count, setCount] = useRecoilState(countState);
  const [user, setUser] = useRecoilState(userState);

  const increment = c => {
    return c + 1;
  }

  const updateUser = u => {
    return {...u, ...{ age: u.age + 1}};
  }

  return (
    <>
    <h1>Home</h1>
    <div>
      <p>count:{count}</p>
      <button onClick={()=> setCount(increment)}>count increment</button>
      <hr/>
      <p>user.name:{user.name}</p>
      <p suppressHydrationWarning={true} >user.age:{user.age}</p>
      <button onClick={()=> setUser(updateUser)} >age increment</button>
    </div>
    <hr/>
    <div>
      <Link href='/about'>About</Link>
    </div>
    </>
  );
}

export default Home;
