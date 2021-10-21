// export default {
//   multiply(a: number, b: number) {
//     return Promise.resolve(a * b);
//   },
// };

// import {
//   // AppBar,
//   Badge,
//   IBadgeProps,
//   IconButton,
//   IIconButtonProps,
//   Alert,
//   IAlertProps,
//   AspectRatio,
//   IAspectRatioProps,
//   Avatar,
//   Breadcrumb,
//   IBreadcrumbProps,
//   Card,
//   Container,
//   IContainerProps,
//   Divider,
//   IDividerProps,
//   Kbd,
//   Progress,
//   Accordion,
//   IAccordionProps,
//   IAccordionItemProps,
//   IAccordionSummaryProps,
//   IAccordionDetailsProps,
//   IAccordionIconProps,
//   IAccordionContextProps,
//   IAccordionItemContextProps,
//   Skeleton,
//   ISkeletonProps,
//   FormControl,
//   IFormControlProps,
//   IFormControlLabelProps,
//   IFormControlErrorMessageProps,
//   IFormControlHelperTextProps,
//   // Stat,
//   Tag,
//   Code,
//   Center,
//   Square,
//   Circle,
//   ICenterProps,
//   ICircleProps,
//   ISquareProps,
//   Wrap,
//   IWrapProps,
//   PinInput,
//   IPinInputProps,
//   IPinInputFieldProps,
//   Fade,
//   IFadeProps,
//   ScaleFade,
//   IScaleFadeProps,
//   PresenceTransition,
//   Stagger,
//   Slide,
//   ISlideProps,
//   SlideFade,
//   ISlideFadeProps,
//   NumberInput,
//   INumberInputProps,
//   NumberInputField,
//   INumberInputFieldProps,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   INumberInputContext,
//   INumberInputSteppersProps,
//   INumberInputStepperProps,
//   Collapse,
//   CircularProgress,
//   Popover,
//   IPopoverProps,
//   AlertDialog,
//   // useToast,
//   Menu,
//   IMenuProps,
//   IMenuItemProps,
//   IMenuItemOptionProps,
//   IMenuGroupProps,
//   IMenuOptionGroupProps,
//   SimpleGrid,
//   ISimpleGridProps,
//   Tabs,
//   ITagProps,
//   ITabsProps,
//   ITabBarProps,
//   ITabProps,
//   ITabViewsProps,
//   ITabViewProps,
//   ITabsContextProps,
//   Actionsheet,
//   IActionsheetProps,
//   IActionsheetContentProps,
//   IActionsheetItemProps,
//   Fab,
//   IFabProps,
//   TextField,
//   ITextFieldProps,
//   Typeahead,
//   useTypeahead,
//   Modal,
//   useToast,
//   Toast,
//   IToastProps,
//   Backdrop,
//   Drawer,
//   Tooltip,
// } from './components/composites';
// import type { IScrollViewProps } from './components/basic';

// import {
//   // View,
//   Text,
//   ITextProps,
//   Checkbox,
//   ICheckboxProps,
//   ICheckboxGroupProps,
//   Radio,
//   IRadioProps,
//   IRadioValue,
//   IRadioGroupProps,
//   Hidden,
//   IHiddenProps,
//   Button,
//   IButtonProps,
//   Column,
//   Row,
//   Box,
//   IBoxProps,
//   Stack,
//   VStack,
//   HStack,
//   ZStack,
//   Slider,
//   ISliderProps,
//   Icon,
//   createIcon,
//   IIconProps,
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   InputRightAddon,
//   IInputProps,
//   Image,
//   IImageProps,
//   Spinner,
//   ISpinnerProps,
//   Heading,
//   IHeadingProps,
//   Flex,
//   Switch,
//   ISwitchProps,
//   IFlexProps,
//   TextArea,
//   Link,
//   ILinkProps,
//   Spacer,
//   List,
//   IListProps,
//   IListItemProps,
//   Select,
//   ISelectProps,
//   ISelectItemProps,
//   Pressable,
//   IPressableProps,
// } from './components/primitives';

// export * from './components/basic';
// export * from './components/primitives/Icon/Icons';
// export * from './theme';
// export * from './core';
// export * from './hooks';
// export * from './factory';
// export * from './theme/v3-compatible-theme';

