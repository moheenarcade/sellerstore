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
import NewProductsListing from "../../../components/homePage/newProductsListing";
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
    borderColor: state.isFocused ? "#222222" : "#222222", // custom border color (e.g., indigo-600 when focused, gray-300 otherwise)
    boxShadow: state.isFocused ? "0 0 0 1pxrgba(25, 25, 25, 0.76)" : "none", // custom focus outline
    borderRadius: "0.5rem", // rounded-xl
    padding: "2px", // optional
    "&:hover": {
      borderColor: "#222222", // border color on hover
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
    backgroundColor: state.isFocused ? "#E0E7FF" : "white", // e.g., indigo-100 on hover
    color: "#111827", // text-gray-900
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
            {/* 
          <div className="qty-select md:pt-3 pb-6">
            <label htmlFor="selectqty" class="text-sm md:text-lg font-[600]">
              Select Quantity
            </label>

            <Select
              inputId="selectqty"
              options={options}
              styles={customStyles}
              className="mt-2"
            />
          </div> */}

            {/* <div className="bundlessave flex items-center justify-center my-4">
            <div className="w-full h-[2px] bg-black"></div>
            <p className="font-[600] w-full text-[14px] uppercase text-center px-2">
              Bundle & Save!
            </p>
            <div className="w-full h-[2px] bg-black"></div>
          </div>

          <div className="product-detail-price pt-3">
            <div
              onClick={() => setSelectedOption("buyOne")}
              className={`singlePrice mb-2 cursor-pointer flex items-center gap-2 py-3 px-2 rounded-xl border-[2px] transition-all duration-300 ease-in-out ${
                selectedOption === "buyOne"
                  ? "border-black bg-gray-100"
                  : "border-gray-300 hover:border-black hover:bg-gray-100"
              }`}
            >
              <div className="checkbox w-fit">
                <input
                  type="radio"
                  name="priceOption"
                  checked={selectedOption === "buyOne"}
                  readOnly
                  className="hidden"
                />
                <div
                  className={`w-[15px] h-[15px] rounded-full ${
                    selectedOption === "buyOne" ? "bg-black" : "bg-gray-300"
                  }`}
                ></div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="font-[600]">Buy One</p>
                  <p className="font-[600]">OMR 99</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-[300]">+ Free Shipping</p>
                  <p className="font-[300] line-through">OMR 130</p>
                </div>
              </div>
            </div>

            <div
              onClick={() => setSelectedOption("buyTwo")}
              className={`singlePrice mb-2 cursor-pointer flex items-center gap-2 py-3 px-2 rounded-xl border-[2px] transition-all duration-300 ease-in-out ${
                selectedOption === "buyTwo"
                  ? "border-black bg-gray-100"
                  : "border-gray-300 hover:border-black hover:bg-gray-100"
              }`}
            >
              <div className="checkbox w-fit">
                <input
                  type="radio"
                  name="priceOption"
                  checked={selectedOption === "buyTwo"}
                  readOnly
                  className="hidden"
                />
                <div
                  className={`w-[15px] h-[15px] rounded-full ${
                    selectedOption === "buyTwo" ? "bg-black" : "bg-gray-300"
                  }`}
                ></div>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex justify-between">
                  <p className="font-[600]">Buy Two Get 1 Free</p>
                  <p className="font-[600]">OMR 199</p>
                </div>
                <div className="flex justify-between">
                  <p className="font-[300]">+ Free Shipping</p>
                  <p className="font-[300] line-through">OMR 230</p>
                </div>
              </div>
            </div>
          </div> */}

            <button className="w-full cursor-pointer hover:scale-[1.05] tarnsition-all duration-[0.3s] easi-in-out py-3 text-md md:text-xl px-4 rounded-lg bg-black text-white font-[500] mt-3">
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
          <p className="text-center mt-2">
            {" "}
            {product.description?.replace(/<[^>]+>/g, "").trim()}
          </p>
        </div>
      </div>

      <div className="pb-12">
        <NewProductsListing />
      </div>
    </>
  );
}
