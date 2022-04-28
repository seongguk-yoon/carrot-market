import type { NextPage } from "next";
import Layout from "../../components/layout";
import Item from "../../components/item";

const Sold: NextPage = () => {
  return (
    <Layout title="판매 목록" canGoBack>
      <div className=" flex flex-col space-y-3 py-10 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1].map((_, i) => (
          <Item
            key={i}
            id={i}
            title="아이폰 14"
            hearts={2}
            price={200000}
            comments={2}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Sold;
