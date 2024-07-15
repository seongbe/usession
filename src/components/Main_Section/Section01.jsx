import React from 'react'
import * as S from './Section01.styled'
import sec1 from '../../assets/img/title.svg';

const Section01 = () => {
    return (
        <S.MainWrap>
            <S.Section01Wrap>
                <S.Section01Content>
                    <S.ImageDiv className="Img01" src={sec1}></S.ImageDiv>
                </S.Section01Content>
            </S.Section01Wrap>
        </S.MainWrap>
    )
}

export default Section01