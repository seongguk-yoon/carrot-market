import type { NextPage } from "next";
import Layout from "../../components/layout";
import TextArea from "../../components/textarea";
import Button from "../../components/button";
import { useForm } from "react-hook-form";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { Post } from "@prisma/client";
import { useRouter } from "next/router";
import UseCoords from '@libs/client/useCoords';

interface WriteForm {
  question: string;
}
interface WriteResponse {
  ok: boolean;
  post: Post;
}

const Write: NextPage = () => {
  const {latitude, longitude} = UseCoords();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
  } = useForm<WriteForm>({ mode: "onChange" });

  const question = watch('question')

  console.log(errors);

  const [post, { loading, data }] = useMutation<WriteResponse>("/api/posts");
  const onValid = (data: WriteForm) => {
    if (loading) return;
    console.log(data);
    post({...data, latitude, longitude});
  };

  useEffect(() => {
    if (data && data?.ok) {
      router.push(`/community/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout canGoBack title="Write Post">
      <form onSubmit={handleSubmit(onValid)} className="p-4 space-y-4">
        <TextArea
          register={register("question", {
            required: true,
            minLength: { value: 5, message: "5자이상입력하세요" },
          })}
          placeholder="무엇이든 질문해보십쇼!"
        />
        <p className='text-[15px] text-red-400'>{errors?.question?.message}</p>
        {question && !errors?.question ? (
          <Button type="text"  text={loading ? "로딩중" : "제출"} />
        ) : (
          <Button gray text={loading ? "로딩중" : "제출"} />
        )}

      </form>
    </Layout>
  );
};

export default Write;
