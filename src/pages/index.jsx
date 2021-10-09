import styled from 'styled-components'
import Button from '../components/button'

const Container = styled.div`
    height: 100vh;
`

const LineCalculator = styled.div`
    height: 16%;
`
const ViewOperation = styled.div`
    height: 20%;
    text-align: end;
    padding: 3% 2%;
    font-size: 45px;
    p{
        margin-bottom: 0;
    }
`

const Home = () => {
    return(
        <Container>

            <ViewOperation className="h-20">
                <p>
                0
                </p>
            </ViewOperation>

            <LineCalculator className="col-sm-12 d-flex">
                <Button label="C" customClass="col-sm-3"/>
                <Button label="+/-" customClass="col-sm-3"/>
                <Button label="%" customClass="col-sm-3"/>
                <Button label="÷" customClass="col-sm-3"/>
            </LineCalculator>

            <LineCalculator className="col-sm-12 d-flex">
                <Button label="7" customClass="col-sm-3"/>
                <Button label="8" customClass="col-sm-3"/>
                <Button label="9" customClass="col-sm-3"/>
                <Button label="x" customClass="col-sm-3"/>
            </LineCalculator>
            
            <LineCalculator className="col-sm-12 d-flex">
                <Button label="4" customClass="col-sm-3"/>
                <Button label="5" customClass="col-sm-3"/>
                <Button label="6" customClass="col-sm-3"/>
                <Button label="-" customClass="col-sm-3"/>
            </LineCalculator>

            <LineCalculator className="col-sm-12 d-flex">
                <Button label="1" customClass="col-sm-3"/>
                <Button label="2" customClass="col-sm-3"/>
                <Button label="3" customClass="col-sm-3"/>
                <Button label="+" customClass="col-sm-3"/>
            </LineCalculator>

            <LineCalculator className="col-sm-12 d-flex">
                <Button label="0" customClass="col-sm-6"/>
                <Button label="." customClass="col-sm-3"/>
                <Button label="=" customClass="col-sm-3"/>
            </LineCalculator>

        </Container>
    )
}

export default Home