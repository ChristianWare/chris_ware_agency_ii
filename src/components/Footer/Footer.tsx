import ContentPadding from '../Layout/ContentPadding/ContentPadding'
import LayoutWrapper from '../Layout/LayoutWrapper'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    
    <div className={styles.container}>
        <LayoutWrapper>
            <ContentPadding>
                <h2>Yo</h2>
            </ContentPadding>
        </LayoutWrapper>
    </div>
  )
}
export default Footer