module.exports = {
  content: [
    // tailwind  전역설정  ** 모든파일  *. 확장자   머듈에 설정을 해주면, css 적용이 가능하다. 
    "./pages/**/*.{js,jsx,ts,tsx}", 
    "./components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


