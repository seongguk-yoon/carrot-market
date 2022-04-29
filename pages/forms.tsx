import { useState } from "react";
import { FieldErrors, useForm } from "react-hook-form";

export default function Froms() {
  // React Hook Form를 써보자
  // 보다 나은 from Validatin,  Error 체크를 ~
  // Input Clear, setevent, disploy, Input Control
  // 이벤트를 신경쓰고싶지않고, 코드반복성을 줄이고 싶어 .. 또한 쉽게 ..

  // register input 과 state를 연결해줌
  // handleSubmit

  interface LoginForm {
    name: string;
    email: string;
    password: string;
    errors?: string;
  }

  const {
    register,
    watch,
    handleSubmit,
    setError,
    setValue,
    reset,
    resetField,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });
  // 유효성 체크 props
  const onValid = (data: LoginForm) => {
    console.log("유효성 체크중~");
    resetField("email");
    // setError("name", { message: "이미 아이디가 있어요" });
  };
  // 에러 체크 props
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };
  console.log(errors);
  return (
    <form
      className=" flex  flex-col py-2 my-2  divide-y-3  m"
      onSubmit={handleSubmit(onValid, onInvalid)}
    >
      <input
        {...register("name", {
          required: "이름은 없음",
          minLength: { message: "이름은 5자이상으로 입력해주세요", value: 5 },
        })}
        type="text"
        placeholder="UserName"
        className=" mb-4"
      />
      {errors.name?.message}
      <input
        {...register("email", {
          required: "이메일 없음",
          validate: {
            notgmail: (value) =>
              !value.includes("@gmail.com") || "구글은 사용하지마십쇼",
          },
        })}
        type="email"
        placeholder="Email"
        className={`${
          Boolean(errors.email?.message)
            ? " border-red-600 border-2 mb-4"
            : "mb-4"
        }`}
      />
      {errors.email?.message}
      <input
        {...register("password", { required: "비밀번호 없음" })}
        type="password"
        placeholder="Password"
        className=" mb-10"
      />
      <input type="submit" value="Create" className="bg-slate-300" />
      {errors.errors?.message}
    </form>
  );
}

//AS-IS
{
  /*
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [formErrors, setFormErrors] = useState("");
  const [EmailErrors, setEamilErrors] = useState("");

  const onUsernameChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEamilErrors("");
    setUsername(value);
  };
  const onEmailChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setEmail(value);
  };
  const onPasswordChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setPassword(value);
  };

  const onSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(username, email, password);
    if (username === "" || email === "" || password === "") {
      setFormErrors("정상적입니다");
    }
    if (!email.includes("@")) {
      setEamilErrors("냐옹");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        value={username}
        onChange={onUsernameChange}
        type="text"
        placeholder="UserName"
        required
        minLength={5}
      />
      <input
        value={email}
        onChange={onEmailChange}
        type="email"
        placeholder="Email"
        required
      />
      {EmailErrors}
      <input
        value={password}
        onChange={onPasswordChange}
        type="password"
        placeholder="Password"
        required
      />
      <input type="submit" value="Create " />
    </form>
  );
}
*/
}
