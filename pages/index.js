import axios from "axios";
import Link from "next/link";

export const getStaticProps = async () => {
  const products = await axios.get("http://localhost:3030/products");
  return {
    props: {
      products: products.data,
    },
    revalidate: 5,
  };
};

export default function Home({ products }) {
  return (
    <div className="divide-y divide-[#f0f] bg-test">
      {products?.map((e) => (
        <Link key={e.id} href={`/detail/${e.id}`}>
          <a>
            <div className="py-[10px] px-[10px] flex">
              <div>{e.title}</div>
              <div>{e.content}</div>
            </div>
          </a>
        </Link>
      ))}
    </div>
  );
}
