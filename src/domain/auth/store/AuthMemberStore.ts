import { create } from "zustand";
import { StoredMemberInfo } from "../type/StoredMemberInfo";
import axios from "axios";
import { API_PATH } from "@constant/ApiPath";

type AuthMemberStoreType = {
  storedMemberInfo?: StoredMemberInfo;
  signIn: (code: string) => Promise<boolean>;
  isSignIn: () => boolean;
  signOut: () => void;
};

export const useAuthMemberStore = create<AuthMemberStoreType>((set) => ({
  storedMemberInfo: undefined,
  signIn: async (code: string) => {
    const body = {
      code: code,
    };

    return axios
      .post(import.meta.env.VITE_BASE_URL + API_PATH.AUTH.SIGN_IN, 
      body, 
      {
        withCredentials: true
      })
      .then(function (response) {
        if (response.status == 200) {
            const storedMemberInfo: StoredMemberInfo = response.data;
            localStorage.setItem('MEMBER_INFO', JSON.stringify(storedMemberInfo));
            set({ storedMemberInfo: storedMemberInfo });
            
            return true;
        } else {
            throw new Error('Authentication failed');
        }
      })
      .catch(function (error) {
        alert('로그인에 실패했습니다. : ' + error.message);
        return false;
      });
    },
    isSignIn: () => {
      const storedMemberInfo = localStorage.getItem("MEMBER_INFO");

      if (storedMemberInfo) {
        set({ storedMemberInfo: JSON.parse(storedMemberInfo) });
        return true;
      } else {
        alert("로그인이 필요한 페이지 입니다.");
        return false;
      }
  },
  signOut: () => { 
    axios
      .delete(import.meta.env.VITE_BASE_URL + API_PATH.AUTH.SIGN_OUT,
      {
        withCredentials: true
      });
    
    localStorage.removeItem("MEMBER_INFO");
    set({ storedMemberInfo: undefined });
    
    alert('로그아웃 되었습니다.')
  }
}));
