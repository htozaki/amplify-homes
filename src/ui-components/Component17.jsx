/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function Component17(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="444px"
      height="96px"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "Component17")}
    >
      <View
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(196,196,196,1)"
        {...getOverrideProps(overrides, "Rectangle 368")}
      ></View>
      <Text
        fontFamily="Meiryo"
        fontSize="30px"
        fontWeight="700"
        color="rgba(0,0,0,1)"
        lineHeight="36px"
        textAlign="center"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="31.25%"
        bottom="31.25%"
        left="12.84%"
        right="12.84%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="サンプルコンポーネント"
        {...getOverrideProps(
          overrides,
          "\u30B5\u30F3\u30D7\u30EB\u30B3\u30F3\u30DD\u30FC\u30CD\u30F3\u30C8"
        )}
      ></Text>
    </View>
  );
}
