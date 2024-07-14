import React from 'react'
import { ImageDiv, Section01Content, Section01Wrap } from './Section01.styled'
import sec1 from '../../assets/img/section_1.png';
import sec2 from '../../assets/img/section_2.png';
import sec3 from '../../assets/img/section_3.png';
import sec4 from '../../assets/img/section_4.png';

const Section01 = () => {
    return (
        <Section01Wrap>
            <Section01Content>
                <p>POSSIBILITY</p>
                <ImageDiv className="Img01" src= {sec1}></ImageDiv>
            </Section01Content>
            <Section01Content>
                <ImageDiv className="Img02" src= {sec2}></ImageDiv>
                <p>TO</p>
                <ImageDiv className="Img03" src= {sec3}></ImageDiv>
            </Section01Content>
            <Section01Content>
                <p>REALITY</p>
                <ImageDiv className="Img04" src= {sec4}></ImageDiv>
            </Section01Content>
        </Section01Wrap>
    )
}

export default Section01