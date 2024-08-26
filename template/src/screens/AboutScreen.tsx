import React from 'react';
// components
import ScreenContainer from '../components/ScreenContainer';
import TextElement from '../components/reusable/TextElement';
// localization
import {useTranslation} from 'react-i18next';
import {TranslationKeys} from '../services/localization/keys';
// styles
import {useColors} from '../hooks/useColors';

const AboutScreen: React.FC = () => {
  const colors = useColors();
  const {t} = useTranslation();

  return (
    <ScreenContainer>
      <TextElement style={{color: colors.primaryText}}>
        {t(TranslationKeys.about)}
      </TextElement>
    </ScreenContainer>
  );
};

export default AboutScreen;
