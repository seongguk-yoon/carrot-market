import type { NextPage } from "next";
import Layout from "../../components/layout";
import Item from "../../components/item";

const Love: NextPage = () => {
  return (
    <Layout title="관심 목록" canGoBack>
      <div className=" flex flex-col space-y-3 py-10 divide-y">
        {[1, 1, 1, 1, 1, 1, 1, , 1, 1, 1].map((_, i) => (
          <Item
            title="아이폰14"
            id={i}
            key={i}
            price={200000}
            comments={1}
            hearts={1}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Love;
