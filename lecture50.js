import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/login", element: <LoginScreen />,
  },
]);

constApp = () =>{
  return <RouterProvider router={router} />
}

export default App;

const LoginScreen = ()=>{
  return <h1>Login</h1>
};

export default LoginScreen;

const [credentials, setCredentials] = useState({email:"",password:""});  

const credentialsValidator = ({email, password})=>{
  if(isEmail(email) && password?.length >= 8){
    return true;
  }
  return false;
};

const handleChange = (e) =>{
  setCredentials({...credentials,[e.target.name: e.target.value]});
}

const handleSubmit = async(e) =>{
  e.preventDefault();
  if(!credentialsValidator(credentials)){
    return;
  }
  await LoginUserApi({...credentials});
}

export axios from "axios"
export const TaskApplicationBackend = axios.create({
  baseURL: "http://localhost:8080",
});

TaskApplicationBackend.interceptors.request.use((config)=>{
  console.log("Run this configuration");
  console.log(config);
},(error)=>{
  return Promise.reject(error);
});


export const LoginUserApi = async ({email,password})=>{const {data} = await TaskApplicationBackend.post("/user/login",{email, password});return data};

export const LoginUser = async({email, password})=>{
  const {token} = await loginUserApi({email,password});
  localStorage.setItem("token",token);
};

export const getUserToken = ()=>{
  return localStorage.getItem("token");
};
