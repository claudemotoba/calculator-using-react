import styled from 'styled-components'

const Container = styled.div`
   height: 100%;
   border: 0.5px solid #000;
   color: #fff;
`

const CustomButton = styled.button`
    border: none;
    font-size: 25px;
`

const Button = ({ label, customClass }) => {
    return(
        <Container className={customClass}>
            <CustomButton className="col-sm-12 h-100">
                {label}
            </CustomButton>
        </Container>
    )
}

export default Button