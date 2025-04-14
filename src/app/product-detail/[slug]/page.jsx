"use client";

import { useEffect, useState } from "react";
import RandomReviews from "../../../components/randomReviews";
import { getProductBySlug } from "../../../lib/api";
import { useParams, useRouter } from "next/navigation";
import BannerImage from "../../../../public/images/heroslide3.webp";
import Image from "next/image";
import OurGranteeShippingFaq from "../../../components/ourGranteeShippingFaq";
import ProductDetailImageSlider from "../../../components/productDetailImageSlider";
import Select from "react-select";
import Loader from "../../../components/loader";
import RelatedProducts from "../../../components/relatedProducts";
import ProductDescription from '../../../components/productDescription';

const options = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" },
  { value: "5", label: "5" },
];
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    borderColor: state.isFocused ? "#222222" : "#222222",
    boxShadow: state.isFocused ? "0 0 0 1pxrgba(25, 25, 25, 0.76)" : "none",
    borderRadius: "0.5rem",
    padding: "2px",
    "&:hover": {
      borderColor: "#222222",
    },
  }),
  menu: (provided) => ({
    ...provided,
    borderRadius: "0.5rem",
    marginTop: "4px",
    zIndex: 20,
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#E0E7FF" : "white",
    color: "#111827",
    padding: 10,
  }),
};
export default function ProductDetailPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOption, setSelectedOption] = useState("buyOne");
  console.log(product, "product detail page data");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const imageBaseUrl = process.env.NEXT_PUBLIC_IMAGE_BASE_URL;
  const getImageUrl = (imageObj) => {
    if (!imageObj || !imageObj.image) return "/placeholder.webp";
    return imageObj.image.startsWith("http")
      ? imageObj.image
      : `${imageBaseUrl}${imageObj.image}`;
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const data = await getProductBySlug(slug);
        if (!data) {
          router.push("/not-found");
          return;
        }
        setProduct(data.data);
      } catch (err) {
        console.error("Failed to fetch product:", err);
        router.push("/not-found");
      } finally {
        setLoading(false);
      }
    }

    if (slug) {
      fetchProduct();
    }
  }, [slug, router]);

  if (loading) {
    return <Loader />;
  }

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <>
      <div className="container px-4 md:px-6 xl:px-28 mx-auto pt-6 md:pt-12 pb-12">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="w-full md:w-[50%]">
            <ProductDetailImageSlider product={product} />
          </div>
          <div className="produt-detail-sec w-full md:w-[45%]">
            <div className="product-top-tag flex justify-center md:justify-end pb-3">
              <p className="text-[13px] md:text-lg uppercase font-[600] border-black border-2 py-1 px-3 w-fit">
                Hot product | few left in stock
              </p>
            </div>
            <RandomReviews />
            <h1 className="text-2xl md:text-3xl font-[600] pt-3">
              {product.name}
            </h1>
            <ul className="pt-2 md:pt-4">
              <li className="flex items-center mb-2">
                <p className="text-[14px]">
                  <b>Brand:</b> {product.brand}
                </p>
              </li>
              <li className="flex items-center mb-2">
                <p className="text-[14px]">
                  <b>Gender:</b> {product.gender}
                </p>
              </li>
            </ul>

            <div className="">
              <div className="bundlessave flex items-center justify-center my-4">
                <div className="w-full h-[2px] bg-black"></div>
                <p className="font-[600] w-full text-[14px] uppercase text-center px-2">
                  Prices
                </p>
                <div className="w-full h-[2px] bg-black"></div>
              </div>

              <div class="singlePrice mb-2 cursor-pointer flex items-center gap-2 py-1 md:py-3 px-2 rounded-xl border-[2px] transition-all duration-300 ease-in-out border-black bg-gray-100">
                <div class="checkbox w-fit">
                  <input
                    readonly=""
                    class="hidden"
                    type="radio"
                    checked=""
                    name="priceOption"
                  />
                  <div class="w-[15px] h-[15px] rounded-full bg-black"></div>
                </div>
                <div class="flex flex-col w-full border-l-[1px] md:border-l-0 pl-2 md:pl-0">
                  <div class="flex justify-between">
                    <p class="font-[600]">Price</p>
                    <p class="font-[600]">
                      {product.prices?.[0]?.sale_price} OMR
                    </p>
                  </div>
                  <div class="flex justify-end md:justify-between">
                    <p class="font-[300] text-[12px] md:text-[16px] hidden md:block">
                      + Free Shipping on orders over 15 OMR
                    </p>
                    <p class="font-[300] line-through">
                      {" "}
                      {product.prices?.[0]?.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <button onClick={openModal} className="w-full cursor-pointer hover:scale-[1.05] tarnsition-all duration-[0.3s] easi-in-out py-3 text-md md:text-xl px-4 rounded-lg bg-black text-white font-[500] mt-3">
              Buy with Cash on Delivery
            </button>

            <div>
              <OurGranteeShippingFaq />
            </div>
          </div>
        </div>
        <div className="product-description pt-8 w-full lg:w-[75%] mx-auto">
          <h2 className="text-center text-2xl md:text-3xl font-[600]">
            Description
          </h2>
          <ProductDescription description={product.description} />
        </div>
      </div>

      <div className="pb-12">
        <RelatedProducts />
      </div>


      {isModalOpen && (
        <div className="fixed inset-0 bg-opacity-50 flex items-center justify-center z-[9999999999] shadow-lg p-4 bg-gray-900/85 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in">
          <div className="bg-white rounded-lg max-w-lg w-full p-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold">Cash on Delivery</h2>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-700 cursor-pointer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-4 border-t-[1px] border-t-gray-300 pt-3 flex">
              <Image
                className="w-[70px] h-[70px] object-cover block rounded-xl mr-2"
                src={getImageUrl(product.images?.[0])}
                alt={product.name}
                width={100}
                height={100}
              />
              <p className="font-semibold">{product.name}</p>

            </div>
            <div className="bg-gray-100 p-3 rounded-md mb-4">
              <div className="flex justify-between">
                <p className="text-[17px]">Quantity :</p>
                <p className="font-[600]">1</p>
              </div>
              <div className="flex justify-between">
                <p className="text-[17px]">Price :</p>
                <p className="font-[600]"> {product.prices?.[0]?.sale_price} OMR</p>
              </div>
              <div className="flex justify-between">
                <p className="">Subtotal:</p>
                <p className="font-[600]"> {product.prices?.[0]?.sale_price} OMR</p>
              </div>
              <div className="flex justify-between">
                <p className="">Free Shipping:</p>
                <p className="font-[600]">Free</p>
              </div>
              <div className="flex justify-between border-t-[1px] border-t-gray-300 pt-2 mt-2">
                <p className="font-[600]">Grand Total:</p>
                <p className="font-[600]">{product.prices?.[0]?.sale_price}</p>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="Your phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address
                </label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows={3}
                  placeholder="Your complete delivery address"
                  required
                />
              </div>

              <div className="flex justify-center space-x-3 pt-2">
                <button
                  type="submit"
                  className="px-4 py-2 cursor-pointer w-full bg-black text-white rounded-md hover:bg-gray-800"
                >
                  Order Now
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
