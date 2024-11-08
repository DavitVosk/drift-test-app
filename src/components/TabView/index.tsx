import React, {memo, useState} from 'react';
import {StyleSheet, View, Animated, useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import LinearGradient from 'react-native-linear-gradient';

import {theme} from '@src/constants/theme';

import * as S from './styles';

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface TabViewProps {
  routes: {
    key: string;
    title: string;
  }[];
  renderScene: ({route}: {route: {key: string}}) => React.ReactNode;
}

interface RenderIndicatorProps {
  position: number;
  navigationState: {routes: {length: number}};
}

const TabViewComponent = ({routes, renderScene}: TabViewProps) => {
  const [tabIndex, setTabIndex] = useState(0);
  const layout = useWindowDimensions();

  const renderIndicator = (props: RenderIndicatorProps) => {
    const {position, navigationState} = props;
    const width = layout.width / navigationState.routes.length;

    const translateX = Animated.multiply(position, width);

    return (
      <AnimatedLinearGradient
        style={[styles.indicator, {transform: [{translateX}], width: width}]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          theme.colors.blushPink,
          theme.colors.lavenderPurple,
          theme.colors.aquaBlue,
        ]}>
        <View style={{height: 2}} />
      </AnimatedLinearGradient>
    );
  };

  const renderTabBar = (props: any) => (
    <S.StylesTabBar
      {...props}
      renderIndicator={renderIndicator}
      activeColor={theme.colors.text.default}
      inactiveColor={theme.colors.text.secondary}
    />
  );

  return (
    <TabView
      navigationState={{index: tabIndex, routes}}
      renderScene={renderScene}
      onIndexChange={setTabIndex}
      renderTabBar={renderTabBar}
    />
  );
};

export default memo(TabViewComponent);

const styles = StyleSheet.create({
  indicator: {
    position: 'absolute',
    bottom: 0,
  },
});
