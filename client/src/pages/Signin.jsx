
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure} from '../redux/user/userSlice.js'
import OAuth from '../components/OAuth.jsx';


export default function Signin () {
  const [formData, setFormData]=useState({});
  const { loading, error} = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
//////////////////////////////
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
    const res = await fetch('/api/auth/signin',
    {
      method: 'POST',
      headers: {
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    });
    const data = await res.json();
    if(data.success == false){
      dispatch(signInFailure(data.message));
      return;
    }
    dispatch(signInSuccess(data));
    navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message));
    }};
    
  //////////////////////////////////
  return (
    <div className='p-3 max-w-lg mx-auto'> 
      <h1 className='text-3xl text-center font-semibold my-7'>Sign in</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4' action="">
        <input type="text" placeholder='email' className='border p-3 rounded-lg' id='email'onChange={handleChange}/>
        <input type="text" placeholder='password' className='border p-3 rounded-lg' id='password'onChange={handleChange}/>

        <button disabled={loading} className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-3.5 text-center me-2 mb-2 uppercase'>{loading ? 'loading...' : 'Sign in'}</button>
        <OAuth/>
      </form>
      <div className= "flex gap-2 mt-5">
        <p>Dont have an account ?</p>
        <Link to={"/signup"}>
        <span className='text-blue-700'>Sign up</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
