declare module "scroll-gondar-react" {
  interface IProps {
    onReachBottom?: () => void;
    onScrolledDis?: () => void;
    scrolledDis?: number;
    disToBottom?: number;
  }
  const Scroll: React.ComponentClass<IProps>;
  export = Scroll;
}
