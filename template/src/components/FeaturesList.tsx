import React from 'react';
import {View} from 'react-native';
// components
import SwitchElement from '@reusable/SwitchElement';
// redux
import {useAppDispatch, useAppSelector} from '@hooks/reduxHooks';
import {toggleDarkMode} from '@store/reducers/constantsReducer';
import {selectIsDarkMode} from '@store/selectors';
// localization
import {TranslationKeys} from '@services/localization/keys';
import {useTranslation} from 'react-i18next';
import ButtonElement from '@reusable/ButtonElement';
import InputElement from '@reusable/InputElement';

const FeaturesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const isDarkMode = useAppSelector(selectIsDarkMode);
  const {t} = useTranslation();

  const handleDarkModeChange = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <View>
      <SwitchElement
        label={t(TranslationKeys.darkMode)}
        cb={handleDarkModeChange}
        initialValue={isDarkMode}
      />
      <ButtonElement
        label={t(TranslationKeys.about)}
        onPress={() => {}}
        buttonSize={'medium'}
      />
      <InputElement
        placeholder={'test'}
        onChange={() => {}}
        secureTextEntry
      />
          <InputElement
        placeholder={'test'}
        onChange={() => {}}
      />
    </View>
  );
};

export default FeaturesList;
