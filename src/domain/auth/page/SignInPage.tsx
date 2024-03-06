export default function SignInPage() {
  function goToGithub() {
    const url = import.meta.env.VITE_OAUTH_SIGNIN_URL;
    window.location.href = url;
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="card w-96 bg-base-200 flex justify-center items-center">
        <button className="btn btn-neutral btn-wide" onClick={goToGithub}>
          Github SignIn
        </button>
      </div>
    </div>
  );
}
