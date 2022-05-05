import { ReactNode, VFC } from 'react';

type Props = {
  children: ReactNode;
};

const Button: VFC<Props> = ({ children }) => (
  <button type="button">{children}</button>
);

export default Button;
