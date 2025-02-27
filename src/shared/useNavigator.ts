import { useNavigate } from 'react-router';

export const useNavigator = () => {
  const navigate = useNavigate();
  return {
    toSignUpPage: () => void navigate('/sign-up'),
  };
};
