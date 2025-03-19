import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/"; 
import { deleteBook, updateBook } from "../../redux/features/book.slice";
import { IBook } from "../../types";
import ImageBook from '../../assets/svg/book.svg'
import ShowcaseImg from "../../assets/svg/ShowcaseImg.svg";
import Book2 from "../../assets/svg/book2.svg";

const Books = () => {
  const books = useSelector((state: RootState) => state.bookcrudReducer.value); 
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState<IBook>({
    title: "",
    desc: "",
    price: 0,
    discount: 0,
    author: "",
  });

  const handleDelete = (index: number) => {
    dispatch(deleteBook(index));
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditFormData(books[index]);
  };

  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      dispatch(updateBook({ index: editIndex, updatedBook: editFormData }));
      setEditIndex(null);
    }
  };

  return (
    <div className="min-h-screen bg-[#86C8E8] text-white flex flex-col items-center py-8">
      <h1 className="text-4xl font-bold text-pink-500 mb-8">
        Let's create books
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
        {books?.length > 0 ? (
          books.map((book, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-cyan-400 transition-shadow duration-300"
            >
              {editIndex === index ? (
                <form onSubmit={handleEditSubmit}>
                  <input
                    type="text"
                    name="title"
                    value={editFormData.title}
                    onChange={handleEditChange}
                    placeholder="Title"
                    className="w-full px-2 py-1 mb-2  outline-0 bg-[#337595] text-white  rounded-lg"
                  />
                  <input
                    type="text"
                    name="desc"
                    value={editFormData.desc}
                    onChange={handleEditChange}
                    placeholder="Description"
                    className="w-full px-2 py-1 mb-2  outline-0 bg-[#337595] text-white  rounded-lg"
                  />
                  <input
                    type="number"
                    name="price"
                    value={editFormData.price}
                    onChange={handleEditChange}
                    placeholder="Price"
                    className="w-full px-2 py-1 mb-2  outline-0 bg-[#337595] text-white  rounded-lg"
                  />
                  <input
                    type="number"
                    name="discount"
                    value={editFormData.discount}
                    onChange={handleEditChange}
                    placeholder="Discount"
                    className="w-full px-2 py-1 mb-2  outline-0 bg-[#337595] text-white  rounded-lg"
                  />
                  <input
                    type="text"
                    name="author"
                    value={editFormData.author}
                    onChange={handleEditChange}
                    placeholder="Author"
                    className="w-full px-2 py-1 mb-2  outline-0 bg-[#337595] text-white  rounded-lg"
                  />
                  <button
                    type="submit"
                    className="w-full py-2 bg-cyan-400 text-white rounded-lg font-bold hover:bg-cyan-300"
                  >
                    Save
                  </button>
                </form>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#3ea9de] mb-2">
                    {book.title}
                  </h2>
                  <p className="text-[#86C8E8] text-xl mb-2 font-medium">
                    <span className="text-[#266d90] text-2xl mb-2 font-bold">
                      Description:{" "}
                    </span>
                    {book.desc}
                  </p>
                  <p className="text-[#86C8E8] text-xl mb-2 font-medium">
                    <span className="text-[#266d90] text-2xl mb-2 font-bold">
                      Price:{" "}
                    </span>
                    {book.price}
                  </p>
                  <p className="text-[#86C8E8] text-xl mb-2 font-medium">
                    <span className="text-[#266d90] text-2xl mb-2 font-bold">
                      Discount:{" "}
                    </span>
                    {book.discount}
                  </p>
                  <p className="text-[#86C8E8] text-xl mb-2 font-medium">
                    <span className="text-[#266d90] text-2xl mb-2 font-bold">
                      {" "}
                      Author:
                    </span>
                    {book.author}
                  </p>
                  <div className="flex justify-end gap-2 mt-4">
                    <button
                      onClick={() => handleEdit(index)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(index)}
                      className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-400"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <div className="flex gap-24 items-center">
            <img src={ImageBook} alt="" />
            <img src={ShowcaseImg} alt="" />
            <img src={Book2} alt="" />
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Books);
