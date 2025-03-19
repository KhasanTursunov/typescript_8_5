import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { IBook } from '../../types';
import { createBook } from '../../redux/features/book.slice';
import Book3 from '../../assets/svg/ShowcaseImg.svg'

const CreateBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<IBook>({
    title: '',
    desc: '',
    price: 1,
    discount: 1,
    author: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'price' || name === 'discount' ? Number(value) : value,
    }));
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(createBook(formData));
    setFormData({
      title: '',
      desc: '',
      price: 0,
      discount: 0,
      author: '',
    });
    navigate('/books');
  };

  return (
    <div className="py-[100px] min-h-screen bg-[#86C8E8] text-white flex items-center justify-center image gap-20">
      <div>
        <img src={Book3} alt="" />
      </div>

      <div className="max-w-lg w-full bg-[#f5eded] p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-6">
          Create New Book
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-md  text-[#86C8E8] text-xl mb-2 font-medium">
              Title
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter book title"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#82C5E1] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-md  text-[#86C8E8] text-xl mb-2 font-medium">
              Description
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                required
                placeholder="Description for book (not required)"
                className="w-full px-4 py-3 rounded-lg bg-[#82C5E1] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-md  text-[#86C8E8] text-xl mb-2 font-medium">
              Price
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                required
                className="w-full px-4 py-3 rounded-lg bg-[#82C5E1] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-md  text-[#86C8E8] text-xl mb-2 font-medium">
              Discount
              <input
                type="number"
                name="discount"
                value={formData.discount}
                onChange={handleChange}
                placeholder="Discount percentage (not required)"
                className="w-full px-4 py-3 rounded-lg bg-[#82C5E1] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <div>
            <label className="block text-md  text-[#86C8E8] text-xl mb-2 font-medium">
              Author
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Author's name"
                className="w-full px-4 py-3 rounded-lg bg-[#82C5E1] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-3 bg-cyan-700 text-white font-bold rounded-lg hover:bg-cyan-300 transition duration-300"
          >
            Create Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default React.memo(CreateBook);