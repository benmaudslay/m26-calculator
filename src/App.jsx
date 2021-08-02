import styled from "styled-components"
import buttons from "./buttons.json"

const App = () => {
  return (
    <div>
      <div className="screen-wrapper"><h1>0</h1></div>
      <ButtonWrapper>
        {buttons.map((item) => (
          <StyledButton className={item.style} mathValue={item.value} >{item.displayValue}</StyledButton>
        ))}
      </ButtonWrapper>
    </div>
  )
}

const ButtonWrapper = styled.div`
  height: 250px;
  width: 200px;
  display: grid;
  grid-template-areas: 
    "clear clear clear ." 
    ". . . ." 
    ". . . ." 
    ". . . ." 
    "zero zero . .";

  .clear {
    grid-area: clear;
  }

  .zero {
    grid-area: zero;
  }
`

const StyledButton = styled.button`
  /* height: 40px;
  width: 40px;
  margin: 10px */
  /* border-radius: 0; */
`

export default App;
