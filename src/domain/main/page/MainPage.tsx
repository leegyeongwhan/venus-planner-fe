import { useAuthMemberStore } from "@domain/auth/store/AuthMemberStore";

export default function MainPage() {

  const { storedMemberInfo } = useAuthMemberStore();

  return (
    <>
      <div>
        <h1>{storedMemberInfo?.nickName}</h1>
        <h1>{storedMemberInfo?.email}</h1>
        <h1>{storedMemberInfo?.profileUrl}</h1>
      </div>
    </>
  );
}
