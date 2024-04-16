interface IContainer {
  className?: string;
  children?: React.ReactNode;
}

const Container = ({ children, className }: IContainer) => {
  return <main id="gopeak" className={className}>{children}</main>;
};

export default Container;
