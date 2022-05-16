interface UserProps {
  id: string;
  name: string;
  email: string;
  title: string;
  personId: string;
  organization: string;
  token: string;
}

interface ParamProps {
  name: string;
  personId: string;
}

interface SearchPanelProps {
  users: UserProps[];
  param: ParamProps;
  setParam: React.Dispatch<React.SetStateAction<ParamProps>>;
}

interface ProjectProps {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface LoginRegisterProps {
  username: string;
  password: string;
}

interface AuthContextProps {
  user: UserProps | null;
  login: (form: LoginRegisterProps) => Promise<void>;
  register: (form: LoginRegisterProps) => Promise<void>;
  logout: () => Promise<void>;
}

interface Config extends RequestInit {
  data?: object;
  token?: string;
}

interface AsyncState<D> {
  error: Error | null;
  data: D | null;
  stat: "idle" | "loading" | "error" | "success";
}
