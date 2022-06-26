import type { NextPage } from "next";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import useMutation from '@libs/client/useMutation';
import { useEffect } from 'react';
import { Post } from '@prisma/client';
import { useRouter } from 'next/router';

interface WriteForm {
  question: string;
}
interface  WriteResponse {
  ok : boolean;
  post : Post
}

const Write: NextPage = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<WriteForm>();

  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
  const onValid = (data: WriteForm) => {
    if (loading) return;
    console.log(data)
    post(data);
  };

  
 

  useEffect(() =>{
    if(data && data?.ok){
     router.push(`/community/${data.post.id}`)
    }
  }, [data, router])

  return (
    <Layout canGoBack title="Write Post">
      <form onSubmit={handleSubmit(onValid)} className="p-4 space-y-4">
        <TextArea register={register('question', {required : true})} required placeholder="무엇이든 질문해보십쇼!" />
        <Button text={loading? "로딩중" : "제출"} />
      </form>
    </Layout>
  );
};

export default Write;
