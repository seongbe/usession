import React from 'react'
import Img01 from '../../assets/img/section03_1.png'
import Img02 from '../../assets/img/section03_2.png'
import Img03 from '../../assets/img/section03_3.png'
import { Section03Content, Section03Wrap } from './Section03.styled'

const Section03 = () => {
    return (
        <Section03Wrap>
            <Section03Content>
                <img src={Img01} alt="Img01" />
                <div className='right text-container' >
                    <p className='tage'>VISION</p>
                    <h2>
                        IT 교육 기회를 제공하여<br />
                        꿈꾸던 가능성을 열어준다.
                    </h2>
                    <p className='english'>
                        Open up the possibility of dreaming by providing<br />
                        IT education opportunities.
                    </p>
                </div>
            </Section03Content>
            <Section03Content>
                <div className='right text-container'>
                    <p className='tage'>VISION</p>
                    <h2>
                        IT 기술로 IT 교육의 문제를<br />
                        해결한다.
                    </h2>
                    <p className='english'>
                        Solve IT education problems using IT<br />
                        technology.
                    </p>
                </div>
                <img src={Img02} alt="Img02" />
            </Section03Content>
            <Section03Content>
                <img src={Img03} alt="Img03" />
                <div className='right text-container'>
                    <p className='tage'>VISION</p>
                    <h2>
                        지속 성장이 가능한 IT<br />
                        커뮤니티를 구축한다.
                    </h2>
                    <p className='english'>
                        Establish an IT community that can sustain<br />
                        growth.
                    </p>
                </div>
            </Section03Content>
        </Section03Wrap>
    )
}

export default Section03