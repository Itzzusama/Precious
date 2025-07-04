import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { navigatorStyles } from '../../styles';
import { Icons } from '../../config/icons';
import { Colors } from '../../config/colors';

type NavigatorTitleProps = {
  title: string;
  listLength: string;
};

type NavigatorHeaderOptionsProps = {
  showTasksSearchBar: boolean;
  filterActive: boolean;
  onPressSearch: () => void;
  onPressFilter: () => void;
};

const NavLeftTitle = (navTitleProps: NavigatorTitleProps) => {
  return (
    <Text style={navigatorStyles.title}>
      {navTitleProps.title}{' '}
      <Text style={navigatorStyles.listLength}>
        ({navTitleProps.listLength})
      </Text>
    </Text>
  );
};

const NavCenterTitle = (navTitleProps: { title: string }) => {
  return <Text style={navigatorStyles.filterTitle}>{navTitleProps.title}</Text>;
};

const NavEventDetailTitle = (navTitleProps: {
  eventDetailScrollOffset: number;
  selectedEvent?: FatalityEventExtended;
}) => {
  return (
    <Text numberOfLines={1} ellipsizeMode="tail" style={navigatorStyles.name}>
      {navTitleProps.eventDetailScrollOffset > 10 && navTitleProps.selectedEvent
        ? navTitleProps.selectedEvent.title.length < 27
          ? navTitleProps.selectedEvent.title
          : `${navTitleProps.selectedEvent.title.substring(0, 24)}...`
        : ''}
    </Text>
  );
};

const NavFatalityDetailTitle = (navTitleProps: {
  fatalityDetailScrollOffset: number;
  selectedFatality?: Fatality;
}) => {
  return (
    <Text style={navigatorStyles.name}>
      {navTitleProps.fatalityDetailScrollOffset > 10 &&
      navTitleProps.selectedFatality &&
      navTitleProps.selectedFatality.deceasedPersonName
        ? navTitleProps.selectedFatality.deceasedPersonName.length < 27
          ? navTitleProps.selectedFatality.deceasedPersonName
          : `${navTitleProps.selectedFatality.deceasedPersonName.substring(
              0,
              24,
            )}...`
        : ''}
    </Text>
  );
};

const NavHeaderOptions = (
  navHeaderOptionsProps: NavigatorHeaderOptionsProps,
) => (
  <View style={navigatorStyles.rowContainer}>
    <TouchableOpacity
      onPress={navHeaderOptionsProps.onPressSearch}
      style={[
        navigatorStyles.sortContainer,
        navHeaderOptionsProps.showTasksSearchBar &&
          navigatorStyles.sortContainerActive,
      ]}
    >
      <PowerOrdoIcon
        onPress={navHeaderOptionsProps.onPressSearch}
        name={Icons.SEARCH}
        size={24}
        color={Colors.WHITE}
      />
    </TouchableOpacity>
    <TouchableOpacity
      onPress={navHeaderOptionsProps.onPressFilter}
      style={[
        navigatorStyles.sortContainer,
        navHeaderOptionsProps.filterActive &&
          navigatorStyles.sortContainerActive,
      ]}
    >
      <PowerOrdoIcon
        onPress={navHeaderOptionsProps.onPressFilter}
        name={Icons.FILTER}
        size={24}
        color={Colors.WHITE}
      />
    </TouchableOpacity>
  </View>
);

const BackChevron = (backChevronProps: {
  onPress: () => void;
  color: string;
  size: number;
}) => (
  <PowerOrdoIcon
    style={navigatorStyles.marginLeftMinus12}
    onPress={backChevronProps.onPress}
    name={Icons.CHEVRON_BACK}
    size={backChevronProps.size}
    color={backChevronProps.color}
  />
);

export const NavigatorLeftTitle = memo(NavLeftTitle);
export const NavigatorEventDetailTitle = memo(NavEventDetailTitle);
export const NavigatorFatalityDetailTitle = memo(NavFatalityDetailTitle);
export const NavigatorCenterTitle = memo(NavCenterTitle);
export const NavigatorHeaderOptions = memo(NavHeaderOptions);
export const HeaderBackChevron = memo(BackChevron);
