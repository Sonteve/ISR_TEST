import axios from "axios";

const ItemDetail = ({ productInfo }) => {
  if (!productInfo) return null;

  const { id, title, content } = productInfo;
  return (
    <div className="divide-y divide-[#f0f] bg-test">
      <h1>상품 상세 페이지 입니다</h1>
      <div key={id} className="py-[10px] px-[10px] flex">
        <div>{title}</div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default ItemDetail;

export const getStaticPaths = async () => {
  const paths = await axios.get("http://localhost:3030/products_path");

  return {
    paths:
      paths?.data.map((e) => ({
        params: {
          id: String(e),
        },
      })) ?? [],
    fallback: true,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await axios.get(
    `http://localhost:3030/product/${params?.id}`
  );

  if (!product.data) {
    return {
      redirect: {
        destination: "/404",
      },
    };
  }

  return {
    props: {
      productInfo: product?.data ?? [],
    },
    revalidate: 5,
  };
};
