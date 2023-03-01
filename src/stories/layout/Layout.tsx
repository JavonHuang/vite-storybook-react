import { Col } from "./Col"
import { Row } from "./Row"
import './layout.scss'
export const Layout: React.FC<any> = (props) => { 
  
  return <>
    <Row>
      <Col span={8}><div>1</div></Col>
      <Col span={8} className="er-col-light"><div>2</div></Col>
      <Col span={8}><div>3</div></Col>
    </Row>
    <Row>
        <Col span={8}><div>1</div></Col>
        <Col span={4} offset={2} className="er-col-light"><div>2</div></Col>
        <Col span={4} offset={1}><div>3</div></Col>
    </Row>
    <Row gutter={10}>
      <Col span={8}><div>1</div></Col>
      <Col span={8} className="er-col-light"><div>2</div></Col>
      <Col span={8}><div>3</div></Col>
    </Row>
  </>
}