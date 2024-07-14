import React from 'react';
import * as S from './Footer.styled';

import FooterLeft from './FooterLeft';
import FooterRight from './FooterRight';

const Footer = () => {
  return (
    <S.Layout>
      <FooterLeft />
      <FooterRight />
    </S.Layout>
  );
};

export default Footer;
