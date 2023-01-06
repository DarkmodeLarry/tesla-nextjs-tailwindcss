import { useCycle } from 'framer-motion'
import Header from '../components/Header'
import Section from '../components/Section'
import Sidebar from '../components/Sidebar'
import { productsList } from './../utils/productsList'

const Index = (props) => {
  const [open, cycleOpen] = useCycle(false, true)

  return (
    <>
      <Header open={open} cycleOpen={cycleOpen} />
      <div>
        {open && <Sidebar open={open} cycleOpen={cycleOpen} />}
        {props.productsList.map((product) => (
          <Section key={product.id} {...product} />
        ))}
      </div>
    </>
  )
}

export default Index

export const getStaticProps = async () => {
  return {
    props: {
      productsList
    }
  }
}