// export {
//   // AppBar,
//   Alert,
//   AspectRatio,
//   Avatar,
//   Badge,
//   Button,
//   Card,
//   IconButton,
//   Heading,
//   Hidden,
//   // View,
//   Text,
//   Code,
//   Checkbox,
//   Radio,
//   Column,
//   Row,
//   Center,
//   Square,
//   Circle,
//   Box,
//   Stack,
//   VStack,
//   HStack,
//   ZStack,
//   Slider,
//   Icon,
//   createIcon,
//   Input,
//   InputGroup,
//   InputLeftAddon,
//   InputRightAddon,
//   Spinner,
//   Image,
//   Switch,
//   Flex,
//   Kbd,
//   Breadcrumb,
//   Container,
//   Divider,
//   Link,
//   Pressable,
//   Progress,
//   Accordion,
//   Skeleton,
//   FormControl,
//   // Stat,
//   Tag,
//   TextArea,
//   TextField,
//   Wrap,
//   PinInput,
//   Fade,
//   ScaleFade,
//   Slide,
//   SlideFade,
//   PresenceTransition,
//   Stagger,
//   NumberInput,
//   NumberInputField,
//   NumberInputStepper,
//   NumberIncrementStepper,
//   NumberDecrementStepper,
//   Spacer,
//   Collapse,
//   CircularProgress,
//   List,
//   Popover,
//   AlertDialog,
//   // useToast,
//   Menu,
//   SimpleGrid,
//   Tabs,
//   Actionsheet,
//   Fab,
//   Typeahead,
//   useTypeahead,
//   Select,
//   Modal,
//   useToast,
//   Toast,
//   Backdrop,
//   Drawer,
//   Tooltip,
// };
// export type {
//   IAlertProps,
//   IAspectRatioProps,
//   IHeadingProps,
//   IBadgeProps,
//   IButtonProps,
//   IIconButtonProps,
//   ITextProps,
//   ICheckboxProps,
//   ICheckboxGroupProps,
//   IHiddenProps,
//   IRadioProps,
//   IRadioValue,
//   IRadioGroupProps,
//   ICenterProps,
//   ICircleProps,
//   ISquareProps,
//   IBoxProps,
//   IBreadcrumbProps,
//   ITagProps,
//   ISliderProps,
//   IIconProps,
//   IInputProps,
//   ISpinnerProps,
//   IImageProps,
//   IContainerProps,
//   IPopoverProps,
//   IDividerProps,
//   ILinkProps,
//   IAccordionProps,
//   IAccordionItemProps,
//   IAccordionSummaryProps,
//   IAccordionDetailsProps,
//   IAccordionIconProps,
//   IAccordionContextProps,
//   IAccordionItemContextProps,
//   ISkeletonProps,
//   IFormControlProps,
//   IFormControlLabelProps,
//   IFormControlErrorMessageProps,
//   IFormControlHelperTextProps,
//   ISwitchProps,
//   IFlexProps,
//   IWrapProps,
//   IPinInputProps,
//   IPinInputFieldProps,
//   IPressableProps,
//   IFadeProps,
//   IScaleFadeProps,
//   ISlideProps,
//   ISlideFadeProps,
//   INumberInputProps,
//   INumberInputFieldProps,
//   INumberInputContext,
//   INumberInputSteppersProps,
//   INumberInputStepperProps,
//   IListProps,
//   IListItemProps,
//   IMenuProps,
//   IMenuItemProps,
//   IMenuItemOptionProps,
//   IMenuGroupProps,
//   IMenuOptionGroupProps,
//   ISimpleGridProps,
//   ITabsProps,
//   ITabBarProps,
//   ITabProps,
//   ITabViewsProps,
//   ITabViewProps,
//   ITabsContextProps,
//   IToastProps,
//   IActionsheetProps,
//   IActionsheetContentProps,
//   IActionsheetItemProps,
//   IFabProps,
//   ISelectProps,
//   ISelectItemProps,
//   ITextFieldProps,
//   IScrollViewProps,
// };

export * from './components/basic';
export * from './components/composites';
export * from './components/primitives';
// export * from './components/';

// export { NativeBaseProvider } from './core/NativeBaseProvider';
// export { View } from './components/basic/View/View';
// export { FlatList } from './components/basic/FlatList/FlatList';
// export { ScrollView } from './components/basic/ScrollView/ScrollView';
// export { KeyboardAvoidingView } from './components/basic/KeyboardAvoidingView/KeyboardAvoidingView';
// export { SectionList } from './components/basic/SectionList/SectionList';
// export { StatusBar } from './components/basic/StatusBar/StatusBar';

// export * from './components/primitives/Icon/Icons';
export type { ITheme, ICustomTheme } from './theme';
export * from './theme';
export * from './core';
export * from './hooks';
export * from './factory';
export * from './theme/v3-compatible-theme';
