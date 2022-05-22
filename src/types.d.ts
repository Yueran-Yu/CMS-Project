interface UserProps {
  id: number;
  name: string;
  email: string;
  title: string;
  personId: string;
  organization: string;
  token: string;
}

interface SearchPanelProps {
  users: UserProps[];
  param: Partial<Pick<ProjectProps, "name" | "personId">>;
  setParam: (param: SearchPanelProps["param"]) => void;
}

// TODO 把所有ID都改成number类型
interface ProjectProps {
  id: number;
  name: string;
  personId: number;
  pin: boolean;
  organization: string;
  created: number;
}

interface LoginRegisterProps {
  username: string;
  password: string;
}

interface ErrorProps {
  onError: (error: Error) => void;
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
