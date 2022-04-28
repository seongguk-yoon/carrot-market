import type { NextPage } from "next";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";
import Button from "../../components/button";

const Write: NextPage = () => {
  return (
    <Layout canGoBack title="Write Post">
    <form className="p-4 space-y-4">
      <TextArea required placeholder="무엇이든 질문해보십쇼!" />
      <Button text="제출" />
    </form>
  </Layout>
  );
};

export default Write;
