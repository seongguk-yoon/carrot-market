import { NextPage } from "next";
import Button from "../../components/button";
import Input from "../../components/input";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";

const Create: NextPage = () => {
  return (
    <Layout canGoBack title="라이브 열기">
      <form className=" space-y-4 py-10 px-4">
        <Input required label="상품명" name="name" type="text" />
        <Input
          required
          label="금액"
          placeholder="천원이상 등록가능합니다"
          name="price"
          type="text"
          kind="price"
        />
        <TextArea name="description" label="상품상세정보" />
        <Button text="라이브 열기" />
      </form>
    </Layout>
  );
};

export default Create;
