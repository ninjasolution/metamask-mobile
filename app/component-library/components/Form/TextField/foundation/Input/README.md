# Input

Input is a light-weight borderless input component used inside of TextField.

## Props

This component extends React Native's [TextInput](https://reactnative.dev/docs/textinput) component.

### `textVariant`

Optional enum to select between Typography variants.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |
| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |
| [TextVariant](../../../../Texts/Text/Text.types.ts)    | No                                                     | TextVariant.BodyMd                                               |

### `isDisabled`

Optional boolean to disable Input.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |
| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |
| boolean                                              | No                                                     |  false                                                  |

### `isReadonly`

Optional boolean to show readonly input.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |
| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |
| boolean                                              | No                                                     |  false                                                  |

### `isStateStylesDisabled`

Optional boolean to disable state styles.

| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |
| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |
| boolean                                              | No                                                     |  false                                                  |

## Usage

```javascript
<TextInput 
  textVariant={TextVariant.BodyMD} 
  isReadonly
  isDisabled 
  isStateStylesDisabled
  placeholder={SAMPLE_PLACEHOLDER}
  value={SAMPLE_VALUE}/>
```
