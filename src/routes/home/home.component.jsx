import { Outlet } from "react-router-dom";
import { useState } from "react";
import Directory from "../../components/directory/directory.component";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchBooks } from "../../store/books/book.reducer";

const Home = () => {
  const [books, setBooks] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/api/books")
  //     .then((response) => {
  //       console.log(response.data);
  //       return response.data;
  //     })
  //     .then((data) => setBooks(data.results))
  //     .catch((error) => console.log(error));
  // }, []);

  // useEffect(() => {
  //   axios.get("https://dummyjson.com/products").then((response) => {
  //     console.log(response.data);
  //     return response.data;
  //   }).then((data) => setBooks(data.products)).catch((error) => console.log(error))
  // },[])

  useEffect(() => {
    dispatch(fetchBooks());
  })

  return (
    <div>
      <Directory books={books} />
      <Outlet />
    </div>
  );
};

export default Home;
