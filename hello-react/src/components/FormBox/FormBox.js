import LeftSection from "../LeftSection/LeftSection";
import MiddleBar from "../MiddleBar/MiddleBar";
import RightSection from "../RightSection/RightSection";
import "./FormBox.css"



function FormBox() {

    return (

        <div className="Container">
            <LeftSection></LeftSection>
            <MiddleBar></MiddleBar>
            <RightSection></RightSection>
            
        </div>
        
    )
}

export default FormBox;