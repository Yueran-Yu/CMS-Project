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

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
  created: number;
}

interface ListProps {
  projects: Project[];
  users: User[];
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
