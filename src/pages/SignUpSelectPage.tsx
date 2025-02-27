import { ICON_SRC } from '@/entities/asset';
import { useNavigator } from '@/shared/useNavigator';

export const SignUpSelectPage = () => {
  const { toSignUpPage } = useNavigator();

  return (
    <div className="flex flex-col min-h-screen bg-grey-light pt-[357px] pb-[358px]">
      <div className="max-w-fit mx-auto pt-[40px] px-[34px] pb-[30px] gap-[10px] rounded-[20px] bg-[#FFFFFF] flex flex-col items-center">
        <div className="w-[360px] gap-[46px] flex flex-col">
          <p className="w-full font-bold text-[22px] leading-[33px] tracking-[0%] text-center text-grey-darker">
            회원가입
          </p>
          <div className="w-full gap-[46px] flex flex-col">
            <div className="w-full gap-[10px] flex flex-col">
              <div className="w-full h-[42px] rounded-[8px] border-[1px] gap-[10px] bg-[#FFFFFF] border-[#7F8794] flex items-center justify-center">
                <div className="gap-[10px] flex items-center justify-center">
                  <img
                    src={ICON_SRC.GOOGLE}
                    alt="google login"
                    className="w-[26px] h-[26px]"
                  />
                  <p className="font-semibold text-[14px] leading-[19.6px] tracking-[0%] text-center">
                    구글 계정으로 간편 회원가입
                  </p>
                </div>
              </div>
              <div className="w-full h-[42px] rounded-[8px] border-[1px] gap-[10px] bg-grey-dark-active flex justify-center items-center">
                <p
                  className="w-full text-[14px] font-semibold leading-[19.6px] tracking-[0%] text-center"
                  onClick={toSignUpPage}
                >
                  일반 회원가입
                </p>
              </div>
            </div>
            <div className="gap-[12px] flex justify-center">
              <p>이미 계정이 있으신가요?</p>
              <p>로그인</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
