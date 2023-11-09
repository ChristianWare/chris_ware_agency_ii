import styles from './LayoutWrapper.module.css'

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.layout}>LayoutWrapper</div>;
};
export default LayoutWrapper