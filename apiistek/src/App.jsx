import axios from "axios";
import "./App.css";
import { useEffect,  useState } from "react";
const baseURL = "http://localhost:3000";

function App() {
  const [user, setUser] = useState(null);

  const getAllUsers = async () => {
    const response = await axios.get(baseURL + "/users");
    console.log(response);
  };

  const getUserById = async (userid) => {
    const response = await axios.get(`${baseURL}/users/${userid}`);
    setUser(response.data);
  }
 //? yeni user ekleme
  const createUser = async (newUser) => {
    const response = await axios.post(`${baseURL}/users`, newUser);
    console.log("response", response.data);
  };

  //* Kullanıcı güncelleme 

  const updateUser = async (userId, updateUser) => {
    try {
      await axios.put(`${baseURL}/users/${userId}`, updateUser);
      console.log("Kullanıcı başarıyla güncellendi");
    } catch (error) {
      console.error("Kullanıcı güncellenirken hata oluştu:", error);
    }
  }

  const deleteUserById = async (userId) =>{
    await axios.delete(`${baseURL}/users${userId}`)
  }

  useEffect(() => {
   // getAllUsers();
    // getUserById();
   /* const newUser = {
      name: "begüm",
      password: "123456"
    };
    createUser(newUser);*/


    updateUser("4",{
      "username":"batu",
      "password":"654321"
    })
  }, []);

  return (
    <div>
      
    </div>
  );
}

export default App;
