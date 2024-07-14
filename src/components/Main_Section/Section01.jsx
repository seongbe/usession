import React from 'react'
import { ImageDiv, MainWrap, S01Text, Section01Content, Section01Wrap } from './Section01.styled'
import sec1 from '../../assets/img/title.svg';


const Section01 = () => {
    return (
        <MainWrap>
            <Section01Wrap>
                <Section01Content>
                    <ImageDiv className="Img01" src={sec1}></ImageDiv>
                </Section01Content>
            </Section01Wrap>
        </MainWrap>
    )
}

export default Section01