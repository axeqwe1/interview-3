import Navbar from "./navbar";
import Footer from "./footer";
import Modal from "./modal-alert";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
export default function Products() {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);  // สถานะการแสดง Modal
    const [productName,setProductsName] = useState('')
    const openModalAndSaveNameProduct = (name) => {
        setIsModalOpen(true);
        setProductsName(name);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        // ใช้ axios เพื่อดึงข้อมูลจากไฟล์ JSON
        axios.get('/dummy-products-data.json') 
          .then((response) => {
            setProducts(response.data.products);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Error fetching products:', error);
            console.log(error)
            setLoading(false);
          });
          
      }, []);
    if (loading) {
        return <p>Loading products...</p>;
    }
  return (
    <div>
      <Navbar />
      <main className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl text-blue-400 font-bold mb-6 text-center">Our Products</h1>
          {/* ปรับ grid ถ้าใหญ่สุดให้แสดง 4 รายการต่อแถว size 1024px สแดงเป็น 3รายการ/แถว เล็กให้แสดงเป็น 1รายการ/แถว */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            {/* ใช้แสดงรายการสินค้าโดยกำหนด key เป็น productId */}
            {products.map((product) => (
                <div key={product.id} class="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-72">
                <div class="md:flex md:flex-col">
                    <div class="md:flex-shrink-0">
                        <img class="h-48 w-full object-cover" src="https://via.placeholder.com/300x200" alt="Image"/>
                    </div>
                    <div class="p-8">
                        <a href="#" onClick={() => openModalAndSaveNameProduct(product.name)} class="uppercase tracking-wide text-lg text-indigo-500 font-semibold hover:underline">{product.name}</a>
                        <p class="block mt-1 text-sm leading-tight font-medium text-black">{product.price} Bath</p>
                        <p class="mt-2 line-clamp-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ratione tenetur nesciunt ipsum odio doloribus nulla commodi non, distinctio aliquam nobis quam veniam soluta repudiandae corporis explicabo dolore placeat pariatur!.</p>
                        <div class="mt-4">
                            <button onClick={() => openModalAndSaveNameProduct(product.name)} class="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 focus:outline-none">Purchase</button>
                            <button onClick={() => openModalAndSaveNameProduct(product.name)} class="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 focus:outline-none ml-2">Add Cart</button>
                        </div>
                    </div>
                </div>
                </div>
             ))}
          </div>
        </div>
      </main>
      {/* Modal */}
      {isModalOpen && (
         <Modal closeModal={closeModal} ProductName={productName}/> // Components Modal Alert 
      )}
      <Footer />
    </div>
  );
}
