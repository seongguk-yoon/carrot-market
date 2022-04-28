import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="py-4 divide-y-[1px]">
        {[1, 2, 3, 4, 5, 6].map((_, i) => (
          <Link href={`/chats/$id`} key={i}>
            <a className="flex mb-3 px-4 py-3 items-center space-x-3  cursor-pointer">
              <div className=" px-4 w-10 h-10 rounded-full bg-slate-300" />
              <div>
                <p className="text-gray-700">동네아자씨</p>
                <p className="text-sm text-gray-500 ">
                  내일 2시 강남역에서 뵈요
                </p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
